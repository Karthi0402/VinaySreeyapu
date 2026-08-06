// src/components/sections/GetInTouch.tsx
"use client";

import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import GradientText from "../ui/GradientText";
import TypingText from "../ui/TypingText";

const greetings = [
  { text: "안녕하세요", lang: "ko" },
  { text: "नमस्ते", lang: "hi" },
  { text: "Hola", lang: "es" },
  { text: "Bonjour", lang: "fr" },
  { text: "Ciao", lang: "it" },
  { text: "Hello", lang: "en" },
  { text: "నమస్కారం", lang: "te" },
  { text: "வணக்கம்", lang: "ta" },
];

const EMAIL_LOCAL = "VINAYSREEYAPU";
const EMAIL_DOMAIN = "GMAIL.COM";
const EMAIL_PLAIN = `${EMAIL_LOCAL}@${EMAIL_DOMAIN}`;

// ---- Entrance orchestration ----
const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Letter-mask reveal, grouped per word
const wordContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const letterVariants: Variants = {
  hidden: { y: "100%", opacity: 0, filter: "blur(10px)" },
  visible: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

function AnimatedWord({ word }: { word: string }) {
  return (
    <span className="inline-flex overflow-hidden">
      <motion.span variants={wordContainer} className="inline-flex">
        {word.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}

const socialContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

/**
 * Drop-in replacement for the old `useFitText` import — same name, same
 * return shape (`containerRef`, `textRef`, `fontSize`), so nothing else
 * in this file had to change. This is a self-contained, mobile-safe
 * version that fixes the "not showing on some mobile screens" bug:
 *
 * 1. SSR-safe — never touches `window`/`document` on the server.
 * 2. Starts from a CSS `clamp()` fallback instead of 0/undefined, so the
 *    email is ALWAYS visible on first paint, even before JS measures
 *    anything.
 * 3. Waits for `document.fonts.ready` before trusting a measurement —
 *    measuring against a fallback system font (common on slower mobile
 *    connections where the custom font arrives late) gives the wrong
 *    width and was very likely the root cause here.
 * 4. Uses ResizeObserver on the actual container, not just `window`
 *    resize, so it recalculates on orientation change / mobile browser
 *    chrome show-hide, which don't reliably fire a resize event.
 * 5. Clamps the result so it can never compute to 0, NaN, or overflow.
 */
function useFitText({
  baseFontSize = 100,
  minFontSize = 24,
  maxFontSize = 102,
}: {
  baseFontSize?: number;
  minFontSize?: number;
  maxFontSize?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const fallback = `clamp(${minFontSize}px, 8vw, ${maxFontSize}px)`;
  const [fontSize, setFontSize] = useState<number | string>(fallback);

  const recalc = useCallback(() => {
    const container = containerRef.current;
    const measure = textRef.current;
    if (!container || !measure) return;

    const containerWidth = container.offsetWidth;
    const textWidth = measure.scrollWidth;

    if (!containerWidth || !textWidth) return;

    const computed = (containerWidth / textWidth) * baseFontSize;
    if (!Number.isFinite(computed) || computed <= 0) return;

    const clamped = Math.min(maxFontSize, Math.max(minFontSize, computed));
    setFontSize(clamped);
  }, [baseFontSize, minFontSize, maxFontSize]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;
    const run = () => {
      if (!cancelled) recalc();
    };

    run();

    if ("fonts" in document) {
      document.fonts.ready.then(run).catch(() => {});
    }

    const ro = new ResizeObserver(() => run());
    if (containerRef.current) ro.observe(containerRef.current);

    window.addEventListener("resize", run);
    window.addEventListener("orientationchange", run);

    return () => {
      cancelled = true;
      ro.disconnect();
      window.removeEventListener("resize", run);
      window.removeEventListener("orientationchange", run);
    };
  }, [recalc]);

  return { containerRef, textRef, fontSize };
}

export default function GetInTouch() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isLocHovered, setIsLocHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [copied, setCopied] = useState(false);

  // Measures the container and computes the font-size that makes the email
  // span exactly 100% of the available width, at any viewport size.
  // maxFontSize is capped at 102px to match the Figma reference size.
  const { containerRef, textRef, fontSize } = useFitText({
    baseFontSize: 100,
    minFontSize: 24,
    maxFontSize: 102,
  });

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL_PLAIN);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(formatter.format(now).replace(" ", ""));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full h-[calc(100dvh-200px)] flex flex-col justify-center"
    >
      {/* CENTER BLOCK */}
      <div className="relative w-full px-6 md:px-12 flex flex-col justify-center">
        {/* Top Left Pinned: Greeting */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-full left-6 md:left-12 mb-0 md:mb-0 h-5 md:h-6 w-24 overflow-hidden font-brand text-[#FFD100]/80 text-[10px] md:text-xs tracking-[0.2em]"
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={greetingIndex}
              lang={greetings[greetingIndex].lang}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [20, -6, 0], opacity: [0, 1, 1] }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                duration: 0.6,
                times: [0, 0.6, 1],
                ease: ["easeOut", "easeIn"],
              }}
              className={`text-gold-radial-figma text-[16px] absolute top-0 left-0 leading-normal leading-[21px] tracking-normal font-brand`}
            >
              {greetings[greetingIndex].text}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main Title: Email — fills 100% of the available width at any screen size.
            overflow-x-auto is a last-resort safety net: on an unusually narrow
            device where even minFontSize can't fully fit, the text stays fully
            visible and scrollable instead of silently clipping/disappearing. */}
        <div
          ref={containerRef}
          className="w-full overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Hidden measuring node: same font/tracking as the visible title,
              rendered at baseFontSize, used only to compute scrollWidth. */}
          <span
            ref={textRef}
            aria-hidden="true"
            className="font-nightwatch tracking-[-0.02em] whitespace-nowrap invisible absolute -z-10 pointer-events-none"
            style={{ fontSize: 100, left: 0, top: 0 }}
          >
            {EMAIL_PLAIN}
          </span>

          <h1
            className="w-full font-nightwatch leading-[1.1] py-4 tracking-[-0.02em] text-gold-radial-figma cursor-default flex items-center justify-start gap-[0.5vw] whitespace-nowrap"
            style={{ fontSize }}
          >
            <AnimatedWord word={EMAIL_LOCAL} />
            <span style={{ fontSize: "0.65em", verticalAlign: "middle" }}>
              <AnimatedWord word="@" />
            </span>
            <AnimatedWord word={EMAIL_DOMAIN} />
          </h1>
        </div>

        {/* Bottom Right Pinned: Copy Button */}
        <motion.button
          variants={fadeUp}
          onClick={handleCopy}
          className="self-end -mt-2 font-brand uppercase tracking-[0.2em] text-[10px] text-[#FFD100]/60 hover:text-[#FFD100] transition-colors cursor-pointer"
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
        </motion.button>
      </div>

      {/* --- FAR BOTTOM LEFT: Hoverable Location & Time --- */}
      <motion.div
        variants={fadeUp}
        className="absolute bottom-4 md:bottom-8 left-6 md:left-12 font-brand text-[#FFD100]/70 text-[10px] md:text-xs tracking-[0.2em] cursor-pointer group"
        onMouseEnter={() => setIsLocHovered(true)}
        onMouseLeave={() => setIsLocHovered(false)}
      >
        <div className="relative h-10 flex flex-col justify-end">
          <AnimatePresence mode="wait">
            {!isLocHovered ? (
              <motion.div
                key="coords"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-gold-radial-figma font-brand text-[14px] flex flex-col gap-1"
              >
                <span>17°23&apos;N</span>
                <span>78°29&apos;E</span>
              </motion.div>
            ) : (
              <motion.div
                key="time"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-gold-radial-figma font-brand text-[14px] flex flex-col gap-1"
              >
                <TypingText
                  key={`city-${isLocHovered}`}
                  text="HYDERABAD"
                  speed={40}
                  className="text-gold-radial-figma"
                />

                <TypingText
                  key={`time-${currentTime}-${isLocHovered}`}
                  text={`IST ${currentTime}`}
                  speed={40}
                  delay={500}
                  className="text-gold-radial-figma"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* --- FAR BOTTOM RIGHT: Social Links --- */}
      <motion.div
        variants={socialContainer}
        className="absolute bottom-4 md:bottom-8 right-6 md:right-12 flex flex-col items-end gap-2 font-brand text-[#FFD100]/70 text-[10px] md:text-xs tracking-[0.2em] uppercase"
      >
        <motion.div variants={fadeUp}>
          <GradientText href="https://www.behance.net/vinayrsreeyap">
            Behance
          </GradientText>
        </motion.div>
        <motion.div variants={fadeUp}>
          <GradientText href="https://www.linkedin.com/in/vinayreddysr">
            LINKEDIN
          </GradientText>
        </motion.div>
        <motion.div variants={fadeUp}>
          <GradientText href="https://www.instagram.com/sreeyapu_vinayreddy">
            INSTAGRAM
          </GradientText>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}