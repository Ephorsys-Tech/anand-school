import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-20">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-mesh opacity-60"></div>

      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full border-2 border-gold/30 animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-amber/20 rounded-full blur-xl animate-[float_6s_ease-in-out_3s_infinite]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-blue/20 rotate-45 animate-[float_8s_ease-in-out_1s_infinite] backdrop-blur-sm"></div>
      
      {/* Geometry Element */}
      <div className="absolute top-[20%] right-[10%] opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-[float_7s_translateY_20px_infinite_alternate]">
          <path d="M100 0 L200 200 L0 200 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
          <span className="inline-block py-1 px-3 rounded-full border border-gold/40 text-gold font-semibold text-sm tracking-widest mb-6">
            USTHI FOUNDATION INDIA
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-6 leading-tight tracking-tighter">
            Elevate Your <br />
            <span className="text-gradient-gold">Potential</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-navy/80 mb-10 font-medium leading-relaxed">
            Usthi Foundation India • Ananda School, Kolkata. Nurturing minds with holistic education, modern facilities, and a visionary approach to shape tomorrow's leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/admissions" 
              className="bg-navy text-cream px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gold hover:text-navy transition-all duration-300 shadow-[0_0_20px_rgba(200,153,42,0.3)] hover:scale-105"
            >
              Enroll Now <ArrowRight size={20} />
            </Link>
            <Link 
              href="/about" 
              className="glass px-8 py-4 rounded-full font-semibold text-navy hover:bg-navy hover:text-cream transition-all duration-300 hover:scale-105"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-navy/30 flex justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
