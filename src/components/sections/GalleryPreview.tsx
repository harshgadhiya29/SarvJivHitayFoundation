import React, { useState } from 'react';
import { galleryImages } from '../../constants/siteConfig';
import { LinkButton } from '../ui/Button';
import { ArrowRight, X } from 'lucide-react';

const GalleryPreview: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const previewImages = galleryImages.slice(0, 4);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const currentImage = selectedImage !== null 
    ? galleryImages.find(img => img.id === selectedImage) 
    : null;

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Take a look at our work through these snapshots of our activities and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.image} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3 bg-white">
                <h3 className="font-medium text-neutral-800">{image.title}</h3>
                <p className="text-sm text-neutral-600">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <LinkButton 
            to="/gallery" 
            variant="outline"
            rightIcon={<ArrowRight size={16} />}
          >
            View Full Gallery
          </LinkButton>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && currentImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-primary-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <div className="max-w-4xl w-full">
              <img 
                src={currentImage.image} 
                alt={currentImage.title} 
                className="max-h-[80vh] mx-auto rounded-lg"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-medium">{currentImage.title}</h3>
                <p className="text-neutral-300 mt-1">{currentImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryPreview;