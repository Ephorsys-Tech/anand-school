'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function PrincipalMessage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream relative overflow-hidden">
      
      <div className="absolute left-0 top-0 w-1/3 h-full bg-accent diagonal-cut-bottom -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1 relative max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 sm:border-4 border-blue translate-x-4 translate-y-4 rounded-3xl -z-10"></div>

            <div className="bg-white rounded-3xl overflow-hidden aspect-4/5 p-2 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop" 
                alt="Principal" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Quote Icon */}
            <div className="absolute top-6 -right-6 bg-white p-2 sm:p-3 rounded-full shadow-xl hidden sm:block">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue to-gold rounded-full flex items-center justify-center text-white">
                <Quote size={18} fill="currentColor" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2 space-y-6"
          >
            
            <div>
              <span className="text-blue bg-blue/10 rounded-xl px-2 py-1 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2 inline-block">
                Leadership
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-navy leading-tight">
                Message from the <br/>
                <span className="text-gradient-blue">Headmistress</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-navy/80 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                I am proud to say that over the last 39 years, our school’s activities have been going smoothly. There is a balance of academics, sports and co-curricular activities.
              </p>

              <p>
                Teacher’s dedication is also important criteria for mental and physical developments of the students as individuals. We have also focused on this.
              </p>

              <p>
                It is true that Ananda School has achieved success in this era by providing quality life to the rural children.
              </p>
            </div>
            
            <div className="pt-4 border-t border-navy/10 flex items-center gap-4">
              <div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-navy">
                  Sutapa Bhoumik
                </h4>
                <p className="text-blue font-semibold tracking-wide text-xs uppercase mt-1">
                  Headmistress, Ananda School (U.F.I.)
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}