import React from 'react';
import { LinkButton } from '../ui/Button';
import { siteConfig } from '../../constants/siteConfig';
import { Heart, ChevronRight } from 'lucide-react';

const HomeHero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4808267/pexels-photo-4808267.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      />
      
      {/* Subtle wave pattern for background texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDEyQjMwIiBvcGFjaXR5PSIuMSIgZD0iTTAgMGgxNDQwdjc2MEgweiIvPjxwYXRoIGQ9Ik03MjAgMEMzMjIuMSAwIDAgMTY5LjUgMCAzODBzMzIyLjEgMzgwIDcyMCAzODAgNzIwLTE2OS41IDcyMC0zODBTMTExNy45IDAgNzIwIDB6IiBmaWxsPSIjMDUzNTNFIiBvcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')]"></div>
      
      {/* Circle decoration - subtle visual interest */}
      <div className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-primary-500 opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] left-[10%] w-40 h-40 rounded-full bg-accent-400 opacity-10 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        {/* Logo Icon */}
        <div className="inline-flex justify-center items-center p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
          <Heart className="w-16 h-16 text-white" fill="white" />
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-medium leading-tight animate-slide-in-up">
            {siteConfig.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-100 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            {siteConfig.tagline}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            <LinkButton 
              to="/about" 
              variant="accent"
              size="lg"
              rightIcon={<ChevronRight size={18} />}
            >
              Learn More
            </LinkButton>
            <LinkButton 
              to="/contact" 
              variant="outline"
              size="lg"
              className="bg-white bg-opacity-10 text-white border-white border-opacity-30 hover:bg-opacity-20"
            >
              Get Involved
            </LinkButton>
          </div>
        </div>
      </div>
      
      {/* Subtle wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 100C1200 100 1320 80 1380 70L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </div>
  );
};

export default HomeHero;