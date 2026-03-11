import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iron & Oak Fitness | Boutique Strength & Conditioning Studio",
  description: "Premium boutique strength and conditioning studio in Denver, CO. Offering personal training, group classes, and elite coaching since 2019. Transform your body, build your strength.",
  keywords: ["gym", "fitness", "strength training", "conditioning", "personal training", "Denver", "HIIT", "powerlifting", "yoga", "boutique gym"],
  authors: [{ name: "Iron & Oak Fitness" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Iron & Oak Fitness",
    description: "Premium boutique strength and conditioning studio in Denver, CO",
    url: "https://ironandoak.fit",
    siteName: "Iron & Oak Fitness",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron & Oak Fitness",
    description: "Premium boutique strength and conditioning studio in Denver, CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
