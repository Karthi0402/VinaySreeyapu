"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

export default function SplashScreen({
  onComplete,
  duration = 3,
}: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentProgress = 0;
    
    // Convert duration to milliseconds
    const totalTime = duration * 1000; 
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;

      // 1. If time is up, force 100% and finish
      if (elapsed >= totalTime) {
        setProgress(100);
        setTimeout(() => onComplete(), 400); // Tiny pause at 100 before unmounting
        return;
      }

      // 2. Calculate roughly where we SHOULD be based on time
      const timeRatio = elapsed / totalTime;
      const baselineProgress = Math.floor(timeRatio * 100);

      // 3. Add a random "boost" to make it skip numbers, but never exceed 99
      const randomBoost = Math.floor(Math.random() * 15);
      currentProgress = Math.min(baselineProgress + randomBoost, 99);
      
      setProgress(currentProgress);

      // 4. Create a random pause before the next number jump (between 100ms and 450ms)
      const nextDelay = Math.floor(Math.random() * 350) + 100;
      timeoutId = setTimeout(updateProgress, nextDelay);
    };

    // Start the first jump shortly after mounting
    timeoutId = setTimeout(updateProgress, 150);

    return () => clearTimeout(timeoutId);
  }, [duration, onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 pointer-events-none"
    >
      <div className="absolute top-1/2 left-0 w-full h-[6px] -translate-y-1/2 bg-track-dark">
        {/* The Gold Loading Line - Now synced to the jumping numbers! */}
        <motion.div
          className="h-full bg-gold-radial"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }} 
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        />
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12">
        <span className="text-gold-radial text-6xl md:text-8xl font-nightwatch tracking-tighter">
          {progress.toString().padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}