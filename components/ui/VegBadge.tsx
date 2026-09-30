import React from "react";

interface VegBadgeProps {
  isVeg: boolean;
  showLabel?: boolean;
  className?: string;
}

export function VegBadge({ isVeg, showLabel = false, className = "" }: VegBadgeProps) {
  if (isVeg) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 select-none ${className}`}
        title="Vegetarian"
      >
        <span className="relative flex items-center justify-center w-3.5 h-3.5 border-[1.5px] border-[#2E7D32] rounded-[3px] bg-white p-[1.5px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
        </span>
        {showLabel && (
          <span className="text-[11px] font-bold text-[#2E7D32] tracking-wide">
            Veg
          </span>
        )}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 select-none ${className}`}
      title="Non-Vegetarian"
    >
      <span className="relative flex items-center justify-center w-3.5 h-3.5 border-[1.5px] border-[#C62828] rounded-[3px] bg-white p-[1.5px]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]" />
      </span>
      {showLabel && (
        <span className="text-[11px] font-bold text-[#C62828] tracking-wide">
          Non-Veg
        </span>
      )}
    </span>
  );
}

export default VegBadge;
