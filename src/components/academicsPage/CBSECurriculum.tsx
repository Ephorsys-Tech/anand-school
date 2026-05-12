'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, BookOpen, Layers } from 'lucide-react';

export default function CBSECurriculum() {
  const features = [
    { icon: <Target size={32} />, title: 'State Board Framework', desc: 'Following the West Bengal State Board curriculum.' },
    { icon: <Award size={32} />, title: 'Recognized Education', desc: 'Ensuring recognized certificates and seamless transitions.' },
    { icon: <Layers size={32} />, title: 'Holistic Development', desc: 'Beyond academics - emphasis on co-curricular activities and sports.' },
    { icon: <BookOpen size={32} />, title: 'Skill Development', desc: 'Curriculum designed to prepare students for practical life skills.' }
  ];

  const methodology = [
    'Experiential Learning: Moving beyond rote learning',
    'Interactive Classrooms: Utilizing digital content',
    'Continuous Evaluation: Formative assessments',
    'Student-Centric Approach: Personalized paths',
  ];

  return (
    <section className="py-28 bg-navy text-white relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/2 h-full bg-blue/10 diagonal-cut-bottom pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-blue bg-blue/10 rounded-2xl px-2 py-1 font-bold uppercase tracking-widest text-sm mb-2">Academic Standards</span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                State Board <span className="text-gold">(W.B.)</span>
              </h2>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed font-medium">
              Our education follows the West Bengal State Board standards with modern teaching methodologies. We ensure that our students are equipped with knowledge that transcends textbooks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {features.map((feat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="text-gold mb-4 group-hover:scale-110 transition-transform inline-block">{feat.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{feat.title}</h3>
                  <p className="text-white/60 text-sm">{feat.desc}</p>
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
            <div className="absolute inset-0 border-4 border-gold translate-x-6 translate-y-6 rounded-[3rem] -z-10"></div>
            <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
              <img 
                src="images/ncert.webp" 
                alt="Classroom learning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
                  <h3 className="font-heading text-2xl font-bold text-gold mb-4">Teaching Methodology</h3>
                  <ul className="space-y-3">
                    {methodology.map((m, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                        <span className="text-white/90 text-sm font-medium">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
