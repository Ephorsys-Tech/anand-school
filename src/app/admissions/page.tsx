'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AdmissionProcess from '@/components/admissionsPage/AdmissionProcess';
import Eligibility from '@/components/admissionsPage/Eligibility';
import RequiredDocuments from '@/components/admissionsPage/RequiredDocuments';
import FeeStructure from '@/components/admissionsPage/FeeStructure';

export default function AdmissionsPage() {
  return (
    <main className="flex-grow bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Header Section with Background Image */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adm.webp"
            alt="Students at Usthi Foundation India School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue bg-blue/10 rounded-2xl px-2 py-1 font-bold uppercase tracking-widest text-sm mb-2">Admissions 2025-2026</span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Join Our <span className="text-gold">Community</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                We welcome students who are eager to learn and grow. Start your educational journey with Usthi Foundation India School today. Quality education backed by Usthi Foundation India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Components */}
      <AdmissionProcess />
      <Eligibility />
      <RequiredDocuments />
      <FeeStructure />
    </main>
  );
}
