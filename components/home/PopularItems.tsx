"use client";

import React from "react";
import { MENU_ITEMS } from "@/data/mockData";
import { MenuItem } from "@/types/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FoodCard } from "@/components/ui/FoodCard";

interface PopularItemsProps {
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export function PopularItems({ onAddToCart }: PopularItemsProps) {
  const popularNames = [
    "Cappuccino",
    "Cold Coffee",
    "Caramel Frappe",
    "Masala Chai",
    "Classic Matcha Latte",
    "Hot Chocolate",
    "Lemon Iced Tea",
    "Chicken Burger",
    "Margherita",
    "Tiramisu",
  ];

  const popularItems = MENU_ITEMS.filter((item) =>
    popularNames.includes(item.name)
  ).slice(0, 8);

  return (
    <section id="popular" className="py-16 sm:py-24 bg-[#F7EFE3] border-b border-[#4A2618]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            badge="CHEF RECOMMENDS"
            title="Popular at"
            highlightText="LolliCafe"
            subtitle="Our most loved beverages, gourmet burgers, wood-fired slices, and desserts."
            centered={false}
          />

          <a
            href="#menu"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#B9552D] hover:text-[#4A2618] transition-colors self-start sm:self-auto"
          >
            <span>View All Menu</span>
            <span>→</span>
          </a>
        </div>

        {/* 4-Column Grid on Desktop, 2-Column on Mobile/Tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {popularItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularItems;
