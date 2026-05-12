'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Activity, Medal, Star } from 'lucide-react';

export default function Sports() {
  const sportsList = [
    { name: 'Cricket', icon: '🏏', category: 'Team Sport' },
    { name: 'Volleyball', icon: '🏐', category: 'Team Sport' },
    { name: 'Badminton', icon: '🏸', category: 'Individual Sport' },
    { name: 'Basketball', icon: '🏀', category: 'Team Sport' },
    { name: 'Athletics', icon: '🏃', category: 'Individual Sport' },
    { name: 'Gymnastics', icon: '🤸', category: 'Individual Sport' },
    { name: 'Boxing', icon: '🥊', category: 'Individual Sport' },
    { name: 'Yoga', icon: '🧘', category: 'Wellness' },
  ];

  return (
    <section className="py-28 bg-accent relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue bg-blue/10 rounded-2xl px-2 py-1 font-bold uppercase tracking-widest text-sm mb-2">Physical Education</span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-6">
              Sports & <span className="text-gradient-blue">Recreation</span>
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto text-lg font-medium">
              Comprehensive sports programs designed to develop physical fitness, teamwork, and competitive spirit.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-navy min-h-[420px] md:min-h-[520px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop" 
              alt="Students running" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16">
              <h3 className="font-heading text-2xl md:text-3xl font-black text-white mb-4">Championing Health & Vitality</h3>
              <p className="text-white/80 font-medium max-w-3xl text-base md:text-lg leading-relaxed">
                We believe sports are integral to holistic development. Instilling values of discipline, teamwork, and healthy living through structured programs.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col justify-between gap-6"
          >
            <div className="bg-gradient-to-br from-navy to-blue p-8 rounded-[2rem] shadow-xl text-white flex-1 flex flex-col justify-center border border-white/10">
              <Activity className="text-gold mb-4" size={32} />
              <h4 className="font-bold text-xl mb-2">Sports Programs</h4>
              <p className="text-white/70 text-sm font-medium">Inter-school competitions, annual sports days, and regular coaching sessions.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl text-navy flex-1 flex flex-col justify-center border border-navy/5">
              <Medal className="text-blue mb-4" size={32} />
              <h4 className="font-bold text-xl mb-2">Student Achievements</h4>
              <p className="text-navy/70 text-sm font-medium">District/state level participations and national level representation.</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {sportsList.map((sport, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group border border-navy/5">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">{sport.icon}</div>
              <h3 className="font-bold text-navy mb-1">{sport.name}</h3>
              <p className="text-xs text-navy/50 font-bold uppercase tracking-wider">{sport.category}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
