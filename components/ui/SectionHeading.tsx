import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlightText,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-3 transition-all ${
            light
              ? "bg-[#FFF9F0]/15 text-[#D47A45] border border-[#FFF9F0]/20"
              : "bg-[#4A2618]/8 text-[#6B3821] border border-[#6B3821]/15"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B9552D]" />
          {badge}
        </span>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-tight ${
          light ? "text-[#FFF9F0]" : "text-[#24140F]"
        }`}
      >
        {title}{" "}
        {highlightText && (
          <span className="font-serif italic text-[#B9552D]">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-3.5 max-w-2xl text-sm sm:text-base leading-relaxed ${
            light ? "text-[#D4C4B4]" : "text-[#74665D]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
