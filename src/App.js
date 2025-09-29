import React from 'react';
import { ArticlesProvider, useArticles } from './context/ArticlesContext';
import { Header } from './components/Header';
import { ArticleCard } from './components/ArticleCard';
import { ExpandedArticle } from './components/ExpandedArticle';
import { Pagination } from './components/Pagination';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';

const AppContent = () => {
  const { articles, loading, error, loadArticles } = useArticles();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} onRetry={loadArticles} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            <Pagination />
          </>
        )}
      </main>
      
      <ExpandedArticle />
    </div>
  );
};

function App() {
  return (
    <ArticlesProvider>
      <AppContent />
    </ArticlesProvider>
  );
}

export default App;