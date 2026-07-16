// src/components/sections/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center items-center">
      {/* --- CENTER: Name & Pinned Annotations --- */}
      {/* We use 'relative w-fit' so the absolute elements lock exactly to the edges of the text */}
      <div className="relative w-fit max-w-full flex flex-col justify-center">
        {/* Top Left Pinned: Greeting */}
        <div className="absolute bottom-full left-0 mb-2 md:mb-0 h-5 md:h-6 w-24 overflow-hidden font-brand text-[#FFD100]/80 text-[10px] md:text-xs tracking-[0.2em]">
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
        </div>

        {/* Main Title: Name */}
        <h1
          className="
    font-nightwatch
    text-gold-radial-figma
    text-[10vw]
    lg:text-[11vw]
    leading-none
    tracking-[-0.04em]
    pr-4
    whitespace-nowrap
  "
        >
          VINAY SREEYAPU
        </h1>
        {/* Bottom Right Pinned: Ampersand */}
        <div
          className="absolute text-gold-radial-figma top-full right-1 -mt-1 md:-mt-2 font-brand 
    text-[12px] leading-[17px]
    sm:text-[15px] sm:leading-[20px]
    md:text-[16px] md:leading-[21px]
    lg:text-[17px] lg:leading-[22px]
    xl:text-[18px] xl:leading-[23px]"
        >
          &
        </div>

        {/* Bottom Left Pinned: Title */}
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
          <span>HERE</span>
          <div>
            <span>I&apos;M A PRODUCT DESIGNER </span>
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
      </div>

      {/* --- FAR BOTTOM RIGHT: Social Links --- */}
      <div className="absolute bottom-8 right-6 md:right-12 flex flex-col items-end gap-2 font-brand text-[#FFD100]/70 text-[10px] md:text-xs tracking-[0.2em] uppercase">
        <GradientText href="https://www.behance.net/vinayrsreeyap">
          Behance
        </GradientText>
        <GradientText href="https://www.linkedin.com/in/vinayreddysr">
          LINKEDIN
        </GradientText>
        <GradientText href="https://www.instagram.com/sreeyapu_vinayreddy">
          INSTAGRAM
        </GradientText>
      </div>
    </section>
  );
}
