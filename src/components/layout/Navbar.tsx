// src/components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["HOME", "WORKS", "CONTACT"];

interface NavbarProps {
  activeIndex: number;
  setActiveIndex: (index: number | ((prev: number) => number)) => void;
}

export default function Navbar({ activeIndex, setActiveIndex }: NavbarProps) {
  const handleUp = () => {
    setActiveIndex((prev: number) =>
      prev === 0 ? navItems.length - 1 : prev - 1,
    );
  };

  const handleDown = () => {
    setActiveIndex((prev: number) =>
      prev === navItems.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <nav className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-[45px] pt-6 sm:pt-8 md:pt-12 lg:pt-[78px]">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
          <img
            src="/assets/Left.svg"
            alt=""
            className="absolute left-0 top-0 h-full w-auto"
          />

          <span
            className="
              absolute
              left-4 sm:left-5 md:left-6
              top-1/2
              -translate-y-1/2
              font-brand
              leading-[18px]
              tracking-normal
              text-[9px]
              sm:text-[11px]
              md:text-xs
              lg:text-[14px]
              text-gold-radial-figma
            "
          >
            2026
          </span>
        </div>

        {/* Center Navigation */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
            h-[90px]
            sm:h-[100px]
            md:h-[110px]
            lg:h-[120px]
            w-32
            sm:w-40
            md:w-44
            lg:w-48
          "
        >
          {navItems.map((item, index) => {
            const isActive = activeIndex === index;
            const offset = index - activeIndex;

            return (
              <motion.button
                key={item}
                onClick={() => setActiveIndex(index)}
                animate={{
                  y: offset * 35,
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                // FIX: Added cursor-pointer here!
                className="absolute flex flex-col items-center justify-center cursor-pointer"
              >
                {/* Top Glow */}
                <div
                  className={`
                    absolute
                    -top-2
                    h-[0.5px]
                    w-10
                    sm:w-7
                    lg:w-8
                    bg-gradient-to-r
                    from-transparent
                    via-[#FFD100]
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                />

                {/* Text */}
                <span
                  className={`
                    font-brand
                    transition-all
                    duration-300
                    leading-[23px]
                    tracking-normal
                    text-[14px]
                    sm:text-[15px]
                    md:text-[16px]
                    lg:text-[17px]
                    xl:text-[18px]
                    ${
                      isActive
                        ? "text-gold-radial-figma font-medium"
                        : "text-[#FFD100] hover:text-[#FFD100]/60"
                    }
                  `}
                >
                  {item}
                </span>

                {/* Bottom Glow */}
                <div
                  className={`
                    absolute
                    -bottom-2
                    h-[0.5px]
                    w-10
                    sm:w-7
                    lg:w-8
                    bg-gradient-to-r
                    from-transparent
                    via-[#FFD100]
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Right */}
        <div
          className="
            relative
            justify-self-end
            w-12
            h-12
            sm:w-14
            sm:h-14
            md:w-16
            md:h-16
            lg:w-20
            lg:h-20
          "
        >
          <img
            src="/assets/Right.svg"
            alt=""
            className="absolute right-0 top-0 h-full w-auto"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* FIX: Added cursor-pointer here! */}
            <button
              onClick={handleUp}
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/assets/toparrow.svg"
                className="w-2.5 sm:w-3 md:w-3 h-auto"
                alt=""
              />
            </button>

            {/* FIX: Added cursor-pointer here! */}
            <button
              onClick={handleDown}
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src="/assets/downarrow.svg"
                className="w-2.5 sm:w-3 md:w-3 h-auto"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
