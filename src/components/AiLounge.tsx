"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MessageCircle, HelpCircle, AlertCircle, Compass, HardHat, Layers } from "lucide-react";

interface AiResult {
  name: string;
  brief: string;
  materials: string[];
  layout: string[];
  rating: string;
}

export default function AiLounge() {
  const [userInput, setUserPrompt] = useState("");
  const [topography, setTopography] = useState("cliffside");
  const [primaryMaterial, setPrimaryMaterial] = useState("basalt");
  const [windowProfile, setWindowProfile] = useState("Floor-to-Ceiling glass");
  
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<AiResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const loadingMessages = [
    "Analyzing topographical parameters & shear resistance...",
    "Drafting thermal mass balance calculations block-by-block...",
    "Simulating sun-path angles for passive climate controls...",
    "Sourcing zero-decay material aggregate matches...",
    "Compiling layout blueprints and structural drawings..."
  ];

  const handleGenerateBrief = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setResult(null);
    setLoadingStep(0);

    // Advanced loading state animation step-by-step
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingMessages.length - 1) {
          return prev;
        }
        return prev + 1;
      });
    }, 1800);

    try {
      const response = await fetch("/api/gemini/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userPrompt: userInput,
          topography,
          primaryMaterial,
          windowProfile
        }),
      });

      const data = await response.json();
      if (data.success && data.result) {
        setResult(data.result);
      } else {
        throw new Error(data.error || "Failed to compile architectural concept");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected compile error occurred.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-bg-primary pt-36 pb-32 text-left">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16">
      <div className="mb-16">
        <span className="font-sans text-xs tracking-[0.25em] text-brand-secondary font-semibold uppercase block mb-3">
          AI DESIGN LAB
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-primary leading-tight max-w-3xl">
          The Automated Architectural Studio.
        </h1>
        <p className="font-sans text-on-surface-variant text-sm md:text-base mt-4 max-w-xl">
          Describe the space of your desires. Our custom digital architect (powered by Gemini) will generate a complete structural concept, complete with passive cooling schemas, material finishes, and spatial floorplan layouts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Command Entry Form */}
        <div className="lg:col-span-5">
          <form onSubmit={handleGenerateBrief} className="bg-surface-card border border-outline-variant/15 p-8 shadow-sm space-y-6">
            <div>
              <span className="font-sans text-[10px] tracking-widest text-on-surface-variant font-bold block mb-1 uppercase">
                STUDIO INPUT
              </span>
              <h3 className="font-serif text-lg font-normal text-brand-primary uppercase tracking-wide">
                Bespoke Parameters
              </h3>
            </div>

            {/* Custom description prompt */}
            <div>
              <label htmlFor="user-concept-prompt" className="font-sans text-xs font-semibold text-brand-primary uppercase tracking-wider block mb-2">
                1. Describe your vision
              </label>
              <textarea
                id="user-concept-prompt"
                rows={4}
                value={userInput}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="e.g., A low-profile Travertine sanctuary hanging over a dense forest slope in Kyoto with a secluded stone reflecting pool..."
                className="w-full text-sm font-sans p-4 border border-outline-variant/40 rounded-sm bg-bg-primary/50 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
              />
            </div>

            {/* Topography Selector */}
            <div>
              <label htmlFor="user-topo-select" className="font-sans text-xs font-semibold text-brand-primary uppercase tracking-wider block mb-2">
                2. Site Topography
              </label>
              <select
                id="user-topo-select"
                value={topography}
                onChange={(e) => setTopography(e.target.value)}
                className="w-full text-sm font-sans p-3 border border-outline-variant/40 rounded-sm bg-bg-primary/50 focus:outline-none focus:border-brand-secondary"
              >
                <option value="cliffside">Bel Air Cliffside Slopes</option>
                <option value="coastal">Malibu Ocean Shore</option>
                <option value="forest">Kyoto Cedar Forest Canopy</option>
                <option value="canyon">Canyon Ravine Slopes</option>
              </select>
            </div>

            {/* Core Structural Material Selector */}
            <div>
              <label htmlFor="user-material-select" className="font-sans text-xs font-semibold text-brand-primary uppercase tracking-wider block mb-2">
                3. Primary aggregate finish
              </label>
              <select
                id="user-material-select"
                value={primaryMaterial}
                onChange={(e) => setPrimaryMaterial(e.target.value)}
                className="w-full text-sm font-sans p-3 border border-outline-variant/40 rounded-sm bg-bg-primary/50 focus:outline-none focus:border-brand-secondary"
              >
                <option value="basalt">Raw Volcanic Basalt Slabs</option>
                <option value="travertine">Sandblasted Imperial Travertine</option>
                <option value="charred">Carbonized Shou Sugi Ban Wood</option>
                <option value="steel">Industrial Brushed Steel Columns</option>
              </select>
            </div>

            {/* Glazing config */}
            <div>
              <label htmlFor="user-glazing-select" className="font-sans text-xs font-semibold text-brand-primary uppercase tracking-wider block mb-2">
                4. Window glazing scale
              </label>
              <select
                id="user-glazing-select"
                value={windowProfile}
                onChange={(e) => setWindowProfile(e.target.value)}
                className="w-full text-sm font-sans p-3 border border-outline-variant/40 rounded-sm bg-bg-primary/50 focus:outline-none focus:border-brand-secondary"
              >
                <option value="Floor-to-Ceiling glass">Floor-to-Ceiling panoramic glass walls</option>
                <option value="Clerestory strip glazing">Horizontal clerestory bands</option>
                <option value="Ribbon facade glass">Ribbon structural panels</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 font-sans text-xs tracking-widest font-semibold flex items-center justify-center gap-2 border transition-all duration-300 ${
                loading
                  ? "bg-bg-primary text-on-surface-variant cursor-not-allowed border-outline-variant"
                  : "bg-brand-primary hover:bg-brand-secondary text-white border-transparent"
              }`}
              id="generate-brief-btn"
            >
              <Sparkles size={14} className={loading ? "animate-spin" : ""} />
              {loading ? "COMPILING SCHEMATICS..." : "COMPILE DESIGN BRIEF"}
            </button>
          </form>
        </div>

        {/* Right Column: AI Output Results */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {/* 1. Idle state info card */}
            {!loading && !result && !errorMsg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-surface-neutral/45 border border-dashed border-outline-variant/60 p-12 text-center flex flex-col items-center justify-center min-h-[460px]"
                id="ai-idle-card"
              >
                <div className="w-16 h-16 border border-brand-secondary/20 rounded-full flex items-center justify-center bg-brand-secondary/5 text-brand-secondary mb-6">
                  <Compass size={28} />
                </div>
                <h3 className="font-serif text-xl font-normal text-brand-primary mb-3">
                  Studio Sandbox Standby
                </h3>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant max-w-md leading-relaxed">
                  Enter your specifications or customize the parameters on the left. Click compile to trigger the digital architect model.
                </p>
                <div className="mt-8 flex items-center gap-1.5 text-brand-secondary font-sans text-[10px] tracking-widest font-semibold uppercase">
                  <span>PRESTIGE CRADLE INTEGRATED</span>
                </div>
              </motion.div>
            )}

            {/* 2. Poetic Architectural Loading screen */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-brand-primary text-white p-12 text-center flex flex-col items-center justify-center min-h-[460px] relative overflow-hidden"
                id="ai-loading-card"
              >
                {/* Micro blueprint grids */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
                
                <div className="relative z-10 w-full max-w-md space-y-8">
                  <div className="flex justify-center">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-full border-t-2 border-brand-secondary/50 border-r-2 border-transparent animate-spin" />
                      <div className="absolute inset-2 rounded-full border-b-2 border-white/30 border-l-2 border-transparent animate-spin-reverse" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl font-light text-brand-secondary">
                      ORCHESTRATING STRUCTURE
                    </h3>
                    <motion.p
                      key={loadingStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="font-sans text-xs md:text-sm text-white/70 italic leading-relaxed"
                    >
                      {loadingMessages[loadingStep]}
                    </motion.p>
                  </div>

                  <div className="pt-8 flex justify-center gap-1">
                    {loadingMessages.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          loadingStep === i ? "bg-brand-secondary" : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. Compiled Design brief output */}
            {result && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8 text-left"
                id="ai-result-card"
              >
                {/* Result header card */}
                <div className="bg-brand-primary text-white p-8 md:p-12 relative overflow-hidden border border-white/5">
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 text-brand-secondary border border-brand-secondary/30 px-3 py-1 bg-brand-secondary/5">
                    <Sparkles size={12} />
                    <span className="font-sans text-[9px] uppercase tracking-widest font-bold">
                      COMPILED BRIEF
                    </span>
                  </div>

                  <span className="font-sans text-[9px] tracking-[0.35em] text-white/50 uppercase font-semibold block mb-2">
                     bespoke development proposal
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-tight tracking-wide mb-6">
                    {result.name}
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-white/80 leading-relaxed font-light text-justify">
                    {result.brief}
                  </p>
                </div>

                {/* Material aggregation recommendations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Specialized aggregates */}
                  <div className="bg-surface-card border border-outline-variant/15 p-6 md:p-8 flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-4 text-brand-secondary">
                      <Layers size={15} />
                      <span className="font-sans text-[10px] tracking-widest font-bold uppercase">
                        SPECIALIZED MATERIAL AGGREGATES
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {result.materials.map((mat, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-on-surface">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                          <span className="font-sans font-semibold uppercase">{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Energy & thermal index details */}
                  <div className="bg-surface-card border border-outline-variant/15 p-6 md:p-8 flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-4 text-brand-secondary">
                      <HardHat size={15} />
                      <span className="font-sans text-[10px] tracking-widest font-bold uppercase">
                        THERMAL INTEGRATION INDEX
                      </span>
                    </div>
                    <div>
                      <p className="font-serif text-4xl text-brand-primary font-semibold">
                        {result.rating}
                      </p>
                      <p className="font-sans text-[11px] text-on-surface-variant mt-2 leading-relaxed">
                        Evaluated environmental performance based on structural aggregate weight, natural ventilation drafts, and custom sunset glazing placements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spatial layout zones */}
                <div className="bg-white border border-outline-variant/15 p-8 text-left">
                  <h4 className="font-serif text-lg font-normal text-brand-primary uppercase tracking-wider mb-6 block border-b border-outline-variant/15 pb-3">
                    Bespoke Layout Zones Plan
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {result.layout.map((lay, i) => (
                      <div key={i} className="bg-bg-primary/40 border border-outline-variant/15 p-5 text-left">
                        <span className="font-serif text-2xl font-light text-brand-secondary block mb-2">0{i+1}</span>
                        <p className="font-sans text-xs md:text-sm text-brand-primary font-semibold leading-relaxed">
                          {lay}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )}

            {/* 4. Error response message */}
            {errorMsg && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-error-container text-on-error-container border border-error/20 p-8 flex items-start gap-4"
                id="ai-error-card"
              >
                <AlertCircle size={20} className="text-error flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-2">Architectural Compilation Halt</h4>
                  <p className="font-sans text-xs md:text-sm leading-relaxed text-on-error-container/90">
                    {errorMsg}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      </div>
    </section>
  );
}
