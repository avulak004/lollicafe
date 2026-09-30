"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MenuItem } from "@/types/menu";
import { formatINR } from "@/lib/formatCurrency";
import { VegBadge } from "./VegBadge";

interface FoodCardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem, quantity: number) => void;
  compact?: boolean;
}

export function FoodCard({ item, onAddToCart, compact = false }: FoodCardProps) {
  const [quantity, setQuantity] = useState(0);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextQty = quantity === 0 ? 1 : quantity + 1;
    setQuantity(nextQty);
    setIsAddedFeedback(true);
    if (onAddToCart) {
      onAddToCart(item, 1);
    }
    setTimeout(() => setIsAddedFeedback(false), 900);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextQty = quantity + 1;
    setQuantity(nextQty);
    if (onAddToCart) {
      onAddToCart(item, 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextQty = Math.max(0, quantity - 1);
    setQuantity(nextQty);
    if (onAddToCart) {
      onAddToCart(item, -1);
    }
  };

  return (
    <div className="group relative flex flex-col justify-between bg-[#FFF9F0] rounded-2xl overflow-hidden border border-[#4A2618]/12 shadow-[0_2px_10px_rgba(36,20,15,0.04)] hover:shadow-[0_12px_28px_rgba(36,20,15,0.09)] hover:-translate-y-1 transition-all duration-300">
      {/* Large Image Container */}
      <div className={`relative w-full overflow-hidden bg-[#EFE5D6] ${compact ? "h-36 sm:h-40" : "h-48 sm:h-52"}`}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Subtle Dark Vignette on Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 pointer-events-none" />

        {/* Veg / Non-Veg Indicator */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <div className="bg-[#FFF9F0]/95 backdrop-blur-xs px-1.5 py-1 rounded-md shadow-xs">
            <VegBadge isVeg={item.isVeg} showLabel={false} />
          </div>
          {item.tag && (
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#B9552D] text-white shadow-xs">
              {item.tag}
            </span>
          )}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md text-white text-[11px] font-bold z-10">
          <span className="text-[#FBBF24]">★</span>
          <span>{item.rating.toFixed(1)}</span>
        </div>

        {/* Bottom Prep Time */}
        {item.prepTime && (
          <div className="absolute bottom-2 left-3 text-[10px] font-semibold text-stone-200 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-sm">
            ⏱️ {item.prepTime}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="mb-1">
          <h3 className="text-base sm:text-lg font-serif font-bold text-[#24140F] group-hover:text-[#6B3821] transition-colors line-clamp-1">
            {item.name}
          </h3>
        </div>

        <p className="text-xs text-[#74665D] leading-relaxed line-clamp-2 mb-4 flex-1 font-normal">
          {item.description}
        </p>

        {/* Price & Add Button Row */}
        <div className="pt-3 border-t border-[#4A2618]/8 flex items-center justify-between mt-auto">
          <div>
            <span className="text-lg sm:text-xl font-extrabold text-[#24140F] tracking-tight font-sans">
              {formatINR(item.price)}
            </span>
          </div>

          {/* Interactive Add or Quantity Button */}
          {quantity > 0 ? (
            <div className="flex items-center gap-1 bg-[#F7EFE3] border border-[#4A2618]/20 rounded-xl p-1 shadow-xs">
              <button
                type="button"
                onClick={handleDecrement}
                aria-label="Decrease quantity"
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#FFF9F0] text-[#24140F] font-bold hover:bg-[#EFE5D6] active:scale-95 transition-all text-xs cursor-pointer"
              >
                −
              </button>
              <span className="w-5 text-center text-xs font-bold text-[#24140F]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                aria-label="Increase quantity"
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#24140F] text-white font-bold hover:bg-[#4A2618] active:scale-95 transition-all text-xs cursor-pointer"
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAddClick}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                isAddedFeedback
                  ? "bg-[#405548] text-white scale-95 shadow-xs"
                  : "bg-[#B9552D] hover:bg-[#D47A45] text-white shadow-xs hover:shadow-sm"
              }`}
            >
              {isAddedFeedback ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Added</span>
                </>
              ) : (
                <>
                  <span>+ Add</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
