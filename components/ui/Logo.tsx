import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light" | "cream";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  href?: string;
  className?: string;
}

export function Logo({
  variant = "light",
  size = "md",
  showTagline = true,
  href = "#home",
  className = "",
}: LogoProps) {
  const isDarkOnLight = variant === "dark";

  const sizeClasses = {
    sm: {
      symbol: "w-7 h-7 text-xs",
      text: "text-lg",
      tagline: "text-[8.5px]",
    },
    md: {
      symbol: "w-9 h-9 text-sm",
      text: "text-xl sm:text-2xl",
      tagline: "text-[9.5px]",
    },
    lg: {
      symbol: "w-11 h-11 text-base",
      text: "text-2xl sm:text-3xl",
      tagline: "text-[11px]",
    },
  }[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Botanical Leaf & Coffee Cup Icon */}
      <div
        className={`flex items-center justify-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105 shrink-0 ${
          sizeClasses.symbol
        } ${
          isDarkOnLight
            ? "bg-[#24140F] text-[#FFF9F0]"
            : "bg-[#FFF9F0] text-[#24140F]"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4/6 h-4/6"
        >
          {/* Coffee cup + botanical leaf accent */}
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <path d="M7 2c.5 1.5 2 2.5 2 3.5" />
          <path d="M11 2c.5 1.5 2 2.5 2 3.5" />
          <path d="M15 2c.5 1.5 2 2.5 2 3.5" />
        </svg>
      </div>

      {/* Wordmark in Serif */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-tight leading-none ${sizeClasses.text} ${
            isDarkOnLight
              ? "text-[#24140F]"
              : "text-[#FFF9F0]"
          }`}
        >
          Lolli<span className="text-[#D47A45] font-serif">Cafe</span>
        </span>
        {showTagline && (
          <span
            className={`font-sans tracking-widest uppercase mt-0.5 font-semibold ${
              sizeClasses.tagline
            } ${
              isDarkOnLight
                ? "text-[#74665D]"
                : "text-[#D4C4B4]"
            }`}
          >
            Specialty Coffee & Dining
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="cursor-pointer inline-block">
        {content}
      </Link>
    );
  }

  return content;
}

export default Logo;
