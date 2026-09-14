'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Workflow,
  Zap,
  Sliders,
  Activity,
  Layers,
  Server,
  Radio,
  Settings,
  Flame,
  Globe,
  Pickaxe,
  Building2,
  FileCheck,
  Video,
  X,
  ExternalLink
} from 'lucide-react';

// ─── GOOGLE CALENDAR APPOINTMENT SCHEDULING MODAL ─────────────────────────
interface ScheduleMeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ScheduleMeetingModal({ isOpen, onClose }: ScheduleMeetingModalProps) {
  if (!isOpen) return null;

  const bookingUrl = "https://calendar.app.google/7yNUBYK9pRdUm8Kk7";

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

const scopeConfigurations = [
  {
    id: 'base',
    title: 'Option 1: Base Configuration',
    badge: 'Core Software',
    description: 'Programmable Logic Controller (PLC), pre-programmed with ADAPTR’s proprietary control software with remote updates.',
    features: [
      'Industrial PLC with pre-loaded controls software',
      'Proprietary technical & non-technical hierarchy algorithm',
      'Software-in-the-Loop (SiL) validated core subroutines',
      'Remote deployment & OTA update support',
    ],
  },
  {
    id: 'panel',
    title: 'Option 2: Panel Configuration',
    badge: 'Standard Hardware',
    description: 'Base configuration housed inside a CSA-compliant control cabinet with power supplies, comms, and status display panel.',
    features: [
      'All Base Configuration software features',
      'CSA compliant industrial control cabinet',
      'Integrated power supply & UPS battery backup options',
      'Industrial communication ports & local status HMI panel',
    ],
  },
  {
    id: 'comprehensive',
    title: 'Option 3: Comprehensive Configuration',
    badge: 'Turnkey Suite',
    description: 'Complete system including Panel Configuration, local terminal units, SCADA server, and OpSim+ digital twin for training.',
    features: [
      'All Panel Configuration hardware features',
      'Remote Terminal Units (RTUs) & SCADA server',
      'OpSim+ Digital Twin for operator training & troubleshooting',
      'Full tag mapping, HiL testing, & commissioning protocols',
    ],
  },
];

const coreCapabilities = [
  {
    title: 'Supervisory Energy & SoC Management',
    desc: 'Intelligently manages state-of-charge (SoC) for battery energy storage systems (BESS) while balancing real-time feeder demand.',
    icon: Activity,
  },
  {
    title: 'Synchronous Generator Dispatch',
    desc: 'Optimizes diesel and gas generator start/stop sequences to minimize fuel consumption and operating hours.',
    icon: Flame,
  },
  {
    title: 'Grid-Forming Transitions & Black Start',
    desc: 'Coordinates smooth islanding transitions and black-start protocols to restore power during major microgrid events.',
    icon: Zap,
  },
  {
    title: 'AI-Based Adaptive Controls',
    desc: 'Automatically adjusts control parameters in response to dynamic load changes, resource variability, or system upgrades.',
    icon: Cpu,
  },
  {
    title: 'Collector Line Loss Recovery',
    desc: 'Incorporates real-time collector feeder loss calculations to optimize renewable power injection at the point of interconnection.',
    icon: Workflow,
  },
  {
    title: 'SiL & HiL Bankable Validation',
    desc: 'De-risks field commissioning through software-in-the-loop and OPAL-RT hardware-in-the-loop real-time simulation.',
    icon: ShieldCheck,
  },
];

export default function AdaptiveMGCSPage() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [activeScopeIndex, setActiveScopeIndex] = useState(0);

  // Force page to load at the absolute top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentScope = scopeConfigurations[activeScopeIndex];

