import React from 'react';
import { useArticles } from '../context/ArticlesContext';
import { formatDate } from '../utils/helpers';

export const ArticleCard = ({ article }) => {
  const { expandArticle } = useArticles();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {article.source}
        </span>
        <span className="text-xs text-gray-500">{formatDate(article.publishedAt)}</span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
        {article.title}
      </h3>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
        <p className="text-sm font-semibold text-blue-900 mb-1">TL;DR</p>
        <p className="text-sm text-gray-700">{article.tldr}</p>
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-900 mb-2">Key Takeaways:</p>
        <ul className="space-y-2">
          {article.keyTakeaways.map((takeaway, idx) => (
            <li key={idx} className="text-sm text-gray-700 flex items-start">
              <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={() => expandArticle(article)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Read Simplified Version
      </button>
    </div>
  );
};