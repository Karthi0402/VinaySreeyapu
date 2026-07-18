// src/components/sections/RecentWorks.tsx
"use client";

import { projectsData } from "../../data/allprojects";
import ProjectRow from "../ui/ProjectRow";

export default function AllWorks() {
  // Grab all projects
  const allProjects = projectsData;

  return (
    <section className="relative w-full flex flex-col px-6 md:px-16 py-24">
      {/* SECTION HEADER */}
      <div className="flex flex-col w-full mb-8">
        <span
          className="text-gold-radial-figma font-brand text-[12px] leading-[17px]
    sm:text-[15px] sm:leading-[20px]
    md:text-[16px] md:leading-[21px]
    lg:text-[17px] lg:leading-[22px]
    xl:text-[18px] xl:leading-[23px] tracking-normal uppercase mb-4"
        >
          <span className="text-gold-radial-figma">PROJECT GALLERY</span>
        </span>
        {/* Full width gold separator line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-[#FFD100]/80 via-[#FFD100]/80 to-[#FFD100]/80" />
      </div>

      {/* PROJECTS LIST */}
      <div className="flex flex-col w-full">
        {allProjects.map((project, index) => (
          <div key={project.id} className="w-full">
            <ProjectRow project={project} />

            {/* The horizontal divider line below each project (except the last one) */}
            {index !== allProjects.length - 1 && (
              <div className="w-full h-[2px] bg-gradient-to-r from-[#FFD100]/30 via-[#FFD100]/30 to-[#FFD100]/30" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
