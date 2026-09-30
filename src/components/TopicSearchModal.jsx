import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, HelpCircle } from 'lucide-react';
import { allTopics } from '../data/topics';

export default function TopicSearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filtered = allTopics.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (t.subtopics && t.subtopics.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const handleSelect = (topicId, mode) => {
    onClose();
    if (mode === 'read') {
      navigate(`/topic/${topicId}`);
    } else {
      navigate(`/practice/${topicId}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        <div className="p-4 border-b border-slate-100 flex items-center space-x-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search topics, formulas, or concepts..."
            className="flex-1 text-slate-800 text-base placeholder-slate-400 focus:outline-hidden"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              No matching topics found for "{searchTerm}"
            </div>
          ) : (
            filtered.map(t => (
              <div
                key={t.id}
                className="p-3 hover:bg-slate-50 rounded-xl transition flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-0.5 rounded font-medium bg-slate-100 text-slate-600">
                      {t.category}
                    </span>
                    <h4 className="font-semibold text-slate-900 text-sm">{t.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">{t.description}</p>
                </div>
                <div className="flex items-center space-x-1.5 opacity-90 group-hover:opacity-100">
                  <button
                    onClick={() => handleSelect(t.id, 'read')}
                    className="flex items-center space-x-1 px-2.5 py-1 text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-md border border-slate-200 transition"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read</span>
                  </button>
                  <button
                    onClick={() => handleSelect(t.id, 'practice')}
                    className="flex items-center space-x-1 px-2.5 py-1 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition shadow-xs"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Practice</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
