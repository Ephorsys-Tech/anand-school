'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BookText, Laptop, Users } from 'lucide-react';

export default function Library() {
  const statistics = [
    { number: '5000+', label: 'Physical Books' },
    { number: '500+', label: 'E-Resources' },
    { number: '24/7', label: 'Digital Access' },
    { number: '50+', label: 'Journals' }
  ];

  return (
    <section className="py-28 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:self-start sticky top-0"
          >
            <div>
              <span className="text-blue bg-blue/10 rounded-2xl px-2 py-1 font-bold uppercase tracking-widest text-sm mb-2">Knowledge Hub</span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                School <span className="text-gold">Library</span>
              </h2>
            </div>
            <p className="text-white/80 text-lg leading-relaxed font-medium">
              A vibrant hub of knowledge and intellectual exploration. Our library offers a quiet sanctuary for focused study, collaborative research, and a deep dive into the world of literature and sciences.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              {statistics.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-gold mb-2">{stat.number}</div>
                  <p className="text-white/70 font-semibold tracking-wide text-sm uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 border-4 border-gold translate-x-3 translate-y-2 rounded-[3rem] -z-10 h-full" ></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 h-[60%]">
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop" 
                alt="Library" 
                className="w-full h-[60%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-12 text-navy shadow-2xl relative overflow-hidden border border-navy/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <div className="group">
              <div className="w-16 h-16 bg-blue/10 rounded-xl flex items-center justify-center text-blue mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BookText size={32} />
              </div>
              <h4 className="font-heading text-md font-black mb-5">Extensive Collection</h4>
              <p className="text-navy/70 text-sm font-medium">Comprehensive collection of books across subjects including fiction, reference materials, and educational resources.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-blue/10 rounded-xl flex items-center justify-center text-blue mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Laptop size={32} />
              </div>
              <h4 className="font-heading text-md font-black mb-5">Digital Resources</h4>
              <p className="text-navy/70 text-sm font-medium">Access to online databases, e-books, and educational journals for enhanced learning through interactive portals.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-blue/10 rounded-xl flex items-center justify-center text-blue mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h4 className="font-heading text-md font-black mb-5">Research Support</h4>
              <p className="text-navy/70 text-sm font-medium">Dedicated staff to assist students in finding research materials and conducting highly effective library programs.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
