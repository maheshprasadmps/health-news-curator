import React from 'react';
import { Loader, AlertCircle } from 'lucide-react';
import { useArticles } from '../context/ArticlesContext';
import { formatLongDate } from '../utils/helpers';

export const ExpandedArticle = () => {
  const { expandedArticle, closeExpandedArticle, regenerateSimplification } = useArticles();

  if (!expandedArticle) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
          <h2 className="text-2xl font-bold text-gray-900 pr-8">
            {expandedArticle.title}
          </h2>
          <button
            onClick={closeExpandedArticle}
            className="text-gray-500 hover:text-gray-700 text-2xl flex-shrink-0"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {expandedArticle.source}
            </span>
            <span className="text-sm text-gray-500">
              {formatLongDate(expandedArticle.publishedAt)}
            </span>
          </div>

          {expandedArticle.isProcessing ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader className="w-10 h-10 text-blue-600 animate-spin mb-4" />
              <p className="text-gray-600">Simplifying content for easier reading...</p>
            </div>
          ) : expandedArticle.processingError ? (
            <div className="text-center py-12">
              <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <p className="text-gray-700 mb-4">{expandedArticle.processingError}</p>
              <button
                onClick={regenerateSimplification}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-5 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-600 text-xl">✨</span>
                  <h3 className="text-lg font-bold text-gray-900">Simplified Version</h3>
                </div>
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {expandedArticle.simplifiedContent}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Summary</h3>
                <p className="text-gray-700 mb-4">{expandedArticle.tldr}</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Key Points:</h4>
                <ul className="space-y-2">
                  {expandedArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2 flex-shrink-0 font-bold">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={regenerateSimplification}
                  className="flex-1 bg-white border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Regenerate
                </button>
                <button
                  onClick={closeExpandedArticle}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};