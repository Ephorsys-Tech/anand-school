'use client';
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Eligibility() {
  const criteria = [
    {
      title: 'Socio-economic Condition',
      req: 'Underprivileged',
      desc: 'Priority is given to children from economically weaker families.',
      icon: '🏠',
    },
    {
      title: 'Admission Test',
      req: 'Satisfactory Score',
      desc: 'Result of the admission test determines readiness for the curriculum.',
      icon: '📝',
    },
    {
      title: 'Deprived Children',
      req: 'High Priority',
      desc: 'Priority given to deprived children (widow or divorced mother).',
      icon: '👩‍👧',
    },
    {
      title: 'Documentation',
      req: 'Required Documents',
      desc: 'Birth Certificate, Income Certificate, and Aadhar Card are required.',
      icon: '📋',
    },
  ];

  const classWise = [
    {
      label: 'KG – Class V',
      items: [
        'Age should be appropriate for the class applied',
        'Basic interaction to assess readiness',
        'Previous school report card (if any)',
      ],
    },
    {
      label: 'Class VI – Class VIII',
      items: [
        'Satisfactory academic performance',
        'Transfer Certificate required',
        'Written assessment in core subjects',
      ],
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
  };

  return (
    <section className="py-16 sm:py-20 bg-navy text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(30,80,160,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                Eligibility{' '}
                <span className="text-gold">Criteria</span>
              </h2>
              <p className="mt-3 text-white/70 text-base sm:text-lg max-w-xl">
                Basic requirements for admission to ensure every child is ready for our curriculum.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Criteria cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14"
        >
          {criteria.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative bg-white/[0.06] hover:bg-white/[0.11] border border-white/10 hover:border-gold/30 rounded-2xl p-6 transition-colors duration-200 flex flex-col gap-4"
            >
              {/* Icon badge */}
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                {item.icon}
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold text-white leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                  {item.req}
                </p>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Bottom check mark accent */}
              <div className="flex justify-end">
                <CheckCircle2
                  size={20}
                  className="text-gold/50 group-hover:text-gold transition-colors duration-200"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Class-wise requirements ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.07] backdrop-blur-md overflow-hidden"
        >
          {/* Header strip */}
          <div className="px-6 sm:px-10 py-5 border-b border-white/10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-gold">
              Class-Wise Requirements
            </h3>
          </div>

          {/* Two-column on md+, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {classWise.map((group, i) => (
              <div key={i} className="px-6 sm:px-10 py-8">
                <h4 className="font-bold text-base sm:text-lg text-white mb-5 pb-4 border-b border-white/10">
                  {group.label}
                </h4>
                <ul className="space-y-4">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-0.5 text-gold text-lg leading-none flex-shrink-0">✓</span>
                      <span className="text-white/85 text-sm sm:text-base leading-snug font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}