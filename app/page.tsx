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


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <SplashScreen
            duration={3.5}
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          // CRITICAL FIX: Changed overflow-hidden to overflow-x-hidden so vertical scrolling works!
          className="min-h-screen flex flex-col relative overflow-x-hidden"
        >
          {/* If you want the Navbar to follow you down the page, change its class inside Navbar.tsx to 'fixed top-0' */}
          <Navbar />

          <main className="w-full relative">
            
            {/* 1. Added ID for HOME (Hero + Intro) */}
            <div id="home">
              <Hero />
              <Intro />
            </div>

            {/* 2. Added ID for WORKS */}
            <div id="works">
              <RecentWorks />
            </div>

            {/* MyProblems doesn't have a nav link, so it just sits in the flow normally */}
            <MyProblems />

            {/* 3. Added ID for CONTACT */}
            <div id="contact">
              <Contact />
            </div>

          </main>
        </motion.div>
      )}
    </>
  );
}