import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopicSearchModal from './components/TopicSearchModal';
import DashboardPage from './pages/DashboardPage';
import TopicReadingPage from './pages/TopicReadingPage';
import PracticePage from './pages/PracticePage';
import ProgressPage from './pages/ProgressPage';
import { ProgressProvider } from './context/ProgressContext';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <ProgressProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
          {/* Main Top Navigation */}
          <Navbar onOpenTopicSearch={() => setIsSearchOpen(true)} />

          {/* Search / Quick Jump Modal */}
          <TopicSearchModal 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
          />

          {/* Main Content Area */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/topic/:topicId" element={<TopicReadingPage />} />
              <Route path="/practice" element={<Navigate to="/practice/exam-pattern" replace />} />
              <Route path="/practice/:topicId" element={<PracticePage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Clean Study Footer */}
          <footer className="border-t border-slate-200 bg-white/60 py-6 text-center text-xs text-slate-500">
            <div className="max-w-7xl mx-auto px-4 space-y-1">
              <p className="font-medium text-slate-600">Infosys Specific Preparation Study Platform</p>
              <p>Converted from the comprehensive 150-page preparation module • Personal study tool</p>
            </div>
          </footer>
        </div>
      </Router>
    </ProgressProvider>
  );
}
