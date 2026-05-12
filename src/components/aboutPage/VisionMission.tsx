'use client';
import { Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-accent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-navy/5 max-w-xl mx-auto"
          >
            <div className="absolute -right-16 -top-16 w-40 h-40 sm:w-52 sm:h-52 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-navy to-blue rounded-xl flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-110 transition-transform duration-500">
                <Eye size={28} />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black text-navy mb-4">
                Our Vision
              </h3>

              <p className="text-navy/70 leading-relaxed text-sm sm:text-base font-medium">
                By providing quality education, we hope to create a poverty free education society for the future generation.
              </p>

            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-navy p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden max-w-xl mx-auto"
          >
            <div className="absolute -left-16 -bottom-16 w-40 h-40 sm:w-52 sm:h-52 bg-blue/20 rounded-full blur-3xl group-hover:bg-blue/30 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-gold to-blue rounded-xl flex items-center justify-center text-navy mb-5 shadow-md group-hover:scale-110 transition-transform duration-500">
                <Target size={28} />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4">
                Our Mission
              </h3>

              <p className="text-white/80 leading-relaxed text-sm sm:text-base font-medium">
                To fulfill our vision, Ananda School provides free education and learning resources to underprivileged children with proper guidance and awareness.
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}