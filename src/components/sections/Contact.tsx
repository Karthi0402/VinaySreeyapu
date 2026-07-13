"use client";

import { useState, useMemo, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "../ui/GradientText";

function useFitText(maxFontSize: number, minFontSize = 20) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useLayoutEffect(() => {
    function fit() {
      if (!containerRef.current || !textRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;

      // Measure natural width at max size first
      textRef.current.style.fontSize = `${maxFontSize}px`;
      const naturalWidth = textRef.current.scrollWidth;

      const ratio = containerWidth / naturalWidth;
      const next = Math.min(
        maxFontSize,
        Math.max(minFontSize, maxFontSize * ratio),
      );

      setFontSize(next);
    }

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [maxFontSize, minFontSize]);

  return { containerRef, textRef, fontSize };
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const { containerRef, textRef, fontSize } = useFitText(150, 28);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("VINAYSREEYAPU@GMAIL.COM");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const particles = useMemo(() => {
    return Array.from({ length: 16 }, (_, i) => ({
      id: i,
      size: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      radius: 24 + Math.random() * 36,
    }));
  }, []);

  const ambientParticles = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: 2 + Math.random() * 2,
      delay: Math.random() * 4,
      duration: 5 + Math.random() * 3,
      radius: 30 + Math.random() * 40,
    }));
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen px-8 lg:px-20 pt-20 pb-16 flex flex-col justify-between">
      {/* --- TOP SECTION --- */}
      <div className="flex justify-end">
        <div className="text-right">
          <p className="font-brand text-[10px] tracking-[0.2em] uppercase text-[#FFD100]/60">
            HUGE THANKS TO
          </p>

          <div
            className="relative inline-block mt-2 mb-2 px-2 py-1"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Continuous ambient halo - breathes gently at all times, independent of hover */}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full blur-xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,209,0,0.35), transparent 70%)",
              }}
              animate={{
                opacity: hovered ? [0.4, 0.75, 0.4] : [0.15, 0.35, 0.15],
                scale: hovered ? [0.95, 1.1, 0.95] : [0.9, 1, 0.9],
              }}
              transition={{
                duration: hovered ? 1.8 : 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.a
              href="https://www.linkedin.com/in/karthi0402/"
              target="_blank"
              className="relative z-20 font-brand uppercase tracking-[0.15em] text-sm inline-block cursor-pointer"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFD100 0%, #fff6c0 20%, #FFD100 40%, #b8860b 60%, #FFD100 80%, #fff6c0 100%)",
                backgroundSize: "300% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              animate={{
                // Slow, classic gold shimmer sweep - always running
                backgroundPosition: ["0% center", "300% center"],
                // Soft continuous glow pulse, intensifying further on hover
                filter: hovered
                  ? [
                      "drop-shadow(0 0 4px rgba(255,209,0,.5))",
                      "drop-shadow(0 0 18px rgba(255,209,0,1))",
                      "drop-shadow(0 0 6px rgba(255,209,0,.6))",
                    ]
                  : [
                      "drop-shadow(0 0 2px rgba(255,209,0,.25))",
                      "drop-shadow(0 0 8px rgba(255,209,0,.55))",
                      "drop-shadow(0 0 2px rgba(255,209,0,.25))",
                    ],
              }}
              transition={{
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                filter: {
                  duration: hovered ? 1.4 : 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              VENKATA KARTHEEK
            </motion.a>

            {/* Classic underline that draws in and fades, on a continuous loop */}
            <motion.div
              aria-hidden
              className="absolute left-1/2 -bottom-0.5 h-[1px] bg-gradient-to-r from-transparent via-[#FFD100] to-transparent pointer-events-none"
              style={{ x: "-50%" }}
              animate={{ width: ["0%", "90%", "0%"], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Ambient sparkles - always drifting, subtle */}
            {ambientParticles.map((p) => {
              const angle = (360 / ambientParticles.length) * p.id;
              return (
                <motion.span
                  key={`ambient-${p.id}`}
                  className="absolute rounded-full bg-[#FFD100] pointer-events-none"
                  style={{
                    width: p.size,
                    height: p.size,
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0, 1, 0],
                    x: [0, Math.cos((angle * Math.PI) / 180) * p.radius, 0],
                    y: [0, Math.sin((angle * Math.PI) / 180) * p.radius, 0],
                  }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })}

            {/* Hover burst - amplifies the ambient sparkle into a fuller ring on hover */}
            <AnimatePresence>
              {hovered &&
                particles.map((p) => {
                  const angle = (360 / particles.length) * p.id;
                  return (
                    <motion.span
                      key={p.id}
                      className="absolute rounded-full bg-[#FFD100] pointer-events-none"
                      style={{
                        width: p.size,
                        height: p.size,
                        left: "50%",
                        top: "50%",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 0.9, 0.7, 0],
                        scale: [0, 1.2, 0.8, 0],
                        x: [
                          0,
                          Math.cos((angle * Math.PI) / 180) * p.radius,
                          Math.cos((angle * Math.PI) / 180) * (p.radius + 8),
                          0,
                        ],
                        y: [
                          0,
                          Math.sin((angle * Math.PI) / 180) * p.radius,
                          Math.sin((angle * Math.PI) / 180) * (p.radius + 8),
                          0,
                        ],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}
            </AnimatePresence>
          </div>

          <p className="font-brand text-[10px] tracking-[0.2em] uppercase text-[#FFD100]/60">
            FOR THE DEVELOPMENT.
          </p>
        </div>
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div className="mt-auto">
        {/* FIX: Removed overflow-x-hidden, added generous top/bottom padding, and set leading-normal */}
        <div ref={containerRef} className="w-full py-6 flex items-center">
          <motion.h2
            ref={textRef}
            style={{ fontSize: `${fontSize}px` }}
            className="font-nightwatch leading-normal tracking-[-0.02em] whitespace-nowrap text-gold-radial-figma cursor-default inline-block"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            VINAYSREEYAPU
            {/* By using 0.6em, the @ will always be exactly 60% of the surrounding text size, keeping it proportional no matter how big the screen is! */}
            <span
              style={{ fontSize: "0.6em", verticalAlign: "middle" }}
              className="mx-1"
            >
              @
            </span>
            GMAIL.COM
          </motion.h2>
        </div>

        {/* Copy Email */}
        <button
          onClick={handleCopy}
          className="mt-2 block font-brand uppercase tracking-[0.2em] text-[10px] text-[#FFD100]/60 hover:text-[#FFD100] transition-colors cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={copied ? "copied" : "copy"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="inline-block"
            >
              {copied ? "COPIED ✓" : "COPY EMAIL"}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* Social row */}
        <div className="mt-10 lg:mt-12 flex justify-end gap-10 lg:gap-14">
          <GradientText href="https://www.behance.net/vinayrsreeyap">
            Behance
          </GradientText>
          <GradientText href="https://www.linkedin.com/in/vinayreddysr">
            LINKEDIN
          </GradientText>
          <GradientText href="https://www.instagram.com/sreeyapu_vinayreddy">
            INSTAGRAM
          </GradientText>
        </div>
      </div>
    </section>
  );
}
