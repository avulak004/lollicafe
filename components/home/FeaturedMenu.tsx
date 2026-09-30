"use client";

import React, { useState, useMemo } from "react";
import { MENU_ITEMS } from "@/data/mockData";
import { FoodCategory, MenuItem } from "@/types/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FoodCard } from "@/components/ui/FoodCard";
import { BrandWatermark } from "@/components/ui/BrandWatermark";

interface FeaturedMenuProps {
  activeCategory: FoodCategory;
  onSelectCategory: (category: FoodCategory) => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
  onOpenOrderModal: () => void;
}

export function FeaturedMenu({
  activeCategory,
  onSelectCategory,
  onAddToCart,
  onOpenOrderModal,
}: FeaturedMenuProps) {
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [isPopularOnly, setIsPopularOnly] = useState(false);
  const [quickFilter, setQuickFilter] = useState<"all" | "coffee" | "tea" | "food" | "drinks" | "desserts">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const quickFilterTabs = [
    { id: "all", label: "All Items" },
    { id: "coffee", label: "Coffee" },
    { id: "tea", label: "Tea & Chai" },
    { id: "food", label: "Food Menu" },
    { id: "drinks", label: "Cold Drinks" },
    { id: "desserts", label: "Desserts" },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Direct category filter from category section
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // Quick filter tabs
      if (quickFilter === "coffee" && item.category !== "coffee") return false;
      if (quickFilter === "tea" && item.category !== "tea") return false;
      if (quickFilter === "desserts" && item.category !== "desserts") return false;
      if (quickFilter === "food" && item.type !== "food") return false;
      if (quickFilter === "drinks" && item.type !== "drink") return false;

      // Dietary & popularity filters
      if (isVegOnly && !item.isVeg) return false;
      if (isPopularOnly && !item.isPopular && !item.tag) return false;

      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      return true;
    });
  }, [activeCategory, quickFilter, isVegOnly, isPopularOnly, searchQuery]);

  return (
    <section id="menu" className="relative py-16 sm:py-24 bg-[#FFF9F0] border-b border-[#4A2618]/10 overflow-hidden">
      {/* Decorative Brand Watermark */}
      <BrandWatermark variant="botanical" className="w-[700px] h-[700px] -right-32 top-10 text-[#4A2618]" opacity={0.025} />
      <BrandWatermark variant="coffee" className="w-[500px] h-[500px] -left-20 bottom-10 text-[#6B3821]" opacity={0.02} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="HANDCRAFTED TASTE"
          title="Our Full"
          highlightText="Menu"
          subtitle="Explore our complete kitchen and brew bar selection, freshly prepared on every single order."
        />

        {/* Filter & Search Toolbar */}
        <div className="mt-10 sm:mt-12 space-y-4">
          {/* Top Search and Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-[#F7EFE3] p-3 sm:p-4 rounded-2xl border border-[#4A2618]/12 shadow-xs">
            {/* Quick Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {quickFilterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setQuickFilter(tab.id as typeof quickFilter);
                    if (activeCategory !== "all") onSelectCategory("all");
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    quickFilter === tab.id
                      ? "bg-[#24140F] text-[#FFF9F0] shadow-xs"
                      : "bg-[#FFF9F0] text-[#4A2618] hover:bg-white border border-[#4A2618]/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                id="menu-search-input"
                type="text"
                placeholder="Search for coffee, food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl text-xs sm:text-sm bg-[#FFF9F0] border border-[#4A2618]/15 focus:outline-none focus:border-[#B9552D] text-[#24140F] transition-all placeholder:text-[#74665D]"
              />
              <span className="absolute left-3 top-2.5 text-[#74665D] text-xs">
                🔍
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2 text-[#74665D] hover:text-[#24140F] text-xs font-bold cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Toggle Filters: Veg & Popular */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setIsVegOnly(!isVegOnly)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isVegOnly
                    ? "bg-[#405548] text-white border-[#405548] shadow-xs"
                    : "bg-[#FFF9F0] text-[#4A2618] border-[#4A2618]/15 hover:bg-white"
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-[3px] border-[1.5px] border-white flex items-center justify-center p-[1px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
                <span>Pure Veg</span>
              </button>

              <button
                type="button"
                onClick={() => setIsPopularOnly(!isPopularOnly)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isPopularOnly
                    ? "bg-[#B9552D] text-white border-[#B9552D] shadow-xs"
                    : "bg-[#FFF9F0] text-[#4A2618] border-[#4A2618]/15 hover:bg-white"
                }`}
              >
                <span>⭐ Popular</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Info Count */}
        <div className="mt-4 flex items-center justify-between text-xs text-[#74665D] px-1">
          <span>
            Showing <strong className="text-[#24140F]">{filteredItems.length}</strong> creations
          </span>
          {(activeCategory !== "all" || quickFilter !== "all" || isVegOnly || isPopularOnly || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                onSelectCategory("all");
                setQuickFilter("all");
                setIsVegOnly(false);
                setIsPopularOnly(false);
                setSearchQuery("");
              }}
              className="text-[#B9552D] hover:underline font-bold cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* 4-Column Grid on Desktop, 2-Column on Mobile/Tablet */}
        {filteredItems.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center py-12 bg-[#F7EFE3] rounded-3xl border border-dashed border-[#4A2618]/20">
            <span className="text-4xl mb-3 block">🍽️</span>
            <h4 className="text-base font-serif font-bold text-[#24140F]">No items found</h4>
            <p className="text-xs text-[#74665D] mt-1 max-w-sm mx-auto">
              Try adjusting your search keywords or switching category filters.
            </p>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#24140F] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg border border-[#4A2618]">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-[#D47A45] flex items-center justify-center text-2xl shrink-0">
              📱
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-[#FFF9F0]">
                Ordering from your table?
              </h4>
              <p className="text-xs text-[#D4C4B4] mt-0.5">
                Scan your table QR code to place your customized order straight to the kitchen.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenOrderModal}
            className="px-6 py-3 rounded-xl bg-[#B9552D] hover:bg-[#D47A45] text-white text-xs font-bold shrink-0 transition-colors shadow-xs cursor-pointer"
          >
            Order via Table QR →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMenu;
