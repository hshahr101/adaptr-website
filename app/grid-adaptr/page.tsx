'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  Building2, 
  CheckCircle2, 
  Cpu, 
  ArrowRight, 
  Activity, 
  Sliders, 
  Layers, 
  Factory, 
  Sparkles,
  ExternalLink,
  Server,
  Calendar,
  Video,
  X,
  Users
} from 'lucide-react';

// ─── GOOGLE CALENDAR APPOINTMENT SCHEDULING MODAL ─────────────────────────
interface ScheduleMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ScheduleMeetingModal({ isOpen, onClose }: ScheduleMeetingModalProps) {
  if (!isOpen) return null;

  const bookingUrl = "https://calendar.app.google/WTLgMGZZQGBJaosm7";

  return (
    <div 
      className="fixed inset-0 w-screen h-screen bg-gunmetal/80 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gunmetal border border-cerulean/30 w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl text-lightcyan relative max-h-[92vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4 border-b border-cerulean/20 pb-4 shrink-0">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 bg-sienna/15 border border-sienna/30 px-3 py-1 rounded-full text-[11px] font-bold text-sienna uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" />
              <span>30-Min Technical Consultation</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Schedule a Meeting
            </h2>
            <p className="text-xs text-cerulean/80">
              Select an available time directly below to schedule a 30-minute Google Meet consultation with ADAPTR engineers.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-cerulean/70 hover:text-white p-1 rounded-lg hover:bg-cerulean/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Embedded Google Calendar Appointment Page */}
        <div className="w-full flex-1 min-h-[480px] rounded-2xl overflow-hidden bg-white border border-cerulean/20 shadow-inner relative">
          <iframe
            src={bookingUrl}
            className="w-full h-full min-h-[480px] border-0"
            title="Google Calendar Appointment Scheduling"
          />
        </div>

        {/* Footer Fallback Link */}
        <div className="pt-4 border-t border-cerulean/20 mt-4 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0 text-xs">
          <span className="text-cerulean/80 text-[11px]">
            Having trouble viewing the calendar frame above?
          </span>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sienna font-bold hover:underline"
          >
            <span>Open Google Calendar Page in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── IN-PERSON DEMO REQUEST MODAL ─────────────────────────────────────────
interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function RequestDemoModal({ isOpen, onClose }: RequestDemoModalProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !company) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div 
      className="fixed inset-0 w-screen h-screen bg-gunmetal/80 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gunmetal border border-cerulean/30 w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl text-lightcyan relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 border-b border-cerulean/20 pb-3">
          <h2 className="text-base sm:text-lg font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
            <Users className="w-5 h-5 text-sienna" />
            Request In-Person Demo
          </h2>
          <button 
            onClick={onClose} 
            className="text-cerulean/70 hover:text-white p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-cerulean/80 leading-relaxed mb-5">
          Enter your details below to schedule an in-person hardware and software telemetry demonstration at our laboratory facilities.
        </p>

