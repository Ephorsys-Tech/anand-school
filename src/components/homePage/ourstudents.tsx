"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon, Trophy, TrophyIcon, Users } from "lucide-react";

export default function Students() {
  const students = [
    {
      id: 1,
      name: "Riya Das",
      class: "Class 8",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800",
      highlight: "Debate Champion",
      Icon: TrophyIcon,
    },
    {
      id: 2,
      name: "Aman Behera",
      class: "Class 8",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800",
      highlight: "Football Team Captain",
      Icon: TrophyIcon,
    },
    {
      id: 3,
      name: "Sanjana Rout",
      class: "Class 7",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800",
      highlight: "Art & Painting",
      Icon: TrophyIcon,
    },
    {
      id: 4,
      name: "Rahul Sahu",
      class: "Class 6",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800",
      highlight: "Science Fair Winner",
      Icon: TrophyIcon,
    },
  ];

  return (
    <section className="pt-15 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mt-4">
            Bright <span className="text-gradient-blue">Young Minds</span>
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto text-lg mt-4">
            Our students shine in academics, sports, and creative fields,
            building confidence and leadership for the future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {students.map((student) => (
            <motion.div
              key={student.id}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-4/5 shadow-xl">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-transparent to-transparent"></div>

                {/* Highlight */}
                <div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 shadow-md"
                >
                  <div className="flex items-center gap-2 text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">
                    <span>{student.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center mt-4">
                <h3 className="font-heading text-xl font-bold text-navy">
                  {student.name}
                </h3>
                <p className="text-blue text-sm font-semibold uppercase tracking-wider">
                  {student.class}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight Section */}
        <div className="mt-12 bg-white rounded-3xl p-10 text-center shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue/10 flex items-center justify-center rounded-xl">
              <Users className="text-blue" size={30} />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-navy mb-4">
            Student Growth & Activities
          </h3>

          <p className="text-navy/70 max-w-2xl mx-auto">
            Our students actively participate in sports, arts, debates, and
            national-level programs, helping them grow with confidence,
            creativity, and leadership skills.
          </p>
        </div>
      </div>
    </section>
  );
}
