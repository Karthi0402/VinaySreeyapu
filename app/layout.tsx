import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TabObserver from "../src/components/ui/TabObserver";

const headlineFont = localFont({
  src: "../public/fonts/thenightwatch.ttf",
  variable: "--font-nightwatch",
  display: "swap",
});

const subheadingFont = localFont({
  src: [
    {
      path: "../public/fonts/Geist-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/Geist-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/Geist-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UI/UX, Product & Visual Designer  |  Vinay Sreeyapu",
  description:
    "Product and Visual Designer focused on solving real problems through research, design, and execution.",
  alternates: {
    canonical: "https://vinaysreeyapu.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headlineFont.variable} ${subheadingFont.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col">
        {/* <TabObserver /> */}
        {children}
      </body>
    </html>
  );
}
