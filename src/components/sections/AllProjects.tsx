// src/components/sections/AllProjects.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "../../data/allprojects";
import ProjectRow from "../ui/ProjectRow";

function CinematicProject({ project, isLast, onProjectSelect }: any) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    // Tracks the element from the moment it enters the bottom to the moment it leaves the top
    offset: ["0 1", "1 0"], 
  });

  // 1. Gentle Scale: Shrinks slightly at the top and bottom of the screen
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  
  // 2. Parallax Y: Moves slightly slower than the actual scroll to create depth
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  
  // 3. Cinematic Fade: Fades out as it hits the extreme edges
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.1, 1, 1, 0.1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        y,
        opacity,
      }}
      // will-change-transform forces the browser to hardware-accelerate this specific row
      className="w-full will-change-transform origin-center"
      onClick={() => onProjectSelect(project)}
    >
      <ProjectRow project={project} />

      {!isLast && (
        <div className="w-full h-[2px] bg-gradient-to-r from-[#FFD100]/30 via-[#FFD100]/30 to-[#FFD100]/30" />
      )}
    </motion.div>
  );
}

export default function AllWorks({ onProjectSelect }: { onProjectSelect: (p: any) => void }) {
  const allProjects = projectsData;

  return (
    <section className="relative w-full flex flex-col px-6 md:px-16 py-24 overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col w-full mb-12">
        <span
          className="text-gold-radial-figma font-brand text-[12px] leading-[17px]
    sm:text-[15px] sm:leading-[20px]
    md:text-[16px] md:leading-[21px]
    lg:text-[17px] lg:leading-[22px]
    xl:text-[18px] xl:leading-[23px] tracking-normal uppercase mb-4"
        >
          <span className="text-[#FFD100]">PROJECT GALLERY</span>
        </span>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#FFD100]/80 via-[#FFD100]/80 to-[#FFD100]/80" />
      </div>

      {/* PROJECTS LIST */}
      {/* FIX: Removed the buggy 'perspective' wrapper and added gap to let items breathe */}
      <div className="flex flex-col w-full gap-4">
        {allProjects.map((project, index) => (
          <CinematicProject 
            key={project.id} 
            project={project} 
            isLast={index === allProjects.length - 1} 
            onProjectSelect={onProjectSelect}
          />
        ))}
      </div>
    </section>
  );
}