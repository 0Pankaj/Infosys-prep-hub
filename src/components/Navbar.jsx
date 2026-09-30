import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, CheckCircle, Award, LayoutDashboard, Menu, X, HelpCircle, Search } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { allTopics } from '../data/topics';

export default function Navbar({ onOpenTopicSearch }) {
  const location = useLocation();
  const { getOverallProgress } = useProgress();
  const overall = getOverallProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Topics', path: '/#topics-section', icon: BookOpen },
    { name: 'Practice', path: '/practice/exam-pattern', icon: HelpCircle },
    { name: 'Progress', path: '/progress', icon: Award }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Module Title */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-sm group-hover:bg-blue-700 transition">
              IN
            </div>
            <div>
              <span className="font-bold text-slate-900 text-lg leading-tight block">Infosys Prep Hub</span>
              <span className="text-xs text-slate-700 font-medium block">150-Page Study Module</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path || (link.path.includes('#') && location.pathname === '/' && location.hash === link.path.substring(1));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Progress Indicator & Search Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenTopicSearch}
              className="flex items-center space-x-2 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition border border-slate-200"
              title="Quick jump to topic"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Jump to topic...</span>
            </button>

            <Link
              to="/progress"
              className="flex items-center space-x-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-300 transition"
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                {overall.overallPercentage}%
              </div>
              <div className="text-xs">
                <span className="text-slate-700 block font-medium">Done: {overall.totalAttempted}/{overall.totalQuestions} Qs</span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenTopicSearch}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-5 h-5 text-slate-500" />
                <span>{link.name}</span>
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <Link
              to="/progress"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 bg-blue-50 text-blue-900 rounded-lg text-sm"
            >
              <span className="font-semibold">Overall Practice Progress</span>
              <span className="px-2 py-0.5 bg-blue-600 text-white rounded font-bold text-xs">
                {overall.overallPercentage}%
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
