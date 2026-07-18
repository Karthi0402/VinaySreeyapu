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
          font-brand
          text-transparent
          transition-opacity
          duration-300
          group-hover:opacity-0

          text-[14px] md:text-[18px] font-medium leading-normal tracking-normal
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
          font-brand
          text-transparent
          transition-opacity
          duration-300
          group-hover:opacity-100

          tracking-normal text-[12px] leading-[17px]
          sm:text-[15px] sm:leading-[20px]
          md:text-[16px] md:leading-[21px]
          lg:text-[17px] lg:leading-[22px]
          xl:text-[18px] xl:leading-[23px]
        "
      >
        {children}
      </span>
    </a>
  );
}
