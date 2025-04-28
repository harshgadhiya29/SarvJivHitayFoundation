import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: 'sm' | 'md' | 'lg'; 
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage,
  height = 'md'
}) => {
  const heightClasses = {
    sm: 'min-h-[30vh]',
    md: 'min-h-[40vh]',
    lg: 'min-h-[50vh]'
  };

  return (
    <div 
      className={`relative flex items-center justify-center ${heightClasses[height]} mb-8`}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'url(https://images.pexels.com/photos/4808267/pexels-photo-4808267.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white space-y-4 px-4">
        <h1 className="animate-slide-in-up">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;