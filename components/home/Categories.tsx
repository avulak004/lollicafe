"use client";

import React from "react";
import { CATEGORIES } from "@/data/mockData";
import { FoodCategory } from "@/types/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "@/components/ui/CategoryCard";

interface CategoriesProps {
  activeCategory: FoodCategory;
  onSelectCategory: (category: FoodCategory) => void;
}

export function Categories({ activeCategory, onSelectCategory }: CategoriesProps) {
  const handleCategoryClick = (id: FoodCategory) => {
    onSelectCategory(id);
    const menuEl = document.getElementById("menu");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="py-14 sm:py-20 bg-[#F7EFE3] border-b border-[#4A2618]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="EXPLORE OUR"
          title="Curated"
          highlightText="Categories"
          subtitle="From morning espresso and breakfast croissants to wood-fired pizzas and refreshing mocktails."
        />

        {/* Category Horizontal Scroll Container */}
        <div className="mt-8 sm:mt-10">
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-4 pt-1 scrollbar-none px-1">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                category={cat}
                isActive={activeCategory === cat.id}
                onSelect={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
