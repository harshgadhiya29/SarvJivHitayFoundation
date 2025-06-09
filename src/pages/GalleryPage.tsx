import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/common/PageHero';
import GalleryGrid from '../components/Gallery/GalleryGrid';
import InstagramGrid from '../components/InstagramFeed/InstagramFeed';
import { siteConfig, galleryImages } from '../constants/siteConfig';
import { Play, Instagram } from 'lucide-react';
import SkeletonLoader from '../components/SkeletonLoader';

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const updatedFilteredImages = activeFilter 
        ? galleryImages.filter(img => img.category === activeFilter) 
        : galleryImages;
      setFilteredImages(updatedFilteredImages);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeFilter]);

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
      <section className="section bg-white" style={{ marginTop: '-40px' }}>
      <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Foundation Post Work Completed</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ensuring a Strong and Lasting Base for Your Structure
            </p>
      </div>
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
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
            </div>
          ) : (
            <GalleryGrid images={filteredImages} />
          )}
        </div>
      </section>
       {/* Instagram Posts Section */}
       <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Instagram Posts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest initiatives, events, and impact stories through our Instagram posts.
            </p>
          </div>
          <InstagramGrid />
          <div className="mt-8 text-center">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all"
            >
              <Instagram size={20} className="mr-2" />
              Follow @sarvjivhitayfoundation
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;