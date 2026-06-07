"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/UI/Button";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "portfolio", path: "/", label: "PORTFOLIO" },
    { id: "customizer", path: "/customizer", label: "DESIGN STUDIO" },
    { id: "lounge", path: "/lounge", label: "AI LOUNGE" },
    { id: "inquiry", path: "/inquiry", label: "INQUIRIES" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-outline-variant/40 shadow-sm ${
        scrolled ? "py-3.5" : "py-5"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1280px] mx-auto w-full px-6 md:px-16">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="flex flex-col items-start select-none group text-left focus:outline-none"
          id="nav-logo-btn"
        >
          <span className="font-serif text-xl tracking-[0.25em] font-medium text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
            ESTATE
          </span>
          <span className="font-sans text-[9px] tracking-[0.4em] font-bold text-on-surface-variant/85">
            ARCHITECTS
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => {
            const isActive =
              (link.path === "/" && (pathname === "/" || pathname.startsWith("/project/"))) ||
              (link.path !== "/" && pathname === link.path);

            return (
              <Link
                key={link.id}
                href={link.path}
                className={`relative font-sans text-xs tracking-[0.18em] font-semibold transition-colors duration-300 pb-1 focus:outline-none ${
                  isActive
                    ? "text-brand-secondary"
                    : "text-on-surface-variant hover:text-brand-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Consultation Button - Desktop */}
        <div className="hidden md:block">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              handleLinkClick();
              router.push("/inquiry");
            }}
            id="nav-consultation-btn"
          >
            CONSULTATION
          </Button>
        </div>

        {/* Hamburger Mobile Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-primary p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
            id="nav-hamburger-toggle"
          >
            {mobileMenuOpen ? <X size={22} className="text-brand-primary" /> : <Menu size={22} className="text-brand-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with overlay & slide transitions */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden w-full bg-white border-t border-outline-variant/30 shadow-lg overflow-hidden absolute top-full left-0 z-40"
          >
            <div className="py-8 px-6 space-y-6 text-left flex flex-col">
              {navLinks.map((link) => {
                const isActive =
                  (link.path === "/" && (pathname === "/" || pathname.startsWith("/project/"))) ||
                  (link.path !== "/" && pathname === link.path);

                return (
                  <Link
                    key={link.id}
                    href={link.path}
                    onClick={handleLinkClick}
                    className={`font-sans text-sm tracking-[0.18em] font-semibold transition-colors duration-300 pb-2 text-left border-b border-outline-variant/10 w-full focus:outline-none ${
                      isActive
                        ? "text-brand-secondary"
                        : "text-on-surface-variant hover:text-brand-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    handleLinkClick();
                    router.push("/inquiry");
                  }}
                  id="mobile-nav-consultation-btn"
                >
                  CONSULTATION
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
