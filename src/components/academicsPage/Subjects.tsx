'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookMarked } from 'lucide-react';

export default function Subjects() {
  const classSubjects = [
    { level: 'KG to Class I', subjects: ['Bengali', 'English', 'Mathematics', 'General Knowledge'] },
    { level: 'Class II to V', subjects: ['Bengali', 'English', 'Mathematics', 'E.V.S', 'History', 'Computer (Class V)'] },
    { level: 'Class VI to VIII', subjects: ['Bengali', 'English', 'Mathematics', 'E.V.S', 'History', 'Geography', 'Computer'] },
    { level: 'Extra-Curricular', subjects: ['Music', 'Art and Craft'] }
  ];

  return (
    <section className="py-28 bg-accent relative overflow-hidden">
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:self-start sticky top-0"
          >
            <div>
              <div className="w-20 h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue mb-8">
                <BookMarked size={40} />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy leading-tight">
                Subject <span className="text-gradient-blue">Offerings</span>
              </h2>
            </div>
            <p className="text-navy/70 text-lg font-medium leading-relaxed">
              Our comprehensive subject coverage is meticulously designed for each academic level, ensuring a balanced curriculum that fosters critical thinking and creativity.
            </p>
            
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white mt-8 hidden lg:block">
              <img 
                src="images/book.jpeg" 
                alt="Study materials" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {classSubjects.map((classItem, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-xl border border-navy/5 hover:-translate-y-2 transition-transform duration-300 group">
                <h3 className="font-heading text-2xl font-black text-navy mb-6 group-hover:text-blue transition-colors">{classItem.level}</h3>
                <div className="space-y-4">
                  {classItem.subjects.map((subject, sidx) => (
                    <div key={sidx} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-gold"></div>
                      <span className="text-navy/80 font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
