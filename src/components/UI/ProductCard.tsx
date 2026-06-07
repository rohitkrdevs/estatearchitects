"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export interface ProductCardProps {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  sqft?: string;
  completion?: string;
  materials?: string[];
  climate?: string;
  image: string;
  alt?: string;
  summary?: string;
  onClick?: () => void;
  aspectClass?: string;
  gridColClass?: string;
}

export default function ProductCard({
  id,
  title,
  subtitle,
  location,
  sqft,
  completion,
  materials = [],
  climate,
  image,
  alt = "",
  summary,
  onClick,
  aspectClass = "aspect-[16/10]",
  gridColClass = "md:col-span-6",
}: ProductCardProps) {
  return (
    <motion.div
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 35 }}
      transition={{ duration: 0.8 }}
      onClick={onClick}
      className={`group relative ${aspectClass} overflow-hidden bg-brand-primary cursor-pointer border border-outline-variant/15 w-full`}
      id={`product-card-${id}`}
    >
      {/* Background image component with hover smooth scale */}
      <img
        src={image}
        alt={alt || title}
        referrerPolicy="no-referrer"
        loading="lazy"
        className="w-full h-full object-cover transition-all duration-[1200ms] ease-out scale-102 group-hover:scale-110 filter brightness-[0.7] group-hover:brightness-[0.45] pointer-events-none select-none"
      />

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-brand-primary via-brand-primary/45 to-transparent opacity-95 transition-all duration-[900ms]" />

      {/* Hover action slide-up details container */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10 select-none text-left">
        
        {/* Card Upper: Locations, Indices, Indicators */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1.5 font-sans text-[9px] tracking-widest text-brand-secondary font-bold uppercase py-1 px-2.5 bg-brand-primary/80 border border-brand-secondary/40">
            <span>{location}</span>
          </div>
          {sqft && (
            <span className="font-mono text-[9px] text-white/50 bg-white/5 border border-white/10 px-2 py-0.5 tracking-wider">
              {sqft}
            </span>
          )}
        </div>

        {/* Card Lower: Metadata and Titles */}
        <div className="space-y-3">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-white tracking-wide group-hover:text-brand-secondary transition-colors duration-400">
              {title}
            </h3>
            <p className="font-sans text-[11px] md:text-xs text-white/60 tracking-wider font-light line-clamp-1">
              {subtitle}
            </p>
          </div>

          {/* Reveal details on parent hover */}
          <div className="max-h-0 opacity-0 overflow-hidden transform translate-y-3 group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            {summary && (
              <p className="font-sans text-white/70 text-[11px] leading-relaxed line-clamp-2 md:line-clamp-3 mb-3">
                {summary}
              </p>
            )}
            
            {materials && materials.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {materials.slice(0, 3).map((mat, i) => (
                  <span
                    key={i}
                    className="text-[8px] font-sans tracking-widest text-brand-secondary font-bold border border-brand-secondary/20 px-1.5 py-0.5 bg-brand-secondary/5 uppercase"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1.5">
            <span className="font-sans text-[10px] tracking-widest text-white/40 group-hover:text-white transition-colors duration-350 uppercase font-medium">
              EXPLORE CASE STUDY
            </span>
            <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-brand-secondary group-hover:bg-brand-secondary/15 flex items-center justify-center text-white/70 group-hover:text-white transition-all transform group-hover:translate-x-1.5 duration-400">
              <ArrowUpRight size={13} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
