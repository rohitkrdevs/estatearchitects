import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "ESTATE ARCHITECTS | Premium Structural Design",
  description: "Bespoke structural masterworks, luxury residential estates, and carbon-optimized commercial landmarks designed beyond boundaries.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-bg-primary text-on-surface font-sans flex flex-col justify-between selection:bg-brand-secondary/20">
        <Navbar />
        <main className="flex-grow w-full relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
