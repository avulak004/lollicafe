import React from "react";
import { CAFE_FEATURES } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { BrandWatermark } from "@/components/ui/BrandWatermark";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-16 sm:py-24 bg-[#24140F] text-[#FFF9F0] overflow-hidden">
      {/* Subtle Brand Watermark */}
      <BrandWatermark variant="botanical" className="w-[600px] h-[600px] -left-20 top-10 text-white" opacity={0.02} />
      <BrandWatermark variant="badge" className="w-[500px] h-[500px] -right-20 bottom-10 text-white" opacity={0.02} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE LOLLICAFE STANDARD"
          title="Why"
          highlightText="LolliCafe?"
          subtitle="Crafting an elevated café journey with single-origin beans, fresh food, and effortless table-side QR ordering."
          light={true}
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {CAFE_FEATURES.map((feature, idx) => (
            <FeatureCard key={feature.id} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