        {isSubmitted ? (
          <div className="py-8 text-center text-cerulean font-bold text-sm space-y-2">
            <CheckCircle2 className="w-10 h-10 text-sienna mx-auto animate-bounce" />
            <p className="text-white text-base font-extrabold">✓ Demo Request Submitted!</p>
            <p className="text-xs text-cerulean/80 font-normal leading-relaxed">
              Your request has been routed to <span className="text-sienna font-bold">engagement@adaptrenergy.com</span>. An ADAPTR engineer will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-[10px] font-extrabold text-cerulean uppercase tracking-wider mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-cerulean/20 bg-gunmetal/90 text-white text-xs focus:outline-none focus:border-cerulean"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-[10px] font-extrabold text-cerulean uppercase tracking-wider mb-1.5">
                Company / Organization *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Hydro One / Utility Corp"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-cerulean/20 bg-gunmetal/90 text-white text-xs focus:outline-none focus:border-cerulean"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[10px] font-extrabold text-cerulean uppercase tracking-wider mb-1.5">
                Work Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="jane@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-cerulean/20 bg-gunmetal/90 text-white text-xs focus:outline-none focus:border-cerulean"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 rounded-xl bg-sienna hover:bg-sienna/90 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function GridAdaptrPage() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Force page to load at the absolute top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gunmetal text-gunmetal dark:text-lightcyan transition-colors duration-300">
      
      {/* ==================================================================== */}
      {/* SECTION 1: HERO & US PATENT VALUE PROPOSITION (FULL-WIDTH IMAGE)     */}
      {/* ==================================================================== */}
      <section className="relative pt-20 pb-20 px-6 sm:px-12 overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/30">
        
        {/* Background Glow Accents */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sienna/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cerulean/15 dark:bg-bdazzled/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Top Text Block */}
          <div className="max-w-4xl space-y-6">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-bdazzled dark:text-cerulean shadow-sm">
              <Award className="w-4 h-4 text-sienna shrink-0" />
              <span>US Patent: US 12,706,459 B2</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan leading-tight">
                Grid Adaptr
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-sienna leading-tight">
                Advanced Multi-port PCS.
              </h2>
            </div>
            
            <p className="text-base sm:text-base text-bdazzled dark:text-cerulean/90 leading-relaxed max-w-3xl font-medium">
              The Grid Adaptr is an advanced multi-port Power Conversion System (PCS) bringing seamless integration of Distributed Energy Resources (DERs) and commercial/industrial loads in to weak distribution networks.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#validation"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-bdazzled hover:bg-lightcyan/30 dark:hover:bg-bdazzled/80 text-gunmetal dark:text-lightcyan font-medium text-base px-6 py-3 rounded-xl border border-cerulean/30 dark:border-cerulean/20 transition-all shadow-sm"
              >
                <Activity className="w-5 h-5 text-sienna dark:text-cerulean" />
                <span>View Lab Prototype Validation</span>
              </a>
            </div>
          </div>

          {/* Full-Width Spanning Image Container */}
          <div className="w-full bg-white/80 dark:bg-gunmetal/80 p-4 sm:p-6 rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 shadow-xl dark:shadow-2xl transition-colors duration-300 space-y-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-lightcyan/20 dark:bg-gunmetal flex items-center justify-center border border-cerulean/10 dark:border-bdazzled/30 shadow-inner p-2">
              <Image
                src="/images/Grid-Adaptr_Module.jpg"
                alt="Grid Adaptr Industrial Multi-Bay PCS Enclosure"
                fill
                sizes="100vw"
                className="object-contain hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute top-4 left-4 bg-gunmetal/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-cerulean/30 flex items-center gap-2 shadow-md z-10">
                <Server className="w-4 h-4 text-sienna" />
                <span className="text-xs font-bold text-lightcyan uppercase tracking-wider">
                  Industrial Multi-Bay PCS Panel
                </span>
              </div>
            </div>
            
            {/* Banner Sub-Bar */}
            <div className="p-4 bg-lightcyan/30 dark:bg-gunmetal rounded-lg border border-cerulean/20 dark:border-bdazzled/40 text-xs text-bdazzled dark:text-cerulean flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="font-bold text-sm text-gunmetal dark:text-lightcyan">Grid Adaptr Multi-Port PCS</p>
                <p className="text-xs text-bdazzled dark:text-cerulean/70 font-medium">Hardware & Control Platform for Utility-Scale & Commercial Deployment</p>
              </div>
              <span className="bg-sienna/15 dark:bg-sienna/20 text-sienna px-3 py-1.5 rounded-md text-xs font-bold border border-sienna/30 shrink-0">
                250-500 kW Modular Unit
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: PROBLEM VS. SOLUTION (DECOUPLING & COMPLIANCE)            */}
      {/* ==================================================================== */}
      <section id="functionalities" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>The Grid Bottleneck & Decoupling Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Eliminate Non-Compliant Load Behaviour & Renewable Intermittency
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Fast changes in commercial/industrial loads or renewable energy intermittency cause severe voltage stability issues on weak distribution systems. Grid Adaptr fully decouples the upstream grid from downstream dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-7 rounded-2xl space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sienna/10 flex items-center justify-center text-sienna">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gunmetal dark:text-lightcyan">Pulse Load Suppression</h3>
              <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                Smooths extreme current spikes and dynamic pulse loads into compliant, steady-state power draw from the upstream grid perspective.
              </p>
              <span className="inline-block text-[11px] font-bold text-sienna uppercase tracking-wider bg-sienna/15 px-2.5 py-1 rounded-md border border-sienna/30">
                Zero Flicker Impact 
              </span>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-7 rounded-2xl space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-cerulean/10 flex items-center justify-center text-cerulean">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gunmetal dark:text-lightcyan">Intermittency Buffer</h3>
              <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                Buffers fast solar PV and wind variations using integrated hybrid storage, preventing low-frequency oscillations and voltage flicker.
              </p>
              <span className="inline-block text-[11px] font-bold text-cerulean uppercase tracking-wider bg-cerulean/15 px-2.5 py-1 rounded-md border border-cerulean/30">
                100% Compliant Waveform
              </span>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-7 rounded-2xl space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sienna/10 flex items-center justify-center text-sienna">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gunmetal dark:text-lightcyan">Unbalanced Load Correction</h3>
              <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                Dynamically corrects multi-phase power imbalances before harmful high-frequency harmonics penetrate the distribution lines.
              </p>
              <span className="inline-block text-[11px] font-bold text-sienna uppercase tracking-wider bg-sienna/15 px-2.5 py-1 rounded-md border border-sienna/30">
                Balanced Load Profile
              </span>
            </div>

          </div>

        </div>
      </section>
      
      {/* ==================================================================== */}
      {/* SECTION 3: TECHNICAL CAPABILITIES & ARCHITECTURE                     */}
      {/* ==================================================================== */}
      <section id="architecture" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Architecture & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Patented Multi-Port PCS Architecture
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Combining advanced power electronics, hybrid energy storage, and autonomous control algorithms protected under US Patent 12,706,459 B2.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-3">
              <Layers className="w-6 h-6 text-sienna mb-1" />
              <h3 className="text-base sm:text-lg font-extrabold text-gunmetal dark:text-lightcyan">Multi-Port Topology</h3>
              <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                Connects AC/DC loads, solar/wind DERs, battery storage, charging stations and distribution lines via isolated DC links.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-3">
              <Cpu className="w-6 h-6 text-cerulean mb-1" />
              <h3 className="text-base sm:text-lg font-extrabold text-gunmetal dark:text-lightcyan">Harmonic Filtering</h3>
              <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                Multi-level converter stages suppress total harmonic distortion (THD) and balance unbalanced multi-phase loads.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-3">
              <Sliders className="w-6 h-6 text-sienna mb-1" />
              <h3 className="text-base sm:text-lg font-extrabold text-gunmetal dark:text-lightcyan">Advanced Controls</h3>
              <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                Hybrid control architecture with grid-forming/following controls including voltage and frequency droop support.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-3">
              <Zap className="w-6 h-6 text-cerulean mb-1" />
              <h3 className="text-base sm:text-lg font-extrabold text-gunmetal dark:text-lightcyan">Continuous Islanding</h3>
              <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                Supports vehicle to microgrid (V2MG) for electrical delivery of stored energy enabling prolonged off-grid operation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 4: VALIDATION & LIVE TELEMETRY DEMO                          */}
      {/* ==================================================================== */}
      <section id="validation" className="py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 rounded-2xl p-8 sm:p-12 shadow-xl space-y-10">
            
