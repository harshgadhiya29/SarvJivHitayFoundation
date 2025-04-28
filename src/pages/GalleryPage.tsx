import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/common/PageHero';
import GalleryGrid from '../components/Gallery/GalleryGrid';

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | undefined>(undefined);
  
  const filterCategories = ['All', 'Events', 'Environment', 'Education', 'Conservation', 'Health'];
  
  const handleFilterChange = (category: string) => {
    setActiveFilter(category === 'All' ? undefined : category);
  };
  
  return (
    <Layout>
      <PageHero 
        title="Gallery" 
        subtitle="Moments from our journey of creating positive impact"
        backgroundImage="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section bg-white">
        <div className="container">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  (category === 'All' && !activeFilter) || category === activeFilter
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <GalleryGrid filter={activeFilter} />
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;