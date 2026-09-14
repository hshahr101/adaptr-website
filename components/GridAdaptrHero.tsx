'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  Download, 
  ArrowUpRight,
  Zap, 
  ShieldCheck, 
  Building2, 
  UtilityPole,
  CheckCircle2,
  X
} from 'lucide-react';

// ─── LEAD GENERATION MODAL COMPONENT ─────────────────────────────────
function RequestConfigModal({ 
  isOpen, 
  onClose, 
  feederVoltage = 27.6 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  feederVoltage?: number;
}) {
  const [projectName, setProjectName] = useState('');
  const [utilityZone, setUtilityZone] = useState(`Ontario Feeder — ${feederVoltage.toFixed(2)} kV Class`);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setUtilityZone(`Ontario Feeder — ${feederVoltage.toFixed(2)} kV Class`);
  }, [feederVoltage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 w-screen h-screen bg-gunmetal/80 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gunmetal border border-cerulean/30 w-full max-w-md rounded-2xl p-6 sm:p-7 shadow-2xl text-lightcyan relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base sm:text-lg font-extrabold tracking-wider text-white uppercase">
            Interconnection Assessment
          </h2>
          <button 
            onClick={onClose}
            className="text-cerulean/70 hover:text-white p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-cerulean/80 leading-relaxed mb-6">
          Please enter your project specifics below to request the Grid Adaptr™ PCS hardware configuration, compliance assessment, and budgetary proposal. A detailed report will be issued within 24 hours.
        </p>

        {isSubmitted ? (
          <div className="py-8 text-center text-cerulean font-bold text-sm space-y-2">
            <CheckCircle2 className="w-10 h-10 text-cerulean mx-auto animate-bounce" />
            <p>✓ Request submitted successfully!</p>
            <p className="text-xs text-cerulean/70 font-normal">Generating configuration report...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Project Name */}
            <div>
              <label className="block text-[10px] font-extrabold text-cerulean uppercase tracking-wider mb-1.5">
                PROJECT NAME
              </label>
              <input 
                type="text"
                placeholder="e.g., Windham Industrial Cluster"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-cerulean/20 bg-gunmetal/90 text-white text-xs focus:outline-none focus:border-cerulean"
              />
            </div>

            {/* Target Utility Zone */}
            <div>
              <label className="block text-[10px] font-extrabold text-cerulean uppercase tracking-wider mb-1.5">
                TARGET UTILITY ZONE
              </label>
              <input 
                type="text"
                value={utilityZone}
                onChange={(e) => setUtilityZone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-cerulean/20 bg-gunmetal/90 text-cerulean font-semibold text-xs focus:outline-none"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[10px] font-extrabold text-cerulean uppercase tracking-wider mb-1.5">
                EMAIL ADDRESS
              </label>
              <input 
                type="email"
                required
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-cerulean/20 bg-gunmetal/90 text-white text-xs focus:outline-none focus:border-cerulean"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-xl bg-sienna hover:bg-sienna/90 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Request Report
            </button>

          </form>
        )}
      </div>
    </div>
  );
}

// ─── HERO CAROUSEL DATA (WITH MATCHED USE CASE IMAGES) ────────────────
const cyclingItems = [
  {
    text: "Expand Facility Operations.",
    audience: "C&I Entities",
    icon: Building2,
    subtext: "Deploy industrial loads and EV infrastructure without costly feeder upgrades.",
    image: "/images/usecases/ev.jpg",
    imageAlt: "Heavy Commercial & Industrial Facility Load Deployment",
    tag: "Commercial & Industrial Application"
  },
  {
    text: "Unlock High-Yield DER Projects.",
    audience: "IPPs & Developers",
    icon: Zap,
    subtext: "Ensure grid compliance while building larger projects than substation capacities.",
    image: "/images/usecases/generation.jpg",
    imageAlt: "Utility-Scale Solar and Wind Generation Asset",
    tag: "Independent Power Producer (IPP)"
  },
  {
    text: "Monetize Unused Grid Capacity.",
    audience: "Distribution Utilities",
    icon: UtilityPole,
    subtext: "Reliably use all stranded substation capacities and defer CapEx reinforcements.",
    image: "/images/usecases/utility.jpg",
    imageAlt: "Electric Distribution Substation & Feeder Line",
    tag: "Utility Distribution Feeder"
  },
];

