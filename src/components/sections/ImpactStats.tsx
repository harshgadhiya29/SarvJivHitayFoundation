import React from 'react';
import { PawPrint, Sprout, Users, Heart } from 'lucide-react';
import { impactStats } from '../../constants/siteConfig';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Paw':
      return <PawPrint size={36} className="text-primary-600" />;
    case 'Sprout':
      return <Sprout size={36} className="text-primary-600" />;
    case 'Users':
      return <Users size={36} className="text-primary-600" />;
    case 'Heart':
      return <Heart size={36} className="text-primary-600" />;
    default:
      return <Heart size={36} className="text-primary-600" />;
  }
};

const ImpactStats: React.FC = () => {
  return (
    <section className="bg-primary-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={stat.id}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">
                {getIcon(stat.icon)}
              </div>
              <p className="text-4xl font-bold text-primary-700 mb-2">{stat.stat}</p>
              <p className="text-neutral-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;