import React from 'react';
import { Instagram } from 'lucide-react';
import { instagramVideos } from '../../constants/siteConfig';

const InstagramVideoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {instagramVideos.map((video) => (
        <div key={video.id} className="card overflow-hidden shadow-md rounded-lg">
          <div className="aspect-video relative overflow-hidden">
            <iframe
              src={video.url}
              title={video.title}
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium">{video.title}</h3>
            <p className="text-neutral-600 mt-2">{video.description}</p>
            <div className="mt-3">
              <a 
                href={video.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline inline-flex items-center"
              >
                <Instagram size={16} className="mr-1" />
                View on Instagram
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramVideoGrid;