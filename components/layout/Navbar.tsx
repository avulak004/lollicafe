"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrderModal: () => void;
  onFocusSearch?: () => void;
}

export function Navbar({
  cartCount,
  onOpenCart,
  onOpenOrderModal,
  onFocusSearch,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "popular", "categories", "menu", "why-us", "experience", "about", "hours", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Popular", href: "#popular", id: "popular" },
    { name: "Categories", href: "#categories", id: "categories" },
    { name: "Menu", href: "#menu", id: "menu" },
    { name: "About", href: "#about", id: "about" },
    { name: "Hours", href: "#hours", id: "hours" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleSearchClick = () => {
    if (onFocusSearch) {
      onFocusSearch();
    } else {
      const searchInput = document.getElementById("menu-search-input");
      if (searchInput) {
        searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => searchInput.focus(), 300);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "nav-hero-scrolled py-3 border-b border-[#4A2618]/60"
          : "nav-hero-blur py-4 sm:py-5 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left (Light on Dark Hero) */}
          <Logo variant="light" size="md" />

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    isActive
                      ? "bg-[#B9552D] text-[#FFF9F0] shadow-xs font-bold"
                      : "text-[#D4C4B4] hover:text-[#FFF9F0] hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Search Pill, Cart Icon, Order Now Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Pill */}
            <button
              type="button"
              onClick={handleSearchClick}
              aria-label="Search menu"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-[#D4C4B4] hover:text-white border border-white/10 text-xs font-medium transition-all cursor-pointer"
              title="Search menu"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>

            {/* Mobile Search Icon */}
            <button
              type="button"
              onClick={handleSearchClick}
              aria-label="Search menu"
              className="sm:hidden p-2 rounded-xl bg-white/10 text-[#FFF9F0] border border-white/10 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Button with Count Badge */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="View table cart"
              className="relative p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFF9F0] border border-white/15 transition-all cursor-pointer"
            >
              <svg
                className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-4.5 px-1 rounded-full bg-[#B9552D] text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* "Order Now" Button */}
            <button
              type="button"
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#B9552D] hover:bg-[#D47A45] text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
            >
              <span>Order Now</span>
              <span className="text-xs">→</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-xl bg-white/10 text-white border border-white/15 cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#24140F]/95 backdrop-blur-xl border-b border-[#4A2618] px-4 pt-3 pb-5 space-y-3 animate-fadeIn shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#FFF9F0] bg-white/5 hover:bg-[#B9552D]/40 border border-white/10 text-center transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenOrderModal();
            }}
            className="w-full py-2.5 rounded-xl bg-[#B9552D] text-white font-bold text-xs shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>📱 Order via Table QR</span>
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
