import React from "react";
import { Logo } from "@/components/ui/Logo";
import { BrandWatermark } from "@/components/ui/BrandWatermark";
import { CAFE_CONTACT } from "@/data/mockData";

export function Footer() {
  const quickLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Popular Dishes", href: "#popular" },
    { name: "Categories", href: "#categories" },
    { name: "About Us", href: "#about" },
    { name: "Opening Hours", href: "#hours" },
    { name: "Contact", href: "#contact" },
  ];

  const customerLinks = [
    { name: "My Orders (QR)", href: "#" },
    { name: "Table Ordering", href: "#home" },
    { name: "Dietary & Allergen Info", href: "#menu" },
    { name: "Help & Support", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#241713] text-[#D6C4B4] pt-16 pb-12 border-t border-[#5A3021]/30 overflow-hidden">
      {/* Decorative Subtle Watermark */}
      <BrandWatermark variant="leaf" className="w-96 h-96 -right-16 -bottom-16 text-white" opacity={0.02} />
      <BrandWatermark variant="coffee" className="w-80 h-80 -left-10 top-10 text-white" opacity={0.015} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#5A3021]/40">
          {/* Brand & Motto (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />

            <p className="text-sm text-[#E8A585] font-serif italic">
              &ldquo;Good Food • Great Coffee • Together&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#A8988C] max-w-sm leading-relaxed">
              Crafting honest specialty brews, wholesome chef-inspired meals, and a relaxed café sanctuary with effortless Smart QR table dining.
            </p>

            {/* Social Placeholders */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { name: "Instagram", icon: "📷", href: "#" },
                { name: "Facebook", icon: "📘", href: "#" },
                { name: "Twitter", icon: "🐦", href: "#" },
                { name: "WhatsApp", icon: "💬", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-8 h-8 rounded-lg bg-[#3B2118] border border-[#5A3021]/50 flex items-center justify-center text-xs text-[#D6C4B4] hover:text-white hover:bg-[#5A3021] transition-all cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFDF8]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#A8988C] hover:text-[#FFFDF8] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFDF8]">
              Customer
            </h4>
            <ul className="space-y-2">
              {customerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#A8988C] hover:text-[#FFFDF8] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFFDF8]">
              Contact & Hours
            </h4>
            <div className="space-y-2 text-xs text-[#A8988C] leading-relaxed">
              <p className="flex items-center gap-2">
                <span className="text-[#C45A2A]">📞</span>
                <span>{CAFE_CONTACT.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#C45A2A]">✉️</span>
                <span>{CAFE_CONTACT.email}</span>
              </p>
              <div className="pt-2 border-t border-[#5A3021]/30">
                <p className="text-[#FFFDF8] font-semibold mb-0.5">Dine-in Hours</p>
                <p>Mon – Fri: 8:00 AM – 10:00 PM</p>
                <p>Sat – Sun: 9:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#75675F]">
          <p>© 2026 LolliCafe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#A8988C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#405548]" />
              Smart QR Dine-in Active
            </span>
            <a href="#home" className="hover:text-[#FFFDF8] transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
