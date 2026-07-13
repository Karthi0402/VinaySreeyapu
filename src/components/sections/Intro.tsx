// src/components/sections/Intro.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "UI UX DESIGNER",
  "PRODUCT DESIGNER",
  "VISUAL DESIGNER",
  "WEB DESIGNER",
];

export default function Intro() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 gap-6 md:gap-8">
      {/* ROW 1: NAMASTE */}
      <div className="flex flex-col items-end w-full">
        {/* Changed leading-[0.8] to leading-none to fix top clipping */}
        <h2 className="font-nightwatch text-[8vw] leading-none text-gold-radial-figma tracking-tight pt-4">
          NAMASTE
        </h2>
        <span className="font-brand text-[#FFD100]/60 text-[8px] md:text-[10px] tracking-[0.2em] uppercase mt-2">
          WE SAY IT HERE AS RESPECT
        </span>
      </div>

      {/* ROW 2: I'M A INDIAN */}
      <div className="flex items-center gap-4 md:gap-8 w-full mt-4 md:mt-8">
        <h2 className="font-nightwatch text-[8vw] leading-none text-gold-radial-figma tracking-tight whitespace-nowrap pt-4">
          I&apos;M A INDIAN
        </h2>
        <div className="flex items-center gap-3 md:gap-6 flex-1 max-w-[300px]">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FFD100]/50 to-transparent" />
          <span className="font-brand text-[#FFD100]/60 text-[8px] md:text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">
            WORKING WORLDWIDE
          </span>
        </div>
      </div>

      {/* ROW 3: ANIMATED ROLES */}
      <div className="relative h-[9vw] overflow-hidden flex justify-end">
        <AnimatePresence mode="wait">
          <motion.h2
            key={roleIndex}
            initial={{
              y: 12,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -12,
              opacity: 0,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute font-nightwatch text-[8vw] leading-none text-gold-radial-figma whitespace-nowrap pt-4"
          >
            {roles[roleIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* ROW 4: LIVING IN HYD */}
      <div className="flex items-center gap-4 md:gap-8 w-full mt-4 md:mt-8">
        <h2 className="font-nightwatch text-[8vw] leading-none text-gold-radial-figma tracking-tight whitespace-nowrap pt-4">
          LIVING IN HYD
        </h2>
        <div className="flex items-center gap-3 md:gap-6 flex-1 max-w-[200px]">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FFD100]/50 to-transparent" />
          <span className="font-brand text-[#FFD100]/60 text-[8px] md:text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">
            AT 38°C
          </span>
        </div>
      </div>
    </section>
  );
}
