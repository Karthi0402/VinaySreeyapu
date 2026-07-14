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

export default function GetInTouch() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isLocHovered, setIsLocHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("VINAYSREEYAPU@GMAIL.COM");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

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
    <section className="relative w-full h-[calc(100dvh-200px)] flex flex-col justify-center items-center px-4 md:px-12">
      
      <div className="relative w-fit flex flex-col justify-center">
        
        {/* Top Left Pinned: Greeting */}
        <div className="absolute bottom-full left-1 mb-0 md:mb-0 h-5 md:h-6 w-24 overflow-hidden font-brand text-[#FFD100]/80 text-[10px] md:text-xs tracking-[0.2em]">
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
              className={`text-gold-radial-figma text-[16px] absolute top-0 left-0 leading-normal leading-[21px] tracking-normal font-brand`}
            >
              {greetings[greetingIndex].text}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Main Title: Name */}
        {/* FIX: Changed `leading-none` to `leading-[1.2] py-4`, and increased the `vw` sizes */}
        <h1 className="font-nightwatch leading-[1.2] py-4 tracking-[-0.02em] whitespace-nowrap text-gold-radial-figma cursor-default text-[6.2vw] sm:text-[5.5vw] md:text-[4.8vw] lg:text-[4.2vw] xl:text-[4vw] pr-2 md:pr-4">
          VINAYSREEYAPU
          <span
            style={{ fontSize: "0.65em", verticalAlign: "middle" }}
            className="mx-1"
          >
            @
          </span>
          GMAIL.COM
        </h1>
        
        {/* Bottom Right Pinned: Copy Button */}
        {/* Adjusted margin top (`-mt-2`) to pull the button closer since we added `py-4` to the h1 */}
        <button
          onClick={handleCopy}
          className="self-end -mt-2 font-brand uppercase tracking-[0.2em] text-[10px] text-[#FFD100]/60 hover:text-[#FFD100] transition-colors cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={copied ? "copied" : "copy"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {copied ? "COPIED ✓" : "COPY EMAIL"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* --- FAR BOTTOM LEFT: Hoverable Location & Time --- */}
      <div
        className="absolute bottom-4 md:bottom-8 left-6 md:left-12 font-brand text-[#FFD100]/70 text-[10px] md:text-xs tracking-[0.2em] cursor-pointer group"
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
                className="text-gold-radial-figma font-brand text-[14px] flex flex-col gap-1"
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
      <div className="absolute bottom-4 md:bottom-8 right-6 md:right-12 flex flex-col items-end gap-2 font-brand text-[#FFD100]/70 text-[10px] md:text-xs tracking-[0.2em] uppercase">
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