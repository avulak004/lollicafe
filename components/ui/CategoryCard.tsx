"use client";

import React from "react";
import Image from "next/image";
import { CategoryInfo, FoodCategory } from "@/types/menu";

interface CategoryCardProps {
  category: CategoryInfo;
  isActive?: boolean;
  onSelect?: (id: FoodCategory) => void;
}

export function CategoryCard({ category, isActive = false, onSelect }: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(category.id)}
      className={`group relative flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer shrink-0 min-w-[125px] sm:min-w-0 border ${
        isActive
          ? "bg-[#4A2618] text-[#FFF9F0] border-[#4A2618] shadow-md -translate-y-1"
          : "bg-[#FFF9F0] text-[#24140F] border-[#4A2618]/12 hover:border-[#4A2618]/30 shadow-xs hover:shadow-sm hover:-translate-y-0.5"
      }`}
    >
      {/* Category Food Picture */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-3 bg-[#EFE5D6] shadow-xs ring-2 ring-white/60 group-hover:scale-105 transition-transform duration-300">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Category Name */}
      <h3
        className={`text-xs sm:text-sm font-serif font-bold tracking-tight mb-0.5 ${
          isActive ? "text-[#FFF9F0]" : "text-[#24140F] group-hover:text-[#6B3821]"
        }`}
      >
        {category.name}
      </h3>

      {/* Item Count Badge */}
      <span
        className={`text-[10px] font-semibold tracking-wide ${
          isActive ? "text-[#D4C4B4]" : "text-[#74665D]"
        }`}
      >
        {category.itemCount} items
      </span>
    </button>
  );
}

export default CategoryCard;