  return (
    <div className="min-h-screen bg-white dark:bg-gunmetal text-gunmetal dark:text-lightcyan transition-colors duration-300">
      
      {/* ==================================================================== */}
      {/* SECTION 1: HERO OVERVIEW                                             */}
      {/* ==================================================================== */}
      <section className="relative pt-12 pb-20 px-6 sm:px-12 overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sienna/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cerulean/15 dark:bg-bdazzled/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline, Subtitle & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-bdazzled dark:text-cerulean shadow-sm">
                <Sparkles className="w-4 h-4 text-sienna shrink-0" />
                <span>Field-Proven Supervisory Controls</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan leading-tight">
                  Adaptive MGCS
                </h1>
                <p className="text-2xl sm:text-3xl font-extrabold text-sienna leading-tight">
                  Futureproof Project Operations.
                </p>
              </div>
              
              <p className="text-base text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                Our Adaptive Micro-Grid Control System (MGCS) provides supervisory energy management and dynamic power management of electricity generators and energy storage systems, delivering optimal operation of grid assets in both grid-connected and off-grid systems.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#scopes"
                  className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-7 py-3 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Explore Scope Options</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsMeetingModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-bdazzled hover:bg-lightcyan/30 dark:hover:bg-bdazzled/80 text-gunmetal dark:text-lightcyan font-medium text-base px-6 py-3 rounded-xl border border-cerulean/30 dark:border-cerulean/20 transition-all shadow-sm cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5 text-sienna dark:text-cerulean" />
                  <span>Request Initial Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Architecture Showcase */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="w-full bg-white/80 dark:bg-gunmetal/80 p-4 sm:p-5 rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 shadow-xl dark:shadow-2xl space-y-4">
                
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-lightcyan/20 dark:bg-gunmetal flex items-center justify-center border border-cerulean/10 dark:border-bdazzled/30 shadow-inner">
                  <Image
                    src="/images/Lab.jpg"
                    alt="R&D Hardware Simulation and Smart-Grid Control System Cabinet"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-gunmetal/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cerulean/30 flex items-center gap-2 shadow-md z-10">
                    <ShieldCheck className="w-4 h-4 text-sienna" />
                    <span className="text-xs font-bold text-lightcyan uppercase tracking-wider">
                      Hardware-in-loop Tested
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-lightcyan/30 dark:bg-gunmetal rounded-lg border border-cerulean/20 dark:border-bdazzled/40 text-xs text-bdazzled dark:text-cerulean space-y-2">
                  <div className="flex justify-between items-center border-b border-cerulean/15 dark:border-bdazzled/30 pb-2">
                    <span className="font-bold text-gunmetal dark:text-lightcyan text-xs">
                      Developed, Validated, and Commercially Deployed
                    </span>
                    <span className="bg-sienna/15 dark:bg-sienna/20 text-sienna px-2.5 py-0.5 rounded text-[11px] font-bold border border-sienna/30">
                      3+ Years Fault-Free in Labrador
                    </span>
                  </div>
                  <p className="text-[11px] text-bdazzled dark:text-cerulean/80 font-medium">
                    1st control system to operate multi-renewable assets in isolated system in remote Canada.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: FIELD-PROVEN CAPABILITIES GRID                           */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Field-Proven Functionalities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Autonomous & Adaptive Microgrid Control
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Employed across hybrid microgrids, the Adaptive MGCS balances multi-generation assets, storage systems, and critical loads through proprietary supervisory algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((cap, idx) => {
              const CapIcon = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-sienna/10 flex items-center justify-center text-sienna">
                      <CapIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-gunmetal dark:text-lightcyan">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 3: SCOPE CONFIGURATIONS (INTERACTIVE TABS)                   */}
      {/* ==================================================================== */}
      <section id="scopes" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Hardware & System Options</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Flexible Scope Configurations
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              We source controller hardware from utility-approved Tier 1 manufacturers and deliver tailored scope options to match your project budget and procurement strategy.
            </p>
          </div>

          {/* Interactive Switch Container */}
          <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl p-6 sm:p-10 shadow-xl dark:shadow-2xl space-y-8">
            
            {/* Tab Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {scopeConfigurations.map((scope, idx) => (
                <button
                  key={scope.id}
                  onClick={() => setActiveScopeIndex(idx)}
                  className={`py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-extrabold transition-all text-left flex flex-col justify-between border ${
                    activeScopeIndex === idx
                      ? 'bg-sienna text-white border-sienna shadow-lg shadow-sienna/20 scale-[1.02]'
                      : 'bg-lightcyan/30 dark:bg-gunmetal/60 text-gunmetal dark:text-lightcyan border-cerulean/20 dark:border-bdazzled/40 hover:border-sienna'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-wider opacity-80">{scope.badge}</span>
                  <span>{scope.title.split(': ')[1]}</span>
                </button>
              ))}
            </div>

            {/* Active Configuration Content */}
            <div className="p-6 sm:p-8 rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 bg-lightcyan/20 dark:bg-gunmetal/60 space-y-6">
              <div>
                <span className="text-xs font-extrabold text-sienna uppercase tracking-widest block mb-1">
                  {currentScope.title}
                </span>
                <p className="text-base sm:text-lg text-gunmetal dark:text-lightcyan font-medium leading-relaxed">
                  {currentScope.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {currentScope.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gunmetal/80 dark:text-lightcyan/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 4: APPLICATION AREAS                                         */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Application Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Versatile Power & Energy Objectives
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Addressing microgrid requirements across remote off-grid communities, industrial mine sites, and behind-the-meter generation assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sienna/10 flex items-center justify-center text-sienna">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan">Remote Communities</h3>
                <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Replaces high-cost diesel generation with solar, wind, and battery storage systems while ensuring 100% grid stability and power quality.
                </p>
              </div>
              <span className="inline-block text-[11px] font-bold text-sienna uppercase tracking-wider bg-sienna/15 px-2.5 py-1 rounded-md border border-sienna/30">
                Off-Grid Resiliency
              </span>
            </div>

            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cerulean/10 flex items-center justify-center text-cerulean">
                  <Pickaxe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan">Mining & Quarries</h3>
                <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Manages high-impact pulse loads, heavy rock crushers, and conveyor drives without causing voltage sags or tripping local generator banks.
                </p>
              </div>
              <span className="inline-block text-[11px] font-bold text-cerulean uppercase tracking-wider bg-cerulean/15 px-2.5 py-1 rounded-md border border-cerulean/30">
                Heavy Load Management
              </span>
            </div>

            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sienna/10 flex items-center justify-center text-sienna">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan">Behind-the-Meter DERs</h3>
                <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Executes peak shaving, demand-side management, and seamless grid-connected to islanded transitions for commercial facilities.
                </p>
              </div>
              <span className="inline-block text-[11px] font-bold text-sienna uppercase tracking-wider bg-sienna/15 px-2.5 py-1 rounded-md border border-sienna/30">
                Demand Side Management
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 5: CALL TO ACTION (CTA)                                      */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gunmetal to-bdazzled dark:from-gunmetal/90 dark:to-bdazzled/40 text-lightcyan rounded-3xl p-8 sm:p-12 border border-cerulean/30 shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to De-Risk Your Microgrid Control System?
            </h2>
            <p className="text-base text-cerulean/90 font-medium leading-relaxed">
              Consult with ADAPTR to run Software-in-the-Loop (SiL) simulations, develop tag mapping, or deploy the Adaptive MGCS for your next project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setIsMeetingModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>Schedule Technical Consultation</span>
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

    </div>
  );
}