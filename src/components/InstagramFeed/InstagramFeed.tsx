import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { instagramPosts } from '../../constants/siteConfig';

const InstagramFeed: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (postId: string) => {
    setLoadedImages(prev => new Set([...prev, postId]));
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {instagramPosts.posts.map((post) => (
        <div 
          key={post.id} 
          className="instagram-item relative overflow-hidden group shadow-md rounded-lg"
        >
          <div className="aspect-square relative overflow-hidden">
            {!loadedImages.has(post.id) && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            )}
            <img 
              src={post.imageUrl}
              alt={post.caption}
              className={`w-full h-full object-cover ${
                loadedImages.has(post.id) ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(post.id)}
              loading="lazy"
              width="400"
              height="400"
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