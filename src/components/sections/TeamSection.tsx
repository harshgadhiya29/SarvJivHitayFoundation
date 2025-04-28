import React from 'react';
import { teamMembers } from '../../constants/siteConfig';
import { Card, CardImage, CardContent } from '../ui/Card';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the dedicated individuals working towards our mission of promoting welfare for all living beings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} hoverEffect>
              <CardImage 
                src={member.image} 
                alt={member.name} 
                aspectRatio="square"
              />
              <CardContent>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-primary-600 text-sm mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-2">
                  <button 
                    className="p-2 rounded-full bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={16} />
                  </button>
                  <button 
                    className="p-2 rounded-full bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 transition-colors"
                    aria-label={`LinkedIn profile for ${member.name}`}
                  >
                    <Linkedin size={16} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;