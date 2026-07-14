// src/components/sections/RecentWorks.tsx
"use client";

import { projectsData } from "../../data/projects";
import ProjectRow from "../ui/ProjectRow";

export default function RecentWorks() {
  // Grab only the first 3 projects for the homepage
  const recentProjects = projectsData.slice(0, 3);

  return (
    <section className="relative w-full flex flex-col px-6 md:px-16 py-24">
      {/* SECTION HEADER */}
      <div className="flex flex-col w-full mb-4">
        <span className="font-brand text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4">
          <span className="text-[#FFD100]">RECENT</span>{" "}
          <span className="text-[#FFD100]/60">WORKS</span>
        </span>
        {/* Full width gold separator line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-[#FFD100]/80 via-[#FFD100]/40 to-transparent" />
      </div>

      {/* PROJECTS LIST */}
      <div className="flex flex-col w-full">
        {recentProjects.map((project, index) => (
          <div key={project.id} className="w-full">
            <ProjectRow project={project} />

            {/* The horizontal divider line below each project (except the last one) */}
            {index !== recentProjects.length - 1 && (
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD100]/30 to-transparent" />
            )}
          </div>
        ))}
      </div>

      {/* BOTTOM FOOTER / ALL PROJECTS BUTTON */}
      <div className="w-full flex flex-col items-center mt-12 md:mt-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD100]/60 to-transparent mb-8" />

        <button className="group flex flex-col items-center font-brand text-[10px] md:text-xs tracking-[0.2em] uppercase hover:scale-105 transition-transform duration-300">
          <div>
            <span className="text-gold-radial-figma text-[#FFD100]/60 group-hover:text-[#FFD100] transition-colors">
              ALL PROJECTS
            </span>
          </div>
          {/* Animated underline effect on hover */}
          <div className="h-[1px] w-6 bg-[#FFD100] mt-1 group-hover:w-full transition-all duration-300" />
        </button>
      </div>
    </section>
  );
}
