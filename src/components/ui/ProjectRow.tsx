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
      className="relative w-full py-12 md:py-16 cursor-pointer group overflow-visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMove}
    >
      {/* Floating Image */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            style={{
              x,
              y,
              rotate,
            }}
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.35,
            }}
            className="absolute left-0 top-0 z-10 pointer-events-none"
          >
            <div className="relative">
              {/* Gold Glow */}

              <div className="absolute inset-0 rounded-3xl bg-[#FFD100]/20 blur-3xl scale-110" />

              {/* Card */}

              <img
                src={project.imagePath}
                alt={project.title}
                className="
                  relative
                  w-[260px]
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

      {/* Title */}

      <motion.h3
        whileHover={{
          x: 12,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          relative
          z-20
          font-nightwatch
          text-[6vw]
          md:text-[5vw]
          leading-none
          text-gold-radial-figma
          tracking-tight
        "
      >
        {project.title}
      </motion.h3>

      {/* Category */}

      <div className="relative z-20 flex justify-end mt-3">
        <span className="font-brand text-[#FFD100]/60 text-[10px] tracking-[0.18em] uppercase">
          {project.category}
        </span>
      </div>

      {/* Tags */}

      <div className="relative z-20 flex items-center gap-3 mt-6 overflow-hidden">
        {project.tags.map((tag, index) => (
          <div key={tag} className="flex items-center gap-3">
            <span
              className="
                font-brand
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[#FFD100]/70
                transition-all
                duration-300
                group-hover:text-[#FFD100]
                group-hover:tracking-[0.22em]
              "
            >
              {tag}
            </span>

            {index !== project.tags.length - 1 && (
              <span
                className="
                  text-[#FFD100]/30
                  transition-all
                  duration-300
                  group-hover:text-[#FFD100]/60
                "
              >
                |
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}