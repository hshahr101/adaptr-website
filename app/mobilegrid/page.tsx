'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Cpu, 
  Award, 
  Sparkles, 
  Truck, 
  Plane, 
  Anchor, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Workflow,
  FlaskConical,
  Pickaxe,
  Fuel,
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

const innovationPillarsData = [
  {
    id: 'power-experience',
    tag: 'Pillar 1 — Knowhow & Proprietary Controls',
    icon: Cpu,
    title: 'Power System Experience',
    description:
      'The foundation of ADAPTR’s technology development originates from deep expertise in power system equipment, their operation, and their controls. Our field experiences shaped the development of proprietary controls for operation of power system assets to meet evolving grid requirements and market needs.',
    features: [
      'Power System Studies in 4 Continents.',
      'Proprietary Controls in EMS & PMS.',
      'Deep Expertise in Power Electronics & IBRs.',
      'Navigating Grid Interconnection Processes.',
    ],
    image: '/images/adp_experience.jpg',
    imageAlt: 'ADAPTR Power System Equipment and Control Hardware',
    imageCaption: 'Power system experience and Track-record.',
    isVideo: false,
  },
  {
    id: 'rd-competency',
    tag: 'Pillar 2 — Fast-Tracking Execution',
    icon: FlaskConical,
    title: 'R&D Competency',
    description:
      'Our technical team brings Tier 1 OEM R&D experience that enable us to fast-track Technology Readiness Level (TRL) stages. From mathematical modeling to real-time hardware-in-the-loop simulation, we bridge theoretical power concepts into field-ready hardware, and a proven trackrecord of commercially operating systems in North America.',
    features: [
      'Tier 1 OEM-level Efficiency for R&D.',
      'Academic Researching Rigor.',
      'Specialized In-house Power Systems Lab.',
      'Trusted Expertise in TRL Progression.',
    ],
    image: '/images/Lab.jpg',
    imageAlt: 'R&D Hardware Simulation and In-House Power Systems Lab',
    imageCaption: 'Hardware-in-the-Loop Validation & In-House Power Systems Lab',
    isVideo: false,
  },
  {
    id: 'technology-vision',
    tag: 'Pillar 3 — Future-Proofing Electrification',
    icon: Sparkles,
    title: 'Technology Vision',
    description:
      'Our innovations are driven by a desire to solve a number of "what if" scenarios for the current and future needs of electricity. Our approach is to leverage our technical experience, and our ability to execute, to help utilities augment power systems with the Mobile Electric Grid network and its technologies such as the Grid Adaptr.',
    features: [
      'What if we never faced power outages?',
      'What if grid assets were never stranded?',
      'What if load growth never faced delays?',
      'What if electricity is available everywhere?',
    ],
    image: '/images/grid_1895.jpg',
    imageAlt: 'Mobile Electric Grid Architectural Vision',
    imageCaption: 'Utility workers circa 1900 - What if electricity delivery was not limited to poles & wires?',
    isVideo: false,
  },
];

