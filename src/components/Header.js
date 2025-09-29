import React from 'react';
import { RefreshCw } from 'lucide-react';
import { useArticles } from '../context/ArticlesContext';

export const Header = () => {
  const { refreshArticles, isRefreshing } = useArticles();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">🏥 Health News Curator</h1>
            <p className="text-blue-100 mt-1">AI-powered health insights, simplified</p>
          </div>
          <button
            onClick={refreshArticles}
            disabled={isRefreshing}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>
    </header>
  );
};