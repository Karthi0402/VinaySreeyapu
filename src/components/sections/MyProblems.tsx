// src/components/sections/MyProblems.tsx
"use client";

import { motion } from "framer-motion";

const problemsData = [
  {
    id: "sleep",
    title: "SLEEP",
    description: "I CAN'T SLEEP IF MY FIGMA LAYERS ARE UNNAMED OR A FRAME ENDS UP AT 395PX INSTEAD OF 396PX.",
  },
  {
    id: "ocd",
    title: "OCD",
    description: "AN EXTRA FRAME OR MESSY LAYERS, AND SUDDENLY I HAVE ONE MORE THING TO FIX",
  },
  {
    id: "fighting",
    title: "FIGHTING",
    description: "DEVELOPERS KNOW I'M COMING IF THE UI DOESN'T MATCH THE HANDOFF",
  },
];

export default function MyProblems() {
  return (
    <section className="relative w-full flex flex-col px-6 md:px-16 py-24 md:py-32">
      
      {/* SECTION HEADER */}
      <div className="mb-12 md:mb-16">
        <span className="font-brand text-[10px] md:text-xs tracking-[0.2em] uppercase">
          <span className="text-gold-radial-figma font-brand">MY PROBLEMS</span>
        </span>
      </div>

      {/* PROBLEMS LIST */}
      <div className="flex flex-col gap-16 md:gap-24 w-full">
        {problemsData.map((problem, index) => (
          <motion.div
            key={problem.id}
            // The scroll-reveal animation
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Triggers slightly before it enters the viewport
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15, // Staggers them if scrolling fast
              ease: [0.21, 0.47, 0.32, 0.98] 
            }}
            className="flex flex-col items-start"
          >
            {/* The Huge Title */}
            <h2 className="font-nightwatch text-[13vw] md:text-[9vw] leading-none text-gold-radial-figma tracking-tight pr-4">
              {problem.title}
            </h2>
            
            {/* The Subtitle Description */}
            <p className="font-brand text-[#FFD100]/60 text-[8px] md:text-[10px] tracking-[0.15em] uppercase mt-2 md:mt-4 max-w-[90%] md:max-w-none">
              {problem.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}