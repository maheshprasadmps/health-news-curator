import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockArticles } from '../services/mockData';
import { processArticle, processArticleSimplification } from '../services/aiService';
import { ARTICLES_PER_PAGE } from '../utils/helpers';

const ArticlesContext = createContext();

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within ArticlesProvider');
  }
  return context;
};

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const processed = await Promise.all(
        mockArticles.map(article => processArticle(article))
      );
      
      setArticles(processed);
    } catch (err) {
      setError('Failed to load articles. Please try again.');
      console.error('Error loading articles:', err);
    } finally {
      setLoading(false);
    }
  };

  const refreshArticles = async () => {
    setIsRefreshing(true);
    setCurrentPage(1);
    await loadArticles();
    setIsRefreshing(false);
  };

  const expandArticle = async (article) => {
    setExpandedArticle({ ...article, isProcessing: true });
    
    try {
      const simplified = await processArticleSimplification(article);
      setExpandedArticle({ ...simplified, isProcessing: false });
    } catch (err) {
      setExpandedArticle({ 
        ...article, 
        isProcessing: false,
        processingError: 'Failed to simplify content. Please try again.' 
      });
      console.error('Error simplifying article:', err);
    }
  };

  const closeExpandedArticle = () => {
    setExpandedArticle(null);
  };

  const regenerateSimplification = async () => {
    if (expandedArticle) {
      await expandArticle(expandedArticle);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const paginatedArticles = articles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const value = {
    articles: paginatedArticles,
    allArticles: articles,
    loading,
    error,
    currentPage,
    totalPages,
    expandedArticle,
    isRefreshing,
    setCurrentPage,
    refreshArticles,
    expandArticle,
    closeExpandedArticle,
    regenerateSimplification,
    loadArticles,
  };

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
};