'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function AcademicCalendar() {
  const calendarEvents = [
    { month: 'January', event: 'Academic Session Begins', details: 'New academic year commences' },
    { month: 'February - April', event: 'First Term', details: 'Regular classes and activities' },
    { month: 'May - June', event: 'Mid-Term Assessments', details: 'Examinations and progress reviews' },
    { month: 'July - September', event: 'Second Term', details: 'Regular classes and activities' },
    { month: 'October - November', event: 'Festivals & Activities', details: 'Cultural events and activities' },
    { month: 'December', event: 'Final Assessments', details: 'Completion of session and final evaluations' }
  ];

  return (
    <section className="py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:self-start sticky top-0"
          >
            <div className="w-20 h-20 bg-blue/10 rounded-2xl flex items-center justify-center text-blue mb-8">
              <Calendar size={40} />
            </div>
            <h2 className="font-heading text-5xl font-black text-navy mb-6 leading-tight">
              Academic <span className="text-gradient-blue">Calendar</span>
            </h2>
            <p className="text-navy/70 text-lg font-medium mb-8">
              Stay updated with our academic schedule (January to December). Total working days: ~255 days.
            </p>

            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-navy/5">
              <h3 className="font-heading text-xl font-black text-navy mb-6">Important Dates</h3>
              <div className="space-y-4">
                <div className="p-4 bg-accent rounded-xl">
                  <p className="text-blue font-bold text-sm uppercase tracking-wider mb-1">Admission Started</p>
                  <p className="text-navy font-medium">Till June End</p>
                </div>
                <div className="p-4 bg-accent rounded-xl">
                  <p className="text-blue font-bold text-sm uppercase tracking-wider mb-1">Summer Break</p>
                  <p className="text-navy font-medium">May - June</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] shadow-2xl mb-12 hidden md:block border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1200&auto=format&fit=crop" 
                alt="Calendar events" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {calendarEvents.map((event, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-navy/5 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center text-blue flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-gold font-black text-sm uppercase tracking-wider">{event.month}</p>
                      <h3 className="font-heading text-xl font-bold text-navy mt-1">{event.event}</h3>
                    </div>
                  </div>
                  <p className="text-navy/70 font-medium leading-relaxed">{event.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
