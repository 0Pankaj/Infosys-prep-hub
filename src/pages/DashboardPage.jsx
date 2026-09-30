import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  BarChart, 
  Search, 
  Layers, 
  Award, 
  TrendingUp, 
  Clock, 
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';
import { allTopics, categories } from '../data/topics';
import { useProgress } from '../context/ProgressContext';

export default function DashboardPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { getTopicProgress, getOverallProgress } = useProgress();
  const overall = getOverallProgress();

  const filteredTopics = allTopics.filter(topic => {
    const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
    const matchesSearch = 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (topic.subtopics && topic.subtopics.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 rounded-3xl text-white p-6 sm:p-10 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-blue-200 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Complete 150-Page Study Module</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Infosys Company Specific Preparation
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Master Reasoning, Quantitative Aptitude, Verbal Ability, and Exam Strategy extracted topic-wise from the official module with theory, formulas, and interactive MCQ practice.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/topic/exam-pattern"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 transition shadow-md"
            >
              <BookOpen className="w-4 h-4" />
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/practice/exam-pattern"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-blue-600/60 hover:bg-blue-600 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Practice Questions</span>
            </Link>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Overview Stats Cards */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">Total Topics</span>
            <span className="text-2xl font-bold text-slate-900">{overall.totalTopics}</span>
            <span className="text-xs text-slate-700 block">{overall.completedTopicsCount} completed</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">Questions</span>
            <span className="text-2xl font-bold text-slate-900">{overall.totalQuestions}</span>
            <span className="text-xs text-slate-700 block">{overall.totalAttempted} attempted</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">Accuracy</span>
            <span className="text-2xl font-bold text-slate-900">{overall.accuracy}%</span>
            <span className="text-xs text-slate-700 block">{overall.totalCorrect} correct</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">Overall Progress</span>
            <span className="text-2xl font-bold text-slate-900">{overall.overallPercentage}%</span>
            <div className="w-24 bg-slate-100 rounded-full h-1.5 mt-1.5 overflow-hidden">
              <div 
                className="bg-amber-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${overall.overallPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section id="topics-section" className="space-y-4 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Study Modules & Topics</h2>
            <p className="text-sm text-slate-700">Choose a section to read theory, understand concepts, or test your skills</p>
          </div>

          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in 28 topics..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-2xs"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
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
      </section>

      {/* Topic Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.length === 0 ? (
          <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-medium">No topics found matching your query.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-sm text-blue-600 font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredTopics.map((topic) => {
            const stats = getTopicProgress(topic.id);
            const questionCount = topic.questions?.length || 0;

            return (
              <div
                key={topic.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Category & Status Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {topic.category}
                    </span>
                    {stats.isCompleted ? (
                      <span className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </span>
                    ) : stats.attempted > 0 ? (
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        {stats.attempted}/{questionCount} Done
                      </span>
                    ) : (
                      <span className="text-xs text-slate-700 font-medium">Not Started</span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {topic.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 mt-1 line-clamp-2 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  {/* Subtopics snippet */}
                  {topic.subtopics && topic.subtopics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {topic.subtopics.slice(0, 3).map((sub, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 bg-slate-50 text-slate-700 border border-slate-200 rounded-md">
                          {sub}
                        </span>
                      ))}
                      {topic.subtopics.length > 3 && (
                        <span className="text-[11px] px-1.5 py-0.5 text-slate-600 font-medium">
                          +{topic.subtopics.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Topic Progress Bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs text-slate-700 font-medium">
                      <span>Practice Progress</span>
                      <span>{stats.progressPercent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          stats.isCompleted ? 'bg-emerald-500' : 'bg-blue-600'
                        }`}
                        style={{ width: `${stats.progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                  <Link
                    to={`/topic/${topic.id}`}
                    className="flex items-center justify-center space-x-1.5 px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200 transition shadow-2xs"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                    <span>Start Learning</span>
                  </Link>

                  <Link
                    to={`/practice/${topic.id}`}
                    className="flex items-center justify-center space-x-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl transition shadow-2xs"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Practice ({questionCount})</span>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
}
