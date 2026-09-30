import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandWatermark } from "@/components/ui/BrandWatermark";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 bg-[#EFE5D6] border-b border-[#4A2618]/10 overflow-hidden"
    >
      {/* Subtle Brand Watermark */}
      <BrandWatermark variant="badge" className="w-[500px] h-[500px] -left-20 -bottom-10 text-[#4A2618]" opacity={0.03} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Large Image (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#4A2618]/20 aspect-[4/4.8] bg-[#24140F]">
                <Image
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
                  alt="LolliCafe Roastery & Dining Sanctuary"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D47A45] block mb-0.5">
                    Our Roastery & Kitchen
                  </span>
                  <p className="text-base font-serif font-bold text-[#FFF9F0]">
                    Small-batch roasts & freshly prepared meals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Values (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="OUR STORY & PHILOSOPHY"
              title="More Than"
              highlightText="Just Coffee"
              centered={false}
              subtitle="LolliCafe brings together carefully crafted coffee, freshly prepared food, and a relaxed café atmosphere."
            />

            <div className="space-y-3.5 text-xs sm:text-sm text-[#74665D] leading-relaxed">
              <p>
                We believe dining out should be warm, aromatic, and free of unnecessary friction. Every single batch of our single-origin Arabica is roasted to highlight its authentic terroir and sweet floral notes.
              </p>
              <p>
                From classic masala chai and refreshing cold brews to gourmet sourdough sandwiches, wood-fired pizzas, and decadent desserts, everything on our menu is prepared with passion on demand.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-[#FFF9F0] border border-[#4A2618]/12 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F7EFE3] text-[#4A2618] flex items-center justify-center text-sm font-bold mb-2">
                  ☕
                </div>
                <h4 className="text-sm font-serif font-bold text-[#24140F] mb-0.5">
                  Quality Coffee
                </h4>
                <p className="text-xs text-[#74665D]">
                  100% Indian Arabica beans, roasted in small micro-batches.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF9F0] border border-[#4A2618]/12 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F7EFE3] text-[#4A2618] flex items-center justify-center text-sm font-bold mb-2">
                  🌱
                </div>
                <h4 className="text-sm font-serif font-bold text-[#24140F] mb-0.5">
                  Freshly Prepared
                </h4>
                <p className="text-xs text-[#74665D]">
                  Handcrafted meals made to order with organic produce.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF9F0] border border-[#4A2618]/12 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F7EFE3] text-[#4A2618] flex items-center justify-center text-sm font-bold mb-2">
                  📱
                </div>
                <h4 className="text-sm font-serif font-bold text-[#24140F] mb-0.5">
                  Smart QR Ordering
                </h4>
                <p className="text-xs text-[#74665D]">
                  Direct table ordering with fast, dedicated kitchen delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
