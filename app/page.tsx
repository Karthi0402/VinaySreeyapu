// src/app/page.tsx
"use client";

// FIX 1: Import useEffect
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "../src/components/ui/SplashScreen";
import Navbar from "../src/components/layout/Navbar";
import Hero from "../src/components/sections/Hero";
import Intro from "../src/components/sections/Intro";
import RecentWorks from "../src/components/sections/RecentWorks";
import MyProblems from "../src/components/sections/MyProblems";
import Contact from "../src/components/sections/Contact";
import AllWorks from "../src/components/sections/AllProjects";
import GetInTouch from "../src/components/sections/GetInTouch";
import ProjectDetails from "../src/components/sections/ProjectDetails"; // IMPORT THIS!
import { projectsData } from "../src/data/allprojects"; // Import your data so we can find the "Next" project

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  
  // NEW STATE: Tracks which project is currently being viewed
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Scroll to top on nav change OR when a project is selected
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [activeNavIndex, selectedProject]);

  // Handle "Next Project" logic
  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedProject(projectsData[nextIndex]);
  };

  const renderActiveView = () => {
    // If a project is selected, OVERRIDE the normal views and show the details!
    if (selectedProject) {
      return (
        <ProjectDetails 
          key="project-details" 
          project={selectedProject} 
          onBack={() => setSelectedProject(null)} 
          onNext={handleNextProject}
        />
      );
    }

    switch (activeNavIndex) {
      case 0:
        return (
          <motion.div
            key="home-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full col-start-1 row-start-1 px-12"
          >
            <Hero />
            <div className="h-[100px] lg:h-[180px]" />
            <Intro />
            {/* Pass setSelectedProject to RecentWorks so they can click it from the home page too! */}
            <RecentWorks setActiveIndex={setActiveNavIndex} onProjectSelect={setSelectedProject} />
            <MyProblems />
            <Contact />
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key="works-view"
            // ... (keep existing animation props)
            className="w-full col-start-1 row-start-1"
          >
            {/* Pass it to AllWorks */}
            <AllWorks onProjectSelect={setSelectedProject} />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="works-view"
            // ... (keep existing animation props)
            className="w-full col-start-1 row-start-1"
          >
            {/* Pass it to AllWorks */}
            <GetInTouch/>
          </motion.div>
        );
      // ... keep case 2 and default
    }
  };

  return (
    // ... keep existing return wrapper structure
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="min-h-screen flex flex-col relative"
        >
          {/* Hide Navbar when viewing project details for maximum cinematic effect (Optional, but recommended based on your design) */}
          <AnimatePresence>
            {!selectedProject && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <Navbar activeIndex={activeNavIndex} setActiveIndex={setActiveNavIndex} />
              </motion.div>
            )}
          </AnimatePresence>

          <main className="w-full relative flex-1">
            <AnimatePresence mode="wait">{renderActiveView()}</AnimatePresence>
          </main>
        </motion.div>
  );
}