"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative py-20 md:py-24 bg-navy text-cream diagonal-cut-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 animate-fade-up">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              A Legacy of <br />
              <span className="text-gold">Excellence</span>
            </h2>

            <p className="text-cream/80 text-base sm:text-lg leading-relaxed">
              Founded under the aegis of Usthi Foundation India, Ananda School
              provides proper education to children from economically weaker families.
              We focus on basic literacy, community involvement, and character building.
            </p>

            <ul className="space-y-3">
              {[
                "Basic Literacy & Life Skills",
                "Community Involvement",
                "Character Building",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber"></div>
                  <span className="font-semibold text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/aboutus"
              className="inline-block mt-4 text-gold border-b-2 border-gold pb-1 hover:text-amber hover:border-amber transition duration-300 font-bold uppercase tracking-wide text-sm sm:text-base"
            >
              Discover Our Vision
            </Link>
          </div>

          <div className="relative w-full">
            
            <div className="relative w-full h-65 sm:h-80 md:h-100 lg:h-112.5 rounded-2xl overflow-hidden shadow-xl">
              
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                alt="School"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative Border */}
            <div className="absolute -inset-3 sm:-inset-4 border border-gold/20 rounded-2xl rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}