"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CartItem } from "@/types/menu";
import { formatINR } from "@/lib/formatCurrency";
import { VegBadge } from "@/components/ui/VegBadge";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  selectedTable: string;
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  selectedTable,
  onUpdateQuantity,
  onClearCart,
}: CartDrawerProps) {
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );
  const gst = subtotal * 0.05; // 5% GST
  const total = subtotal + gst;

  const handlePlaceOrder = () => {
    setIsOrdered(true);
  };

  const handleReset = () => {
    setIsOrdered(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/65 backdrop-blur-xs">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF9F0] shadow-2xl flex flex-col justify-between border-l border-[#4A2618]/20 animate-slideLeft">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#4A2618]/12 flex items-center justify-between bg-[#F7EFE3]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#24140F] flex items-center justify-center text-sm text-[#FFF9F0]">
                🛒
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-[#24140F]">Table Cart</h3>
                <span className="text-[11px] font-semibold text-[#6B3821]">
                  📍 {selectedTable}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
              className="w-8 h-8 rounded-full bg-white hover:bg-[#EFE5D6] flex items-center justify-center text-[#4A2618] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {isOrdered ? (
              <div className="text-center py-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#405548]/15 text-[#405548] flex items-center justify-center text-2xl mb-3">
                  ✓
                </div>
                <h4 className="text-xl font-serif font-bold text-[#24140F] mb-1">Order Sent to Kitchen!</h4>
                <p className="text-xs text-[#74665D] max-w-xs mb-5 font-normal">
                  Your freshly prepared items will be served directly to <strong className="text-[#24140F]">{selectedTable}</strong>.
                </p>
                <div className="bg-[#F7EFE3] rounded-xl p-3.5 border border-[#4A2618]/15 w-full text-left text-xs text-[#4A2618] space-y-1 mb-5">
                  <div className="flex justify-between font-bold">
                    <span>Est. Prep Time:</span>
                    <span>~8-10 Mins</span>
                  </div>
                  <div className="flex justify-between text-[#74665D]">
                    <span>Status:</span>
                    <span className="text-[#405548] font-bold">● Preparing Fresh</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2.5 rounded-xl bg-[#24140F] text-white font-bold text-xs hover:bg-[#4A2618] transition-colors cursor-pointer"
                >
                  Back to Menu
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-14 flex flex-col items-center">
                <span className="text-4xl mb-3 opacity-40">☕</span>
                <h4 className="text-base font-serif font-bold text-[#24140F] mb-1">Your cart is empty</h4>
                <p className="text-xs text-[#74665D] max-w-xs mb-5 font-normal">
                  Explore our specialty coffees, chais, burgers, pizzas, and desserts to add items.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-[#24140F] text-white font-bold text-xs hover:bg-[#4A2618] transition-colors cursor-pointer"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F7EFE3] border border-[#4A2618]/10"
                  >
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-stone-200 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <VegBadge isVeg={item.isVeg} />
                        <h4 className="text-xs font-serif font-bold text-[#24140F] truncate">
                          {item.name}
                        </h4>
                      </div>
                      <span className="text-xs font-bold text-[#B9552D]">
                        {formatINR(item.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-white border border-[#4A2618]/15 rounded-lg p-0.5">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center text-xs font-bold text-[#4A2618] hover:bg-[#F7EFE3] rounded cursor-pointer"
                      >
                        −
                      </button>
                      <span className="w-4 text-center text-xs font-bold text-[#24140F]">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-[#24140F] hover:bg-[#4A2618] rounded cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Totals */}
          {!isOrdered && cartItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#4A2618]/12 bg-[#F7EFE3] space-y-2.5">
              <div className="space-y-1 text-xs text-[#74665D]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#24140F]">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%)</span>
                  <span>{formatINR(gst)}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#24140F] pt-1.5 border-t border-[#4A2618]/12">
                  <span>Total Amount</span>
                  <span className="text-[#B9552D] font-black">{formatINR(total)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full py-3 px-4 rounded-xl bg-[#B9552D] hover:bg-[#D47A45] text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Send Order to Kitchen</span>
                <span className="text-xs">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
