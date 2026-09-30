import React from "react";

interface BrandWatermarkProps {
  variant?: "leaf" | "coffee" | "botanical" | "badge";
  className?: string;
  opacity?: number;
}

export function BrandWatermark({
  variant = "leaf",
  className = "",
  opacity = 0.04,
}: BrandWatermarkProps) {
  return (
    <div
      aria-hidden="true"
      style={{ opacity }}
      className={`absolute pointer-events-none select-none text-[#24140F] ${className}`}
    >
      {variant === "leaf" && (
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M50 5 C25 25 15 55 25 80 C40 95 75 90 85 65 C95 40 75 15 50 5 Z M50 20 C60 40 60 70 45 85 M35 45 C45 50 55 45 65 40 M30 65 C40 68 50 62 60 58" />
        </svg>
      )}

      {variant === "botanical" && (
        <svg viewBox="0 0 140 140" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
          <path d="M70 10 C40 40 20 80 70 130 C120 80 100 40 70 10 Z" />
          <path d="M70 10 V130" />
          <path d="M70 40 Q45 60 35 75 M70 65 Q45 85 40 100 M70 40 Q95 60 105 75 M70 65 Q95 85 100 100" />
        </svg>
      )}

      {variant === "coffee" && (
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M20 30 H70 V65 C70 80 55 90 45 90 C35 90 20 80 20 65 Z M70 40 H85 C90 40 92 55 85 60 H70 Z M30 15 Q35 5 40 15 T50 15 M45 15 Q50 5 55 15 T65 15" />
        </svg>
      )}

      {variant === "badge" && (
        <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <circle cx="60" cy="60" r="54" strokeDasharray="5 5" />
          <circle cx="60" cy="60" r="44" />
          <path d="M42 60 L54 48 L78 72 M60 38 V82" />
        </svg>
      )}
    </div>
  );
}

export default BrandWatermark;
