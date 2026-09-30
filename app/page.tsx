"use client";

import React, { useState } from "react";
import { FoodCategory, MenuItem, CartItem } from "@/types/menu";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { PopularItems } from "@/components/home/PopularItems";
import { FeaturedMenu } from "@/components/home/FeaturedMenu";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CafeExperience } from "@/components/home/CafeExperience";
import { AboutSection } from "@/components/home/AboutSection";
import { OpeningHours } from "@/components/home/OpeningHours";
import { LocationContact } from "@/components/home/LocationContact";
import { CartDrawer } from "@/components/home/CartDrawer";
import { QrOrderModal } from "@/components/home/QrOrderModal";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<FoodCategory>("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState("Table #4");

  // Add or update cart item
  const handleAddToCart = (item: MenuItem, delta: number) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        const nextQty = existing.quantity + delta;
        if (nextQty <= 0) {
          return prev.filter((i) => i.item.id !== item.id);
        }
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: nextQty } : i
        );
      } else if (delta > 0) {
        return [...prev, { item, quantity: delta, selectedTable }];
      }
      return prev;
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.item.id === itemId);
      if (!existing) return prev;
      const nextQty = existing.quantity + delta;
      if (nextQty <= 0) {
        return prev.filter((i) => i.item.id !== itemId);
      }
      return prev.map((i) =>
        i.item.id === itemId ? { ...i, quantity: nextQty } : i
      );
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectTable = (table: string) => {
    setSelectedTable(table);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7EFE3] text-[#24140F] selection:bg-[#B9552D] selection:text-white">
      {/* 1. Navbar (Floats seamlessly over dark hero) */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Cinematic Dark Espresso Hero */}
        <Hero onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        {/* 3. Horizontal Categories Bar */}
        <Categories
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* 4. Chef Recommends / Popular at LolliCafe */}
        <PopularItems onAddToCart={handleAddToCart} />

        {/* 5. Complete Menu & Integrated Search Experience */}
        <FeaturedMenu
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onAddToCart={handleAddToCart}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />

        {/* 6. Why LolliCafe? (Dark Coffee Brown Section) */}
        <WhyChooseUs />

        {/* 7. Visual Café Experience Photo Panels */}
        <CafeExperience />

        {/* 8. Editorial About Section (More Than Just Coffee) */}
        <AboutSection />

        {/* 9. Opening Hours Schedule */}
        <OpeningHours />

        {/* 10. Location & Contact Inquiries */}
        <LocationContact />
      </main>

      {/* 11. Dark Espresso Footer */}
      <Footer />

      {/* Slide-over Table Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        selectedTable={selectedTable}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Smart QR Table Scanner Modal */}
      <QrOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        onSelectTable={handleSelectTable}
      />
    </div>
  );
}
