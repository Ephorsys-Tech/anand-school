'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users } from 'lucide-react';

export default function Eligibility() {
  const criteria = [
    { title: 'Socio-economic Condition', req: 'Underprivileged', desc: 'Priority is given to children from economically weaker families.' },
    { title: 'Admission Test', req: 'Satisfactory Score', desc: 'Result of the admission test determines readiness.' },
    { title: 'Deprived Children', req: 'High Priority', desc: 'Priority given to deprived children (widow or divorce mother).' },
    { title: 'Documentation', req: 'Required Documents', desc: 'Birth Certificate, Income Certificate, and Aadhar Card are required.' }
  ];

  return (
    <section className="py-4 bg-navy text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue/10 diagonal-cut-bottom pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:self-start sticky top-0"
          >
           
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight mt-4">
              Eligibility <span className="text-gold">Criteria</span>
            </h2>
            <p className="text-white/80 text-lg font-medium">
              Basic requirements for admission to ensure every child is ready for our curriculum.
            </p>
            
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white/10 hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
                alt="Students" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {criteria.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="flex items-start gap-4 mb-4">
                    <CheckCircle2 className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform" size={28} />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-blue font-bold text-sm uppercase tracking-wider">{item.req}</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm font-medium pl-11">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-10 md:p-12 border border-white/20">
              <h3 className="font-heading text-3xl font-bold text-gold mb-8 text-center">Class-Wise Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-bold text-xl text-white mb-6 border-b border-white/10 pb-4">KG to Class V</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3"><span className="text-gold">✓</span><span className="text-white/90 font-medium">Age should be appropriate for class</span></li>
                    <li className="flex items-start gap-3"><span className="text-gold">✓</span><span className="text-white/90 font-medium">Basic interaction to assess readiness</span></li>
                    <li className="flex items-start gap-3"><span className="text-gold">✓</span><span className="text-white/90 font-medium">Previous school report card (if any)</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-6 border-b border-white/10 pb-4">Class VI to VIII</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3"><span className="text-gold">✓</span><span className="text-white/90 font-medium">Satisfactory academic performance</span></li>
                    <li className="flex items-start gap-3"><span className="text-gold">✓</span><span className="text-white/90 font-medium">Transfer Certificate required</span></li>
                    <li className="flex items-start gap-3"><span className="text-gold">✓</span><span className="text-white/90 font-medium">Written assessment in core subjects</span></li>
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
