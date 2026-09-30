"use client";

import React, { useState } from "react";
import { Logo } from "@/components/ui/Logo";

interface QrOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTable: (tableNum: string) => void;
}

export function QrOrderModal({ isOpen, onClose, onSelectTable }: QrOrderModalProps) {
  const [selectedTable, setSelectedTable] = useState("Table #4");
  const tables = [
    "Table #1 (Indoor)",
    "Table #2 (Window)",
    "Table #4 (Central)",
    "Table #7 (Patio)",
    "Table #10 (Lounge)",
    "Takeaway / Pick-Up",
  ];

  if (!isOpen) return null;

  const handleConfirm = () => {
    onSelectTable(selectedTable);
    onClose();
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn">
      <div
        className="relative w-full max-w-md bg-[#FFF9F0] rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#4A2618]/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F7EFE3] hover:bg-[#EFE5D6] flex items-center justify-center text-[#4A2618] transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5">
          <div className="flex justify-center mb-2">
            <Logo size="sm" variant="dark" showTagline={false} href="" />
          </div>
          <h3 className="text-xl font-serif font-bold text-[#24140F]">
            Smart QR Table Ordering
          </h3>
          <p className="text-xs text-[#74665D] mt-0.5">
            Scan your table QR code or select your table to browse and order.
          </p>
        </div>

        {/* Simulated QR Code Visual Box */}
        <div className="relative mx-auto w-40 h-40 bg-[#24140F] rounded-2xl p-4 flex flex-col items-center justify-center border border-[#4A2618]/40 shadow-inner mb-5 overflow-hidden">
          {/* Scanning Line Animation */}
          <div className="absolute left-0 right-0 h-0.5 bg-[#B9552D] shadow-[0_0_8px_#b9552d] animate-bounce" />

          {/* SVG QR Code */}
          <svg
            className="w-24 h-24 text-[#FFF9F0]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm-4 0h2v4h-2v-4zm4 4h4v2h-4v-2zm-2 2h2v2h-2v-2zm-2-4h2v2h-2v-2zm-4-4h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2zm-4 4h2v2h-2v-2z" />
          </svg>
          <span className="text-[9px] font-mono text-[#D47A45] mt-1.5">
            TABLE SMART SCANNER
          </span>
        </div>

        {/* Select Table Grid */}
        <div className="mb-5">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-[#4A2618] mb-2">
            Select Your Dining Table
          </label>
          <div className="grid grid-cols-2 gap-2">
            {tables.map((tbl) => (
              <button
                key={tbl}
                type="button"
                onClick={() => setSelectedTable(tbl)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left truncate border ${
                  selectedTable === tbl
                    ? "bg-[#24140F] text-[#FFF9F0] border-[#24140F] shadow-xs"
                    : "bg-[#F7EFE3] hover:bg-[#EFE5D6] text-[#4A2618] border-[#4A2618]/15"
                }`}
              >
                {tbl}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleConfirm}
          className="w-full py-3 px-4 rounded-xl bg-[#B9552D] hover:bg-[#D47A45] text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Continue with {selectedTable}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default QrOrderModal;
