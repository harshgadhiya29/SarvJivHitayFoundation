import React from 'react';
import Layout from '../components/layout/Layout';
import PageHero from '../components/common/PageHero';
import VideoGrid from '../components/Video/VideoGrid';

const VideoPage: React.FC = () => {
  return (
    <Layout>
      <PageHero 
        title="Videos" 
        subtitle="Visual stories of our work and impact"
        backgroundImage="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="section bg-white">
        <div className="container">
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Watch these videos to learn more about our initiatives, impact stories, and the 
            communities we serve. Each video captures a unique aspect of our foundation's work.
          </p>
          
          <VideoGrid />
        </div>
      </section>
    </Layout>
  );
};

export default VideoPage;