            {/* Header Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-cerulean/20 dark:border-bdazzled/40">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-sienna uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Hardware & Software Validation Report</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
                  Lab-Scale Prototype & Live Telemetry Demo
                </h2>
              </div>

              <div className="flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/30 border border-cerulean/20 px-4 py-2 rounded-xl text-xs font-bold text-bdazzled dark:text-cerulean">
                <span>Validation of TRL 6 Lab-scale Prototype</span>
              </div>
            </div>

            {/* Intro Copy */}
            <p className="text-base sm:text-lg text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium max-w-4xl">
              The live HMI telemetry recording below demonstrates Grid Adaptr in real-time operation. As dynamic disturbances are injected in the downstream network, the upstream grid waveform remains completely undisturbed and sinusoidal.
            </p>

            {/* Full-Width Spanning Video Block */}
            <div className="w-full bg-lightcyan/10 dark:bg-gunmetal p-4 sm:p-6 rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 shadow-inner space-y-4">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-cerulean/20 dark:border-bdazzled/40 shadow-md bg-black p-1">
                <video
                  src="/videos/grid-adaptr-live-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-4 left-4 bg-gunmetal/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cerulean/30 flex items-center gap-2 shadow-md z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-sienna animate-ping" />
                  <span className="text-xs font-bold text-lightcyan uppercase tracking-wider">Live HMI Telemetry</span>
                </div>
              </div>
              
