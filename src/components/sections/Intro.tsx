// src/components/sections/Intro.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const roles = [
  "UI UX DESIGNER",
  "PRODUCT DESIGNER",
  "VISUAL DESIGNER",
  "WEB DESIGNER",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

// Slides in from the right, visibly — used for NAMASTE
const revealFromRight: Variants = {
  hidden: { x: "45%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
  },
};

// Slides in from the left, visibly — used for the rest
const revealFromLeft: Variants = {
  hidden: { x: "-45%", opacity: 0 },
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
  },
};

const captionVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function RevealHeading({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
}) {
  return (
    <div className="overflow-hidden">
      <motion.h2
        variants={direction === "right" ? revealFromRight : revealFromLeft}
        className="font-nightwatch text-[clamp(2.25rem,8vw,150px)] leading-none text-gold-radial-figma tracking-tight whitespace-nowrap pt-2 sm:pt-3 md:pt-4"
      >
        {children}
      </motion.h2>
    </div>
  );
}

// Premium letter-mask reveal for the role cycler, with a sweeping accent underline
const letterContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.028, delayChildren: 0.02 },
  },
  exit: {
    transition: { staggerChildren: 0.016, staggerDirection: -1 },
  },
};

const letterVariants: Variants = {
  hidden: { y: "70%", opacity: 0, filter: "blur(8px)" },
  visible: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: "-70%",
    opacity: 0,
    filter: "blur(8px)",
    transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
  },
};

function AnimatedRole({ text }: { text: string }) {
  return (
    <motion.div
      key={text}
      variants={letterContainer}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute inset-0 flex flex-col items-end justify-center"
    >
      <div className="flex overflow-hidden">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            className="inline-block font-nightwatch text-[clamp(2.25rem,8vw,150px)] leading-none text-gold-radial-figma whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Sweeping accent underline, timed just behind the letters */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 1 }}
        className="h-[2px] w-full bg-gradient-to-l from-[#FFD100] to-transparent mt-2"
      />
    </motion.div>
  );
}

export default function Intro() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full min-h-fit md:min-h-screen flex flex-col justify-center px-6 md:px-16 py-16 sm:py-20 md:py-24 gap-5 sm:gap-6 md:gap-8"
    >
      {/* ROW 1: NAMASTE — from the right */}
      <div className="flex flex-col items-end w-full">
        <RevealHeading direction="right">NAMASTE</RevealHeading>
        <motion.span
          variants={captionVariants}
          className="font-brand text-[#FFD100]/60 text-[10px] leading-[17px]
    sm:text-[11px] sm:leading-[18px]
    md:text-[12px] md:leading-[19px]
    lg:text-[13px] lg:leading-[20px]
    xl:text-[14px] xl:leading-[21px] uppercase mt-2"
        >
          WE SAY IT HERE AS RESPECT
        </motion.span>
      </div>

      {/* ROW 2: I'M A INDIAN — from the left */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-8 w-full mt-2 sm:mt-3 md:mt-8">
        <RevealHeading direction="left">I&apos;M A INDIAN</RevealHeading>
        <div className="flex items-center gap-3 md:gap-6 w-full max-w-[250px] md:flex-1 md:max-w-[300px] mt-1 md:mt-0">
          <motion.div
            variants={lineVariants}
            style={{ originX: 0 }}
            className="h-[1px] flex-1 bg-gradient-to-r from-[#FFD100]/50 to-transparent"
          />
          <motion.span
            variants={captionVariants}
            className="font-brand text-[#FFD100]/60 text-[10px] leading-[17px]
    sm:text-[11px] sm:leading-[18px]
    md:text-[12px] md:leading-[19px]
    lg:text-[13px] lg:leading-[20px]
    xl:text-[14px] xl:leading-[21px] uppercase whitespace-nowrap"
          >
            WORKING WORLDWIDE
          </motion.span>
          <motion.div
            variants={lineVariants}
            style={{ originX: 1 }}
            className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#FFD100]/50"
          />
        </div>
      </div>

      {/* ROW 3: ANIMATED ROLES — premium letter-mask + underline sweep */}
      <div
        className="relative overflow-hidden flex justify-end"
        style={{ height: "calc(clamp(2.25rem, 8vw, 150px) * 1.4)" }}
      >
        <AnimatePresence mode="wait">
          <AnimatedRole key={roleIndex} text={roles[roleIndex]} />
        </AnimatePresence>
      </div>

      {/* ROW 4: LIVING IN HYD — from the left */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-8 w-full mt-2 sm:mt-3 md:mt-8">
        <RevealHeading direction="left">LIVING IN HYD</RevealHeading>
        <div className="flex items-center gap-3 md:gap-6 w-full max-w-[200px] md:flex-1 md:max-w-[200px] mt-1 md:mt-0">
          <motion.div
            variants={lineVariants}
            style={{ originX: 0 }}
            className="h-[1px] flex-1 bg-gradient-to-r from-[#FFD100]/50 to-transparent"
          />
          <motion.span
            variants={captionVariants}
            className="font-brand text-[#FFD100]/60 text-[10px] leading-[17px]
    sm:text-[11px] sm:leading-[18px]
    md:text-[12px] md:leading-[19px]
    lg:text-[13px] lg:leading-[20px]
    xl:text-[14px] xl:leading-[21px] uppercase whitespace-nowrap"
          >
            AT 38°C
          </motion.span>
          <motion.div
            variants={lineVariants}
            style={{ originX: 1 }}
            className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#FFD100]/50"
          />
        </div>
      </div>
    </motion.section>
  );
}