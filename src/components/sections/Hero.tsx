// src/components/sections/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "../ui/GradientText";

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

const complexScriptLangs = ["hi", "te", "ta"];

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isLocHovered, setIsLocHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // 1. Rotate the greetings every 2.5 seconds
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
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center items-center px-4 md:px-12">
      {/* --- CENTER: Name & Pinned Annotations --- */}
      {/* We use 'relative w-fit' so the absolute elements lock exactly to the edges of the text */}
      <div className="relative w-fit max-w-full flex flex-col justify-center">
        {/* Top Left Pinned: Greeting */}
        <div className="absolute bottom-full left-1 mb-2 md:mb-4 h-5 md:h-6 w-24 overflow-hidden font-brand text-[#FFD100]/80 text-[10px] md:text-xs tracking-[0.2em] uppercase">
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
              className={`text-gold-radial-figma text-[16px] absolute top-0 left-0 leading-normal ${
                complexScriptLangs.includes(greetings[greetingIndex].lang)
                  ? "font-sans"
                  : "font-brand"
              }`}
            >
              {greetings[greetingIndex].text}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Main Title: Name */}
        <h1
          className="
    font-nightwatch
    text-gold-radial-figma
    text-[9vw]
    lg:text-[10vw]
    leading-none
    tracking-[-0.04em]
    pr-4
    whitespace-nowrap
  "
        >
          VINAY SREEYAPU
        </h1>
        {/* Bottom Right Pinned: Ampersand */}
        <div className="text-gold-radial-figma absolute top-full right-1 mt-2 md:mt-4 font-brand text-[#FFD100] text-sm md:text-base">
          &
        </div>

        {/* Bottom Left Pinned: Title */}
        <div className="text-gold-radial-figma absolute top-full left-1 mt-2 md:mt-4 flex flex-col items-start font-brand text-[16px] md:text-[10px] tracking-[0.2em] uppercase">
          <span className="text-[#FFD100]/60 mb-0.5">HERE</span>
          <div>
            <span className="text-[#FFD100]/60">I&apos;M A </span>
            <span className="text-[#FFD100]">PRODUCT DESIGNER</span>
          </div>
        </div>
      </div>

      {/* --- FAR BOTTOM LEFT: Hoverable Location & Time --- */}
      <div
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
                className="text-gold-radial-figma font-brand text-[14px] flex flex-col gap-1"
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
                className="text-gold-radial-figma font-brand text-[14px] flex flex-col gap-1 text-[#FFD100]"
              >
                <span>HYD</span>
                <span>IST {currentTime}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* --- FAR BOTTOM RIGHT: Social Links --- */}
      <div className="absolute bottom-8 right-6 md:right-12 flex flex-col items-end gap-2 font-brand text-[#FFD100]/70 text-[10px] md:text-xs tracking-[0.2em] uppercase">
        <GradientText href="https://www.behance.net/vinayrsreeyap">Behance</GradientText>
        <GradientText href="https://www.linkedin.com/in/vinayreddysr">LINKEDIN</GradientText>
        <GradientText href="https://www.instagram.com/sreeyapu_vinayreddy">INSTAGRAM</GradientText>
      </div>
    </section>
  );
}
