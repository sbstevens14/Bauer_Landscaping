import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bauerlandscapingservices.com/"),
  title: "Bauer Landscaping Services — Wildwood, MO",
  description:
    "Family-run landscaping in Wildwood, MO. Lawn mowing, mulching, and hardscaping. Call or text for a free quote.",
  openGraph: {
    title: "Bauer Landscaping Services",
    description:
      "Lawn care, mulching, and hardscaping in Wildwood, MO. Call or text for a free quote.",
    type: "website",
    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        {children}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "fbd650a18d4d4eaa8403e2c1610958c5"}'
        />
      </body>
    </html>
  );
}
