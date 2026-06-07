"use client";

import { PRODUCTS, Product } from "@/data/products";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Grid, Calendar, ShieldCheck, MapPin } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const router = useRouter();

  // Find project or use first default
  const project = PRODUCTS.find((p) => p.id === projectId) || PRODUCTS[0];

  // Auto-scroll to top upon loading detail view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  // Find next project in circular carousel way
  const currentIndex = PRODUCTS.findIndex((p) => p.id === project.id);
  const nextProject = PRODUCTS[(currentIndex + 1) % PRODUCTS.length];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full pt-20"
      >
        {/* Detail Top Sub-Header Bar */}
        <div className="bg-white/95 backdrop-blur-md sticky top-[76px] md:top-[88px] z-40 border-b border-outline-variant/40 py-3.5 shadow-sm transition-all duration-350 w-full">
          <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 flex justify-between items-center">
            <Link
            href="/"
            className="flex items-center gap-2 font-sans text-xs tracking-widest text-brand-primary hover:text-brand-secondary font-bold transition-colors py-1 group"
            id="detail-back-btn"
          >
            <ArrowLeft
              size={14}
              className="transform group-hover:-translate-x-1 transition-transform"
            />
            BACK TO PORTFOLIO
          </Link>
          <div className="font-sans text-[10px] tracking-[0.25em] text-brand-secondary font-bold uppercase hidden sm:block">
            {project.location} &bull; CASE STUDY
          </div>
        </div>
      </div>

        {/* Cinematic Header Illustration Hero */}
        <section className="relative h-[650px] w-full overflow-hidden bg-brand-primary">
          <img
            src={project.image}
            alt={project.alt}
            className="absolute inset-0 w-full h-full object-cover scale-105 origin-center brightness-90 shadow-inner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/85 via-brand-primary/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 w-full text-white flex flex-col justify-end text-left">
            <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 pb-6 md:pb-16">
            <span className="font-sans text-[10px] md:text-xs tracking-[0.45em] text-brand-secondary mb-3 uppercase font-semibold block">
              PRIVATE RESIDENCE METRICS
            </span>
            <h1 className="font-serif text-[34px] md:text-5xl lg:text-7xl font-light text-white leading-tight mb-4 tracking-wide">
              {project.title}
            </h1>
            <p className="font-serif italic text-base md:text-xl text-white/80 max-w-3xl leading-relaxed font-light">
              &ldquo;{project.subtitle}&rdquo;
            </p>
            </div>
          </div>
        </section>

        {/* Project Technical Specifications Dashboard */}
        <section className="w-full bg-surface-subtle py-16 md:py-24 border-b border-outline-variant/15">
          <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 text-left">
            <div className="mb-10">
              <span className="font-sans text-xs tracking-[0.25em] text-brand-secondary font-semibold uppercase block">
                PROJECT METRICS &amp; RATINGS
              </span>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-left">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2 text-on-surface-variant/80">
                  <Grid size={15} className="text-brand-secondary" />
                  <span className="font-sans text-[11px] tracking-widest font-semibold uppercase">
                    DIMENSIONS
                  </span>
                </div>
                <p className="font-serif text-2xl md:text-3xl text-brand-primary font-normal">
                  {project.sqft}
                </p>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2 text-on-surface-variant/80">
                  <Calendar size={15} className="text-brand-secondary" />
                  <span className="font-sans text-[11px] tracking-widest font-semibold uppercase">
                    COMPLETION
                  </span>
                </div>
                <p className="font-serif text-2xl md:text-3xl text-brand-primary font-normal">
                  {project.completion}
                </p>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2 text-on-surface-variant/80">
                  <ShieldCheck size={15} className="text-brand-secondary" />
                  <span className="font-sans text-[11px] tracking-widest font-semibold uppercase">
                    FACADE COMPOSITION
                  </span>
                </div>
                <p className="font-serif text-2xl md:text-3xl text-brand-primary font-normal uppercase leading-tight line-clamp-2">
                  {project.materials[0]}
                </p>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-2 text-on-surface-variant/80">
                  <MapPin size={15} className="text-brand-secondary" />
                  <span className="font-sans text-[11px] tracking-widest font-semibold uppercase">
                    LOCATION
                  </span>
                </div>
                <p className="font-serif text-2xl md:text-3xl text-brand-primary font-normal">
                  {project.location}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Narrative & Case Study details */}
        <section className="w-full bg-bg-primary py-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Structural vision essay */}
            <div className="lg:col-span-5 relative text-left">
              <span className="font-sans text-xs tracking-[0.25em] text-brand-secondary font-semibold uppercase block mb-5">
                THE STRUCTURAL DIALOGUE
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-primary leading-tight mb-8">
                Harmonizing weight with gravity.
              </h2>
              <div className="space-y-6 text-on-surface-variant text-sm md:text-base leading-relaxed">
                <p className="font-sans font-light">
                  {project.longDescription}
                </p>
                <p className="font-sans text-xs md:text-sm text-brand-secondary/90 italic border-l-2 border-brand-secondary/40 pl-4 py-1">
                  &ldquo;A precise alignment of structural load lines protects interior spatial integrity, forming an ambient buffer zone with local environmental elements.&rdquo;
                </p>
              </div>
            </div>

            {/* In-depth materials detail frame */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
              {/* Detailed specification list of aggregates */}
              <div className="bg-surface-card p-8 md:p-12 border border-outline-variant/15 shadow-sm text-left">
                <h4 className="font-serif text-xl font-normal text-brand-primary mb-6">
                  Material Palette Analysis:
                </h4>
                <div className="space-y-6">
                  {project.materials.map((mat, i) => (
                    <div key={i} className="flex items-start gap-4 pb-4 border-b border-outline-variant/15 last:border-0 last:pb-0">
                      <span className="font-serif text-brand-secondary font-medium">0{i+1}</span>
                      <div>
                        <span className="text-on-surface font-sans text-sm font-semibold block uppercase">
                          {mat}
                        </span>
                        <span className="text-on-surface-variant font-sans text-xs mt-1 block">
                          Curated, zero-decay finish matching structural weight properties. Highly reflective thermal glass integrations.
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Project Vertical Image Showcase Gallery */}
        <section className="w-full bg-surface-neutral/30 py-12">
          <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16">
          <div className="space-y-6 max-w-4xl mx-auto py-12">
            <span className="font-sans text-xs tracking-[0.25em] text-on-surface-variant/80 font-semibold uppercase block text-center mb-6">
              CASE ARCHIVE &bull; IMAGERY DETAILS
            </span>
            {project.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                viewport={{ once: true, margin: "-50px" }}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full bg-surface-subtle overflow-hidden border border-outline-variant/15"
                id={`detail-gallery-container-${idx}`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full object-cover aspect-[4/3] md:aspect-[16/9] hover:scale-[1.02] transition-transform duration-[1000ms]"
                />
                <div className="p-5 text-left bg-surface-card border-t border-outline-variant/15">
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant italic">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </section>

        {/* Circular Next Project Teaser Footer Portal */}
        <section
          onClick={() => router.push(`/project/${nextProject.id}`)}
          className="relative h-[550px] w-full flex items-center justify-center overflow-hidden bg-brand-primary cursor-pointer border-t border-white/10 group"
          id="detail-next-project-teaser"
        >
          <img
            src={nextProject.image}
            alt={nextProject.alt}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.35] group-hover:scale-105 transition-transform duration-[1200ms] ease-out origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent" />
          
          <div className="relative z-10 text-center text-white px-6">
            <span className="font-sans text-xs tracking-[0.45em] text-brand-secondary font-semibold uppercase block mb-4">
              NEXT LANDMARK PORTAL
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              {nextProject.title}
            </h2>
            <div className="flex items-center justify-center gap-3 text-white/90 group-hover:text-brand-secondary transition-colors duration-300 font-sans text-xs tracking-[0.2em] font-medium uppercase font-semibold">
              EXPLORE LANDMARK
              <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
