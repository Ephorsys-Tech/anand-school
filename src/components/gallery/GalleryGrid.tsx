'use client';

import React, { useState } from 'react';
import { GalleryImage } from '@/types';
import GalleryCard from './GalleryCard';
import { X } from 'lucide-react';

interface GalleryGridProps {
  images: GalleryImage[];
  loading: boolean;
}

export default function GalleryGrid({ images, loading }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-72 bg-cream/50 rounded-2xl animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div className="text-center py-24 glass rounded-3xl max-w-2xl mx-auto">
        <p className="text-navy/50 text-xl font-bold">No images found for this category.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {(Array.isArray(images) ? images : []).map((img) => (
          <GalleryCard key={img._id} image={img} onClick={setSelectedImage} />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-xl animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-gold hover:text-navy text-white rounded-full flex items-center justify-center transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="max-w-3xl w-full bg-navy rounded-[2rem] overflow-hidden shadow-2xl relative border border-white/10" 
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={selectedImage.imageUrl} 
              alt="Gallery Preview" 
              className="w-full max-h-[60vh] object-contain bg-black/20"
            />
            <div className="p-6 bg-gradient-to-b from-navy/50 to-navy backdrop-blur-md flex justify-between items-center">
              <span className="inline-block px-4 py-1 bg-blue text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                {selectedImage.category}
              </span>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-none">
                Puri School Memorial • {new Date(selectedImage.createdAt).getFullYear()}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
