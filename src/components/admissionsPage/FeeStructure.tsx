'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle2 } from 'lucide-react';

export default function FeeStructure() {
  const feeStructure = [
    { class: 'Admission Fee', tuition: '₹ 700', period: 'New students (once in a year)' },
    { class: 'Session Fee', tuition: '₹ 450', period: 'Class I to VIII (once in a year)' },
    { class: 'Participation Fee', tuition: '₹ 80', period: 'Class KG to IV' },
    { class: 'Participation Fee', tuition: '₹ 125', period: 'Class V to VIII (with Computer)' }
  ];

  return (
    <section className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue/5 via-cream to-cream pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue shadow-lg">
                <CreditCard size={40} />
              </div>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-6">
              Fee <span className="text-gradient-blue">Structure</span>
            </h2>
            <p className="text-navy/70 max-w-2xl mx-auto text-lg font-medium">
              Quality education at affordable prices, fully supported by Usthi Foundation India.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {feeStructure.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-navy/5 text-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue to-gold opacity-50 group-hover:opacity-100 transition-opacity"></div>
               <h3 className="font-heading text-xl font-black text-navy mb-4">{item.class}</h3>
              <div className="text-3xl font-black text-blue mb-4">{item.tuition}</div>
              <div className="bg-accent rounded-xl p-4">
                <p className="text-navy/70 text-sm font-medium">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden border border-white/10"
        >
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <h3 className="font-heading text-3xl md:text-4xl font-black text-gold mb-12 text-center relative z-10">Fee Breakdown & Benefits</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h4 className="font-bold text-2xl text-white mb-8 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">📋</span> 
                What's Included
              </h4>
              <ul className="space-y-4">
                {['Tuition and academic classes', 'Mid-day nutritious meals', 'School uniforms (2-3 sets)', 'Books and study materials', 'Laboratory facilities', 'Sports activities'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-gold" size={24} />
                    <span className="text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-2xl text-white mb-8 flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">💰</span> 
                Special Provisions
              </h4>
              <ul className="space-y-4">
                {['Sibling discount of 10% available', 'Scholarship for merit students', 'Financial aid for underprivileged', 'Payment plans available', 'Flexible payment options', 'One-time admission fee'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-blue" size={24} />
                    <span className="text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-navy/80 text-lg font-medium leading-relaxed">
            No child is turned away due to inability to pay. Contact the office for scholarship and financial assistance programs.
          </p>
        </div>

      </div>
    </section>
  );
}
