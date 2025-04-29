import React from 'react';
import { Instagram } from 'lucide-react';
import { instagramPosts } from '../../constants/siteConfig';

const InstagramFeed: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {instagramPosts.posts.map((post) => (
        <div 
          key={post.id} 
          className="instagram-item relative overflow-hidden group shadow-md rounded-lg"
        >
          <div className="aspect-square relative overflow-hidden">
            <img 
              src={post.imageUrl}
              alt={post.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-center p-4">
                <Instagram size={24} className="mx-auto mb-2" />
                <p className="text-sm line-clamp-3">{post.caption}</p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <p className="text-sm text-gray-500">{post.date}</p>
            <a 
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 text-sm hover:underline mt-1 inline-block"
            >
              View on Instagram
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;