'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Dynamic from 'next/dynamic';
import { 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Activity, 
  CheckCircle2,
  Calendar,
  Quote,
  Video,
  X,
  ExternalLink
} from 'lucide-react';

// Dynamic import for Leaflet map to prevent SSR "window is not defined" error
const InteractiveProjectMap = Dynamic(() => import('./ProjectMapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-lightcyan/20 dark:bg-gunmetal rounded-2xl min-h-[450px]">
      <Activity className="w-8 h-8 text-sienna animate-spin mb-2" />
      <span className="text-xs font-bold text-bdazzled dark:text-cerulean uppercase tracking-wider">
        Loading Global Experience Map...
      </span>
    </div>
  ),
});

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

interface ClientVerdict {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const clientVerdicts: ClientVerdict[] = [
  {
    id: '1',
    quote: "ADAPTR's team have been great advisors as we navigate our off-grid hybrid renewable project design and interconnection process with the local Utility. I would absolutely recommend bringing ADAPTR onto your team if you're developing similar projects.",
    author: 'Dana May',
    role: 'Director of Development',
    company: 'Northern Energy Capital',
  },
  {
    id: '2',
    quote: "ADAPTR's Grid Adaptr technology has proven essential for enabling industrial loads to connect to our local feeder lines. Their technical execution and power system know-how helped progress our demonstration project initiative at Manitoulin Island.",
    author: 'Grant Taibossigai',
    role: 'Business & Economic Development',
    company: "M'Chigeeng First Nation",
  },
  {
    id: '3',
    quote: "Working with ADAPTR allowed us to fast-track our interconnection feasibility studies and eliminate costly substation upgrades. Their team's deep utility background and proactive innovation brought immense value to our renewable energy pipeline.",
    author: 'Laurie Murphy',
    role: 'Senior Project Manager',
    company: 'Port Hawkesbury Paper',
  },
];

const projectDeployments = [
  {
    id: 'marys-harbour',
    title: "Mary's Harbour Microgrid",
    location: "Labrador, Canada",
    type: 'Commercial Field Deployment',
    capacity: 'Hydro-Solar-Storage-Diesel System',
    description: 'Developed and deployed Canada’s first multi-renewables Microgrid Control System (MGCS), coordinating solar, hydro, ESS, and diesel assets.',
    year: '2019 – 2021',
  },
  {
    id: 'manitoulin',
    title: 'Manitoulin Island Demonstration',
    location: "M'Chigeeng First Nation, ON",
    type: 'NRCan Smart Grid Program',
    capacity: 'Grid Adaptr PCS Demonstration',
    description: 'Selected by NRCan and supported by M’chigeeng FN Proponent, the Grid Adaptr aims to unlock load and DERs on rural distribution feeders.',
    year: '2025 – Present',
  },
  {
    id: 'global-studies',
    title: 'Power System Studies',
    location: 'Four Continents',
    type: 'Power Systems Engineering',
    capacity: 'Over 1GW of Technical Studies',
    description: 'Performed hosting capacity, load flow, dynamic, PQ, TOV, SC, system impact studies, controls and protection philosophies and more.',
    year: '2019 – Present',
  },
];

export default function ExperiencePage() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

  // Force page to load at the absolute top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gunmetal text-gunmetal dark:text-lightcyan transition-colors duration-300">
      
      {/* ==================================================================== */}
      {/* SECTION 1: HERO OVERVIEW WITH PROJECT MAP                            */}
      {/* ==================================================================== */}
      <section className="relative pt-12 pb-20 px-6 sm:px-12 overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sienna/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cerulean/15 dark:bg-bdazzled/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          
          {/* Top Hero Text Header */}
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-bdazzled dark:text-cerulean shadow-sm">
              <Sparkles className="w-4 h-4 text-sienna shrink-0" />
              <span>Trusted Competencies</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan leading-tight">
                Proven Experience
              </h1>
              <p className="text-2xl sm:text-3xl font-extrabold text-sienna leading-tight">
                Across Global Power Systems.
              </p>
            </div>
            
            <p className="text-base text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
              ADAPTR brings a track record of technical compentency, proven technologies, and experience navigating complex power plant projects and grid interconnection processes in multiple jurisdictions.
            </p>
          </div>

          {/* Map Section Banner */}
          <div className="w-full bg-white/80 dark:bg-gunmetal/80 p-4 sm:p-6 rounded-3xl border border-cerulean/20 dark:border-bdazzled/40 shadow-2xl space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-cerulean/15 dark:border-bdazzled/30 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sienna" />
                <h3 className="font-extrabold text-base sm:text-lg text-gunmetal dark:text-lightcyan">
                  Interactive Project Experience Map
                </h3>
              </div>
              <span className="text-xs font-bold text-bdazzled dark:text-cerulean">
                Click markers to view project details
              </span>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-cerulean/20 dark:border-bdazzled/30 shadow-inner">
              <InteractiveProjectMap />
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: FEATURED PROJECT DEPLOYMENT CARDS                        */}
      {/* ==================================================================== */}
      <section id="projects" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Featured Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Key Projects & Technical Studies
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              From Labrador microgrids to transmissions-scale infrastructure projects, ADAPTR delivers control solutions and power system engineering at every scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectDeployments.map((project) => (
              <div
                key={project.id}
                className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-8 rounded-3xl space-y-4 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-cerulean/15 dark:border-bdazzled/30 pb-3">
                    <span className="text-xs font-bold text-sienna flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year}
                    </span>
                    <span className="text-[10px] bg-sienna/10 text-sienna px-2.5 py-0.5 rounded font-bold border border-sienna/20">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-gunmetal dark:text-lightcyan">
                    {project.title}
                  </h3>

                  <p className="text-xs font-bold text-cerulean flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </p>

                  <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium pt-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-cerulean/15 dark:border-bdazzled/30 flex items-center gap-2 text-xs font-extrabold text-gunmetal dark:text-lightcyan">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0" />
                  <span>{project.capacity}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 3: MIGRATED CLIENT'S VERDICTS                                */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan tracking-tight">
              Client&apos;s Verdicts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientVerdicts.map((verdict) => (
              <div
                key={verdict.id}
                className="bg-gunmetal dark:bg-gunmetal/90 border border-cerulean/30 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between text-left relative overflow-hidden text-lightcyan space-y-6"
              >
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-sienna/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-sienna/80 shrink-0" />
                  <p className="text-xs sm:text-sm text-lightcyan/90 leading-relaxed font-medium italic">
                    &ldquo;{verdict.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-cerulean/20 space-y-1">
                  <p className="text-sm font-extrabold text-white">
                    {verdict.author}
                  </p>
                  <p className="text-xs font-bold text-sienna uppercase tracking-wider">
                    {verdict.role}, {verdict.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 4: CALL TO ACTION (CTA)                                      */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gunmetal to-bdazzled dark:from-gunmetal/90 dark:to-bdazzled/40 text-lightcyan rounded-3xl p-8 sm:p-12 border border-cerulean/30 shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to Propel Your Power Project?
            </h2>
            <p className="text-base text-cerulean/90 font-medium leading-relaxed">
              Take advantage of our free techncial consultation today and let us help you advance your project initiatives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
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

      {/* Google Calendar Meeting Scheduler Modal */}
      <ScheduleMeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
      />

    </div>
  );
}