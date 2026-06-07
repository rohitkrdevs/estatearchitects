"use client";

import { PRODUCTS, Product } from "@/data/products";
import { motion, useScroll, useTransform } from "motion/react";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./UI/ProductCard";
import Button from "./UI/Button";

export default function HomePortfolio() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Parallax Scroll Effects for Hero Section
  const { scrollY } = useScroll();
  const yVal = useTransform(scrollY, [0, 800], [0, 260]);
  const scaleVal = useTransform(scrollY, [0, 800], [1.02, 1.15]);
  const opacityVal = useTransform(scrollY, [0, 500], [1, 0.35]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const services = [
    {
      num: "01",
      title: "Architectural Advisory",
      desc: "Strategic land-use evaluation, thermal sun-path analysis, and conceptual zoning studies for complex architectural topography."
    },
    {
      num: "02",
      title: "Luxury Residential",
      desc: "Architecting bespoke, high thermal-mass private sanctuaries and luxury structural estates made to stand for generational lines."
    },
    {
      num: "03",
      title: "Commercial Landscapes",
      desc: "Iconic structural landmarks, light-filled spatial atriums, and carbon-optimized corporate headquarters that redefine skyline geometry."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-primary">
        {/* Cinematic Video Base with Parallax Motion */}
        <motion.div 
          style={{ y: yVal, scale: scaleVal, opacity: opacityVal }}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20 z-10" />
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-100"
          >
            <source
              src="/hero-bg.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Hero Copy with premium reveal animations */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[10px] md:text-xs tracking-[0.45em] text-white/95 mb-5 uppercase font-bold [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]"
          >
            Established 1994 &bull; BEL AIR &bull; TOKYO &bull; LONDON
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[38px] md:text-7xl font-light leading-[1.15] mb-8 tracking-tight text-white text-balance [text-shadow:0_4px_16px_rgba(0,0,0,0.45)]"
          >
            Architectural Integrity <br className="hidden md:inline" /> Beyond Boundaries.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10"
          >
            <Button
              variant="white"
              onClick={() => {
                const element = document.getElementById("portfolio-grid");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto shadow-md"
              id="hero-portfolio-btn"
            >
              EXPLORE WORKS
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/customizer")}
              className="border-white/40 hover:border-white text-white hover:text-brand-primary hover:bg-white bg-transparent w-full sm:w-auto backdrop-blur-sm"
              id="hero-studio-btn"
            >
              THE STUDIO
            </Button>
          </motion.div>
        </div>

        {/* Video Control Buttons & Scroll Indicators */}
        <div className="absolute bottom-10 left-6 md:left-16 z-25 flex items-center gap-4 text-white">
          <button
            onClick={toggleVideo}
            className="rounded-full w-10 h-10 border border-white/20 flex items-center justify-center bg-brand-primary/20 hover:bg-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title={isPlaying ? "Pause Cinema Showcase" : "Play Showcase"}
            id="hero-toggle-video-btn"
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
          </button>
          <span className="font-sans text-[10px] tracking-[0.25em] text-white/60 uppercase hidden sm:inline">
            {isPlaying ? "Cinema Feed Live" : "Cinema Paused"}
          </span>
        </div>

        <div className="absolute bottom-10 right-1/2 translate-x-1/2 md:translate-x-0 md:right-16 z-20 text-white flex flex-col items-center">
          <button
            onClick={() => {
              const element = document.getElementById("portfolio-grid");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="animate-bounce flex flex-col items-center cursor-pointer"
            id="hero-scroll-btn"
          >
            <span className="material-symbols-outlined text-3xl font-light">expand_more</span>
          </button>
        </div>
      </section>

      {/* 2. Portfolio Showcase Bento Section */}
      <section
        id="portfolio-grid"
        className="w-full bg-bg-primary py-24 md:py-32 border-t border-outline-variant/15"
      >
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16">
          <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 text-left"
        >
          <div>
            <span className="font-sans text-xs tracking-[0.25em] text-brand-secondary font-semibold uppercase block mb-3">
              CURATED DESIGN STUDIES
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-primary leading-tight max-w-2xl text-balance">
              Residential &amp; Commercial Structural Excellence.
            </h2>
          </div>
          <div>
            <p className="font-sans text-xs text-on-surface-variant font-medium select-none border-b border-outline-variant pb-1.5">
              CLICK ANY WORK TO INITIATE SPECIFICATION VIEW
            </p>
          </div>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {PRODUCTS.map((proj, idx) => {
            // Determine Grid Column Spanning based on indexing with a uniform, premium height
            let gridColClass = "md:col-span-6";
            const aspectClass = "h-[360px] sm:h-[440px] md:h-[480px] lg:h-[520px]";

            if (idx === 0) {
              gridColClass = "md:col-span-8";
            } else if (idx === 1) {
              gridColClass = "md:col-span-4";
            } else if (idx === 2) {
              gridColClass = "md:col-span-4";
            } else if (idx === 3) {
              gridColClass = "md:col-span-8";
            } else if (idx === 4) {
              gridColClass = "md:col-span-7";
            } else {
              gridColClass = "md:col-span-5";
            }

            return (
              <motion.div 
                key={proj.id} 
                className={gridColClass}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
              >
                <ProductCard
                  id={proj.id}
                  title={proj.title}
                  subtitle={proj.subtitle}
                  location={proj.location}
                  sqft={proj.sqft}
                  completion={proj.completion}
                  materials={proj.materials}
                  climate={proj.climate}
                  image={proj.image}
                  alt={proj.alt}
                  summary={proj.summary}
                  onClick={() => router.push(`/project/${proj.id}`)}
                  aspectClass={aspectClass}
                  gridColClass={gridColClass}
                />
              </motion.div>
            );
          })}
        </div>
        </div>
      </section>

      {/* 3. Professional Services Section */}
      <section className="w-full bg-surface-card py-24 md:py-32 border-t border-outline-variant/15">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Architectural Feature Collage with parallax reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[480px] md:h-[620px] w-full overflow-hidden border border-outline-variant/15"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-brand-secondary/35 z-10" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMrpUp9GoZY9C3a7XZ8rTB8Ul4_KLK9m5fKbRjw6S1izlHj-sllWPktK7CkHpdf96jmY_fc7JYfHjv2QDl7WjgA_9je4FXVaIfX0-5hC5-5mzZnXYrZLbwd1A2UDDIxZ4wiEZjGZlc-OB_fGqFQ_4mvQs9tOl_MSEq0jCnanABoQLyNXDgQIUQOdkwHYPl3KJ1RMB0uA2VjMNPPu8oqxBrEvLDVurCFiOJgDhtB6Z34oLiLNxl8XE__Nddg-AO6MNBnKRypVUDa5A"
              alt="Interlocking material fins and shadow lines structure detail"
              className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
            />
          </motion.div>

          {/* Description & List of Services */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-sans text-xs tracking-[0.25em] text-brand-secondary font-semibold uppercase block mb-6">
                BESPOKE PRACTICE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-primary leading-tight mb-8">
                Orchestrating Natural Elements &amp; Material Assemblies.
              </h2>
              <p className="font-sans text-base leading-relaxed text-on-surface-variant mb-12 max-w-xl">
                We design structures starting from raw geographical topography checks up to final custom finish assemblies. Our teams ensure each custom joint, slate layer, and shadow facade matches the original architectural vision flawlessly.
              </p>
            </motion.div>

            <div className="space-y-6">
              {services.map((serv, idx) => (
                <motion.div
                  key={serv.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group border-b border-outline-variant/25 pb-6 flex justify-between items-start gap-4 hover:border-brand-secondary transition-colors duration-300"
                >
                  <span className="font-serif text-2xl font-light text-brand-secondary block mt-1">
                    {serv.num}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-serif text-xl font-normal text-brand-primary mb-2">
                      {serv.title}
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant/85 leading-relaxed">
                      {serv.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Counters Section with scaling reveals */}
      <section className="w-full bg-brand-primary text-white py-20 border-t border-b border-white/5">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { stat: "30+", label: "YEARS OF LEGACY" },
              { stat: "150+", label: "AWARDS WON" },
              { stat: "12", label: "GLOBAL OFFICES" },
              { stat: "$4B+", label: "PORTFOLIO VALUE" }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="font-serif text-4xl md:text-6xl font-light mb-2 text-brand-secondary">
                  {item.stat}
                </div>
                <div className="font-sans text-[10px] tracking-[0.3em] font-medium text-white/50 uppercase">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Elegant Call-To-Action Section with zoom reveal */}
      <section className="w-full py-24 md:py-32 bg-surface-subtle border-b border-outline-variant/15">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
          <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-primary mb-6 leading-tight">
            Ready to design your landmark masterwork?
          </h2>
          <p className="font-sans text-base leading-relaxed text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Arrange a private strategic session with our principal structural architects. Let us help translate your dimensional ideas into a timeless physical balance of weight and light.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => router.push("/inquiry")}
              className="bg-brand-primary hover:bg-brand-secondary text-white font-sans text-xs tracking-widest font-semibold py-4 px-12 transition-all duration-300 cursor-pointer"
              id="cta-start-project-btn"
            >
              START A PROJECT
            </button>
            <button
              onClick={() => router.push("/customizer")}
              className="border border-outline hover:border-brand-primary text-brand-primary font-sans text-xs tracking-widest font-semibold py-4 px-12 transition-all duration-300 bg-transparent cursor-pointer"
              id="cta-customizer-btn"
            >
              CHOOSE MATERIALS
            </button>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
