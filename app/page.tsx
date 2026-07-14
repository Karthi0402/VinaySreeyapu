"use client";

import { useState } from "react";
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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [activeNavIndex, setActiveNavIndex] = useState(0);

  const renderActiveView = () => {
    switch (activeNavIndex) {
      case 0:
        return (
          <motion.div
            key="home-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full col-start-1 row-start-1"
          >
            <Hero />
            <div className="h-[100px] lg:h-[180px]" />
            <Intro />
            <RecentWorks />
            <MyProblems />
            <Contact />
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key="works-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full col-start-1 row-start-1"
          >
            <AllWorks />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="contact-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full col-start-1 row-start-1"
          >
            <GetInTouch />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <SplashScreen duration={3.5} onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          // CRITICAL FIX: Changed overflow-hidden to overflow-x-hidden so vertical scrolling works!
          className="min-h-screen flex flex-col relative"
        >
          {/* If you want the Navbar to follow you down the page, change its class inside Navbar.tsx to 'fixed top-0' */}
          <Navbar
            activeIndex={activeNavIndex}
            setActiveIndex={setActiveNavIndex}
          />

          <main className="w-full relative flex-1">
            <AnimatePresence>{renderActiveView()}</AnimatePresence>
          </main>
        </motion.div>
      )}
    </>
  );
}
