import React from "react";
import { CafeFeature } from "@/types/menu";

interface FeatureCardProps {
  feature: CafeFeature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div className="group relative flex flex-col justify-between bg-[#361D15] rounded-2xl p-6 sm:p-7 border border-[#4A2618]/60 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:border-[#D47A45]/40 hover:-translate-y-1 transition-all duration-300">
      <div>
        {/* Icon & Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#24140F] border border-[#6B3821]/50 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform shadow-inner">
            {feature.icon}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D47A45] bg-[#24140F] border border-[#6B3821]/40 px-2.5 py-1 rounded-full">
            {feature.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-serif font-bold text-[#FFF9F0] group-hover:text-[#D47A45] transition-colors mb-2">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#D4C4B4] leading-relaxed font-normal">
          {feature.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-3 border-t border-[#6B3821]/30 flex items-center justify-between text-[11px] font-semibold text-[#8C7A6E] group-hover:text-[#D47A45] transition-colors">
        <span>0{index + 1} • Quality</span>
        <svg
          className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
}

export default FeatureCard;
