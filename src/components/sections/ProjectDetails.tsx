// src/components/sections/ProjectDetails.tsx
"use client";

import { motion } from "framer-motion";

export interface ProjectDetailsProps {
  project: any; // Replace 'any' with your Project type
  onBack: () => void;
  onNext: () => void;
}

// FIX: Moved the helper component OUTSIDE the main return block!
const TableRow = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 py-6 border-b border-[#FFD100]/20">
    {/* Label */}
    <span className="w-32 font-brand text-[14px] leading-normal tracking-normal uppercase text-[#FFD100]/50 shrink-0">
      {label}
    </span>

    {/* Value */}
    <div className="flex-1 flex flex-col gap-2 font-brand text-[12px] md:text-[14px] leading-normal tracking-normal uppercase text-[#FFD100]">
      {children}
    </div>
  </div>
);

export default function ProjectDetails({
  project,
  onBack,
  onNext,
}: ProjectDetailsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative w-full min-h-screen flex flex-col px-6 md:px-16 pt-24 pb-32"
    >
      {/* --- TOP NAVIGATION --- */}
      <header className="flex justify-between items-center w-full font-brand text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#FFD100]/60 mb-12">
        <div
          className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
          onClick={onBack}
        >
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
              cursor-pointer
            "
          >
            Back
          </span>
        </div>

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
            cursor-pointer
          "
          onClick={onNext}
        >
          <img
            src="/assets/Right.svg"
            alt=""
            className="absolute right-0 top-0 h-full w-auto"
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
            Next
          </span>
        </div>
      </header>

      {/* --- TITLE --- */}
      <h1
        className="
  font-nightwatch
  text-[clamp(44px,4vw,58px)]
  leading-none
  tracking-[-0.04em]
  text-gold-radial-figma
  mb-4
"
      >
        {project.title}
      </h1>
      <div className="w-full h-[1px] mb-8 bg-gradient-to-r from-[#FFD100]/80 via-[#FFD100]/80 to-[#FFD100]/80" />

      {/* --- HERO IMAGE --- */}
      <div
        className="
    relative
    w-full
    aspect-[505/442]
    md:aspect-[1444/725]
    overflow-hidden
    rounded-[14.75px]
    mb-16
    border border-transparent
  "
      >
        <img
          src={project.mainImage}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* --- DETAILS GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 w-full">
        {/* LEFT COLUMN: Description (Takes up 7 out of 12 columns on large screens) */}
        <div className="lg:col-span-7 flex flex-col gap-6 font-brand text-[10px] md:text-[11px] leading-[2] tracking-[0.05em] uppercase text-[#FFD100]/70">
          {/* Highlight Quote */}
          {project.quote && (
            <p className="font-normal text-gold-radial-figma text-[12px] md:text-[14px] leading-[1.86] tracking-normal mb-2">
              {(() => {
                const sentences = project.quote.split(". ").filter(Boolean);

                const mid = Math.ceil(sentences.length / 2);

                return (
                  <>
                    {sentences.slice(0, mid).join(". ")}
                    <br />
                    {sentences.slice(mid).join(". ")}
                  </>
                );
              })()}
            </p>
          )}

          {/* Description Paragraphs */}
          {project.description ? (
            project.description.map((paragraph: string, idx: number) => (
              <p
                className="font-normal text-gold-radial-figma text-[12px] md:text-[14px] leading-[1.86] tracking-normal mb-2"
                key={idx}
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p>PROJECT DESCRIPTION GOES HERE...</p>
          )}
        </div>

        {/* RIGHT COLUMN: Metadata Table (Takes up 5 out of 12 columns) */}
        <div className="lg:col-span-5 flex flex-col border-t border-[#FFD100]/20">
          <TableRow label="YEAR">
            <span>{project.year || "2026"}</span>
          </TableRow>

          <TableRow label="CATEGORY">
            <span>{project.category}</span>
          </TableRow>

          <TableRow label="PRODUCT STATUS">
            <span>{project.status || "IN DEVELOPMENT"}</span>
          </TableRow>

          <TableRow label="TAGS">
            {project.tags.map((tag: string) => (
              <span key={tag}>{tag}</span>
            ))}
          </TableRow>

          <TableRow label="LINKS">
            {project.links ? (
              project.links.map((link: any, idx: number) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))
            ) : (
              <a
                href="#"
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                BEHANCE
              </a>
            )}
          </TableRow>

          <TableRow label="TEAM">
            {project.team ? (
              project.team.map((team: any, idx: number) => (
                <a
                  key={idx}
                  href={team.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white transition-colors"
                >
                  {team.label}
                </a>
              ))
            ) : (
              <>
                <span>VINAY SREEYAPU (PRODUCT, UX & UI)</span>
              </>
            )}
          </TableRow>
        </div>
      </div>
    </motion.section>
  );
}
