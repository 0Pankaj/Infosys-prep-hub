import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  BookOpen, 
  RotateCcw, 
  TrendingUp, 
  Layers, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { allTopics, categories } from '../data/topics';
import { useProgress } from '../context/ProgressContext';

export default function ProgressPage() {
  const { getTopicProgress, getOverallProgress, resetAllProgress, toggleTopicCompletion } = useProgress();
  const overall = getOverallProgress();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTopics = allTopics.filter(t => 
    selectedCategory === 'all' || t.category === selectedCategory
  );

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all your study progress and recorded answers? This action cannot be undone.")) {
      resetAllProgress();
    }
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Title & Reset Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Study Analytics & Progress
          </h1>
          <p className="text-sm text-slate-700">
            Real-time tracking stored in browser local storage. Kept safe even after refreshing.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-white hover:bg-rose-50 text-slate-600 hover:text-rose-600 text-xs sm:text-sm font-semibold rounded-xl border border-slate-200 transition shadow-2xs"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset All Progress</span>
        </button>
      </div>

      {/* Main Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Questions Attempted */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Attempted</span>
            <HelpCircle className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {overall.totalAttempted}
            <span className="text-xs sm:text-sm font-medium text-slate-700 ml-1.5">/ {overall.totalQuestions}</span>
          </div>
          <span className="text-xs text-slate-700 mt-1 block">
            {overall.totalQuestions - overall.totalAttempted} questions remaining
          </span>
        </div>

        {/* Correct Answers */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Correct</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
            {overall.totalCorrect}
          </div>
          <span className="text-xs text-slate-700 mt-1 block font-medium">
            Accurate answers given
          </span>
        </div>

        {/* Wrong Answers */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Wrong</span>
            <XCircle className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-rose-600">
            {overall.totalWrong}
          </div>
          <span className="text-xs text-slate-700 mt-1 block font-medium">
            Answers missed
          </span>
        </div>

        {/* Accuracy Rate */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Accuracy</span>
            <Award className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-purple-600">
            {overall.accuracy}%
          </div>
          <span className="text-xs text-slate-700 mt-1 block font-medium">
            {overall.completedTopicsCount} of {overall.totalTopics} topics done
          </span>
        </div>
      </div>

      {/* Progress Breakdown Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-bold text-slate-800">Overall Syllabus Completion</span>
          <span className="font-extrabold text-blue-600">{overall.overallPercentage}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${overall.overallPercentage}%` }}
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id === 'all' ? 'all' : cat.name)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition ${
                (selectedCategory === 'all' && cat.id === 'all') || selectedCategory === cat.name
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Topic-by-Topic Score Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="px-5 py-4">Topic / Section</th>
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4 text-center">Score</th>
                  <th className="px-5 py-4 text-center">Accuracy</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTopics.map((topic) => {
                  const stats = getTopicProgress(topic.id);
                  const totalQ = topic.questions?.length || 0;

                  return (
                    <tr key={topic.id} className="hover:bg-slate-50/70 transition">
                      <td className="px-5 py-4 font-semibold text-slate-900">
                        <Link to={`/topic/${topic.id}`} className="hover:text-blue-600 transition">
                          {topic.title}
                        </Link>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium">
                          {topic.category}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center font-bold text-slate-800">
                        {stats.correct} / {totalQ}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className={`font-bold ${
                          stats.accuracy >= 75 ? 'text-emerald-600' : stats.attempted > 0 ? 'text-amber-600' : 'text-slate-400'
                        }`}>
                          {stats.attempted > 0 ? `${stats.accuracy}%` : '-'}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        {stats.isCompleted ? (
                          <span className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Done</span>
                          </span>
                        ) : stats.attempted > 0 ? (
                          <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                            In Progress ({stats.attempted}/{totalQ})
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400 font-medium">
                            Not started
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-right space-x-2">
                        <Link
                          to={`/topic/${topic.id}`}
                          className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50 text-xs font-medium transition"
                        >
                          <BookOpen className="w-3 h-3" />
                          <span>Learn</span>
                        </Link>
                        <Link
                          to={`/practice/${topic.id}`}
                          className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition shadow-2xs"
                        >
                          <HelpCircle className="w-3 h-3" />
                          <span>Practice</span>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
