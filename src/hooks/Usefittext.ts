// src/hooks/useFitText.ts
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Avoids SSR warnings for useLayoutEffect
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface UseFitTextOptions {
  /** Font size (px) used as the baseline for measuring text width. */
  baseFontSize?: number;
  /** Smallest font size (px) allowed, so it never shrinks to nothing on tiny screens. */
  minFontSize?: number;
  /** Largest font size (px) allowed, so it never blows up on huge screens. */
  maxFontSize?: number;
}

/**
 * Measures the width of `containerRef` and `textRef` (rendered at `baseFontSize`)
 * and returns the font size (px) that makes the text exactly fill the container's
 * width. Recalculates on resize and on font load, so it stays accurate responsively.
 */
export function useFitText({
  baseFontSize = 100,
  minFontSize = 12,
  maxFontSize = 400,
}: UseFitTextOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState<number>(baseFontSize);

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const calculate = () => {
      const containerWidth = container.offsetWidth;
      const textWidth = text.scrollWidth;
      if (!containerWidth || !textWidth) return;

      const ratio = containerWidth / textWidth;
      const next = Math.min(
        maxFontSize,
        Math.max(minFontSize, baseFontSize * ratio)
      );
      setFontSize(next);
    };

    calculate();

    const resizeObserver = new ResizeObserver(() => calculate());
    resizeObserver.observe(container);

    // Recalculate once custom fonts finish loading (metrics can shift).
    if (document?.fonts?.ready) {
      document.fonts.ready.then(calculate);
    }

    window.addEventListener("resize", calculate);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculate);
    };
  }, [baseFontSize, minFontSize, maxFontSize]);

  return { containerRef, textRef, fontSize };
}