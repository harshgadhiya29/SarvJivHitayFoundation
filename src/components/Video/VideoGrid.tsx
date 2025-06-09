import React, { useState, useMemo } from 'react';
import { Play, Youtube } from 'lucide-react';

// Utility function to extract YouTube video ID from URL (supports regular videos and shorts)
const getYouTubeVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([^#&?]*)/,
    /youtube\.com\/shorts\/([^#&?]*)/,
    /youtube\.com\/live\/([^#&?]*)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
};

// Utility function to detect if URL is a YouTube Short
const isYouTubeShort = (url: string): boolean => {
  return url.includes('/shorts/');
};

// Utility function to get YouTube thumbnail URL
const getYouTubeThumbnail = (videoId: string, quality: 'default' | 'medium' | 'high' | 'standard' | 'maxresdefault' | 'hqdefault' = 'maxresdefault'): string => {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

// Video interface
interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  type?: 'video' | 'short'; // Optional: can be auto-detected
  thumbnail?: any; // This will be ignored in favor of auto-generated thumbnails
}

interface VideoGridProps {
  videos?: Video[];
  shorts?: Video[];
  showTabs?: boolean;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos = [], shorts = [], showTabs = true }) => {
  // Combine all content and auto-detect types
  const { detectedVideos, detectedShorts, shouldShowTabs } = useMemo(() => {
    // Combine all provided content
    const allContent = [...videos, ...shorts];
    
    // Auto-detect content type from URLs
    const detectedVideos = allContent.filter(item => !isYouTubeShort(item.url));
    const detectedShorts = allContent.filter(item => isYouTubeShort(item.url));
    
    // Determine if tabs should be shown (only if both videos and shorts exist AND showTabs is true)
    const shouldShowTabs = showTabs && detectedVideos.length > 0 && detectedShorts.length > 0;
    
    return { detectedVideos, detectedShorts, shouldShowTabs };
  }, [videos, shorts, showTabs]);

  // Set initial active tab based on what content is available
  const getInitialTab = (): 'videos' | 'shorts' => {
    if (detectedVideos.length > 0) return 'videos';
    if (detectedShorts.length > 0) return 'shorts';
    return 'videos';
  };

  const [activeTab, setActiveTab] = useState<'videos' | 'shorts'>(getInitialTab());

  // Determine what content to show
  const getCurrentContent = (): Video[] => {
    if (!shouldShowTabs) {
      // If no tabs, show all content
      return [...detectedVideos, ...detectedShorts];
    }
    // If tabs are shown, filter by active tab
    return activeTab === 'videos' ? detectedVideos : detectedShorts;
  };

  const currentContent = getCurrentContent();

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
    const videoId = getYouTubeVideoId(video.url);
    const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId, 'maxresdefault') : null;
    const isShort = isYouTubeShort(video.url);

    return (
      <div 
        className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${
          isShort ? 'max-w-sm mx-auto' : ''
        }`}
        onClick={() => handleVideoClick(video.url)}
      >
        <div className={`relative bg-gray-200 ${isShort ? 'aspect-[9/16]' : 'aspect-video'}`}>
          {thumbnailUrl ? (
            <>
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to medium quality if maxres fails
                  const target = e.target as HTMLImageElement;
                  if (videoId && target.src.includes('maxresdefault')) {
                    target.src = getYouTubeThumbnail(videoId, 'hqdefault');
                  }
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                  <Play 
                    className="w-8 h-8 text-white fill-current" 
                    style={{ marginLeft: '2px' }} 
                  />
                </div>
              </div>
              {/* YouTube Shorts indicator */}
              {isShort && (
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-semibold">
                  Shorts
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <div className="text-center text-gray-600">
                <Youtube className="w-12 h-12 mx-auto mb-2" />
                <p className="text-sm">{isShort ? 'Short' : 'Video'} Thumbnail</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {video.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {video.description}
          </p>
        </div>
      </div>
    );
  };

  // Get content type for display purposes
  const getContentTypeLabel = (): string => {
    if (!shouldShowTabs) {
      if (detectedVideos.length > 0 && detectedShorts.length > 0) {
        return 'Videos & Shorts';
      } else if (detectedShorts.length > 0) {
        return 'Shorts';
      } else {
        return 'Videos';
      }
    }
    return activeTab === 'shorts' ? 'Shorts' : 'Videos';
  };

  // Update active tab when content changes
  React.useEffect(() => {
    if (!shouldShowTabs) return;
    
    // If current tab has no content, switch to the tab that has content
    if (activeTab === 'videos' && detectedVideos.length === 0 && detectedShorts.length > 0) {
      setActiveTab('shorts');
    } else if (activeTab === 'shorts' && detectedShorts.length === 0 && detectedVideos.length > 0) {
      setActiveTab('videos');
    }
  }, [detectedVideos.length, detectedShorts.length, activeTab, shouldShowTabs]);

  return (
    <div className="w-full">
      {/* Debug info - remove in production */}
      {typeof window !== 'undefined' && (window as any).process && (window as any).process.env && (window as any).process.env.NODE_ENV === 'development' && (
        <div className="mb-4 p-4 bg-gray-100 rounded text-sm text-gray-600">
          Debug: Videos: {detectedVideos.length}, Shorts: {detectedShorts.length}, Show Tabs: {shouldShowTabs ? 'Yes' : 'No'}
        </div>
      )}

      {/* Tabs - Only show when both videos and shorts exist */}
      {shouldShowTabs && (
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              disabled={detectedVideos.length === 0}
            >
              Videos ({detectedVideos.length})
            </button>
            <button
              onClick={() => setActiveTab('shorts')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'shorts'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              disabled={detectedShorts.length === 0}
            >
              Shorts ({detectedShorts.length})
            </button>
          </div>
        </div>
      )}

      {/* Content Grid */}
      {currentContent.length > 0 ? (
        <div className={`grid gap-8 ${
          // Determine grid layout based on content type
          (shouldShowTabs && activeTab === 'shorts') || (!shouldShowTabs && detectedShorts.length > 0 && detectedVideos.length === 0)
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {currentContent.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Youtube className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No {getContentTypeLabel()} Available
          </h3>
          <p className="text-gray-500">
            {getContentTypeLabel()} will appear here when added to the configuration.
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;