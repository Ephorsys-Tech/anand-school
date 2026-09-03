"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";


const AUTO_PLAY = 7000;
const BOX_COUNT = 12;


type Slide = {
  img: string;
  badge: string;
  heading: string;
  highlight: string;
  tail: string;
  subtext: string;
  button: string;
  link: string;
};


const slides: Slide[] = [
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80",
    badge: "Usthi Foundation India • Kolkata",
    heading: "Welcome To",
    highlight: "Ananda School",
    tail: "Kolkata",
    subtext:
      "Established under the aegis of Usthi Foundation India, Ananda School empowers children from economically weaker families with quality holistic education, literacy, and bright futures since 1987.",
    button: "Discover Our Story",
    link: "/aboutus",
  },
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80",
    badge: "Usthi Foundation Initiative",
    heading: "Nurturing Minds At",
    highlight: "Ananda School",
    tail: "Transforming Lives",
    subtext:
      "Backed by Usthi Foundation, Ananda School (Kolkata) provides basic literacy, life skills, nutritious meals, and values in an inclusive learning environment.",
    button: "Our Academics",
    link: "/academics",
  },
  {
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80",
    badge: "Building Tomorrow's Leaders",
    heading: "Empowering The Future",
    highlight: "At Ananda School",
    tail: "Usthi Foundation",
    subtext:
      "Creating a poverty-free society through accessible, empowering education for rural and village children across the Kolkata region.",
    button: "Admissions Open",
    link: "/admissions",
  },
];

/* ===================== IMAGE VARIANTS ===================== */

const imageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.12,
    filter: "brightness(0.6)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "brightness(1)",
    transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    filter: "brightness(0.5)",
    transition: { duration: 0.7 },
  },
};

/* ===================== BOX REVEAL ===================== */

const boxVariants: Variants = {
  hidden: { opacity: 1, scaleY: 1 },
  visible: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.9, ease: [0.42, 0, 0.58, 1] }, // FIXED
  },
};

function BoxRevealOverlay({ active }: { active: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 z-20 grid grid-cols-4 grid-rows-3"
      initial="hidden"
      animate={active ? "visible" : "hidden"}
    >
      {Array.from({ length: BOX_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          variants={boxVariants}
          transition={{ delay: i * 0.08 }}
          className="bg-black/70 origin-bottom"
        />
      ))}
    </motion.div>
  );
}

/* ===================== TEXT ANIMATION ===================== */

const textContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] }, // FIXED
  },
};

/* ===================== MAIN COMPONENT ===================== */

export default function HeroSection() {
  const [current, setCurrent] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* IMAGE */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slide.img}
            alt="hero"
            className="w-full h-full object-cover"
            draggable={false}
          />

          <BoxRevealOverlay active />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={textContainer}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-4xl text-white"
          >
            {/* BADGE HIGHLIGHT */}
            <motion.div
              variants={textItem}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/60 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-gold shadow-lg backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span>{slide.badge}</span>
            </motion.div>

            <motion.h1
              variants={textItem}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            >
              {slide.heading}{" "}
              <span className="text-gold">{slide.highlight}</span>
            </motion.h1>

            <motion.h2
              variants={textItem}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase mt-2 tracking-tight text-white/90"
            >
              {slide.tail}
            </motion.h2>

            <motion.p
              variants={textItem}
              className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              {slide.subtext}
            </motion.p>

            <motion.div
              variants={textItem}
              className="flex flex-wrap items-center justify-center gap-4 mt-8"
            >
              <button
                onClick={() => router.push(slide.link)}
                className="inline-flex items-center justify-center bg-gold hover:bg-amber transition-all duration-300 text-navy font-bold uppercase tracking-wider px-7 py-3 rounded-full shadow-lg hover:scale-105"
              >
                {slide.button}
              </button>
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center justify-center border border-white/30 hover:border-gold hover:text-gold bg-black/40 backdrop-blur-sm transition-all duration-300 text-white font-bold uppercase tracking-wider px-7 py-3 rounded-full shadow-lg hover:scale-105"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === idx
                ? "w-8 bg-gold"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}