// ─── MAIN HERO COMPONENT ──────────────────────────────────────────────
export default function GridAdaptrHero() {
  // Force page to load at the absolute top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % cyclingItems.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = cyclingItems[index];

  return (
    <section className="relative bg-white dark:bg-gunmetal text-gunmetal dark:text-lightcyan pt-8 pb-20 px-6 sm:px-12 overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/30 transition-colors duration-300">
      
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sienna/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cerulean/15 dark:bg-bdazzled/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-6 z-10">
          
          {/* Tech Badge */}
          <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-bdazzled dark:text-cerulean shadow-sm">
            <Zap className="w-4 h-4 text-sienna shrink-0" />
            <span>Advanced Multi-Port PCS for DERs & Industrial Loads</span>
          </div>

          {/* Headline with Animated Flipper */}
          <div className="space-y-2 min-h-[130px] sm:min-h-[150px] flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan leading-tight">
              Grid Adaptr
            </h1>
            
            <div
              className={`transition-all duration-300 transform ${
                fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-sienna leading-tight">
                {current.text}
              </h2>
            </div>
          </div>

          {/* Audience Tag with Dynamic Subtext */}
          <div className="space-y-0 pt-0">
            <div className="text-2xl text-gunmetal dark:text-cerulean/90 leading-relaxed max-w-2xl font-bold">
               <span>For <span className="text-sienna dark:text-sienna">{current.audience}</span></span>
            </div>
            <p className="text-base text-gunmetal dark:text-cerulean/90 leading-relaxed max-w-2xl font-medium">
              {current.subtext}
            </p>
          </div>

          {/* Feature Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0 text-sm text-gunmetal/80 dark:text-lightcyan/80 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sienna shrink-0" />
              <span>Decouple Transient Impacts</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sienna shrink-0" />
              <span>Multi-asset Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sienna shrink-0" />
              <span>Islanded Operation for Resiliency</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sienna shrink-0" />
              <span>Modular and Scalable System</span>
            </div>
          </div>

          {/* Lead Generation CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#simulator"
              className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-medium text-base px-7 py-3 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>Simulate Load or DER Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="/grid-adaptr"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-bdazzled hover:bg-lightcyan/30 dark:hover:bg-bdazzled/80 text-gunmetal dark:text-lightcyan font-medium text-base px-6 py-3 rounded-xl border border-cerulean/30 dark:border-cerulean/20 transition-all shadow-sm"
            >
              Learn More about Grid Adaptr
              <ArrowUpRight className="w-5 h-5 text-sienna dark:text-cerulean" />
            </a>
          </div>


        </div>

        {/* Dynamic Right Visual Column */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md bg-white/80 dark:bg-gunmetal/80 p-4 rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 shadow-xl dark:shadow-2xl transition-colors duration-300">
            
            {/* Dynamic Image Container tied to fade state */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-lightcyan/20 dark:bg-gunmetal border border-cerulean/10 dark:border-bdazzled/30">
              <div 
                className={`w-full h-full relative transition-all duration-300 ${
                  fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute top-3 left-3 bg-gunmetal/85 backdrop-blur-md px-3 py-1 rounded-lg border border-cerulean/30 text-[10px] font-bold text-lightcyan uppercase tracking-wider">
                  {current.tag}
                </div>
              </div>
            </div>
            
            {/* Sub-bar linking Use-case back to Grid Adaptr PCS Hardware */}
            <div className="mt-4 p-3 bg-lightcyan/30 dark:bg-gunmetal rounded-lg border border-cerulean/20 dark:border-bdazzled/40 text-xs text-bdazzled dark:text-cerulean flex justify-between items-center">
              <div>
                <p className="font-bold text-gunmetal dark:text-lightcyan">Grid Adaptr Multi-Port PCS</p>
                <p className="text-[11px] text-bdazzled dark:text-cerulean/70">Hardware & Control Platform</p>
              </div>
              <span className="bg-sienna/15 dark:bg-sienna/20 text-sienna px-2.5 py-1 rounded-md font-sans text-[11px] font-bold border border-sienna/30">
                250 kW - 20 MW
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Integrated Assessment Request Modal */}
      <RequestConfigModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        feederVoltage={27.6}
      />
    </section>
  );
}