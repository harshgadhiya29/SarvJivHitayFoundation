import React, { useState } from 'react';
import { galleryImages } from '../../constants/siteConfig';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryGridProps {
  filter?: string;
  images: { id: number; image: string; title: string; category: string; description?: string }[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    } else {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(images[newIndex].id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  };

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set([...prev, id]));
  };

  const currentImage = selectedImage !== null 
    ? images.find(img => img.id === selectedImage) 
    : null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => openLightbox(image.id)}
          >
            <div className="aspect-square overflow-hidden relative">
              {!loadedImages.has(image.id) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              )}
              <img 
                src={image.image} 
                alt={image.title} 
                loading="lazy"
                onLoad={() => handleImageLoad(image.id)}
                className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
                  loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                }`}
                width="400"
                height="400"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-medium text-neutral-800">{image.title}</h3>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-neutral-600">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && currentImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-300 transition-colors p-2 bg-black/30 rounded-full"
            onClick={() => navigateImage('prev')}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-300 transition-colors p-2 bg-black/30 rounded-full"
            onClick={() => navigateImage('next')}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="max-w-5xl w-full">
            <img 
              src={currentImage.image} 
              alt={currentImage.title} 
              className="max-h-[80vh] mx-auto rounded-lg"
              width="1200"
              height="800"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-medium">{currentImage.title}</h3>
              <p className="text-neutral-300 mt-1">{currentImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;