// src/components/sections/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import GradientText from "../ui/GradientText";
import TypingText from "../ui/TypingText";

const greetings = [
  { text: "안녕하세요", lang: "ko" },
  { text: "नमस्ते", lang: "hi" },
  { text: "Hola", lang: "es" },
  { text: "Bonjour", lang: "fr" },
  { text: "Ciao", lang: "it" },
  { text: "Hello", lang: "en" },
  { text: "నమస్కారం", lang: "te" },
  { text: "வணக்கம்", lang: "ta" },
];

// ---- Entrance orchestration (same easing family as Intro) ----
const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.1 },
  },
};

// Add this near your other variants
const maskReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// pinned "&" — from the right, mirrors NAMASTE in Intro
const fromRight: Variants = {
  hidden: { x: "35%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

// pinned "HERE / PRODUCT DESIGNER" — from the left, mirrors rest of Intro
const fromLeft: Variants = {
  hidden: { x: "-35%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

// Letter-mask reveal for the main title — same technique as the Intro role cycler
const titleLetterContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
};

const titleLetter: Variants = {
  hidden: { y: "100%", opacity: 0, filter: "blur(14px)" },
  visible: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

const socialContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
};

function AnimatedTitle({ text }: { text: string }) {
  return (
    <div className="overflow-hidden">
      <motion.h1
        variants={titleLetterContainer}
        className="flex font-nightwatch text-gold-radial-figma text-[10vw] lg:text-[11vw] leading-none tracking-[-0.04em] pr-4 whitespace-nowrap"
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={titleLetter}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isLocHovered, setIsLocHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(formatter.format(now).replace(" ", ""));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-[80vh] flex flex-col justify-center items-center"
    >
      {/* --- CENTER: Name & Pinned Annotations --- */}
      <div className="relative w-fit max-w-full flex flex-col justify-center">
        {/* Top Left Pinned: Greeting */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-full left-0 mb-2 md:mb-0 h-5 md:h-6 w-24 overflow-hidden font-brand text-[#FFD100]/80 text-[10px] md:text-xs tracking-[0.2em]"
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={greetingIndex}
              lang={greetings[greetingIndex].lang}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [20, -6, 0], opacity: [0, 1, 1] }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                duration: 0.6,
                times: [0, 0.6, 1],
                ease: ["easeOut", "easeIn"],
              }}
              className={`text-gold-radial-figma absolute top-0 left-0 leading-normal leading-[21px] tracking-normal font-brand text-[12px] leading-[17px]
    sm:text-[13px] sm:leading-[18px]
    md:text-[14px] md:leading-[19px]
    lg:text-[15px] lg:leading-[20px]
    xl:text-[16px] xl:leading-[21px]`}
            >
              {greetings[greetingIndex].text}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main Title: Name — letter-mask reveal */}
        <AnimatedTitle text="VINAY SREEYAPU" />

        {/* Bottom Right Pinned: Ampersand — from the right */}
        <motion.div
          variants={fromRight}
          className="absolute text-gold-radial-figma top-full right-1 -mt-1 md:-mt-2 font-brand 
    text-[12px] leading-[17px]
    sm:text-[15px] sm:leading-[20px]
    md:text-[16px] md:leading-[21px]
    lg:text-[17px] lg:leading-[22px]
    xl:text-[18px] xl:leading-[23px]"
        >
          &
        </motion.div>

        {/* Bottom Left Pinned: Title — from the left */}
        {/* Bottom Left Pinned: Title — vertical mask reveal, no side slide */}
        <div
          className="
    absolute
    text-gold-radial-figma
    top-full
    left-1
    -mt-1
    md:-mt-2
    flex
    flex-col
    items-start
    font-brand
    uppercase
    tracking-normal

    text-[11px] leading-[16px]
          sm:text-[13px] sm:leading-[19px]
          md:text-[14px] md:leading-[20px]
          lg:text-[15px] lg:leading-[21px]
          xl:text-[16px] xl:leading-[22px]
  "
        >
          <div className="overflow-hidden">
            <motion.span variants={maskReveal} className="block">
              HERE
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={maskReveal} className="block">
              <span>I&apos;M A PRODUCT DESIGNER </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- FAR BOTTOM LEFT: Hoverable Location & Time --- */}
      <motion.div
        variants={fadeUp}
        className="absolute bottom-8 left-6 md:left-12 font-brand text-[#FFD100]/70 text-[10px] md:text-xs tracking-[0.2em] cursor-pointer group"
        onMouseEnter={() => setIsLocHovered(true)}
        onMouseLeave={() => setIsLocHovered(false)}
      >
        <div className="relative h-10 flex flex-col justify-end">
          <AnimatePresence mode="wait">
            {!isLocHovered ? (
              <motion.div
                key="coords"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-gold-radial-figma font-brand  
                tracking-normal 
                text-[11px] leading-[16px]
          sm:text-[13px] sm:leading-[19px]
          md:text-[14px] md:leading-[20px]
          lg:text-[15px] lg:leading-[21px]
          xl:text-[16px] xl:leading-[22px]
                flex flex-col gap-1"
              >
                <span>17°23&apos;N</span>
                <span>78°29&apos;E</span>
              </motion.div>
            ) : (
              <motion.div
                key="time"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-gold-radial-figma font-brand flex flex-col gap-1 
                tracking-normal text-[11px] leading-[16px]
          sm:text-[13px] sm:leading-[19px]
          md:text-[14px] md:leading-[20px]
          lg:text-[15px] lg:leading-[21px]
          xl:text-[16px] xl:leading-[22px]"
              >
                <TypingText
                  key={`city-${isLocHovered}`}
                  text="HYDERABAD"
                  speed={40}
                  className="text-gold-radial-figma"
                />

                <TypingText
                  key={`time-${currentTime}-${isLocHovered}`}
                  text={`IST ${currentTime}`}
                  speed={40}
                  delay={500}
                  className="text-gold-radial-figma"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* --- FAR BOTTOM RIGHT: Social Links --- */}
      <motion.div
        variants={socialContainer}
        className="absolute bottom-8 right-6 md:right-12 flex flex-col items-end gap-2.5 font-brand text-[#FFD100]/70 text-[10px] md:text-xs tracking-[0.2em] uppercase"
      >
        <motion.div variants={fadeUp}>
          <GradientText href="https://www.behance.net/vinayrsreeyap">
            Behance
          </GradientText>
        </motion.div>
        <motion.div variants={fadeUp}>
          <GradientText href="https://www.linkedin.com/in/vinayreddysr">
            LINKEDIN
          </GradientText>
        </motion.div>
        <motion.div variants={fadeUp}>
          <GradientText href="https://www.instagram.com/sreeyapu_vinayreddy">
            INSTAGRAM
          </GradientText>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
