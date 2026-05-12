'use client';

import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  GraduationCap,
  Monitor,
  User,
} from 'lucide-react';

export default function TeachersPage() {
  const teachers = [
    {
      id: 1,
      name: 'Sutapa Bhoumik',
      designation: 'Headmistress',
      icon: <GraduationCap size={26} />,
    },
    {
      id: 2,
      name: 'Madhusudon Naskar',
      designation: 'Asst. Teacher',
      icon: <BookOpen size={26} />,
    },
    {
      id: 3,
      name: 'Nanda Sardar',
      designation: 'Asst. Teacher',
      icon: <BookOpen size={26} />,
    },
    {
      id: 4,
      name: 'Suparna Koli',
      designation: 'Asst. Teacher',
      icon: <BookOpen size={26} />,
    },
    {
      id: 5,
      name: 'Jannatul Molla',
      designation: 'Asst. Teacher',
      icon: <BookOpen size={26} />,
    },
    {
      id: 6,
      name: 'Soumali Basu',
      designation: 'Asst. Teacher',
      icon: <BookOpen size={26} />,
    },
    {
      id: 7,
      name: 'Sabina Yasmin',
      designation: 'Asst. Teacher',
      icon: <BookOpen size={26} />,
    },
    {
      id: 8,
      name: 'Joyshree Sardar',
      designation: 'Asst. Teacher',
      icon: <BookOpen size={26} />,
    },
    {
      id: 9,
      name: 'Suparna Ghosh',
      designation: 'Asst. Teacher',
      icon: <BookOpen size={26} />,
    },
    {
      id: 10,
      name: 'Palan Chandra Naskar',
      designation: 'Computer Teacher',
      icon: <Monitor size={26} />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-cream min-h-screen">
      {/* HERO */}
      <section className="py-20 bg-navy text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading">
          Our <span className="text-gold">Teachers</span>
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
          Dedicated educators guiding every subject with care, creativity, and
          passion.
        </p>
      </section>

      {/* TEACHERS GRID */}
      <section className="py-16 sm:py-20 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                variants={item}
                className={`rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-navy/10 flex flex-col justify-between min-h-55
                ${
                  index === 0
                    ? 'bg-navy text-white sm:col-span-2'
                    : 'bg-white text-navy'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`p-3 rounded-lg ${
                      index === 0
                        ? 'bg-white/10 text-gold'
                        : 'bg-blue/10 text-blue'
                    }`}
                  >
                    {teacher.icon}
                  </div>
                  <span
                    className={`text-xs font-bold tracking-widest ${
                      index === 0 ? 'text-gold' : 'text-blue'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl sm:text-2xl font-black font-heading">
                    {teacher.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm sm:text-base leading-relaxed ${
                      index === 0 ? 'text-white/80' : 'text-navy/70'
                    }`}
                  >
                    {teacher.designation}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-10 border border-navy/10">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="p-4 bg-blue/10 rounded-lg text-blue">
              <Award size={36} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-navy">
                Teacher Excellence Program
              </h3>
              <p className="mt-3 text-navy/70 text-sm sm:text-base">
                Continuous training, workshops, and modern teaching practices
                ensure our teachers deliver the best learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
