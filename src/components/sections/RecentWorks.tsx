// src/components/sections/RecentWorks.tsx
"use client";

import { projectsData } from "../../data/allprojects";
import ProjectRow from "../ui/ProjectRow";

interface NavbarProps {
  setActiveIndex: (index: number | ((prev: number) => number)) => void;
  onProjectSelect: (p: any) => void;
}

export default function RecentWorks({ setActiveIndex, onProjectSelect }: NavbarProps) {
  // Grab only the first 3 projects for the homepage
  const recentProjects = projectsData.slice(0, 4);

  const handleProjectsClick = () => {
    setActiveIndex(1);
  };

  return (
    <section className="relative w-full flex flex-col px-6 md:px-16 py-24">
      {/* SECTION HEADER */}
      <div className="flex flex-col w-full mb-4">
        <span
          className="text-gold-radial-figma font-brand text-[12px] leading-[17px]
    sm:text-[15px] sm:leading-[20px]
    md:text-[16px] md:leading-[21px]
    lg:text-[17px] lg:leading-[22px]
    xl:text-[18px] xl:leading-[23px] tracking-normal uppercase mb-4"
        >
          <span className="text-[#FFD100]">RECENT WORKS</span>
        </span>
        {/* Full width gold separator line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-[#FFD100]/80 via-[#FFD100]/80 to-[#FFD100]/80" />
      </div>

      {/* PROJECTS LIST */}
      <div className="flex flex-col w-full">
        {recentProjects.map((project, index) => (
          <div key={project.id} className="w-full" onClick={() => onProjectSelect(project)}>
            <ProjectRow project={project} />

            {/* The horizontal divider line below each project (except the last one) */}
            {index !== recentProjects.length - 1 && (
              <div className="w-full h-[2px] bg-gradient-to-r from-[#FFD100]/30 via-[#FFD100]/30 to-[#FFD100]/30" />
            )}
          </div>
        ))}
      </div>

      {/* BOTTOM FOOTER / ALL PROJECTS BUTTON */}
      <div className="w-full flex flex-col items-center mt-12 md:mt-20">
        {/* Large section separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD100]/60 to-transparent mb-12 md:mb-16" />

        {/* Navbar-style Static Button */}
        <button
          onClick={handleProjectsClick}
          className="relative flex flex-col items-center justify-center cursor-pointer group hover:scale-105 transition-transform duration-300 py-3"
        >
          {/* Top Fading Glowing Line */}
          <div className="absolute top-0 h-[1.5px] w-8 md:w-10 bg-gradient-to-r from-transparent via-[#FFD100] to-transparent opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(255,209,0,0.6)] transition-all duration-300" />

          {/* Text */}
          <span
            className="font-brand text-[12px] leading-[17px]
    sm:text-[15px] sm:leading-[20px]
    md:text-[16px] md:leading-[21px]
    lg:text-[17px] lg:leading-[22px]
    xl:text-[18px] xl:leading-[23px] tracking-normal uppercase text-gold-radial-figma font-medium transition-colors"
          >
            ALL PROJECTS
          </span>

          {/* Bottom Fading Glowing Line */}
          <div className="absolute bottom-0 h-[1.5px] w-8 md:w-10 bg-gradient-to-r from-transparent via-[#FFD100] to-transparent opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(255,209,0,0.6)] transition-all duration-300" />
        </button>
      </div>
    </section>
  );
}
