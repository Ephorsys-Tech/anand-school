'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BookText, Laptop, Users } from 'lucide-react';

export default function Library() {
  const statistics = [
    { number: '500+', label: 'Physical Books' },
    { number: '500+', label: 'E-Resources' },
    { number: '4', label: 'Digital Classes' },
    { number: '50+', label: 'Journals' }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-blue/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 lg:self-start lg:sticky lg:top-8"
          >
            <div>
              <span className="inline-block text-blue bg-blue/10 rounded-2xl px-3 py-1 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">Knowledge Hub</span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                School <span className="text-gold">Library</span>
              </h2>
            </div>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-medium">
              A vibrant hub of knowledge and intellectual exploration. Our library offers a quiet sanctuary for focused study, collaborative research, and a deep dive into the world of literature and sciences.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
              {statistics.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10">
                  <div className="text-3xl sm:text-4xl font-black text-gold mb-1.5 sm:mb-2">{stat.number}</div>
                  <p className="text-white/70 font-semibold tracking-wide text-xs sm:text-sm uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mt-2 lg:mt-0"
          >
            {/* Fixed: original used h-[60%] on the image/card with no defined parent height, which
                collapses to zero height in most browsers. Using a real aspect ratio instead so the
                image always renders at a predictable size on every screen. */}
            <div className="absolute inset-0 border-2 sm:border-4 border-gold translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-2 rounded-[2rem] sm:rounded-[3rem] -z-10"></div>
            <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] sm:aspect-[3/2] lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop"
                alt="Library"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 text-navy shadow-2xl relative overflow-hidden border border-navy/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center relative z-10">
            <div className="group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue/10 rounded-xl flex items-center justify-center text-blue mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <BookText size={28} className="sm:hidden" />
                <BookText size={32} className="hidden sm:block" />
              </div>
              <h4 className="font-heading text-base sm:text-md font-black mb-3 sm:mb-5">Extensive Collection</h4>
              <p className="text-navy/70 text-sm font-medium">Comprehensive collection of books across subjects including fiction, reference materials, and educational resources.</p>
            </div>
            <div className="group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue/10 rounded-xl flex items-center justify-center text-blue mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Laptop size={28} className="sm:hidden" />
                <Laptop size={32} className="hidden sm:block" />
              </div>
              <h4 className="font-heading text-base sm:text-md font-black mb-3 sm:mb-5">Digital Resources</h4>
              <p className="text-navy/70 text-sm font-medium">Access to online databases, e-books, and educational journals for enhanced learning through interactive portals.</p>
            </div>
            <div className="group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue/10 rounded-xl flex items-center justify-center text-blue mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Users size={28} className="sm:hidden" />
                <Users size={32} className="hidden sm:block" />
              </div>
              <h4 className="font-heading text-base sm:text-md font-black mb-3 sm:mb-5">Research Support</h4>
              <p className="text-navy/70 text-sm font-medium">Dedicated staff to assist students in finding research materials and conducting highly effective library programs.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}