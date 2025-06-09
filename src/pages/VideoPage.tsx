import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/common/PageHero';
import VideoGrid from '../components/Video/VideoGrid';
import { videos, shorts, allVideoContent } from '../constants/siteConfig';
import SkeletonLoader from '../components/SkeletonLoader';

import bgimage from '../img/Videos.png';

const VideoPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <PageHero 
        title="Videos & Shorts" 
        subtitle="Visual stories of our work and impact"
        backgroundImage={bgimage}
      />
      
      <section className="section bg-white">
        <div className="container">
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Watch these videos and shorts to learn more about our initiatives, impact stories, and the 
            communities we serve. Each piece of content captures a unique aspect of our foundation's work.
          </p>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
            </div>
          ) : (
            <>
              {/* Option 1: Pass separate arrays (recommended for explicit control) */}
              <VideoGrid videos={videos} shorts={shorts} showTabs={true} />
              
              {/* Option 2: Pass mixed content array - uncomment this and comment above if preferred */}
              {/* <VideoGrid videos={allVideoContent} showTabs={true} /> */}
              
              {/* Option 3: No tabs (all content mixed) - uncomment if you want no tabs ever */}
              {/* <VideoGrid videos={allVideoContent} showTabs={false} /> */}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default VideoPage;