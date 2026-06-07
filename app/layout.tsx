import type { Metadata } from "next";
import { Hanken_Grotesk, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const libreCaslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estatearchitects.com"),
  title: "ESTATE ARCHITECTS | Premium Structural Design",
  description: "Bespoke structural masterworks, luxury residential estates, and carbon-optimized commercial landmarks designed beyond boundaries.",
  openGraph: {
    title: "ESTATE ARCHITECTS",
    description: "Bespoke structural masterworks and luxury residential estates.",
    url: "https://estatearchitects.com",
    siteName: "Estate Architects",
    images: [
      {
        url: "/studio_interior.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
    <html lang="en" className={`${hankenGrotesk.variable} ${libreCaslon.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="min-h-screen bg-bg-primary text-on-surface font-sans flex flex-col justify-between selection:bg-brand-secondary/20">
        <Navbar />
        <main className="flex-grow w-full relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
