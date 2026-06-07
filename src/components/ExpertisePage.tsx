"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ExpertisePage() {
  const services = [
    { num: "01", title: "Structural Engineering", desc: "Rigorous load calculations and geometric optimizations allowing for impossible cantilevers and floating volumes." },
    { num: "02", title: "Material Science", desc: "Sourcing and refining raw basalts, carbonized timbers, and low-emissivity smart glass for eternal durability." },
    { num: "03", title: "Master Planning", desc: "Harmonizing vast topographies into cohesive, navigable estates with integrated environmental pathways." },
    { num: "04", title: "Zero-Carbon Integration", desc: "Concealed geothermal heating, passive solar cooling, and deep thermal mass strategies integrated directly into the aesthetic." },
  ];

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
              OUR EXPERTISE
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-brand-primary leading-tight max-w-4xl">
              Capabilities beyond the conventional limit.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 bg-surface-subtle">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              src="/expertise_blueprint.png"
              alt="Engineering Blueprint"
              className="w-full aspect-square md:aspect-[4/3] object-cover border border-outline-variant/20"
            />
          </div>
          <div className="space-y-12 flex flex-col justify-center">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-b border-outline-variant/20 pb-8"
              >
                <div className="flex items-start gap-6">
                  <span className="font-serif text-brand-secondary text-xl mt-1">
                    {service.num}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold uppercase tracking-wide text-brand-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="font-sans text-on-surface-variant text-sm leading-relaxed max-w-md">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-0">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
          className="w-full h-[60vh] relative overflow-hidden border-y border-outline-variant/15"
        >
          <img 
            src="/materials_abstract.png" 
            alt="Abstract Materials" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide text-center px-6">
               The pursuit of elemental purity.
             </h2>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
