"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StudioPage() {
  return (
    <div className="w-full bg-bg-primary min-h-screen text-on-surface">
      <section className="relative w-full pt-36 pb-24 border-b border-outline-variant/15">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs tracking-[0.25em] text-brand-secondary font-semibold uppercase block mb-4">
              THE STUDIO
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-brand-primary leading-tight max-w-4xl">
              Engineering poetry through mass and gravity.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 border-b border-outline-variant/15">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[4/5] bg-surface-subtle overflow-hidden border border-outline-variant/20"
          >
            <Image 
              src="/studio_interior.png" 
              alt="ESTATE ARCHITECTS Studio Interior"
              fill
              className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-[2000ms]"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-primary mb-8">
              A Heritage of Structural Perfection.
            </h2>
            <div className="space-y-6 font-sans text-base leading-relaxed text-on-surface-variant max-w-xl">
              <p>
                Established in 1994, ESTATE ARCHITECTS emerged from a fundamental desire to strip away ornamental excess and return to the absolute truth of materials. 
              </p>
              <p>
                We believe that architecture must converse directly with the raw environment. Our studios across Bel Air, Tokyo, and London collaborate on a unified vision: erecting monolithic, timeless structures that serve both as sanctuaries for our clients and minimal-impact sculptures upon the earth.
              </p>
              <p className="border-l-2 border-brand-secondary/40 pl-4 py-2 italic text-sm mt-8">
                "We do not decorate space; we orchestrate mass to define the void."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 bg-surface-subtle">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {[
            { city: "BEL AIR", subtitle: "Global Headquarters", text: "Where structural engineering meets the rugged California canyon landscape." },
            { city: "TOKYO", subtitle: "Innovation Lab", text: "Pioneering minimalist joinery, seismic isolation, and material research." },
            { city: "LONDON", subtitle: "Urban Masterplanning", text: "Integrating historical preservation with hyper-modern spatial design." },
          ].map((office, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 border border-outline-variant/15 bg-bg-primary/50"
            >
              <span className="font-sans text-[10px] tracking-widest text-brand-secondary font-semibold uppercase block mb-2">
                {office.subtitle}
              </span>
              <h3 className="font-serif text-2xl text-brand-primary mb-4">{office.city}</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {office.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
