"use client";

import { useEffect } from "react";

export default function TabObserver() {
  useEffect(() => {
    let originalTitle = document.title;
    
    // Create a link element for our dynamic favicon swapping
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    
    // Store the original href (which Next.js sets via your icon.svg)
    const originalFavicon = link.href;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User switched tabs - change title and (optionally) change favicon to an emoji
        document.title = "COME BACK! 🥺";
        
        // This generates a tiny SVG with a waiting emoji on the fly!
        link!.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⏳</text></svg>";
      } else {
        // User came back - restore everything instantly
        document.title = originalTitle;
        link!.href = originalFavicon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render any UI
}