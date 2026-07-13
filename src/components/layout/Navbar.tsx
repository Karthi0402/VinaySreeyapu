// src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["HOME", "WORKS", "CONTACT"];
// Map the items to the exact IDs we just added in page.tsx
const sectionIds = ["home", "works", "contact"]; 

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Helper function to handle smooth scrolling
  const scrollToSection = (index: number) => {
    const targetId = sectionIds[index];
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    scrollToSection(index);
  };

  const handleUp = () => {
    setActiveIndex((prev) => {
      const newIndex = prev === 0 ? navItems.length - 1 : prev - 1;
      scrollToSection(newIndex);
      return newIndex;
    });
  };

  const handleDown = () => {
    setActiveIndex((prev) => {
      const newIndex = prev === navItems.length - 1 ? 0 : prev + 1;
      scrollToSection(newIndex);
      return newIndex;
    });
  };

  return (
    // Note: If you want the nav to stay on screen while scrolling, change 'relative' to 'fixed top-0 z-50'
    <nav className="relative z-10 w-full px-[45px] pt-[78px]">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        
        <div className="relative w-20 h-20">
          <img
            src="/assets/Left.svg"
            alt=""
            className="absolute left-0 top-0 h-full"
          />
          <span className="absolute left-6 top-1/2 -translate-y-1/2 font-brand tracking-[0.2em] text-[14px] text-gold-radial-figma">
            2026
          </span>
        </div>

        <div className="relative h-[120px] w-48 flex items-center justify-center">
          {navItems.map((item, index) => {
            const isActive = activeIndex === index;
            const offset = index - activeIndex;

            return (
              <motion.button
                key={item}
                // Call our new combined handler here
                onClick={() => handleNavClick(index)} 
                animate={{
                  y: offset * 35,
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.3,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute flex flex-col items-center justify-center cursor-pointer"
              >
                {/* Top Fading Glowing Line */}
                <div
                  className={`h-[1.5px] w-8 bg-gradient-to-r from-transparent via-[#FFD100] to-transparent absolute -top-2 transition-opacity duration-300 ${
                    isActive
                      ? "opacity-100 shadow-[0_0_8px_rgba(255,209,0,0.6)]"
                      : "opacity-0"
                  }`}
                />

                {/* Text */}
                <span
                  className={`font-brand text-[14px] tracking-[0.15em] transition-colors duration-300 ${
                    isActive
                      ? "text-gold-radial-figma font-medium"
                      : "text-[#FFD100] hover:text-[#FFD100]/60 font-normal"
                  }`}
                >
                  {item}
                </span>

                {/* Bottom Fading Glowing Line */}
                <div
                  className={`h-[1.5px] w-8 bg-gradient-to-r from-transparent via-[#FFD100] to-transparent absolute -bottom-2 transition-opacity duration-300 ${
                    isActive
                      ? "opacity-100 shadow-[0_0_8px_rgba(255,209,0,0.6)]"
                      : "opacity-0"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        <div className="relative w-20 h-20 hidden sm:block justify-self-end">
          <img
            src="/assets/Right.svg"
            alt=""
            className="absolute right-0 top-0 h-full"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
            <button
              onClick={handleUp}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              <img src="/assets/toparrow.svg" className="w-4 h-auto" alt="" />
            </button>

            <button
              onClick={handleDown}
              className="cursor-pointer hover:scale-110 transition-transform"
            >
              <img src="/assets/downarrow.svg" className="w-4 h-auto" alt="" />
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}