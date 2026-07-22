/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import "@/lib/gsap";

export const metadata: Metadata = {
  title: "Celestia AI - Enterprise AI Consulting",
  description: "Bespoke AI solutions engineered for complex business problems. We align bleeding-edge technology with fundamental economic drivers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Load Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600&amp;family=Inter:wght@400;500;600&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap"
          rel="stylesheet"
        />
        {/* Load Material Symbols Outlined icons stylesheet */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen selection:bg-black selection:text-white overflow-x-hidden">
        <div className="texture-overlay" />
        {children}
      </body>
    </html>
  );
}
