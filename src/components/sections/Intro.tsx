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
    <section className="relative w-full min-h-fit md:min-h-screen flex flex-col justify-center px-6 md:px-16 py-16 sm:py-20 md:py-24 gap-5 sm:gap-6 md:gap-8">
      {/* ROW 1: NAMASTE */}
      <div className="flex flex-col items-end w-full">
        <h2 className="font-nightwatch text-[clamp(2.25rem,8vw,150px)] leading-none text-gold-radial-figma tracking-tight pt-2 sm:pt-3 md:pt-4">
          NAMASTE
        </h2>
        <span
          className="font-brand text-[#FFD100]/60 text-[10px] leading-[17px]
    sm:text-[11px] sm:leading-[18px]
    md:text-[12px] md:leading-[19px]
    lg:text-[13px] lg:leading-[20px]
    xl:text-[14px] xl:leading-[21px] uppercase mt-2"
        >
          WE SAY IT HERE AS RESPECT
        </span>
      </div>

      {/* ROW 2: I'M A INDIAN */}
      {/* FIX: Added `flex-col md:flex-row` and `items-start md:items-center` */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-8 w-full mt-2 sm:mt-3 md:mt-8">
        <h2 className="font-nightwatch text-[clamp(2.25rem,8vw,150px)] leading-none text-gold-radial-figma tracking-tight whitespace-nowrap pt-2 sm:pt-3 md:pt-4">
          I&apos;M A INDIAN
        </h2>
        {/* FIX: Added `w-full max-w-[250px] md:flex-1 md:max-w-[300px]` so it sizes nicely on mobile */}
        <div className="flex items-center gap-3 md:gap-6 w-full max-w-[250px] md:flex-1 md:max-w-[300px] mt-1 md:mt-0">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FFD100]/50 to-transparent" />
          <span
            className="font-brand text-[#FFD100]/60 text-[10px] leading-[17px]
    sm:text-[11px] sm:leading-[18px]
    md:text-[12px] md:leading-[19px]
    lg:text-[13px] lg:leading-[20px]
    xl:text-[14px] xl:leading-[21px] uppercase whitespace-nowrap"
          >
            WORKING WORLDWIDE
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent  to-[#FFD100]/50" />
        </div>
      </div>

      {/* ROW 3: ANIMATED ROLES */}
      <div
        className="relative overflow-hidden flex justify-end"
        style={{ height: "calc(clamp(2.25rem, 8vw, 150px) * 1.4)" }}
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key={roleIndex}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 flex items-center justify-end font-nightwatch text-[clamp(2.25rem,8vw,150px)] leading-none text-gold-radial-figma whitespace-nowrap"
          >
            {roles[roleIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* ROW 4: LIVING IN HYD */}
      {/* FIX: Added `flex-col md:flex-row` and `items-start md:items-center` */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-8 w-full mt-2 sm:mt-3 md:mt-8">
        <h2 className="font-nightwatch text-[clamp(2.25rem,8vw,150px)] leading-none text-gold-radial-figma tracking-tight whitespace-nowrap pt-2 sm:pt-3 md:pt-4">
          LIVING IN HYD
        </h2>
        {/* FIX: Added `w-full max-w-[200px] md:flex-1 md:max-w-[200px]` so it matches mobile stacking behavior */}
        <div className="flex items-center gap-3 md:gap-6 w-full max-w-[200px] md:flex-1 md:max-w-[200px] mt-1 md:mt-0">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FFD100]/50 to-transparent" />
          <span
            className="font-brand text-[#FFD100]/60 text-[10px] leading-[17px]
    sm:text-[11px] sm:leading-[18px]
    md:text-[12px] md:leading-[19px]
    lg:text-[13px] lg:leading-[20px]
    xl:text-[14px] xl:leading-[21px] uppercase whitespace-nowrap"
          >
            AT 38°C
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent  to-[#FFD100]/50" />
        </div>
      </div>
    </section>
  );
}