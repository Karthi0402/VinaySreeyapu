"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "../ui/GradientText";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);
  const [ambientParticles, setAmbientParticles] = useState<any[]>([]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("VINAYSREEYAPU@GMAIL.COM");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  useEffect(() => {
    setParticles(
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        size: 3 + Math.random() * 4,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
        radius: 24 + Math.random() * 36,
      })),
    );

    setAmbientParticles(
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        size: 2 + Math.random() * 2,
        delay: Math.random() * 4,
        duration: 5 + Math.random() * 3,
        radius: 30 + Math.random() * 40,
      })),
    );
  }, []);

  return (
    // FIX: Removed `min-h-screen` and `justify-between` so it doesn't stretch artificially
    <section className="relative overflow-hidden w-full px-6 lg:px-20 pt-20 pb-12 flex flex-col mt-12 md:mt-44">
      {/* --- TOP SECTION --- */}
      <div className="flex justify-end">
        <div className="flex flex-col items-start">
          <p
            className="font-brand tracking-normal text-gold-radial-figma uppercase text-[10px] leading-[17px]
sm:text-[11px] sm:leading-[18px]
md:text-[12px] md:leading-[19px]
lg:text-[13px] lg:leading-[20px]
xl:text-[14px] xl:leading-[px]"
          >
            HUGE THANKS TO
          </p>

          <div
            className="relative inline-block mt-2 mb-2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Continuous ambient halo */}
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
              className="relative z-20 font-brand uppercase tracking-normal text-gold-radial-figma text-sm inline-block cursor-pointer text-[10px] leading-[17px]
sm:text-[11px] sm:leading-[18px]
md:text-[12px] md:leading-[19px]
lg:text-[13px] lg:leading-[20px]
xl:text-[14px] xl:leading-[px]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFD100 0%, #fff6c0 20%, #FFD100 40%, #b8860b 60%, #FFD100 80%, #fff6c0 100%)",
                backgroundSize: "300% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              animate={{
                backgroundPosition: ["0% center", "300% center"],
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

            {/* Classic underline */}
            <motion.div
              aria-hidden
              className="absolute left-1/2 -bottom-0.5 h-[1px] bg-gradient-to-r from-transparent via-[#FFD100] to-transparent pointer-events-none"
              style={{ x: "-50%" }}
              animate={{ width: ["0%", "90%", "0%"], opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Ambient sparkles */}
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

            {/* Hover burst */}
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

          <p
            className="font-brand tracking-normal text-gold-radial-figma uppercase text-[10px] leading-[17px]
sm:text-[11px] sm:leading-[18px]
md:text-[12px] md:leading-[19px]
lg:text-[13px] lg:leading-[20px]
xl:text-[14px] xl:leading-[px]"
          >
            FOR THE DEVELOPMENT.
          </p>
        </div>
      </div>

      {/* --- BOTTOM SECTION (Your Email & Socials) --- */}
      {/* FIX: Changed `mt-auto` to a specific margin `mt-24 md:mt-32` so the gap is perfectly controlled */}
      <div className="w-full mt-24 md:mt-52">
        <div className="w-full flex flex-col items-start">
          <motion.h2
            className="font-nightwatch leading-none tracking-normal whitespace-nowrap text-gold-radial-figma cursor-default text-[clamp(1.5rem,6vw,4.5rem)]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            vinaysreeyapu
            <span
              style={{ fontSize: "0.65em", verticalAlign: "middle" }}
              className="mx-1"
            >
              @
            </span>
            gmail.com
          </motion.h2>

          <button
            onClick={handleCopy}
            className="mt-2 font-brand uppercase tracking-[0.2em] text-[10px] text-[#FFD100]/60 hover:text-[#FFD100] transition-colors cursor-pointer"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={copied ? "copied" : "copy"}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                {copied ? "COPIED" : "COPY EMAIL"}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Social row */}
        <div className="mt-12 lg:mt-16 flex justify-start md:justify-end gap-8 lg:gap-14 flex-wrap">
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
