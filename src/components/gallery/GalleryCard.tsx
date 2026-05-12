import React from 'react';
import { GalleryImage } from '@/types';
import { X, ZoomIn } from 'lucide-react';

interface GalleryCardProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
}

export default function GalleryCard({ image, onClick }: GalleryCardProps) {
  return (
    <div 
      className="group relative rounded-3xl overflow-hidden cursor-pointer bg-cream/10 border-4 border-white shadow-xl hover:shadow-blue-500/10 transition-all duration-500"
      onClick={() => onClick(image)}
    >
      <img 
        src={image.imageUrl} 
        alt="School Memorial" 
        loading="lazy"
        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-1000" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 flex items-center justify-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-14 h-14 rounded-full bg-blue text-white flex items-center justify-center shadow-lg transform active:scale-95 transition-transform">
            <ZoomIn size={28} />
          </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-block px-4 py-1.5 bg-gold text-navy text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
            {image.category}
          </span>
        </div>
      </div>
    </div>
  );
}
