import React, { createContext, useContext, useState, useEffect } from 'react';
import { allTopics } from '../data/topics';

const ProgressContext = createContext(null);

const STORAGE_KEY = 'infosys_study_progress_v1';

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
    }
    return {
      answers: {}, // { [topicId]: { [questionId]: { selectedOption, isCorrect, timestamp } } }
      completedTopics: {} // { [topicId]: boolean }
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [progress]);

  const recordAnswer = (topicId, questionId, selectedOption, isCorrect) => {
    setProgress(prev => {
      const topicAnswers = prev.answers[topicId] || {};
      const newTopicAnswers = {
        ...topicAnswers,
        [questionId]: {
          selectedOption,
          isCorrect,
          timestamp: Date.now()
        }
      };

      // Check if topic questions are now all attempted
      const topic = allTopics.find(t => t.id === topicId);
      const totalQ = topic?.questions?.length || 0;
      const attemptedCount = Object.keys(newTopicAnswers).length;
      const isComplete = totalQ > 0 && attemptedCount >= totalQ;

      return {
        ...prev,
        answers: {
          ...prev.answers,
          [topicId]: newTopicAnswers
        },
        completedTopics: {
          ...prev.completedTopics,
          [topicId]: prev.completedTopics[topicId] || isComplete
        }
      };
    });
  };

  const toggleTopicCompletion = (topicId) => {
    setProgress(prev => {
      const current = !!prev.completedTopics[topicId];
      return {
        ...prev,
        completedTopics: {
          ...prev.completedTopics,
          [topicId]: !current
        }
      };
    });
  };

  const getTopicProgress = (topicId) => {
    const topic = allTopics.find(t => t.id === topicId);
    const totalQuestions = topic?.questions?.length || 0;
    const topicAnswers = progress.answers[topicId] || {};
    
    let attempted = 0;
    let correct = 0;
    let wrong = 0;

    Object.values(topicAnswers).forEach(ans => {
      attempted++;
      if (ans.isCorrect) correct++;
      else wrong++;
    });

    const isCompleted = !!progress.completedTopics[topicId] || (totalQuestions > 0 && attempted >= totalQuestions);
    const score = correct;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const progressPercent = totalQuestions > 0 ? Math.round((attempted / totalQuestions) * 100) : (isCompleted ? 100 : 0);

    return {
      attempted,
      correct,
      wrong,
      totalQuestions,
      isCompleted,
      score,
      accuracy,
      progressPercent,
      userAnswers: topicAnswers
    };
  };

  const getOverallProgress = () => {
    let totalQuestions = 0;
    let totalAttempted = 0;
    let totalCorrect = 0;
    let totalWrong = 0;
    let completedTopicsCount = 0;

    allTopics.forEach(topic => {
      const stats = getTopicProgress(topic.id);
      totalQuestions += stats.totalQuestions;
      totalAttempted += stats.attempted;
      totalCorrect += stats.correct;
      totalWrong += stats.wrong;
      if (stats.isCompleted) {
        completedTopicsCount++;
      }
    });

    const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
    const overallPercentage = totalQuestions > 0 ? Math.round((totalAttempted / totalQuestions) * 100) : 0;

    return {
      totalTopics: allTopics.length,
      completedTopicsCount,
      totalQuestions,
      totalAttempted,
      totalCorrect,
      totalWrong,
      accuracy,
      overallPercentage
    };
  };

  const resetAllProgress = () => {
    const fresh = { answers: {}, completedTopics: {} };
    setProgress(fresh);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    } catch (e) {
      console.error(e);
    }
  };

  const resetTopicProgress = (topicId) => {
    setProgress(prev => {
      const nextAnswers = { ...prev.answers };
      delete nextAnswers[topicId];
      const nextCompleted = { ...prev.completedTopics };
      delete nextCompleted[topicId];
      return {
        ...prev,
        answers: nextAnswers,
        completedTopics: nextCompleted
      };
    });
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      recordAnswer,
      toggleTopicCompletion,
      getTopicProgress,
      getOverallProgress,
      resetAllProgress,
      resetTopicProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
