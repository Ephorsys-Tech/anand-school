"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";


const AUTO_PLAY = 7000;
const BOX_COUNT = 12;


type Slide = {
  img: string;
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
    heading: "Empower",
    highlight: "Every Child",
    tail: "With Education",
    subtext:
      "Providing proper education to children from economically weaker families since 1987.",
    button: "Learn More",
    link: "/aboutus",
  },
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80",
    heading: "Learn",
    highlight: "Grow",
    tail: "Lead",
    subtext:
      "Ananda School focuses on basic literacy, community involvement, and life skills.",
    button: "Our Academics",
    link: "/academics",
  },
  {
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80",
    heading: "Vision",
    highlight: "& Mission",
    tail: "For Future",
    subtext:
      "Creating a poverty free education society for the future generation.",
    button: "Admissions",
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
            <motion.h1
              variants={textItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase"
            >
              {slide.heading}{" "}
              <span className="text-blue">{slide.highlight}</span>
            </motion.h1>

            <motion.h2
              variants={textItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase mt-2"
            >
              {slide.tail}
            </motion.h2>

            <motion.p
              variants={textItem}
              className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
            >
              {slide.subtext}
            </motion.p>
            <motion.button
              onClick={() => router.push(slide.link)}
              className="inline-block bg-blue hover:bg-[#0c7a9e] transition text-white font-semibold uppercase tracking-widest px-5 py-2 mt-5 rounded-xl shadow-lg"
            >
              {slide.button}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}