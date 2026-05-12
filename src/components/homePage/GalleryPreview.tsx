'use client';

import React, { useEffect, useState, memo } from 'react';
import Link from 'next/link';
import { ArrowRight, ImageOff } from 'lucide-react';
import api from '@/lib/api';
import { GalleryImage } from '@/types';


const ImageCard = memo(({ img }: { img: GalleryImage }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/5 shadow-lg hover:shadow-blue-500/10 transition-all">
      
      <div className="relative w-full aspect-4/3 lg:aspect-3/2 max-h-65 sm:max-h-75 md:max-h-60">
        <img
          src={img.imageUrl}
          alt="Gallery"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition"></div>

      <div className="absolute bottom-3 left-3">
        <span className="px-3 py-1 text-[10px] sm:text-xs bg-blue-600/90 text-white uppercase tracking-wider rounded-full">
          {img.category}
        </span>
      </div>
    </div>
  );
});


ImageCard.displayName = 'ImageCard';

export default function GalleryPreview() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchImages = async () => {
      try {
        const { data } = await api.get('/api/gallery');
        if (isMounted) {
          setImages((data.data || []).slice(0, 6));
        }
      } catch (error) {
        console.error('Failed to fetch gallery', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchImages();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-[#0a0f1d] relative overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-2xl sm:text-2xl md:text-5xl font-black text-white">
              Capturing <span className="text-blue-500">Milestones</span>
            </h2>
          </div>

          <Link
            href="/gallery"
            className="group flex items-center gap-2 text-white/80 hover:text-white"
          >
            EXPLORE
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Skeleton Loader */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-3xl bg-white/10 aspect-4/3"
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && images.length === 0 && (
          <div className="flex flex-col items-center py-20 text-white/60">
            <ImageOff size={50} />
            <p>No Images Found</p>
          </div>
        )}

        {/* Images */}
        {!loading && images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <ImageCard key={img._id} img={img} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}