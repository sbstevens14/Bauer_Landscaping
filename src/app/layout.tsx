import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Family-run landscaping in Wildwood, MO. Lawn mowing, mulching, and hardscaping. Call (636) 393-9159 for a free quote.",
  openGraph: {
    title: "Bauer Landscaping Services",
    description:
      "Lawn care, mulching, and hardscaping in Wildwood, MO. Call (636) 393-9159.",
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
      </body>
    </html>
  );
}
