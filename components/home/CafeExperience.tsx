import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CafeExperience() {
  const panels = [
    {
      title: "Artisanal Brew Bar",
      tag: "100% Arabica",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      desc: "Slow pour-overs, nitro cold brews, and perfectly balanced double espressos.",
    },
    {
      title: "Chef-Crafted Kitchen",
      tag: "Made to Order",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      desc: "Flaky morning croissants, artisanal sourdough toasties, and wood-fired pizzas.",
    },
    {
      title: "Atmosphere & Community",
      tag: "Warm Ambiance",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
      desc: "Cozy booth seating, natural sunlit nooks, acoustic jazz, and fast Wi-Fi.",
    },
    {
      title: "Smart QR Dining",
      tag: "Zero Waiting",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      desc: "Scan the table QR code on your phone and have freshly made food brought to you.",
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#F7EFE3] border-b border-[#4A2618]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE SANCTUARY"
          title="The LolliCafe"
          highlightText="Experience"
          subtitle="A harmonious blend of specialty coffee roasting, culinary excellence, and intuitive dining."
        />

        {/* 4 Image Panels Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {panels.map((panel) => (
            <div
              key={panel.title}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#24140F] shadow-sm hover:shadow-lg transition-all duration-300 border border-[#4A2618]/15"
            >
              {/* Photo */}
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.65] group-hover:brightness-[0.55]"
              />

              {/* Text Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5 flex flex-col justify-between">
                <span className="self-start text-[10px] font-bold uppercase tracking-wider bg-[#B9552D] text-white px-2.5 py-0.5 rounded-full shadow-xs">
                  {panel.tag}
                </span>

                <div>
                  <h3 className="text-lg font-serif font-bold text-[#FFF9F0] mb-1 leading-snug">
                    {panel.title}
                  </h3>
                  <p className="text-xs text-[#D4C4B4] leading-relaxed line-clamp-2">
                    {panel.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CafeExperience;
