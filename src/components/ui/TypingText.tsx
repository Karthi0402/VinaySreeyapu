"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypingText({
  text,
  speed = 50,
  delay = 0,
  className = "",
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      let index = 0;

      interval = setInterval(() => {
        index++;

        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  return <span className={className}>{displayed}</span>;
}