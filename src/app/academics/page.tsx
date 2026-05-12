'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ClassesOffered from '@/components/academicsPage/ClassesOffered';
import CBSECurriculum from '@/components/academicsPage/CBSECurriculum';
import Subjects from '@/components/academicsPage/Subjects';
import AcademicCalendar from '@/components/academicsPage/AcademicCalendar';
import Library from '@/components/academicsPage/Library';
import Labs from '@/components/academicsPage/Labs';
import Sports from '@/components/academicsPage/Sports';

export default function AcademicsPage() {
  return (
    <main className="flex-grow bg-cream relative overflow-hidden">

      {/* Header Section with Background Image */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ACADEMICS.jpg"
            alt="Academic Excellence Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
          <div className="absolute inset-0"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue bg-blue/10 rounded-2xl px-2 py-1 font-bold uppercase tracking-widest text-sm mb-2">Holistic Education</span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Academic <span className="text-gold">Excellence</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium">
                Our academic approach is child-centric and activity-based, ensuring that every student gets individual attention and develops holistically. We provide a nurturing environment that encourages curiosity, critical thinking, and creativity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Components */}
      <ClassesOffered />
      <CBSECurriculum />
      <Subjects />
      <AcademicCalendar />
      <Library />
      <Labs />
      <Sports />
    </main>
  );
}