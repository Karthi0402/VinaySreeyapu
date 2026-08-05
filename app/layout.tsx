import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TabObserver from "../src/components/ui/TabObserver";
import Script from "next/script";

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
  title: "Vinay Sreeyapu | UI/UX, Product & Visual Designer",
  description:
    "Product and Visual Designer specializing in UI/UX, product strategy, and visual design. Creating user-focused digital experiences through research, design, and execution.",
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TSDQSLX1PS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-TSDQSLX1PS');
    `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {/* <TabObserver /> */}
        {children}
      </body>
    </html>
  );
}
