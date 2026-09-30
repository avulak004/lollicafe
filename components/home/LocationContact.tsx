"use client";

import React, { useState } from "react";
import { CAFE_CONTACT } from "@/data/mockData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationContact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F7EFE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Location &"
          highlightText="Contact"
          subtitle="Reach out with inquiries or visit us at our central café location."
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column: Contact Details & Map Card (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Phone */}
              <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#4A2618]/12 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F7EFE3] text-[#4A2618] flex items-center justify-center text-sm mb-2">
                  📞
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#74665D] mb-0.5">
                  Phone
                </h4>
                <p className="text-xs font-bold text-[#24140F]">
                  {CAFE_CONTACT.phone}
                </p>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#4A2618]/12 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F7EFE3] text-[#4A2618] flex items-center justify-center text-sm mb-2">
                  ✉️
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#74665D] mb-0.5">
                  Email
                </h4>
                <p className="text-xs font-bold text-[#24140F]">
                  {CAFE_CONTACT.email}
                </p>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#4A2618]/12 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#F7EFE3] text-[#4A2618] flex items-center justify-center text-sm mb-2">
                  📍
                </div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#74665D] mb-0.5">
                  Address
                </h4>
                <p className="text-xs font-bold text-[#24140F] truncate">
                  {CAFE_CONTACT.address}
                </p>
              </div>
            </div>

            {/* Stylized Map Placeholder */}
            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#24140F] border border-[#4A2618]/30 shadow-xs flex items-center justify-center">
              {/* Subtle Grid */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d47a45_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Center Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#B9552D] text-white flex items-center justify-center text-lg shadow-md ring-4 ring-[#24140F]">
                  ☕
                </div>
                <div className="mt-2 px-3 py-1 rounded-full bg-black/80 text-[#FFF9F0] text-xs font-bold shadow-xs">
                  LolliCafe Location
                </div>
              </div>

              <div className="absolute bottom-3 left-3 text-[11px] text-[#D4C4B4] bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                📍 {CAFE_CONTACT.address}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFF9F0] rounded-2xl p-6 border border-[#4A2618]/12 shadow-xs">
              <h3 className="text-lg font-serif font-bold text-[#24140F] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#74665D] mb-4 font-normal">
                Have questions or feedback? Send us a quick note.
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center bg-[#F7EFE3] rounded-xl border border-[#4A2618]/15 p-4">
                  <span className="text-2xl mb-1 block text-[#405548]">✓</span>
                  <h4 className="text-sm font-serif font-bold text-[#24140F]">Message Received</h4>
                  <p className="text-xs text-[#74665D] mt-0.5">
                    Thank you, {formData.name || "Guest"}. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A2618] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#F7EFE3] border border-[#4A2618]/15 focus:outline-none focus:border-[#B9552D] focus:bg-white text-[#24140F] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A2618] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#F7EFE3] border border-[#4A2618]/15 focus:outline-none focus:border-[#B9552D] focus:bg-white text-[#24140F] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A2618] mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Your message or feedback..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#F7EFE3] border border-[#4A2618]/15 focus:outline-none focus:border-[#B9552D] focus:bg-white text-[#24140F] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#24140F] hover:bg-[#4A2618] text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationContact;
