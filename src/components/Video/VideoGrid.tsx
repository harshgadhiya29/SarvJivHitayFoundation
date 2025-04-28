import React from 'react';
import { videos } from '../../constants/siteConfig';
import { Play } from 'lucide-react';

const VideoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((video) => (
        <div key={video.id} className="card overflow-hidden">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;