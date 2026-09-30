import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LolliCafe — Smart QR Table Dining & Specialty Coffee",
  description:
    "Specialty Indian coffee, handcrafted beverages, and gourmet dining. Scan your table QR, customize your order, and experience seamless dining without waiting in line.",
  keywords: [
    "LolliCafe",
    "Smart QR Ordering",
    "Specialty Coffee",
    "Café & Restaurant",
    "Artisanal Dining",
    "Table Service",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F7EFE3] text-[#24140F]">
        {children}
      </body>
    </html>
  );
}
