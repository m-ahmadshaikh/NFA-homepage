import React from 'react';
import NewsHeader from '../../components/NewsComponents/NewsHeader';
import NewsHero from '../../components/NewsComponents/NewsHero';
import NewsCards from '../../components/NewsComponents/NewsCards';

function News() {
  return (
    <div
      className="min-h-screen px-[161px] "
      style={{
        background: 'rgba(0, 0, 0, 0.92)',
        backdropFilter: 'blur(13.5px)',
        minHeight: '100vh',
      }}>
      <NewsHeader />
      <NewsHero />
      <NewsCards />
    </div>
  );
}

export default News;