export default function TechnologyPage() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  // Force page to load at the absolute top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentPillar = innovationPillarsData[activePillarIndex];

  return (
    <div className="min-h-screen bg-white dark:bg-gunmetal text-gunmetal dark:text-lightcyan transition-colors duration-300">
      
      {/* ==================================================================== */}
      {/* SECTION 1: HERO WITH INTEGRATED TECH TREE DIAGRAM                    */}
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
                <span>Patented Deep-Tech Electrification Architecture</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan leading-tight">
                  Accelerating Electrification
                </h1>
                <p className="text-2xl sm:text-3xl font-extrabold text-sienna leading-tight">
                  With Mobile Electric Grid Architecture.
                </p>
              </div>
              
              <p className="text-base sm:text-base text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                Mobile Electric Grid bridges the gap between existing (static) power distribution grids and modern (dynamic) electrification demands. By pairing Grid Adaptr with vehicle delivery of electrical energy, we fast track load growth and DER deployments while enhancing reliability.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#pillars"
                  className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-7 py-3 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Explore Innovation Pillars</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#patents"
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-bdazzled hover:bg-lightcyan/30 dark:hover:bg-bdazzled/80 text-gunmetal dark:text-lightcyan font-medium text-base px-6 py-3 rounded-xl border border-cerulean/30 dark:border-cerulean/20 transition-all shadow-sm"
                >
                  <Award className="w-5 h-5 text-sienna dark:text-cerulean" />
                  <span>View Patent Portfolio</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Technology Tree Showcase */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="w-full bg-white/80 dark:bg-gunmetal/80 p-4 sm:p-5 rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 shadow-xl dark:shadow-2xl space-y-4">
                
                {/* Tech Tree Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-lightcyan/20 dark:bg-gunmetal flex items-center justify-center border border-cerulean/10 dark:border-bdazzled/30 shadow-inner p-2">
                  <Image
                    src="/images/techtree1.jpg"
                    alt="ADAPTR Technology Tree showing Proprietary Control Codes, Grid Adaptr, Adaptive Microgrid Controller, and Mobile Grid Architecture"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Architecture Sub-Bar */}
                <div className="p-3.5 bg-lightcyan/30 dark:bg-gunmetal rounded-lg border border-cerulean/20 dark:border-bdazzled/40 text-xs text-bdazzled dark:text-cerulean space-y-2">
                  <div className="flex justify-between items-center border-b border-cerulean/15 dark:border-bdazzled/30 pb-2">
                    <span className="font-bold text-gunmetal dark:text-lightcyan text-xs">
                      ADAPTR&apos;s Tech Tree
                    </span>
                    <span className="bg-sienna/15 dark:bg-sienna/20 text-sienna px-2.5 py-0.5 rounded text-[11px] font-bold border border-sienna/30">
                      Ecosystem of Technologies
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
                    <div className="p-1.5 rounded bg-white/60 dark:bg-gunmetal/90 border border-cerulean/20">
                      <span className="block text-cerulean">ROOTS</span>
                      <span className="text-gunmetal dark:text-lightcyan">Proprietary Controls</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/60 dark:bg-gunmetal/90 border border-cerulean/20">
                      <span className="block text-sienna">TRUNK</span>
                      <span className="text-gunmetal dark:text-lightcyan">Grid Adaptr™ PCS</span>
                    </div>
                    <div className="p-1.5 rounded bg-white/60 dark:bg-gunmetal/90 border border-cerulean/20">
                      <span className="block text-cerulean">CANOPY</span>
                      <span className="text-gunmetal dark:text-lightcyan">Mobile Electric Grid (MEG)</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: INNOVATION PILLARS (INTERACTIVE CAROUSEL)                 */}
      {/* ==================================================================== */}
      <section id="pillars" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Innovation Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Pushing the Boundaries of Energy Expansion
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Our technology is driven by deep power system experience, OEM-grade R&D execution, and a vision to enable access to electricity anywhere and everywhere.
            </p>
          </div>

          {/* Interactive Card Container */}
          <div className="relative bg-white dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl p-6 sm:p-10 shadow-xl dark:shadow-2xl overflow-hidden transition-all duration-300">
            
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sienna/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Interactive Selector + Active Content */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between min-h-[420px]">
                
                {/* Header Region: Tabs */}
                <div className="border-b border-cerulean/20 dark:border-bdazzled/40 pb-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {innovationPillarsData.map((item, idx) => {
                      const TabIcon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActivePillarIndex(idx)}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                            activePillarIndex === idx
                              ? 'bg-sienna text-white dark:text-gunmetal shadow-md scale-105'
                              : 'bg-lightcyan/60 dark:bg-bdazzled/30 text-bdazzled dark:text-cerulean hover:text-gunmetal dark:hover:text-lightcyan border border-cerulean/20 dark:border-transparent'
                          }`}
                        >
                          <TabIcon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Pillar Content */}
                <div className="space-y-5 transition-all duration-600">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gunmetal dark:text-lightcyan">
                    {currentPillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                    {currentPillar.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-gunmetal/80 dark:text-lightcyan/80 font-medium">
                    {currentPillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-cerulean/20 dark:border-bdazzled/30">
                  <div className="flex gap-1.5">
                    {innovationPillarsData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePillarIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          activePillarIndex === idx ? 'w-8 bg-sienna' : 'w-2 bg-cerulean/20 dark:bg-bdazzled/60'
                        }`}
                        aria-label={`Go to pillar ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setActivePillarIndex(
                          (prev) => (prev - 1 + innovationPillarsData.length) % innovationPillarsData.length
                        )
                      }
                      className="p-2 rounded-lg bg-lightcyan/60 dark:bg-bdazzled/30 hover:bg-cerulean/20 dark:hover:bg-bdazzled/60 text-bdazzled dark:text-cerulean hover:text-gunmetal dark:hover:text-lightcyan transition-colors border border-cerulean/20 dark:border-transparent"
                      aria-label="Previous pillar"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setActivePillarIndex((prev) => (prev + 1) % innovationPillarsData.length)
                      }
                      className="p-2 rounded-lg bg-lightcyan/60 dark:bg-bdazzled/30 hover:bg-cerulean/20 dark:hover:bg-bdazzled/60 text-bdazzled dark:text-cerulean hover:text-gunmetal dark:hover:text-lightcyan transition-colors border border-cerulean/20 dark:border-transparent"
                      aria-label="Next pillar"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Associated Image Container */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-cerulean/20 dark:border-cerulean/30 shadow-md bg-white dark:bg-gunmetal/60">
                  <Image
                    src={currentPillar.image!}
                    alt={currentPillar.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-3 hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <span className="mt-2 text-bdazzled dark:text-cerulean/70 text-xs text-center font-medium">
                  {currentPillar.imageCaption}
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 3: APPLICATION FRONTIERS                                     */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Next-Generation Applications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Electricity Expansion Across Multiple Frontiers
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              ADAPTR&apos;s Mobile Electric Grid technologies unlock access to power where deployment or modernization of traditional utility infrastructure is physically impractical or economically infeasible.
            </p>
          </div>

          {/* Mobile Electric Grid Concept Diagram Banner */}
          <div className="w-full bg-white/80 dark:bg-gunmetal/80 p-4 sm:p-6 rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 shadow-xl dark:shadow-2xl space-y-4">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-xl bg-lightcyan/20 dark:bg-gunmetal flex items-center justify-center border border-cerulean/10 dark:border-bdazzled/30 shadow-inner p-2">
              <Image
                src="/images/MEGA.jpg"
                alt="The Mobile Electric Grid (MEG) Architecture Diagram and Value Proposition"
                fill
                sizes="100vw"
                className="object-contain hover:scale-[1.01] transition-transform duration-500"
                priority
              />

            </div>

            <div className="p-3.5 bg-lightcyan/30 dark:bg-gunmetal rounded-lg border border-cerulean/20 dark:border-bdazzled/40 text-xs text-bdazzled dark:text-cerulean flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <p className="font-bold text-sm text-gunmetal dark:text-lightcyan">The Mobile Electric Grid (MEG) Architecture</p>
                <p className="text-xs text-bdazzled dark:text-cerulean/70 font-medium">Air-gapped power delivery delivering grid-level reliability to remote, islanded, and infrastructure-challenged locations.</p>
              </div>
              <span className="bg-sienna/15 dark:bg-sienna/20 text-sienna px-3 py-1.5 rounded-md text-xs font-bold border border-sienna/30 shrink-0">
                US Patent 12,583,352 B2
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Frontier 1 */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sienna/10 flex items-center justify-center text-sienna">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan">Remote & Challenged Sites</h3>
                <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Delivers reliable energy to remote communities, island networks, construction hubs, and agricultural operations without multi-million dollar transmission line buildouts.
                </p>
              </div>
              <span className="inline-block text-[11px] font-bold text-sienna uppercase tracking-wider bg-sienna/15 px-2.5 py-1 rounded-md border border-sienna/30">
                Grid-level Reliability for Off-grid Systems
              </span>
            </div>

            {/* Frontier 2 */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cerulean/10 flex items-center justify-center text-cerulean">
                  <Pickaxe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan">Quarry Mining Operations</h3>
                <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Powers heavy rock crushers, conveyor drives, and haul trucks in remote quarries without causing severe voltage sags or power quality issues on the rural feeder.
                </p>
              </div>
              <span className="inline-block text-[11px] font-bold text-cerulean uppercase tracking-wider bg-cerulean/15 px-2.5 py-1 rounded-md border border-cerulean/30">
                Heavy Load Enabler
              </span>
            </div>

            {/* Frontier 3 */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sienna/10 flex items-center justify-center text-sienna">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan">Disaster & Outage Resiliency</h3>
                <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Bypasses storm-damaged lines and down substations, deploying mobile grid to maintain continuous local grid operation for emergency response centers.
                </p>
              </div>
              <span className="inline-block text-[11px] font-bold text-sienna uppercase tracking-wider bg-sienna/15 px-2.5 py-1 rounded-md border border-sienna/30">
                Weatherproof Grid Services
              </span>
            </div>

            {/* Frontier 4 */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cerulean/10 flex items-center justify-center text-cerulean">
                  <Anchor className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan">Electrified Port Infrastructure</h3>
                <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Powers electric ferries, harbor tugs, and coastal charging points without overloading local municipal feeders during peak vessel arrivals.
                </p>
              </div>
              <span className="inline-block text-[11px] font-bold text-cerulean uppercase tracking-wider bg-cerulean/15 px-2.5 py-1 rounded-md border border-cerulean/30">
                Maritime Electrification
              </span>
            </div>

            {/* Frontier 5 */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sienna/10 flex items-center justify-center text-sienna">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan">Advanced Air Mobility (AAM)</h3>
                <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Supplies high-megawatt charging infrastructure to power vertiports and regional airport hubs for rapid aircrafts and eVTOLs turnaround times.
                </p>
              </div>
              <span className="inline-block text-[11px] font-bold text-sienna uppercase tracking-wider bg-sienna/15 px-2.5 py-1 rounded-md border border-sienna/30">
                eVTOL Vertiport Power
              </span>
            </div>

            {/* Frontier 6 */}
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cerulean/10 flex items-center justify-center text-cerulean">
                  <Fuel className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan">Highway EV Fast-Charging Hubs</h3>
                <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Enables ultra-fast EV charging for commercial transport vehicles at gas stations along highways without requiring costly utility substation capacity upgrades.
                </p>
              </div>
              <span className="inline-block text-[11px] font-bold text-cerulean uppercase tracking-wider bg-cerulean/15 px-2.5 py-1 rounded-md border border-cerulean/30">
                Electrify Commercial Transports
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 4: INTELLECTUAL PROPERTY & TIMELINE ROADMAP                  */}
      {/* ==================================================================== */}
      <section id="patents" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>IP & Innovation Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
             From Concepts to Granted Patents, and Beyond.
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              In 2016, our Founder envisioned a future where electricity was unconstrained with an Uber-type network for the Electric Grid. 10 years later, ADAPTR Inc. was granted its US patent.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Milestone 1 */}
              <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-3 shadow-sm">
                <div className="flex justify-between items-center border-b border-cerulean/15 pb-3">
                  <span className="text-xs font-bold text-sienna">2019 – 2021</span>
                  <span className="text-[10px] bg-sienna/10 text-sienna px-2 py-0.5 rounded font-bold">Field Deployment</span>
                </div>
                <h4 className="text-base font-extrabold text-gunmetal dark:text-lightcyan">Mary&apos;s Harbour Microgrid</h4>
                <p className="text-xs text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Developed, deployed and commissioned the first multi-renewables Microgrid Control System (MGCS) in remote Canadian community.
                </p>
              </div>

              {/* Milestone 2 */}
              <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-3 shadow-sm">
                <div className="flex justify-between items-center border-b border-cerulean/15 pb-3">
                  <span className="text-xs font-bold text-cerulean">2022 – 2025</span>
                  <span className="text-[10px] bg-cerulean/10 text-cerulean px-2 py-0.5 rounded font-bold">Global IP & Funding</span>
                </div>
                <h4 className="text-base font-extrabold text-gunmetal dark:text-lightcyan">IP Approvals</h4>
                <p className="text-xs text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  International PCT approvals in OECD countries for Mobile Electric Grid and Grid Adaptr technology. 
                </p>
              </div>

              {/* Milestone 3 */}
              <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-3 shadow-sm">
                <div className="flex justify-between items-center border-b border-cerulean/15 pb-3">
                  <span className="text-xs font-bold text-sienna">Mar 2026</span>
                  <span className="text-[10px] bg-sienna/10 text-sienna px-2 py-0.5 rounded font-bold">US Patent Granted</span>
                </div>
                <h4 className="text-base font-extrabold text-gunmetal dark:text-lightcyan">US Patent 12,583,352 B2</h4>
                <p className="text-xs text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Granted for <em>Delivery of Stored Electrical Energy From Generation Sources to Nano-Grid Systems</em>.
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Milestone 4 */}
              <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-3 shadow-sm">
                <div className="flex justify-between items-center border-b border-cerulean/15 pb-3">
                  <span className="text-xs font-bold text-cerulean">Apr 2026</span>
                  <span className="text-[10px] bg-cerulean/10 text-cerulean px-2 py-0.5 rounded font-bold">TRL 6 Validation</span>
                </div>
                <h4 className="text-base font-extrabold text-gunmetal dark:text-lightcyan">TRL 6 Lab Prototype Validation</h4>
                <p className="text-xs text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Full hardware and software integration for the Grid Adaptr prototype validating transient decoupling for DERs and industrial loads.
                </p>
              </div>

              {/* Milestone 5 */}
              <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-3 shadow-sm">
                <div className="flex justify-between items-center border-b border-cerulean/15 pb-3">
                  <span className="text-xs font-bold text-sienna">Aug 2026</span>
                  <span className="text-[10px] bg-sienna/10 text-sienna px-2 py-0.5 rounded font-bold">US Patent Granted</span>
                </div>
                <h4 className="text-base font-extrabold text-gunmetal dark:text-lightcyan">US Patent 12,706,459 B2</h4>
                <p className="text-xs text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                  Granted for <em>Grid Adapter Systems and Methods</em>, securing proprietary power electronic conversion and control architecture.
                </p>
              </div>

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
              Ready to Push Your Electrification Goals?
            </h2>
            <p className="text-base text-cerulean/90 font-medium leading-relaxed">
              Engage with ADAPTR to perform interconnection studies, vet DER project opportunities and new loads with Grid Adaptr, or partner with us to explore a Mobile Electric future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setIsMeetingModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>Schedule a Discussion</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/grid-adaptr"
              className="inline-flex items-center justify-center gap-2 bg-gunmetal/80 hover:bg-gunmetal text-lightcyan border border-cerulean/30 font-semibold text-base px-7 py-3.5 rounded-xl transition-all shadow-sm"
            >
              <Cpu className="w-5 h-5 text-cerulean" />
              <span>Explore Grid Adaptr™ PCS</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Google Calendar Meeting Scheduler Modal */}
      <ScheduleMeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
      />

    </div>
  );
}