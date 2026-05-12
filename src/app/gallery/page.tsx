'use client';

import React, { useEffect, useMemo, useState } from 'react';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import api from '@/lib/api';
import { GalleryImage, GalleryCategory } from '@/types';

const galleryCategories: Array<GalleryCategory | 'all'> = ['all', 'event', 'activity', 'achievement'];
const IMAGES_PER_PAGE = 9;

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const { data } = await api.get('/api/gallery');
        setImages(data.data || []);
      } catch (error) {
        console.error('Failed to fetch gallery', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const filteredImages = useMemo(
    () => images.filter((img) => activeCategory === 'all' || img.category === activeCategory),
    [images, activeCategory]
  );

  const totalPages = Math.max(1, Math.ceil(filteredImages.length / IMAGES_PER_PAGE));
  const visibleImages = filteredImages.slice((currentPage - 1) * IMAGES_PER_PAGE, currentPage * IMAGES_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <>
      <main className="flex-grow pt-32 bg-cream min-h-screen relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center mb-12 space-y-4">
            <span className="text-blue bg-blue/10 rounded-2xl px-2 py-1 font-bold uppercase tracking-widest text-sm mb-2">A Visual Legacy</span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy leading-tight">
              School <span className="text-blue">Archives</span>
            </h1>
            <p className="text-xl text-navy/40 max-w-2xl mx-auto font-medium">
              Documenting the milestones, community impact, and the vibrant life of our students.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-blue text-white shadow-lg shadow-blue/20'
                    : 'bg-white/90 text-navy hover:bg-blue/10'
                }`}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="mb-6 text-center text-sm text-navy/70">
            Showing {visibleImages.length} of {filteredImages.length} photos in{' '}
            {activeCategory === 'all' ? 'all categories' : `${activeCategory} category`}.
          </div>

          <GalleryGrid images={visibleImages} loading={loading} />

          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-navy enabled:hover:bg-blue/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    currentPage === page
                      ? 'bg-blue text-white shadow-lg shadow-blue/20'
                      : 'bg-white/95 text-navy hover:bg-blue/10'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-navy enabled:hover:bg-blue/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>
  
    </>
  );
}