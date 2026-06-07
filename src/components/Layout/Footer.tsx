"use client";

import { Share, Map, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.origin);
    alert("Copied website link to dashboard clipboard.");
  };

  return (
    <footer className="bg-brand-primary text-white border-t border-white/5 pt-20 pb-10 w-full z-10 relative">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-12 font-sans mb-16 text-left">
        
        {/* Col A: Brand Profile */}
        <div className="space-y-6">
          <Link
            href="/"
            className="flex flex-col items-start select-none group text-left focus:outline-none"
            id="footer-logo-btn"
          >
            <span className="font-serif text-2xl tracking-[0.2em] font-medium text-white group-hover:text-brand-secondary transition-colors duration-400">
              ESTATE
            </span>
            <span className="font-sans text-[10px] tracking-[0.45em] font-bold text-white/50">
              ARCHITECTS
            </span>
          </Link>
          <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-xs">
            Crafting monolithic structures and luxury environmental landforms that persist through time.
          </p>
          <div className="flex items-center gap-3">
            <button
              className="w-9 h-9 border border-white/10 hover:border-brand-secondary rounded-full flex items-center justify-center hover:bg-brand-secondary/15 transition-all text-white/70 hover:text-white focus:outline-none cursor-pointer"
              onClick={handleShareClick}
              title="Share Website"
              id="footer-share-btn"
            >
              <Share size={14} />
            </button>
            <button
              className="w-9 h-9 border border-white/10 hover:border-brand-secondary rounded-full flex items-center justify-center hover:bg-brand-secondary/15 transition-all text-white/70 hover:text-white focus:outline-none cursor-pointer"
              onClick={() => router.push("/inquiry")}
              title="Contact Office Map"
              id="footer-map-btn"
            >
              <Map size={14} />
            </button>
          </div>
        </div>

        {/* Col B: Internal Routes Map */}
        <div className="space-y-4">
          <h5 className="font-serif text-sm tracking-widest text-brand-secondary uppercase font-bold">
            Navigation Map
          </h5>
          <ul className="space-y-2.5 text-xs text-white/60">
            <li>
              <Link
                href="/"
                className="hover:text-brand-secondary transition-colors uppercase font-medium focus:outline-none"
              >
                Select Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/customizer"
                className="hover:text-brand-secondary transition-colors uppercase font-medium focus:outline-none"
              >
                Design Customizer
              </Link>
            </li>
            <li>
              <Link
                href="/lounge"
                className="hover:text-brand-secondary transition-colors uppercase font-medium focus:outline-none"
              >
                AI Design Lounge
              </Link>
            </li>
            <li>
              <Link
                href="/inquiry"
                className="hover:text-brand-secondary transition-colors uppercase font-medium focus:outline-none"
              >
                Inquiries Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Col C: Global Coordinates Details */}
        <div className="space-y-4">
          <h5 className="font-serif text-sm tracking-widest text-brand-secondary uppercase font-bold">
            Global coordinates
          </h5>
          <ul className="space-y-3 text-xs text-white/60">
            <li className="leading-tight">
              <span className="text-white/40 block font-semibold text-[10px] tracking-wider uppercase mb-0.5">
                WEST HOLLYWOOD
              </span>
              8422 Melrose Ave, West Hollywood, CA
            </li>
            <li className="leading-tight border-t border-white/5 pt-2">
              <span className="text-white/40 block font-semibold text-[10px] tracking-wider uppercase mb-0.5">
                LONDON DISTRICT
              </span>
              Mayfair Gallery District, London W1J
            </li>
            <li className="leading-tight border-t border-white/5 pt-2">
              <span className="text-white/40 block font-semibold text-[10px] tracking-wider uppercase mb-0.5">
                TOKYO STUDIO
              </span>
              Minato City Plaza, Tokyo 105
            </li>
          </ul>
        </div>

        {/* Col D: Legal Credentials */}
        <div className="space-y-4">
          <h5 className="font-serif text-sm tracking-widest text-brand-secondary uppercase font-bold">
            Certifications &amp; Rules
          </h5>
          <ul className="space-y-2.5 text-xs text-white/60">
            <li>
              <a
                href="#privacy"
                className="hover:text-brand-secondary transition-colors uppercase font-medium"
                onClick={(e) => e.preventDefault()}
              >
                PRIVACY POLICIES
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-brand-secondary transition-colors uppercase font-medium"
                onClick={(e) => e.preventDefault()}
              >
                TERMS OF PLACEMENT
              </a>
            </li>
            <li>
              <a
                href="#sustainability"
                className="hover:text-brand-secondary transition-colors uppercase font-medium"
                onClick={(e) => e.preventDefault()}
              >
                Zero-decay CERTIFICATION
              </a>
            </li>
            <li className="flex items-center gap-2 border-t border-white/5 pt-3 select-none">
              <HelpCircle size={14} className="text-brand-secondary" />
              <span className="text-[10px] tracking-widest font-semibold uppercase text-white/50">
                ISO 9001 ACCREDITED
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Deep Credits & Copyrights */}
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-xs text-center sm:text-left">
        <span>&copy; {new Date().getFullYear()} ESTATE ARCHITECTS. ALL CLIENT RIGHTS RESERVED.</span>
        <div className="flex gap-6 text-[10px] tracking-[0.2em] font-semibold">
          <span>SUSTAINABILITY FIRST</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>TIMELESS PERSISTENCE</span>
        </div>
      </div>
    </footer>
  );
}
