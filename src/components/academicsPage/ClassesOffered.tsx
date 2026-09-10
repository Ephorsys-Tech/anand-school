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
      image: 'https://res.cloudinary.com/dfdi9ngal/image/upload/v1788934854/IMG_9719_qqtcxu.jpg'
    },
    {
      level: 'Primary',
      grades: 'Class I - V',
      description: 'Building foundational knowledge in core subjects with emphasis on Bengali and Math.',
      image: 'https://res.cloudinary.com/dfdi9ngal/image/upload/v1788935088/IMG_9667_u9ub7z.jpg'
    },
    {
      level: 'Middle School',
      grades: 'Class VI - VIII',
      description: 'Introduction to specialized subjects including History, Geography, and Computer.',
      image: 'https://res.cloudinary.com/dfdi9ngal/image/upload/v1788935256/IMG_9652_aqrizz.jpg'
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-blue/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-5 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
                <BookOpen size={32} className="sm:hidden" />
                <BookOpen size={40} className="hidden sm:block" />
              </div>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-4 sm:mb-6 px-2">
              Classes <span className="text-gradient-blue">Offered</span>
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto text-base sm:text-lg font-medium px-2">
              From KG to Class VIII, we offer comprehensive education across multiple levels, designed to foster growth at every stage.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {classes.map((classItem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] aspect-[4/5] sm:aspect-[4/5] shadow-xl mb-4 sm:mb-6">
                <img
                  src={classItem.image}
                  alt={classItem.level}
                  loading="lazy"
                  className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Gradient overlay: always strong enough on mobile for legible text, since hover doesn't exist on touch */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent md:from-navy/90 md:via-navy/40 opacity-90 md:opacity-80 md:group-hover:opacity-90 transition-opacity duration-300"></div>
                {/* Content: visible by default on mobile/tablet; hover-reveal effect only kicks in on md+ pointer devices */}
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-gold font-black text-2xl sm:text-3xl mb-1.5 sm:mb-2">{classItem.grades}</div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{classItem.level}</h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-100">{classItem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-br from-navy to-blue rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-8 sm:p-10 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-center relative z-10">
            <div className="group">
              <div className="text-4xl sm:text-4xl md:text-5xl font-black text-gold mb-3 sm:mb-4 group-hover:scale-110 transition-transform inline-block">10+</div>
              <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide">Class Rooms</p>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-4xl md:text-5xl font-black text-gold mb-3 sm:mb-4 group-hover:scale-110 transition-transform inline-block">6</div>
              <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide">Max Subjects per Class</p>
            </div>
            <div className="group">
              <div className="text-4xl sm:text-4xl md:text-5xl font-black text-gold mb-3 sm:mb-4 group-hover:scale-110 transition-transform inline-block">KG - VIII</div>
              <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide">Complete Grade Span</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}