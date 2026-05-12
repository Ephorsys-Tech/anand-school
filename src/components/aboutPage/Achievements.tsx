'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, BookOpen, Heart, Trophy, Users, Zap, GraduationCap, Utensils, Shirt, Monitor } from 'lucide-react';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('all');

  const milestones = [
    {
      year: '1987',
      title: 'Foundation',
      desc: 'Ananda School was set up in village areas to provide proper education to children from economically weaker families.',
      icon: <Heart size={22} />,
      color: '#e05c5c',
    },
    {
      year: '2000s',
      title: 'State Board Curriculum',
      desc: 'Following the State Board (W.B.) curriculum, providing mid-day meals, uniforms, study materials, and other essentials — all completely free.',
      icon: <BookOpen size={22} />,
      color: '#4a90d9',
    },
    {
      year: '2020',
      title: 'Graduate Success',
      desc: 'Our school has produced graduates who have secured employment opportunities in various sectors, achieving a decent standard of living.',
      icon: <GraduationCap size={22} />,
      color: '#d4a017',
    },
    {
      year: '2025',
      title: '39 Years of Impact',
      desc: 'Continuing to provide quality life to rural children and establishing them in various aspects.',
      icon: <Award size={22} />,
      color: '#2ecc71',
    },
  ];

  const studentAchievements = [
    {
      category: 'Debate',
      tag: 'academic',
      title: 'Global Warming Debate',
      details: 'Held at Puri — students from Class VI, VII & VIII participated in deliberations and were awarded a Certificate of Merit.',
      icon: '🎤',
      highlight: false,
    },
    {
      category: 'Arts',
      tag: 'academic',
      title: 'District Drawing Competition',
      details: 'Held in the school campus, attended by students from lower to higher classes in large numbers. Top honours at the district level.',
      icon: '🎨',
      highlight: false,
    },
    {
      category: 'Softball',
      tag: 'sports',
      title: 'District → State Selection',
      details: '5 students were selected in the district-level tournament to join the state event.',
      icon: '⚾',
      highlight: false,
    },
    {
      category: 'Gymnastics',
      tag: 'sports',
      title: 'State Competition',
      details: 'Sri S. Lalit Kumar Reddy of Std. VII was selected at the district-level tournament to participate at the state-level gymnastics competition.',
      icon: '🤸',
      highlight: false,
    },
    {
      category: 'Boxing',
      tag: 'sports',
      title: 'Inter-School Block Level',
      details: 'Two students from Std. VI & VII represented the school in the inter-school block-level boxing competition.',
      icon: '🥊',
      highlight: false,
    },
    {
      category: 'Javelin Throw',
      tag: 'sports',
      title: 'Inter-School Block Level',
      details: 'One student from Std. VI participated in the inter-school block-level Javelin Throw competition.',
      icon: '🏹',
      highlight: false,
    },
    {
      category: 'Yoga',
      tag: 'sports',
      title: '🏆 Khelo India — National Level',
      details: 'Sri S. Lalit Kumar Reddy from Std. VII was selected to participate in the National Level Competition: Khelo India at New Delhi, 14–20 December 2023. Additionally, one girl student from Std. II participated at the District level under this category.',
      icon: '🧘',
      highlight: true,
    },
  ];

  const initiatives = [
    {
      icon: <Zap size={32} />,
      title: 'Holistic Education',
      desc: 'Comprehensive education focusing on academic excellence and personality development for every child.',
    },
    {
      icon: <Users size={32} />,
      title: 'Community Focus',
      desc: 'Serving underprivileged children with special focus on the fishermen community of Penthakata village.',
    },
    {
      icon: <Utensils size={32} />,
      title: 'Mid-Day Meals',
      desc: 'Nutritious mid-day meals provided daily, ensuring no child studies on an empty stomach.',
    },
    {
      icon: <Shirt size={32} />,
      title: 'Free Essentials',
      desc: 'Uniforms, study materials, and other essentials provided completely free to every enrolled student.',
    },
    {
      icon: <Monitor size={32} />,
      title: 'Vocational Training',
      desc: 'Tailoring & computer education equip students with skills for a sustainable and dignified livelihood.',
    },
    {
      icon: <Trophy size={32} />,
      title: 'Skill Development',
      desc: 'Creating a demographic dividend through a vibrant academic and vocational environment since 1992.',
    },
  ];

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'sports', label: '🏃 Sports' },
    { id: 'academic', label: '📚 Academic' },
  ];

  const filtered = activeTab === 'all' ? studentAchievements : studentAchievements.filter(a => a.tag === activeTab);

  return (
    <section className="bg-cream text-navy py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(74,144,217,0.06) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(212,160,23,0.06) 0%, transparent 50%)',
        }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-navy text-gold text-xs font-bold tracking-widest uppercase px-5 py-1.5 rounded-sm mb-5 font-sans">
            Ananda School · Est. 1987
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-navy mb-4 leading-tight">
            Milestones &amp;{' '}
            <span className="text-gradient-blue">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto leading-relaxed font-medium italic">
            As an NGO, Ananda School has made significant achievements in improving society of the surrounding village area by providing basic needs and education to the underprivileged community for the last 39 years.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="mb-20">
          <SectionLabel>Journey Since 1992</SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-navy/5 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute top-0 inset-x-0 h-1" style={{ background: m.color }} />
                <div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" 
                  style={{ background: `${m.color}18`, color: m.color }}
                >
                  {m.icon}
                </div>
                <span className="text-sm font-bold tracking-wider font-sans" style={{ color: m.color }}>
                  {m.year}
                </span>
                <h3 className="text-xl font-bold text-navy mt-1 mb-2">{m.title}</h3>
                <p className="text-sm text-navy/70 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Student Achievements ── */}
        <div className="mb-20">
          <SectionLabel>Student Spotlight</SectionLabel>

          {/* Tabs */}
          <div className="flex gap-2 mt-6 mb-8 flex-wrap justify-center">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-navy text-white shadow-md'
                    : 'bg-white text-navy/70 border border-navy/10 hover:bg-navy/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <motion.div
                key={`${a.category}-${a.title}`}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  a.highlight
                    ? 'bg-linear-to-br from-navy to-blue text-white border-none shadow-lg shadow-navy/20'
                    : 'bg-white text-navy border-navy/5 shadow-sm hover:shadow-md'
                }`}
              >
                <span className="text-4xl block mb-4">{a.icon}</span>
                <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase mb-3 ${
                  a.highlight
                    ? 'bg-white/15 text-gold'
                    : 'bg-navy/5 text-blue'
                }`}>
                  {a.category}
                </span>
                <h4 className="text-xl font-bold mb-2 leading-tight">{a.title}</h4>
                <p className={`text-sm leading-relaxed ${
                  a.highlight ? 'text-white/80' : 'text-navy/70'
                }`}>
                  {a.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Initiatives ── */}
        <div>
          <SectionLabel>How We Make a Difference</SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {initiatives.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-navy/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-navy to-blue rounded-xl flex items-center justify-center text-gold">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1 text-navy">{item.title}</h4>
                  <p className="text-sm text-navy/70 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Footer quote ── */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20 p-10 bg-linear-to-br from-navy to-blue rounded-3xl text-white shadow-xl shadow-navy/20"
        >
          <p className="text-xl md:text-2xl font-medium italic leading-relaxed mb-4 text-white/90">
            "It is believed that each child is unique and has inherent potential to develop his or her personality."
          </p>
          <span className="text-xs font-bold tracking-widest uppercase text-gold font-sans">
            — Penthakata Project School
          </span>
        </motion.blockquote>

      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-px bg-navy/10" />
      <h3 className="text-xs font-bold tracking-widest uppercase text-blue whitespace-nowrap font-sans">
        {children}
      </h3>
      <div className="flex-1 h-px bg-navy/10" />
    </div>
  );
}