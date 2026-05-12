'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function ClassesOffered() {
  const classes = [
    {
      level: 'Pre-Primary',
      grades: 'Class K.G.',
      description: 'Foundation stage focusing on basic literacy, numeracy, and social skills.',
      image: '/images/kg.png'
    },
    {
      level: 'Primary',
      grades: 'Class I - V',
      description: 'Building foundational knowledge in core subjects with emphasis on Bengali and Math.',
      image: '/images/primary.webp'
    },
    {
      level: 'Middle School',
      grades: 'Class VI - VIII',
      description: 'Introduction to specialized subjects including History, Geography, and Computer.',
      image: '/images/middle.jpg'
    },
  ];

  return (
    <section className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
                <BookOpen size={40} />
              </div>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-6">
              Classes <span className="text-gradient-blue">Offered</span>
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto text-lg font-medium">
              From KG to Class VIII, we offer comprehensive education across multiple levels, designed to foster growth at every stage.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-xl mb-6">
                <img 
                  src={classItem.image} 
                  alt={classItem.level}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-gold font-black text-3xl mb-2">{classItem.grades}</div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{classItem.level}</h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{classItem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-navy to-blue rounded-[3rem] p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <div className="group">
              <div className="text-5xl font-black text-gold mb-4 group-hover:scale-110 transition-transform inline-block">9</div>
              <p className="text-xl font-medium tracking-wide">Class Rooms</p>
            </div>
            <div className="group">
              <div className="text-5xl font-black text-gold mb-4 group-hover:scale-110 transition-transform inline-block">7</div>
              <p className="text-xl font-medium tracking-wide">Max Subjects per Class</p>
            </div>
            <div className="group">
              <div className="text-5xl font-black text-gold mb-4 group-hover:scale-110 transition-transform inline-block">KG - VIII</div>
              <p className="text-xl font-medium tracking-wide">Complete Grade Span</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
