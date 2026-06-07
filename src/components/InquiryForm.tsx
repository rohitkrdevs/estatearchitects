"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CalendarDays, Clock, FileText, CheckCircle, Quote, Mail, Phone, ExternalLink } from "lucide-react";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consultant, setConsultant] = useState("principal");
  const [selectedDate, setSelectedDate] = useState("2026-06-15");
  const [selectedTime, setSelectedTime] = useState("14:00");
  const [notes, setNotes] = useState("");

  const consultants = [
    { id: "principal", name: "Sir Richard Cole", role: "Principal Structural Architect", desc: "Expert in deep basalt foundations and extreme canyon cantilevers." },
    { id: "sustainable", name: "Dr. Miyako Sato", role: "Sustainable Site Planner", desc: "Specialist in sun-path solar alignment and micro thermal-mass insulation." },
    { id: "director", name: "Alistair Vance", role: "Institutional Director", desc: "Consultant for high-budget commercial monolith structures and zoning permissions." }
  ];

  const dates = [
    { label: "Mon, Jun 15", val: "2026-06-15" },
    { label: "Tue, Jun 16", val: "2026-06-16" },
    { label: "Thu, Jun 18", val: "2026-06-18" },
    { label: "Fri, Jun 19", val: "2026-06-19" },
    { label: "Mon, Jun 22", val: "2026-06-22" }
  ];

  const times = [
    { label: "10:00 AM", val: "10:00" },
    { label: "11:30 AM", val: "11:30" },
    { label: "02:00 PM", val: "14:00" },
    { label: "03:30 PM", val: "15:30" },
    { label: "05:00 PM", val: "17:00" }
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const chosenConsultant = consultants.find((c) => c.id === consultant) || consultants[0];
  const chosenDateLabel = dates.find((d) => d.val === selectedDate)?.label || "Jun 15";
  const chosenTimeLabel = times.find((t) => t.val === selectedTime)?.label || "02:00 PM";

  return (
    <section className="w-full bg-bg-primary pt-36 pb-32 text-left">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-16">
      <div className="mb-16">
        <span className="font-sans text-xs tracking-[0.25em] text-brand-secondary font-semibold uppercase block mb-3">
          CLIENT ADVISORY
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-primary leading-tight max-w-2xl">
          Reserve Private Structural Consultation.
        </h1>
        <p className="font-sans text-on-surface-variant text-sm md:text-base mt-4 max-w-xl">
          Schedule an active planning session with our chief consultants in West Hollywood, London, or Tokyo. Let us map out your materials aggregates and architectural loads.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Form & Scheduler Panels */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="inquiryForm"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-surface-card border border-outline-variant/15 p-8 md:p-12 shadow-sm space-y-8"
              >
                {/* Section A: Contact Credentials */}
                <div className="space-y-6">
                  <h3 className="font-serif text-xl font-normal text-brand-primary border-b border-outline-variant/15 pb-3 uppercase tracking-wide">
                    Client Credentials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="client-name" className="font-sans text-xs font-semibold text-brand-primary uppercase tracking-wider block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="client-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Elizabeth Sterling"
                        className="w-full text-sm font-sans p-3 border border-outline-variant/50 bg-bg-primary/40 rounded-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
                      />
                    </div>
                    <div>
                      <label htmlFor="client-email" className="font-sans text-xs font-semibold text-brand-primary uppercase tracking-wider block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="client-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sterling@capital.com"
                        className="w-full text-sm font-sans p-3 border border-outline-variant/50 bg-bg-primary/40 rounded-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="client-phone" className="font-sans text-xs font-semibold text-brand-primary uppercase tracking-wider block mb-2">
                      Direct Telephone Profile (Optional)
                    </label>
                    <input
                      type="tel"
                      id="client-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +1 (310) 555-8941"
                      className="w-full text-sm font-sans p-3 border border-outline-variant/50 bg-bg-primary/40 rounded-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
                    />
                  </div>
                </div>

                {/* Section B: Consultant Alignment */}
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-normal text-brand-primary border-b border-outline-variant/15 pb-3 uppercase tracking-wide">
                    Select Chief Advisor
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {consultants.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setConsultant(c.id)}
                        className={`p-4 text-left border transition-all duration-300 relative ${
                          consultant === c.id
                            ? "border-brand-secondary bg-white ring-1 ring-brand-secondary"
                            : "border-outline-variant/35 bg-bg-primary/20 hover:border-brand-primary"
                        }`}
                        id={`consultant-btn-${c.id}`}
                      >
                        <span className="font-serif text-sm font-semibold text-brand-primary block mb-1">
                          {c.name}
                        </span>
                        <span className="font-sans text-[10px] tracking-wider text-brand-secondary uppercase font-bold block mb-2">
                          {c.role}
                        </span>
                        <span className="font-sans text-[10px] text-on-surface-variant/80 block leading-snug">
                          {c.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section C: Calendar Scheduler */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {/* Dates Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-brand-secondary mb-1">
                      <CalendarDays size={15} />
                      <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                        Select Planning Date
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.val}
                          type="button"
                          onClick={() => setSelectedDate(d.val)}
                          className={`p-3 text-center border text-xs font-sans font-semibold transition-all duration-300 ${
                            selectedDate === d.val
                              ? "border-brand-secondary bg-brand-primary text-brand-secondary ring-1 ring-brand-secondary"
                              : "border-outline-variant/35 bg-bg-primary/10 hover:border-brand-primary text-on-surface-variant"
                          }`}
                          id={`date-select-btn-${d.val}`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Times Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-brand-secondary mb-1">
                      <Clock size={15} />
                      <span className="font-sans text-xs font-semibold uppercase tracking-wider">
                        Select Time Segment
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {times.map((t) => (
                        <button
                          key={t.val}
                          type="button"
                          onClick={() => setSelectedTime(t.val)}
                          className={`p-3 text-center border text-xs font-sans font-semibold transition-all duration-300 ${
                            selectedTime === t.val
                              ? "border-brand-secondary bg-brand-primary text-brand-secondary ring-1 ring-brand-secondary"
                              : "border-outline-variant/35 bg-bg-primary/10 hover:border-brand-primary text-on-surface-variant"
                          }`}
                          id={`time-select-btn-${t.val}`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section D: Memo Notes */}
                <div className="space-y-2">
                  <label htmlFor="client-notes" className="font-sans text-xs font-semibold text-brand-primary uppercase tracking-wider block">
                    Dimensional Notes &amp; Site Brief
                  </label>
                  <textarea
                    id="client-notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Provide details about structural location, targeted square-footage, and preferred aggregate mixtures."
                    className="w-full text-sm font-sans p-4 border border-outline-variant/50 bg-bg-primary/40 rounded-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
                  />
                </div>

                {/* Submission CTA */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 font-sans text-xs tracking-widest font-semibold transition-all duration-300 active:scale-98"
                    id="submit-session-btn"
                  >
                    CONFIRM STRUCTURAL BOOKING
                  </button>
                </div>
              </motion.form>
            ) : (
              // Breathtaking confirmation success cards
              <motion.div
                key="submittedCard"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-primary text-white p-8 md:p-16 text-center border border-white/5 relative overflow-hidden rounded-sm min-h-[500px] flex flex-col items-center justify-center space-y-6"
                id="booking-submitted-card"
              >
                {/* Blueprint background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                
                <div className="w-16 h-16 rounded-full border border-brand-secondary/30 bg-brand-secondary/15 flex items-center justify-center text-brand-secondary mb-4 z-10 animate-gold-glow">
                  <CheckCircle size={28} />
                </div>

                <div className="z-10 max-w-xl mx-auto space-y-4">
                  <span className="font-sans text-[10px] tracking-[0.35em] text-brand-secondary font-bold uppercase block">
                    booking confirmed
                  </span>
                  <h2 className="font-serif text-3xl md:text-5xl font-light text-white leading-tight">
                    Planning Session Active.
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed italic max-w-lg mx-auto">
                    &ldquo;Thank you, {name}. Your bespoke advisory session has been logged on our secure servers. A formal confirmation dispatch with coordinate sheets is on its way to {email}.&rdquo;
                  </p>
                </div>

                {/* Displaying detailed appointment summary */}
                <div className="bg-white/5 border border-white/10 p-6 z-10 w-full max-w-md text-left mt-8 rounded-sm">
                  <span className="font-sans text-[9px] tracking-widest text-brand-secondary uppercase font-bold block mb-4">
                    summary records
                  </span>
                  <div className="space-y-3 font-sans text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/50">CHIEF ADVISOR:</span>
                      <span className="text-white font-semibold">{chosenConsultant.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/50">PLANNING DATE:</span>
                      <span className="text-white font-semibold">{chosenDateLabel}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/50">TIME SEGMENT:</span>
                      <span className="text-white font-semibold">{chosenTimeLabel}</span>
                    </div>
                    {phone && (
                      <div className="flex justify-between">
                        <span className="text-white/50">CONTACT PROFILE:</span>
                        <span className="text-white font-semibold">{phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6 z-10">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setNotes("");
                    }}
                    className="font-sans text-xs tracking-widest text-brand-secondary border-b border-brand-secondary hover:text-white hover:border-white transition-colors pb-1 uppercase font-semibold"
                    id="book-another-session-btn"
                  >
                    arrange another session
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Dynamic Office & Contact Details panel */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-36">
          {/* Office listings card */}
          <div className="bg-surface-card border border-outline-variant/15 p-8 shadow-sm text-left">
            <h4 className="font-serif text-lg font-normal text-brand-primary uppercase tracking-wide mb-6">
              Global Offices
            </h4>
            <div className="space-y-6">
              <div>
                <span className="text-brand-secondary font-sans text-[10px] tracking-widest font-bold block mb-1 uppercase">
                  WEST HOLLYWOOD
                </span>
                <span className="text-on-surface font-serif text-sm block">
                  8422 Melrose Ave, West Hollywood, CA 90069
                </span>
                <span className="text-on-surface-variant font-sans text-[11px] block mt-1">
                  Advisory direct: +1 (320) 244-8890
                </span>
              </div>
              <div className="border-t border-outline-variant/15 pt-4">
                <span className="text-brand-secondary font-sans text-[10px] tracking-widest font-bold block mb-1 uppercase">
                  LONDON OFFICE
                </span>
                <span className="text-on-surface font-serif text-sm block">
                  Mayfair Gallery District, London W1J 8AQ
                </span>
                <span className="text-on-surface-variant font-sans text-[11px] block mt-1">
                  Advisory direct: +44 207 413 5590
                </span>
              </div>
              <div className="border-t border-outline-variant/15 pt-4">
                <span className="text-brand-secondary font-sans text-[10px] tracking-widest font-bold block mb-1 uppercase">
                  TOKYO STUDIO
                </span>
                <span className="text-on-surface font-serif text-sm block">
                  Minato City Plaza, Tokyo 105-0011
                </span>
                <span className="text-on-surface-variant font-sans text-[11px] block mt-1">
                  Advisory direct: +81 3 5408 8121
                </span>
              </div>
            </div>
          </div>

          {/* Environmental quote */}
          <div className="bg-brand-primary text-white p-8 relative overflow-hidden text-left border border-white/10">
            <Quote size={20} className="text-brand-secondary mb-4 opacity-40" />
            <p className="font-serif italic text-sm text-white/80 leading-relaxed font-light">
              &ldquo;True architectural design does not seek to dominate landforms. It listens, matching natural wind patterns and solar trails for timeless persistence.&rdquo;
            </p>
            <span className="font-sans text-[9px] tracking-widest font-bold text-brand-secondary uppercase block mt-4 text-right">
              &mdash; Sir Richard Cole, principal
            </span>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
