import React from "react";
import { OPENING_HOURS } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OpeningHours() {
  return (
    <section id="hours" className="py-16 sm:py-24 bg-[#FFF9F0] border-b border-[#4A2618]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TIMINGS & SCHEDULE"
          title="Opening"
          highlightText="Hours"
          subtitle="Join us for morning sunrise brews, daytime work sessions, or cozy evening dining."
        />

        <div className="mt-10 sm:mt-12 max-w-3xl mx-auto">
          <div className="rounded-3xl bg-[#24140F] text-white p-6 sm:p-10 shadow-xl border border-[#4A2618]">
            {/* Status Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-[#4A2618]/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#405548]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#D47A45]">
                  Dine-in & Table QR Ordering Active
                </span>
              </div>
              <span className="text-xs text-[#D4C4B4]">
                Open 7 Days a Week
              </span>
            </div>

            {/* Timetable Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6">
              {OPENING_HOURS.map((schedule) => (
                <div
                  key={schedule.days}
                  className="p-5 rounded-2xl bg-[#361D15] border border-[#4A2618] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D47A45]">
                      {schedule.isWeekend ? "Weekends" : "Weekdays"}
                    </span>
                    <span className="text-lg">
                      {schedule.isWeekend ? "🥐" : "☕"}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#FFF9F0] mb-1">
                    {schedule.days}
                  </h3>

                  <div className="text-2xl font-black text-[#FFF9F0] tracking-tight">
                    {schedule.hours}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-[#D4C4B4]">
              Last kitchen orders are accepted 30 minutes prior to closing time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpeningHours;
