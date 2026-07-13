import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function GradientText({
  children,
  href = "#",
  className = "",
}: GradientTextProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-block uppercase font-medium ${className}`}
    >
      {/* Default */}
      <span
        className="
          block
          bg-[radial-gradient(circle,#FFD100_0%,#60510A_100%)]
          bg-clip-text
          text-transparent
          transition-opacity
          duration-300
          group-hover:opacity-0
        "
      >
        {children}
      </span>

      {/* Hover */}
      <span
        className="
          absolute
          inset-0
          opacity-0
          bg-[radial-gradient(circle,#60510A_0%,#FFD100_100%)]
          bg-clip-text
          text-transparent
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      >
        {children}
      </span>
    </a>
  );
}