              {/* Telemetry Stats Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-bold">
                <div className="p-3 rounded-xl bg-white/80 dark:bg-gunmetal/90 border border-cerulean/20 shadow-sm">
                  <span className="block text-cerulean text-[11px] uppercase tracking-wider mb-0.5">DC LINK VOLTAGE</span>
                  <span className="text-sm font-extrabold text-gunmetal dark:text-lightcyan">400 V Stable</span>
                </div>
                <div className="p-3 rounded-xl bg-white/80 dark:bg-gunmetal/90 border border-cerulean/20 shadow-sm">
                  <span className="block text-cerulean text-[11px] uppercase tracking-wider mb-0.5">GRID FREQUENCY</span>
                  <span className="text-sm font-extrabold text-gunmetal dark:text-lightcyan">60.0 Hz Synced</span>
                </div>
                <div className="p-3 rounded-xl bg-white/80 dark:bg-gunmetal/90 border border-cerulean/20 shadow-sm">
                  <span className="block text-sienna text-[11px] uppercase tracking-wider mb-0.5">GRID DECOUPLING</span>
                  <span className="text-sm font-extrabold text-gunmetal dark:text-lightcyan">100% Active</span>
                </div>
              </div>
            </div>

            {/* Validation Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-sienna">
                Key Validation Highlights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-gunmetal/80 dark:text-lightcyan/80 font-medium">
                <div className="flex items-start gap-2.5 bg-white/50 dark:bg-gunmetal/50 p-4 rounded-xl border border-cerulean/15 dark:border-bdazzled/30">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                  <span><strong>Transients Decoupling:</strong> All downstream transient behaviour are isolated from the main grid within milliseconds.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/50 dark:bg-gunmetal/50 p-4 rounded-xl border border-cerulean/15 dark:border-bdazzled/30">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                  <span><strong>Grid-Forming Functionality:</strong> Downstream assets no longer require upstream network to form the grid enhancing resiliency.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/50 dark:bg-gunmetal/50 p-4 rounded-xl border border-cerulean/15 dark:border-bdazzled/30">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                  <span><strong>Integrated Control Architecture:</strong> Layered control architecture allows power and energy controls from milliseconds to seconds.</span>
                </div>
              </div>
            </div>

            {/* Stakeholder Visit Collage */}
            <div className="pt-6 border-t border-cerulean/20 dark:border-bdazzled/40 space-y-4">
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-sienna">
                  Stakeholder Demonstration & Seminar
                </h4>
                <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium">
                  Live hardware-in-the-loop demonstrations with engineering leads and decision-makers from Hydro One, Natural Resources Canada (NRCan), and M&apos;Chigeeng First Nation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Left Photo - Stretches Full Height to Match Right Column */}
                <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto w-full h-full min-h-[300px] overflow-hidden rounded-xl border border-cerulean/20 dark:border-bdazzled/40 shadow-sm">
                  <Image
                    src="/images/Demo_Group_Pic.jpg"
                    alt="ADAPTR team and stakeholder group photo during Grid Adaptr live demonstration"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-gunmetal/80 backdrop-blur-md px-3 py-1 rounded-lg border border-cerulean/30 text-[11px] font-bold text-lightcyan z-10">
                    Stakeholder Group & Engineering Leads
                  </div>
                </div>

                {/* Right Photos - Two Stacked Images */}
                <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-cerulean/20 dark:border-bdazzled/40 shadow-sm">
                    <Image
                      src="/images/Live_Demo1.jpg"
                      alt="Grid Adaptr lab prototype hardware explanation"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-gunmetal/80 backdrop-blur-md px-3 py-1 rounded-lg border border-cerulean/30 text-[11px] font-bold text-lightcyan z-10">
                      Prototype Hardware Explanation
                    </div>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-cerulean/20 dark:border-bdazzled/40 shadow-sm">
                    <Image
                      src="/images/Live_Demo.jpg"
                      alt="Stakeholders observing live HMI telemetry"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-gunmetal/80 backdrop-blur-md px-3 py-1 rounded-lg border border-cerulean/30 text-[11px] font-bold text-lightcyan z-10">
                      Live HMI Telemetry Observation
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button Triggering Demo Request Modal */}
            <div className="pt-2 flex justify-start">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-medium text-base px-7 py-3 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
              >
                <span>Request In-person Demo</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 5: STAKEHOLDER BENEFIT MATRIX                                */}
      {/* ==================================================================== */}
      <section id="applications" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Stakeholder Value Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Unlocking Value Across the Electricity Sector
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Designed to solve critical grid integration barriers for project developers, heavy industrial operators, and electric utilities alike.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Renewable Generators */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-colors">
              <div>
                {/* Complementary Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/40 bg-lightcyan/20">
                  <Image
                    src="/images/usecases/generation.jpg"
                    alt="Distributed Solar PV and Wind Generation Facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-gunmetal/90 backdrop-blur-md px-3 py-1 rounded-lg border border-cerulean/30 text-[11px] font-bold text-lightcyan">
                    Generation & DERs
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gunmetal dark:text-lightcyan">Renewable Generators</h3>
                    <p className="text-xs text-sienna font-semibold uppercase tracking-wider mt-1">Solar, Wind & DER Developers</p>
                  </div>

                  {/* Target Customer Benefits */}
                  <div className="space-y-2 pt-2 border-t border-cerulean/15 dark:border-bdazzled/30">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-sienna block">
                      Benefits
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-base font-medium text-bdazzled dark:text-cerulean">
                      <span className="bg-sienna/10 dark:bg-sienna/20 border border-sienna/20 px-2.5 py-1 rounded-md">Unlock High-value Projects</span>
                      <span className="bg-sienna/10 dark:bg-sienna/20 border border-sienna/20 px-2.5 py-1 rounded-md">Align with Utility & Consumer Goals</span>
                      <span className="bg-sienna/10 dark:bg-sienna/20 border border-sienna/20 px-2.5 py-1 rounded-md">Eliminate Integration Issues</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-gunmetal/80 dark:text-lightcyan/80 font-medium pt-2 border-t border-cerulean/15 dark:border-bdazzled/30">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong className="text-sienna">Originate</strong> new projects in weak grid regions previously restricted by hosting capacity limits.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong className="text-sienna">Comply</strong> with stringent grid code requirements on the first attempt without curtailment.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong className="text-sienna">Monetize</strong> assets by unlocking revenues streams in providing frequency and voltage support.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Commercial & Industrial */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-colors">
              <div>
                {/* Complementary Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/40 bg-lightcyan/20">
                  <Image
                    src="/images/usecases/ev.jpg"
                    alt="Heavy Industrial Mining and Commercial Data Center Infrastructure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-gunmetal/90 backdrop-blur-md px-3 py-1 rounded-lg border border-cerulean/30 text-[11px] font-bold text-lightcyan">
                    Commercial & Industrial
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gunmetal dark:text-lightcyan">Commercial & Industrial</h3>
                    <p className="text-xs text-cerulean font-semibold uppercase tracking-wider mt-1">Manufacturing, Mining & EV Hubs</p>
                  </div>

                  {/* Target Customer Benefits */}
                  <div className="space-y-2 pt-2 border-t border-cerulean/15 dark:border-bdazzled/30">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-cerulean block">
                      Benefits
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-base font-medium text-bdazzled dark:text-cerulean">
                      <span className="bg-cerulean/10 dark:bg-cerulean/20 border border-cerulean/20 px-2.5 py-1 rounded-md">Prevent Power Outages</span>
                      <span className="bg-cerulean/10 dark:bg-cerulean/20 border border-cerulean/20 px-2.5 py-1 rounded-md">Reduce Connection Cost</span>
                      <span className="bg-cerulean/10 dark:bg-cerulean/20 border border-cerulean/20 px-2.5 py-1 rounded-md">Electrify Fleet & Thermal Loads</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-gunmetal/80 dark:text-lightcyan/80 font-medium pt-2 border-t border-cerulean/15 dark:border-bdazzled/30">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong className="text-sienna">Deploy</strong> heavy loads such as motor drives, data centers and fast EV chargers without triggering substation upgrades.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong className="text-sienna">Shield</strong> assets against outages by seamlessly transitioning between grid-connected and islanded microgrid operation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong className="text-sienna">Futureproof</strong> operations and business growth from weather extremes and grid upgrade and modernization timelines.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Distribution Utilities */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between transition-colors">
              <div>
                {/* Complementary Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/40 bg-lightcyan/20">
                  <Image
                    src="/images/usecases/utility.jpg"
                    alt="Rural Utility Distribution Feeder and Substation Line"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-gunmetal/90 backdrop-blur-md px-3 py-1 rounded-lg border border-cerulean/30 text-[11px] font-bold text-lightcyan">
                    Grid & Utilities
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gunmetal dark:text-lightcyan">Distribution Utilities</h3>
                    <p className="text-xs text-sienna font-semibold uppercase tracking-wider mt-1">Grid Operators & LDCs</p>
                  </div>

                  {/* Target Customer Profiles */}
                  <div className="space-y-2 pt-2 border-t border-cerulean/15 dark:border-bdazzled/30">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-sienna block">
                      Benefits
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-base font-medium text-bdazzled dark:text-cerulean">
                      <span className="bg-sienna/10 dark:bg-sienna/20 border border-sienna/20 px-2.5 py-1 rounded-md">Monetize Unused Capacity</span>
                      <span className="bg-sienna/10 dark:bg-sienna/20 border border-sienna/20 px-2.5 py-1 rounded-md">Ensure System Stability</span>
                      <span className="bg-sienna/10 dark:bg-sienna/20 border border-sienna/20 px-2.5 py-1 rounded-md">Grow Customer Demand</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-gunmetal/80 dark:text-lightcyan/80 font-medium pt-2 border-t border-cerulean/15 dark:border-bdazzled/30">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong className="text-sienna">Save</strong> on unplanned CapEx by maximizing the available life capacities of existing substation and transformers.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong className="text-sienna">Enhance</strong> grid stability with active/reactive power droop support and voltage regulation from customer-sited nodes.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong className="text-sienna">Streamline</strong> DER coordination and active management of downstream assets by Distribution Management Systems (DMS).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 6: CALL TO ACTION (CTA)                                      */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gunmetal to-bdazzled dark:from-gunmetal/90 dark:to-bdazzled/40 text-lightcyan rounded-3xl p-8 sm:p-12 border border-cerulean/30 shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to Propel Your Power Project?
            </h2>
            <p className="text-base text-cerulean/90 font-medium leading-relaxed">
              Take advantage of our free preliminary consultation today and let us help you advance your project initiatives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              type="button"
              onClick={() => setIsMeetingModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>Schedule Preliminary Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 30-MIN GOOGLE MEET SCHEDULING MODAL */}
      <ScheduleMeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
      />

      {/* IN-PERSON DEMO REQUEST MODAL */}
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}