"use client";

import React from "react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/UI/ProductCard";

export default function ProjectsPage() {
  return (
    <div className="w-full bg-bg-primary min-h-screen text-on-surface">
      <section className="relative w-full pt-36 pb-16 border-b border-outline-variant/15">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="font-sans text-xs tracking-[0.25em] text-brand-secondary font-semibold uppercase block mb-4">
                CASE ARCHIVE
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-light text-brand-primary leading-tight">
                Selected Works.
              </h1>
            </div>
            <p className="font-sans text-on-surface-variant text-sm md:text-base max-w-sm">
              An index of completed structural masterworks, ranging from brutalist cliffside estates to minimal commercial sanctuaries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-16 bg-bg-primary">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
