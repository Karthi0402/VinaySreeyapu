// src/components/ui/ProjectRow.tsx
"use client";

import { Project } from "../../data/projects";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useState } from "react";

interface ProjectRowProps {
  project: Project;
}

export default function ProjectRow({ project }: ProjectRowProps) {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 220,
    damping: 22,
  });

  const y = useSpring(mouseY, {
    stiffness: 220,
    damping: 22,
  });

  const rotate = useTransform(mouseX, [-300, 300], [-8, 8]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - 120);
    mouseY.set(e.clientY - rect.top - 220);
  }

  return (
    <div
      className="relative w-full py-8 md:py-24 cursor-pointer group overflow-visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMove}
    >
      {/* Floating Image - Hidden on mobile (md:block) */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            style={{ x, y, rotate }}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            className="hidden md:block absolute left-0 top-0 z-10 pointer-events-none"
          >
            <div className="relative">
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
      {/* flex-col-reverse puts the Category on top for mobile, md:flex-row puts them side-by-side for desktop */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row md:items-end justify-between w-full gap-2 md:gap-0">
        {/* Title */}
        <motion.h3
          whileHover={{ x: 12 }}
          transition={{ duration: 0.35 }}
          className="
            font-nightwatch
            text-[11vw]
            md:text-[5vw]
            leading-none
            text-gold-radial-figma
            tracking-tight
          "
        >
          {project.title}
        </motion.h3>

        {/* Category */}
        <div className="flex justify-start md:justify-end md:mb-1">
          <span className="text-gold-radial-figma font-brand text-[18px] sm:text-[16px] md:text-[14px] tracking-normal leading-[23px] tracking-normal uppercase">
            {project.category}
          </span>
        </div>
      </div>

      {/* Tags */}
      {/* flex-col for mobile vertical stacking, md:flex-row for desktop horizontal layout */}
      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-3 mt-8 md:mt-6 overflow-hidden">
        {project.tags.map((tag, index) => (
          <div key={tag} className="flex items-center gap-3">
            <span
              className="
                text-gold-radial-figma
                font-brand
                text-[18px]
                sm:text-[16px] 
                md:text-[14px]
                uppercase
                tracking-normal
                leading-[23px]
                transition-all
                duration-300
              "
            >
              {tag}
            </span>

            {/* Pipe Separator - Hidden on mobile (hidden md:block) */}
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
