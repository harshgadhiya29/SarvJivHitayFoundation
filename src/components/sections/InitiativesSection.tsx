import React from 'react';
import { initiatives } from '../../constants/siteConfig';
import { PawPrint, Leaf, Home, Wheat } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { LinkButton } from '../ui/Button';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'PawPrint':
      return <PawPrint size={48} className="text-primary-600 mb-4" />;
    case 'Leaf':
      return <Leaf size={48} className="text-primary-600 mb-4" />;
    case 'Home':
      return <Home size={48} className="text-primary-600 mb-4" />;
    case 'Wheat':
      return <Wheat size={48} className="text-primary-600 mb-4" />;
    default:
      return <Leaf size={48} className="text-primary-600 mb-4" />;
  }
};

const InitiativesSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Our Initiatives</h2>
          <p className="section-subtitle">
            We work across multiple areas to create a harmonious relationship between all living beings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => (
            <Card key={initiative.id} hoverEffect className="text-center h-full">
              <CardContent className="flex flex-col items-center justify-between h-full">
                {getIcon(initiative.icon)}
                <h3 className="text-xl font-medium mb-3">{initiative.title}</h3>
                <p className="text-neutral-600 mb-6">{initiative.description}</p>
                <LinkButton 
                  to={`/initiatives/${initiative.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  variant="outline"
                  className="mt-auto"
                >
                  Learn More
                </LinkButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;