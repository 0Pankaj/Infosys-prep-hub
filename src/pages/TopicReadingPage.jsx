import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle, 
  CheckCircle2, 
  Lightbulb, 
  BookOpen, 
  ListChecks, 
  Table, 
  Sparkles,
  Share2
} from 'lucide-react';
import { allTopics, getTopicById } from '../data/topics';
import { useProgress } from '../context/ProgressContext';

export default function TopicReadingPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { progress, toggleTopicCompletion } = useProgress();

  const currentIndex = allTopics.findIndex(t => t.id === topicId);
  const topic = allTopics[currentIndex] || allTopics[0];

  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  const isCompleted = !!progress.completedTopics[topic.id];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* Top Breadcrumb & Action bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <Link
          to="/"
          className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Topics</span>
        </Link>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => toggleTopicCompletion(topic.id)}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition border ${
              isCompleted 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300' 
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Completed' : 'Mark as Done'}</span>
          </button>

          <Link
            to={`/practice/${topic.id}`}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition shadow-xs"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Practice This Topic ({topic.questions?.length || 0})</span>
          </Link>
        </div>
      </div>

      {/* Main Topic Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-blue-50 text-blue-700 rounded-lg">
            {topic.category}
          </span>
          <span className="text-xs text-slate-700 font-medium">
            Module {currentIndex + 1} of {allTopics.length}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          {topic.title}
        </h1>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          {topic.description}
        </p>

        {/* Subtopics Checklist Pills */}
        {topic.subtopics && topic.subtopics.length > 0 && (
          <div className="pt-3 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
              Key Subtopics in this Section:
            </span>
            <div className="flex flex-wrap gap-2">
              {topic.subtopics.map((sub, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center space-x-1.5 px-3 py-1 bg-slate-100/80 text-slate-700 rounded-lg text-xs font-medium border border-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Theory & Concepts Content */}
      <div className="space-y-6">
        {/* Overview Card */}
        {topic.theory?.overview && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-slate-900 font-bold text-base">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3>Conceptual Overview</h3>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {topic.theory.overview}
            </p>
          </div>
        )}

        {/* Key Rules & Principles */}
        {topic.theory?.keyRules && topic.theory.keyRules.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-bold text-base">
              <ListChecks className="w-5 h-5 text-indigo-600" />
              <h3>Important Principles & Rules</h3>
            </div>
            <div className="grid gap-2.5">
              {topic.theory.keyRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Structured Data Tables (e.g. Exam Pattern, Clock spaces, etc.) */}
        {topic.theory?.tables && topic.theory.tables.map((table, tIdx) => (
          <div key={tIdx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-bold text-base">
              <Table className="w-5 h-5 text-emerald-600" />
              <h3>{table.title}</h3>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold uppercase text-[11px] tracking-wider">
                  <tr>
                    {table.headers.map((h, i) => (
                      <th key={i} className="px-4 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {table.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/80 transition">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 font-medium text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Worked Examples */}
        {topic.theory?.examples && topic.theory.examples.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-bold text-base">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3>Worked Examples & Formats</h3>
            </div>
            <div className="grid gap-3">
              {topic.theory.examples.map((eg, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/60 space-y-2">
                  <div className="font-semibold text-slate-900 text-sm">
                    <span className="text-amber-700 mr-2">Example {idx + 1}:</span>
                    {eg.problem}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 bg-white/80 p-3 rounded-lg border border-amber-100">
                    <span className="font-semibold text-slate-900">Solution: </span>
                    {eg.solution}
                  </div>
                  {eg.tip && (
                    <span className="inline-block text-[11px] font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                      Strategy: {eg.tip}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pro Tips / Strategy */}
        {topic.theory?.tips && topic.theory.tips.length > 0 && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-6 border border-blue-200/80 space-y-3">
            <div className="flex items-center space-x-2 text-blue-900 font-bold text-base">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <h3>Infosys Test Strategy Tips</h3>
            </div>
            <ul className="space-y-2">
              {topic.theory.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-blue-900 font-medium leading-relaxed">
                  <span className="text-blue-500 font-bold shrink-0">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Prominent Practice Banner */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold">Ready to test your understanding?</h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Practice questions extracted directly from the PDF for {topic.title}
          </p>
        </div>
        <Link
          to={`/practice/${topic.id}`}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition shadow-md whitespace-nowrap flex items-center space-x-2"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Start MCQ Practice</span>
        </Link>
      </div>

      {/* Previous / Next Topic Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        {prevTopic ? (
          <Link
            to={`/topic/${prevTopic.id}`}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            <div className="text-left hidden sm:block">
              <span className="text-[10px] text-slate-700 block uppercase">Previous Topic</span>
              <span className="line-clamp-1">{prevTopic.title}</span>
            </div>
            <span className="sm:hidden">Previous</span>
          </Link>
        ) : (
          <div />
        )}

        {nextTopic ? (
          <Link
            to={`/topic/${nextTopic.id}`}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold transition"
          >
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-slate-700 block uppercase">Next Topic</span>
              <span className="line-clamp-1">{nextTopic.title}</span>
            </div>
            <span className="sm:hidden">Next</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
