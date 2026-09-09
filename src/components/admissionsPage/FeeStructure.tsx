'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function FeeStructure() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue/5 via-cream to-cream pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden border border-white/10 flex flex-col items-center justify-center"
        >
          {/* Glow blob */}
          <div className="absolute top-[-20%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue/20 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Title */}
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-gold mb-10 sm:mb-12 text-center relative z-10">
            Benefits
          </h3>

          {/* Two-column grid — centered inside the navy div */}
          <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 md:gap-16 relative z-10">

            {/* What's Included */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                <span className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  📋
                </span>
                What's Included
              </h4>
              <ul className="space-y-3 sm:space-y-4 w-full">
                {[
                  'Tuition and academic classes',
                  'Mid-day nutritious meals',
                  'School uniforms (2–3 sets)',
                  'Books and study materials',
                  'Laboratory facilities',
                  'Sports activities',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 sm:gap-4">
                    <CheckCircle2 className="text-gold flex-shrink-0" size={20} />
                    <span className="text-white/90 font-medium text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Provisions */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                <span className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  💰
                </span>
                Special Provisions
              </h4>
              <ul className="space-y-3 sm:space-y-4 w-full">
                {[
                  'Sibling discount of 10% available',
                  'Scholarship for merit students',
                  'Financial aid for underprivileged',
                  'Payment plans available',
                  'Flexible payment options',
                  'One-time admission fee',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 sm:gap-4">
                    <CheckCircle2 className="text-blue flex-shrink-0" size={20} />
                    <span className="text-white/90 font-medium text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Bottom note */}
        <div className="mt-10 sm:mt-16 text-center max-w-3xl mx-auto px-4">
          <p className="text-navy/80 text-base sm:text-lg font-medium leading-relaxed">
            No child is turned away due to inability to pay. Contact the office for scholarship and financial assistance programs.
          </p>
        </div>

      </div>
    </section>
  );
}