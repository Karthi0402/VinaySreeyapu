// src/components/ui/ProjectRow.tsx
"use client";

import { Project } from "../../data/projects";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useState, useRef } from "react";

interface ProjectRowProps {
  project: Project;
}

export default function ProjectRow({ project }: ProjectRowProps) {
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  // Fallback size used before the image has ever been measured
  const sizeRef = useRef({ width: 320, height: 400 });

  const x = useSpring(0, {
    stiffness: 220,
    damping: 22,
  });

  const y = useSpring(0, {
    stiffness: 220,
    damping: 22,
  });

  function getOffset(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const { width, height } = sizeRef.current;
    return {
      offsetX: e.clientX - rect.left - width / 2,
      offsetY: e.clientY - rect.top - height / 2,
    };
  }

  function handleEnter(e: React.MouseEvent<HTMLDivElement>) {
    if (imgRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect();
      if (width && height) {
        sizeRef.current = { width, height };
      }
    }

    const { offsetX, offsetY } = getOffset(e);

    x.jump(offsetX);
    y.jump(offsetY);

    setHovered(true);
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (imgRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect();
      if (width && height) {
        sizeRef.current = { width, height };
      }
    }

    const { offsetX, offsetY } = getOffset(e);

    x.set(offsetX);
    y.set(offsetY);
  }

  return (
    <div
      className="relative w-full py-8 md:py-24 cursor-pointer group overflow-visible"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMove}
    >
      {/* Floating Image - Hidden on mobile (md:block) */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            className="hidden md:block absolute left-0 top-0 z-10 pointer-events-none"
          >
            <div ref={imgRef} className="relative">
              <div className="absolute inset-0 rounded-3xl bg-[#FFD100]/8 blur-xl scale-105" />
              <img
                src={project.imagePath}
                alt={project.title}
                className="
                  relative
                  w-[320px]
                  rounded-2xl
                  shadow-[0_30px_90px_rgba(0,0,0,0.45)]
                  border
                  border-white/10
                  object-cover
                  select-none
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title & Category Wrapper */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row md:items-end justify-between w-full gap-2 md:gap-0">
        <motion.h3
          whileHover={{ x: 12 }}
          transition={{ duration: 0.35 }}
          className="
            font-nightwatch
            text-gold-radial-figma
            text-[clamp(2.5rem,6vw,5.5rem)]
            leading-none
            tracking-[-0.04em]
          "
        >
          {project.title}
        </motion.h3>

        <div className="flex justify-start md:justify-end md:mb-1">
          <span className="text-gold-radial-figma font-brand text-[14px] leading-normal tracking-normal uppercase">
            {project.category}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-3 mt-8 md:mt-6 overflow-hidden">
        {project.tags.map((tag, index) => (
          <div key={tag} className="flex items-center gap-3">
            <span
              className="
                text-gold-radial-figma
                font-brand
                text-[14px] md:text-[18px] font-medium leading-normal tracking-normal
                uppercase
                transition-all
                duration-300
              "
            >
              {tag}
            </span>

            {index !== project.tags.length - 1 && (
              <span className="hidden md:block text-[#FFD100]/30 transition-all duration-300">
                |
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
