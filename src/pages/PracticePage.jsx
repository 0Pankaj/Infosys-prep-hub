import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  BookOpen, 
  Award,
  ChevronDown,
  Info
} from 'lucide-react';
import { allTopics, getTopicById } from '../data/topics';
import { useProgress } from '../context/ProgressContext';

export default function PracticePage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { recordAnswer, getTopicProgress, resetTopicProgress } = useProgress();

  // Find selected topic or fallback to first
  const currentTopic = allTopics.find(t => t.id === topicId) || allTopics[0];
  const questions = currentTopic.questions || [];

  // Question navigation state
  const [currentQIndex, setCurrentQIndex] = useState(0);

  // Sync index when topic changes
  useEffect(() => {
    setCurrentQIndex(0);
  }, [currentTopic.id]);

  const topicStats = getTopicProgress(currentTopic.id);
  const currentQuestion = questions[currentQIndex];

  // User answer for this specific question from context
  const recordedAnswer = currentQuestion ? topicStats.userAnswers?.[currentQuestion.id] : null;

  const handleSelectOption = (index) => {
    if (!currentQuestion || recordedAnswer !== undefined && recordedAnswer !== null) {
      return; // Already answered, disabled from changing
    }

    const isCorrect = index === currentQuestion.correctIndex;
    recordAnswer(currentTopic.id, currentQuestion.id, index, isCorrect);
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    if (window.confirm(`Reset your practice answers for ${currentTopic.title}?`)) {
      resetTopicProgress(currentTopic.id);
      setCurrentQIndex(0);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">No practice questions in this section yet.</h2>
        <Link to={`/topic/${currentTopic.id}`} className="inline-flex items-center space-x-2 text-blue-600 font-semibold">
          <BookOpen className="w-4 h-4" />
          <span>Read the theory and formulas</span>
        </Link>
      </div>
    );
  }

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Header & Topic Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div className="flex items-center space-x-3">
          <Link
            to={`/topic/${currentTopic.id}`}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
            title="Read Theory"
          >
            <BookOpen className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                {currentTopic.category}
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900">{currentTopic.title}</h1>
          </div>
        </div>

        {/* Topic dropdown switch */}
        <div className="flex items-center space-x-2">
          <select
            value={currentTopic.id}
            onChange={(e) => navigate(`/practice/${e.target.value}`)}
            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          >
            {allTopics.map(t => (
              <option key={t.id} value={t.id}>
                {t.title} ({t.questions?.length || 0} Qs)
              </option>
            ))}
          </select>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition"
            title="Reset this topic"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress & Live Score Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-slate-700">
            Question <span className="text-blue-600 font-bold">{currentQIndex + 1}</span> of {questions.length}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-700 font-medium">
            Attempted: <span className="font-semibold text-slate-900">{topicStats.attempted}/{questions.length}</span>
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 text-emerald-600 font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>{topicStats.correct} Correct</span>
          </div>
          <div className="flex items-center space-x-1.5 text-rose-600 font-semibold">
            <XCircle className="w-4 h-4" />
            <span>{topicStats.wrong} Wrong</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs">
            {topicStats.accuracy}% Acc
          </span>
        </div>
      </div>

      {/* Question Quick-Jump Palette */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 scrollbar-none">
        {questions.map((q, idx) => {
          const ans = topicStats.userAnswers?.[q.id];
          const isAnswered = ans !== undefined && ans !== null;
          const isCurrent = idx === currentQIndex;

          let btnClass = "bg-white text-slate-600 border-slate-200";
          if (isAnswered) {
            btnClass = ans.isCorrect
              ? "bg-emerald-500 text-white border-emerald-600 font-bold"
              : "bg-rose-500 text-white border-rose-600 font-bold";
          }
          if (isCurrent) {
            btnClass += " ring-2 ring-blue-600 ring-offset-2";
          }

          return (
            <button
              key={q.id}
              onClick={() => setCurrentQIndex(idx)}
              className={`w-8 h-8 rounded-lg text-xs font-semibold shrink-0 border transition ${btnClass}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Main MCQ Card */}
      {currentQuestion && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* Question Text */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <span>Question {currentQIndex + 1}</span>
            </div>
            <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
              {currentQuestion.question}
            </p>
          </div>

          {/* Exactly 4 Options as Clickable Buttons */}
          <div className="space-y-3">
            {currentQuestion.options.map((optionText, optIndex) => {
              const isSelected = recordedAnswer?.selectedOption === optIndex;
              const isCorrectOption = optIndex === currentQuestion.correctIndex;
              const isAnswered = recordedAnswer !== undefined && recordedAnswer !== null;

              let optionStyle = "border-slate-200 bg-white hover:border-blue-400 hover:bg-slate-50 text-slate-800";
              let badgeStyle = "bg-slate-100 text-slate-600 border-slate-300";

              if (isAnswered) {
                if (isCorrectOption) {
                  // Always show GREEN for correct answer
                  optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium shadow-xs";
                  badgeStyle = "bg-emerald-600 text-white border-emerald-600";
                } else if (isSelected && !recordedAnswer.isCorrect) {
                  // Show RED for user's selected wrong option
                  optionStyle = "border-rose-500 bg-rose-50 text-rose-950 font-medium";
                  badgeStyle = "bg-rose-600 text-white border-rose-600";
                } else {
                  // Other unselected options
                  optionStyle = "border-slate-200 bg-slate-50/50 text-slate-400 opacity-60";
                  badgeStyle = "bg-slate-100 text-slate-400 border-slate-200";
                }
              }

              return (
                <button
                  key={optIndex}
                  onClick={() => handleSelectOption(optIndex)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-150 flex items-center justify-between group ${optionStyle} ${
                    isAnswered ? 'cursor-default' : 'cursor-pointer active:scale-[0.99]'
                  }`}
                >
                  <div className="flex items-center space-x-3.5 flex-1 pr-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 border ${badgeStyle}`}>
                      {optionLabels[optIndex]}
                    </span>
                    <span className="text-sm sm:text-base leading-snug">{optionText}</span>
                  </div>

                  {isAnswered && (
                    <div className="shrink-0">
                      {isCorrectOption && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      )}
                      {isSelected && !recordedAnswer.isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Immediate Feedback & Detailed Explanation */}
          {recordedAnswer && (
            <div className={`p-5 rounded-2xl border transition-all animate-in fade-in duration-200 space-y-2 ${
              recordedAnswer.isCorrect
                ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                : 'bg-rose-50/70 border-rose-200 text-rose-900'
            }`}>
              <div className="flex items-center space-x-2 font-bold text-sm sm:text-base">
                {recordedAnswer.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-800">Correct Answer!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span className="text-rose-800">
                      Incorrect. Correct Option is {optionLabels[currentQuestion.correctIndex]} ({currentQuestion.options[currentQuestion.correctIndex]})
                    </span>
                  </>
                )}
              </div>

              {currentQuestion.explanation && (
                <div className="pt-2 border-t border-slate-200/50">
                  <span className="text-xs font-bold uppercase tracking-wider block text-slate-700 mb-1">
                    Explanation:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Bottom Action Buttons: Prev / Next Question */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentQIndex === 0}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition ${
                currentQIndex === 0
                  ? 'text-slate-300 bg-slate-50 border border-slate-100 cursor-not-allowed'
                  : 'text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Question</span>
            </button>

            {currentQIndex < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition shadow-md"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                to="/progress"
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition shadow-md"
              >
                <span>View Final Progress</span>
                <Award className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
