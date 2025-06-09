import React from 'react';
import { videos } from '../../constants/siteConfig';
import { LinkButton } from '../ui/Button';
import { ArrowRight, Play } from 'lucide-react';

const VideoPreview: React.FC = () => {
  // Just preview the first video
  const featuredVideo = videos[0];
  
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Watch Our Story</h2>
          <p className="section-subtitle">
            See the impact we're making through our work and community involvement.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-video w-full">
              <iframe 
                src={featuredVideo.url} 
                title={featuredVideo.title}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <h3 className="text-xl font-medium">{featuredVideo.title}</h3>
            <p className="text-neutral-600 mt-2">{featuredVideo.description}</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <LinkButton 
            to="/videos" 
            variant="outline"
            rightIcon={<ArrowRight size={16} />}
          >
            Watch More Videos
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;