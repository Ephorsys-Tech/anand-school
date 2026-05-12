'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function ChairmanMessage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-navy text-white relative overflow-hidden">
      
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue/10 diagonal-cut-bottom pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            
            <div>
              <span className="text-blue bg-blue/10 rounded-xl px-2 py-1 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2 inline-block">
                Visionary Leadership
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                Message from the <br/>
                <span className="text-gold">Chairman</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed relative font-medium">
              
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-white/5 -z-10 rotate-180" fill="currentColor" />

              <p>
                At Usthi Foundation India, we believe that quality education is the cornerstone of societal transformation. Ananda School exemplifies our commitment to creating inclusive, holistic learning experiences.
              </p>

              <p>
                Our vision extends beyond academic excellence. We are committed to developing young minds that are not only intellectually sharp but also morally upright and socially conscious.
              </p>

              <p>
                I am proud of the progress we have made and look forward to a future where every child in our community has access to quality education and opportunities.
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                  Mr. Rajesh Verma
                </h4>
                <p className="text-gold font-semibold tracking-wide text-xs uppercase mt-1">
                  Chairman, Usthi Foundation India
                </p>
              </div>
            </div>

          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 sm:border-4 border-gold translate-x-4 -translate-y-4 rounded-3xl -z-10"></div>

            <div className="bg-navy/50 rounded-3xl overflow-hidden aspect-4/5 p-2 shadow-xl backdrop-blur-lg border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                alt="Chairman" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}