"use client";

import React from "react";
import Image from "next/image";
import { BrandWatermark } from "@/components/ui/BrandWatermark";

interface HeroProps {
  onOpenOrderModal: () => void;
}

export function Hero({ onOpenOrderModal }: HeroProps) {
  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const featureStrip = [
    { label: "QR Ordering", icon: "📱" },
    { label: "Fresh Ingredients", icon: "🌱" },
    { label: "Fast Service", icon: "⚡" },
    { label: "Cozy Atmosphere", icon: "☕" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[660px] lg:min-h-[720px] flex items-center pt-28 pb-16 lg:py-0 bg-[#24140F] text-[#FFF9F0] overflow-hidden"
    >
      {/* Cinematic Full Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85"
          alt="LolliCafe Artisanal Coffee & Dining Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.38] contrast-[1.1]"
        />

        {/* Cinematic Gradient Overlays: Deep Dark Left & Bottom Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#24140F] via-[#24140F]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#24140F] via-transparent to-[#24140F]/60 z-10" />
      </div>

      {/* Decorative Brand Watermark */}
      <BrandWatermark variant="botanical" className="w-[600px] h-[600px] -right-20 top-10 text-white z-10" opacity={0.03} />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#D47A45] text-[11px] font-bold tracking-widest uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9552D] animate-pulse" />
              <span>SMART QR TABLE DINING</span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#FFF9F0] tracking-tight leading-[1.08]">
              Good Coffee.<br />
              <span className="italic font-serif text-[#D47A45]">Great Food.</span><br />
              Your Table.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#D4C4B4] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Scan the QR, explore our menu, customize your order, and enjoy your café experience without waiting in line.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#B9552D] hover:bg-[#D47A45] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <span>Order Now</span>
                <span>→</span>
              </button>

              <button
                type="button"
                onClick={scrollToMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFF9F0] font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Explore Menu</span>
                <span>📖</span>
              </button>
            </div>

            {/* Feature Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl mx-auto lg:mx-0">
              {featureStrip.map((feat) => (
                <div
                  key={feat.label}
                  className="flex items-center justify-center lg:justify-start gap-2 py-2 px-2.5 rounded-lg bg-black/30 border border-white/10 text-xs font-semibold text-[#D4C4B4] backdrop-blur-xs"
                >
                  <span className="text-sm">{feat.icon}</span>
                  <span className="whitespace-nowrap">{feat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Accent (5 cols on lg) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-sm">
              {/* Highlight Latte Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 aspect-[4/4.5] bg-[#3B2118]">
                <Image
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
                  alt="Specialty Latte Art"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24140F]/90 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#B9552D] px-2 py-0.5 rounded-md inline-block mb-1">
                    Signature Roast
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#FFF9F0]">
                    Caramel Honeycomb Latte
                  </h3>
                  <p className="text-xs text-[#D4C4B4] mt-0.5">
                    Slow-simmered caramel with double ristretto
                  </p>
                </div>
              </div>

              {/* Floating Table QR Badge */}
              <div className="absolute -bottom-4 -left-6 bg-[#FFF9F0] text-[#24140F] rounded-2xl p-3.5 shadow-2xl border border-[#4A2618]/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#24140F] text-[#FFF9F0] flex items-center justify-center text-lg font-bold">
                  📱
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#24140F]">
                    Table QR Dining
                  </span>
                  <span className="text-[11px] text-[#74665D]">
                    Instant kitchen order
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
