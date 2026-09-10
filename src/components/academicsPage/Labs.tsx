'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Monitor, Beaker, Cpu } from 'lucide-react';

export default function Labs() {
  const labFeatures = [
    { icon: <Beaker size={28} />, title: 'Chemistry & Biology', desc: 'Advanced microscopes, chemical apparatus, and safety equipment.' },
    { icon: <Monitor size={28} />, title: 'Computer Lab', desc: 'Modern workstations, high-speed internet, and educational software.' },
    { icon: <Cpu size={28} />, title: 'Physics Lab', desc: 'Apparatus for mechanics, optics, and electrical experiments.' },
    { icon: <Microscope size={28} />, title: 'Research Focused', desc: 'Encouraging practical learning beyond standard curriculum.' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue/10 via-cream to-cream pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-14 sm:mb-18 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-5 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
                <Microscope size={32} className="sm:hidden" />
                <Microscope size={40} className="hidden sm:block" />
              </div>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-4 sm:mb-6 px-2">
              Advanced <span className="text-gradient-blue">Laboratories</span>
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto text-base sm:text-lg font-medium px-2">
              Modern laboratory facilities for hands-on learning and practical experiments, transforming theoretical concepts into practical understanding.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden aspect-video shadow-2xl group border-2 sm:border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop"
              alt="Science Lab"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 sm:px-6 sm:py-3 border border-white/20 inline-flex items-center gap-2 sm:gap-3">
                <Beaker className="text-gold flex-shrink-0" size={20} />
                <span className="text-white font-bold text-sm sm:text-base md:text-lg tracking-wide">Science Laboratory</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden aspect-video shadow-2xl group border-2 sm:border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
              alt="Computer Lab"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 sm:px-6 sm:py-3 border border-white/20 inline-flex items-center gap-2 sm:gap-3">
                <Monitor className="text-gold flex-shrink-0" size={20} />
                <span className="text-white font-bold text-sm sm:text-base md:text-lg tracking-wide">Computer Laboratory</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {labFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-7 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl border border-navy/5 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue/10 rounded-xl flex items-center justify-center text-blue mb-4 sm:mb-6">
                {feat.icon}
              </div>
              <h4 className="font-heading text-lg sm:text-xl font-black text-navy mb-2.5 sm:mb-3">{feat.title}</h4>
              <p className="text-navy/70 text-sm font-medium leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}