"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Info, Leaf, Hammer, Move, Coins, Compass } from "lucide-react";

export default function InteractiveCustomizer() {
  const [topography, setTopography] = useState("cliffside");
  const [frame, setFrame] = useState("basalt");
  const [glazing, setGlazing] = useState("full");
  const [sqft, setSqft] = useState(8500);

  // Topographies
  const topographies = [
    { id: "cliffside", label: "Cliffside Slopes", desc: "Solid volcanic soil demanding deep-anchored structural cantilevers." },
    { id: "coastal", label: "Marine Shore", desc: "Corrosive salt-marine air demanding corrosion-immune stone plinths." },
    { id: "forest", label: "Forest Canopy", desc: "High relative humidity demanding moisture-resistant air channels." },
    { id: "canyon", label: "Canyon Ravine", desc: "Sheer rock face profiles requiring structural post-tension anchors." },
  ];

  // Material Frames
  const materialFrames = [
    { id: "basalt", label: "Basalt Monolith", desc: "Extremely high thermal mass. Absorbs solar rays.", color: "#2B2D2F" },
    { id: "travertine", label: "Travertine Solarium", desc: "Creamy layered limestone. Gallery feel.", color: "#E0D5C1" },
    { id: "charred", label: "Shou Sugi Ban", desc: "Carbonized Japanese timber. Fire & insect immune.", color: "#1C1C1D" },
    { id: "steel", label: "Brutalist Steel & Lime", desc: "Precision structural beams with raw limestone aggregate.", color: "#5E6366" },
  ];

  // Window Glazing profiles
  const glazingProfiles = [
    { id: "full", label: "Floor-to-Ceiling Glazed", desc: "Absolutely seamless water-clear panoramic views." },
    { id: "ribbon", label: "Ribbon Strip Glazing", desc: "Horizontal light bands filtering high-contrast shadows." },
    { id: "clerestory", label: "Zenith Clerestory", desc: "Roof-canopy windows reflecting soft vertical sky ambient." },
  ];

  // Estimates & Metrics computed dynamically
  const materialCostMult: Record<string, number> = { basalt: 450, travertine: 380, charred: 320, steel: 410 };
  const topoCostMult: Record<string, number> = { cliffside: 1.4, coastal: 1.3, forest: 1.1, canyon: 1.5 };
  
  const estimatedRate = materialCostMult[frame] * topoCostMult[topography];
  const totalInquiryCost = Math.round(sqft * estimatedRate);
  
  // Computed technical stats
  const thermalEfficiency: Record<string, string> = { basalt: "96%", travertine: "91%", charred: "88%", steel: "93%" };
  const loadBearing: Record<string, string> = { basalt: "High Resistance Columnar", travertine: "Standard Plated Load", charred: "Light Timber Compression", steel: "Absolute Truss Cantilever" };

  return (
    <section className="w-full bg-bg-primary pt-36 pb-32 text-left">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16">
      <div className="mb-16">
        <span className="font-sans text-xs tracking-[0.25em] text-brand-secondary font-semibold uppercase block mb-3">
          CAD METRICS DESK
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-primary leading-tight max-w-3xl">
          Configure Your Bespoke Blueprint.
        </h1>
        <p className="font-sans text-on-surface-variant text-sm md:text-base mt-4 max-w-xl">
          Interact with actual material compositions and geographical topography sets. Review real-time load models, spatial dimensions, and custom structural drawings in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Customizer Settings Form */}
        <div className="lg:col-span-6 space-y-12">
          
          {/* Site Topography Selection */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass size={16} className="text-brand-secondary" />
              <h3 className="font-serif text-lg font-normal text-brand-primary uppercase tracking-wider">
                1. Site Topography
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topographies.map((topo) => (
                <button
                  key={topo.id}
                  onClick={() => setTopography(topo.id)}
                  className={`p-5 text-left border transition-all duration-300 relative ${
                    topography === topo.id
                      ? "border-brand-secondary bg-white ring-1 ring-brand-secondary"
                      : "border-outline-variant/40 bg-surface-card/65 hover:border-brand-primary"
                  }`}
                  id={`topo-btn-${topo.id}`}
                >
                  <span className="font-serif text-sm font-semibold text-brand-primary block mb-1">
                    {topo.label}
                  </span>
                  <span className="font-sans text-[11px] text-on-surface-variant/80 block leading-relaxed">
                    {topo.desc}
                  </span>
                  {topography === topo.id && (
                    <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-brand-secondary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Material Frame Selection */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Hammer size={16} className="text-brand-secondary" />
              <h3 className="font-serif text-lg font-normal text-brand-primary uppercase tracking-wider">
                2. Structural Material Assembly
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {materialFrames.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFrame(f.id)}
                  className={`p-5 text-left border transition-all duration-300 relative ${
                    frame === f.id
                      ? "border-brand-secondary bg-white ring-1 ring-brand-secondary"
                      : "border-outline-variant/40 bg-surface-card/65 hover:border-brand-primary"
                  }`}
                  id={`frame-btn-${f.id}`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="w-3.5 h-3.5 border border-white/20 shadow-sm"
                      style={{ backgroundColor: f.color }}
                    />
                    <span className="font-serif text-sm font-semibold text-brand-primary block">
                      {f.label}
                    </span>
                  </div>
                  <span className="font-sans text-[11px] text-on-surface-variant/80 block leading-relaxed">
                    {f.desc}
                  </span>
                  {frame === f.id && (
                    <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-brand-secondary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Window profile layout config */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Move size={16} className="text-brand-secondary" />
              <h3 className="font-serif text-lg font-normal text-brand-primary uppercase tracking-wider">
                3. Window Glazing Profile
              </h3>
            </div>
            <div className="space-y-3">
              {glazingProfiles.map((glaz) => (
                <button
                  key={glaz.id}
                  onClick={() => setGlazing(glaz.id)}
                  className={`w-full p-4 text-left border transition-all duration-300 relative flex justify-between items-center ${
                    glazing === glaz.id
                      ? "border-brand-secondary bg-white ring-1 ring-brand-secondary"
                      : "border-outline-variant/40 bg-surface-card/65 hover:border-brand-primary"
                  }`}
                  id={`glazing-btn-${glaz.id}`}
                >
                  <div>
                    <span className="font-serif text-sm font-semibold text-brand-primary block">
                      {glaz.label}
                    </span>
                    <span className="font-sans text-[11px] text-on-surface-variant/80 block mt-1">
                      {glaz.desc}
                    </span>
                  </div>
                  {glazing === glaz.id && (
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Square footage slider */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-serif text-lg font-normal text-brand-primary uppercase tracking-wider">
                4. Dimension: {sqft.toLocaleString()} SQFT
              </span>
              <span className="font-sans text-xs text-brand-secondary font-semibold">
                Range: 4,000 to 25,000 SQFT
              </span>
            </div>
            <input
              type="range"
              min="4000"
              max="25000"
              step="500"
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full accent-brand-secondary bg-surface-neutral h-1 appearance-none rounded-lg cursor-pointer"
              id="dimension-slider"
            />
          </div>

        </div>

        {/* Right Column - Dynamic Vector Blueprint Rendering */}
        <div className="lg:col-span-6 space-y-8 lg:sticky lg:top-36">
          <div className="bg-surface-card border border-outline-variant/20 p-8 shadow-sm flex flex-col justify-between h-full relative">
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-brand-secondary/10 border border-brand-secondary/20 px-3 py-1 text-brand-secondary">
              <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
              <span className="font-sans text-[9px] uppercase tracking-widest font-bold">
                RENDER ENGINE ACTIVE
              </span>
            </div>

            <div className="mb-6">
              <span className="font-sans text-[10px] tracking-[0.3em] text-on-surface-variant/75 font-semibold block mb-1 uppercase">
                ESTATE ARCHITECTS INTEGRITY LAB
              </span>
              <h4 className="font-serif text-xl font-normal text-brand-primary uppercase tracking-wide">
                LANDMARK SPECIFICATION SCHEMATIC
              </h4>
            </div>

            {/* Breathtaking CAD Blueprint Schematic SVG Map */}
            <div className="w-full aspect-[4/3] bg-brand-primary/95 border border-white/5 relative flex items-center justify-center p-4 overflow-hidden rounded-sm select-none">
              
              {/* Drafting Grid overlays */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

              {/* Central Schematic Layout Drawing */}
              <svg className="w-full h-full text-white/40" viewBox="0 0 400 300" fill="none">
                
                {/* 1. TOPOGRAPHY CURVES (Dynamic Background) */}
                {topography === "cliffside" && (
                  <path d="M-20,290 C120,280 180,180 320,120 C380,90 410,60 440,20" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4,4" />
                )}
                {topography === "coastal" && (
                  <>
                    <path d="M-20,260 Q120,280 260,250 T420,270" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                    <path d="M-20,280 Q140,300 280,270 T420,290" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  </>
                )}
                {topography === "forest" && (
                  <path d="M20,10 C40,40 10,90 30,120 T10,240" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="10,5" />
                )}
                {topography === "canyon" && (
                  <>
                    <path d="M-20,80 L180,240 L210,240 L380,60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                    <path d="M-20,100 L180,260 L210,260 L380,80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  </>
                )}

                {/* 2. DYNAMIC MATERIAL COLOR BLOCK */}
                <rect 
                  x="110" 
                  y="100" 
                  width="180" 
                  height="120" 
                  stroke={frame === "basalt" ? "#FFFFFF" : frame === "travertine" ? "#E0D5C1" : frame === "charred" ? "#888888" : "#AAB0B2"}
                  strokeWidth="2" 
                  className="transition-colors duration-500"
                />

                {/* Inner architectural zones */}
                <line x1="200" y1="100" x2="200" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="110" y1="160" x2="290" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3,3" />

                {/* 3. WINDOW GLAZING FAÇADES */}
                {glazing === "full" && (
                  <g>
                    <line x1="115" y1="100" x2="285" y2="100" stroke="#735a2d" strokeWidth="4" />
                    <circle cx="115" cy="100" r="3.5" fill="#735a2d" />
                    <circle cx="285" cy="100" r="3.5" fill="#735a2d" />
                  </g>
                )}
                {glazing === "ribbon" && (
                  <g>
                    <line x1="110" y1="140" x2="290" y2="140" stroke="#735a2d" strokeWidth="2.5" strokeDasharray="8,6" />
                  </g>
                )}
                {glazing === "clerestory" && (
                  <g>
                    <rect x="135" y="85" width="130" height="15" stroke="#735a2d" strokeWidth="1.5" strokeDasharray="2,2" />
                    <text x="200" y="75" fill="#735a2d" fontSize="8" textAnchor="middle" letterSpacing="0.1em">CLERESTORY ZONE</text>
                  </g>
                )}

                {/* Drafting crosshairs, structural markers, and dimensions */}
                <circle cx="110" cy="100" r="3" fill="#FFFFFF" />
                <circle cx="290" cy="100" r="3" fill="#FFFFFF" />
                <circle cx="110" cy="220" r="3" fill="#FFFFFF" />
                <circle cx="290" cy="220" r="3" fill="#FFFFFF" />

                {/* Dimension callouts */}
                <text x="200" y="245" fill="rgba(255,255,255,0.35)" fontSize="9" textAnchor="middle">WIDTH EXPANSE: {Math.round(Math.sqrt(sqft) * 1.2)} FT</text>
                <text x="70" y="160" fill="rgba(255,255,255,0.35)" fontSize="9" textAnchor="middle" transform="rotate(-90 70 160)">DEPTH: {Math.round(Math.sqrt(sqft) * 0.8)} FT</text>
              </svg>

              {/* Sub-label */}
              <div className="absolute bottom-3 left-4 text-white/55 font-mono text-[9px] tracking-widest uppercase">
                MATERIAL FRAME COMBO: {frame}
              </div>
            </div>

            {/* Performance Specifications Data Field */}
            <div className="grid grid-cols-2 gap-6 bg-surface-subtle p-5 border-t border-outline-variant/20">
              <div>
                <span className="font-sans text-[10px] tracking-widest text-on-surface-variant font-bold block mb-1 uppercase">
                  THERMAL STABILITY
                </span>
                <div className="flex items-center gap-1.5">
                  <Leaf size={14} className="text-brand-secondary" />
                  <span className="font-serif text-lg text-brand-primary font-semibold">
                    {thermalEfficiency[frame]}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-sans text-[10px] tracking-widest text-on-surface-variant font-bold block mb-1 uppercase">
                  LOAD PERFORMANCE
                </span>
                <span className="font-serif text-[13px] text-brand-primary block leading-tight font-medium">
                  {loadBearing[frame]}
                </span>
              </div>
            </div>

            {/* Commercial Pricing Estimation */}
            <div className="mt-8 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-on-surface-variant/80">
                  <Coins size={14} className="text-brand-secondary" />
                  <span className="font-sans text-[10px] tracking-widest font-bold uppercase">
                    ESTIMATED CONTRACT RANGE
                  </span>
                </div>
                <p className="font-serif text-2xl md:text-3xl text-brand-primary mt-1 font-semibold">
                  ${totalInquiryCost.toLocaleString()}
                </p>
                <span className="font-sans text-[10px] text-on-surface-variant max-w-xs block mt-0.5 leading-tight">
                  Calculated based on {sqft} SQFT and premium material aggregate metrics.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
