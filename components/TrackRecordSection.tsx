'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  MapPin,
  Zap,
  Building2,
  Quote,
  CheckCircle2,
  Globe2,
  Cpu
} from 'lucide-react';

// Key Stakeholder Logos & Metadata
const STAKEHOLDERS = [
  {
    name: 'EDF Renewables',
    role: 'Global Utility Developer',
    logo: '/images/logos/EDF_Energy_logo.svg.png'
  },
  {
    name: 'Stantec',
    role: 'Global Engineering Consultant',
    logo: '/images/logos/Stantec-Logo-Color.jpg'
  },
  {
    name: 'Natural Forces',
    role: 'Renewable Energy Power Producer',
    logo: '/images/logos/natural-forces-logo-1.png'
  },
  {
    name: 'Port Hawkesbury Paper',
    role: 'Industrial Manufacturer',
    logo: '/images/logos/PHP_Logo.png'
  },
  {
    name: 'MChigeeng FN',
    role: 'Community Developer',
    logo: '/images/logos/mfn_logo.png'
  },
  {
    name: 'NEC',
    role: 'DER Project Developer',
    logo: '/images/logos/NEC_logo.png'
  },
];

// Project Locations for Interactive Leaflet Map
const MAP_PROJECTS = [
  {
    name: "Mary's Harbour Multi-Renewable Microgrid",
    location: 'Southern Labrador, NL, Canada',
    lat: 52.302,
    lng: -55.834,
  },
  {
    name: 'Nain Wind-Storage Microgrid',
    location: 'Nain, Labrador, Canada',
    lat: 56.541,
    lng: -61.693,
  },
  {
    name: 'Naujaat Solar-Storage Microgrid',
    location: 'Naujaat, Nunavut, Canada',
    lat: 66.522,
    lng: -86.226,
  },
  {
    name: 'Coral Harbour Solar-Storage Microgrid',
    location: 'Coral Harbour, Nunavut, Canada',
    lat: 64.137,
    lng: -83.167,
  },
  {
    name: 'Rankin Inlet Wind-Storage Microgrid',
    location: 'Rankin Inlet, Nunavut, Canada',
    lat: 62.808,
    lng: -92.085,
  },
  {
    name: 'Baker Lake Wind-Storage Microgrid',
    location: 'Baker Lake, Nunavut, Canada',
    lat: 64.317,
    lng: -96.017,
  },
  {
    name: "M'Chigeeng First Nation & Mining Smart-Grid",
    location: 'Manitoulin Island, ON, Canada',
    lat: 45.811,
    lng: -82.164,
  },
  {
    name: 'Haeckel Hill Hybrid Energy Storage System',
    location: 'Whitehorse, Yukon, Canada',
    lat: 60.750,
    lng: -135.233,
  },
  {
    name: 'Toronto HQ & Power Systems R&D Lab',
    location: 'Toronto, ON, Canada',
    lat: 43.6535,
    lng: -79.36679,
  },
  {
    name: 'Advanced controls for Industrial facility',
    location: 'Port Hawkesbury, NS',
    lat: 45.615,
    lng: -61.364,
  },
  {
    name: 'Project NEOM Megacity Grid Studies',
    location: 'NEOM Region, Saudi Arabia',
    lat: 28.300,
    lng: 35.100,
  },
  {
    name: 'MATL Cross-Border Interconnection',
    location: 'Montana-Alberta Border (AB / MT)',
    lat: 49.000,
    lng: -111.900,
  },
  {
    name: 'Ontario LT1',
    location: 'Various Regional Distribution Feeders, ON',
    lat: 44.500,
    lng: -79.500,
  },
  {
    name: 'Offshore Oil & Gas Platform Microgrid',
    location: 'North Sea Offshore Basin, United Kingdom',
    lat: 57.500,
    lng: 1.500,
  },
  {
    name: 'Grid Code Assessment',
    location: 'New England, US',
    lat: 44.2,
    lng: -70.3,
  },
];

// Client-Side Leaflet Map Component
function ProjectMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically inject Leaflet CSS stylesheet if missing
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Dynamic import to prevent SSR DOM errors
    import('leaflet').then((L) => {
      if (!mapRef.current || (mapRef.current as unknown as { _leaflet_id?: number })._leaflet_id) return;

      const map = L.map(mapRef.current, {
        center: [49.5, -68.0],
        zoom: 4,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_2vgr_1_abf70ee25ab47550aa8c194f', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 18,
      }).addTo(map);

      // Custom pulsing map marker icon matching site theme
      const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `
          <div class="relative flex items-center justify-center w-5 h-5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sienna opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-sienna border-2 border-white shadow-md"></span>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      // Render pins and hover tooltips
      MAP_PROJECTS.forEach((p) => {
        const marker = L.marker([p.lat, p.lng], { icon: customIcon }).addTo(map);

        marker.bindTooltip(
          `
            <div class="font-sans p-1 text-gunmetal">
              <strong class="text-xs text-sienna font-extrabold uppercase tracking-wide block">${p.name}</strong>
              <span class="text-[11px] font-semibold text-gray-700 block">${p.location}</span>
              
            </div>
          `,
          {
            direction: 'top',
            offset: [0, -8],
            opacity: 0.95,
            className: 'rounded-xl shadow-lg border border-cerulean/20',
          }
        );
      });
    });
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-cerulean/20 dark:border-bdazzled/40 shadow-inner">
      <div ref={mapRef} className="w-full h-full min-h-[380px] z-0" />
    </div>
  );
}

export default function TrackRecordSection() {
  return (
    <section className="relative bg-white dark:bg-gunmetal py-20 px-6 sm:px-12 overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/30 transition-colors">

      {/* Background Accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cerulean/10 dark:bg-bdazzled/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sienna/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* ==================================================================== */}
        {/* SECTION 1: TRUSTED STAKEHOLDERS & LOGO GRID                          */}
        {/* ==================================================================== */}
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 bg-lightcyan/40 dark:bg-bdazzled/30 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-sans font-bold text-gunmetal dark:text-cerulean uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Multi-Jurisdiction Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan tracking-tight">
            Trusted by Power System Stakeholders
          </h2>
          <p className="text-base text-bdazzled dark:text-cerulean max-w-3xl mx-auto font-medium leading-relaxed">
            Our clients and partners span all major electricity sector roles — from global IPPs and engineering firms to industrial entities and communities — entrusting us with critical grid integration challenges.
          </p>

          {/* Stakeholder Cards / Logos */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 pt-4">
            {STAKEHOLDERS.map((item, idx) => (
              <div
                key={idx}
                className="bg-lightcyan/20 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-4 rounded-2xl flex flex-col items-center justify-between text-center space-y-3 hover:border-sienna/50 transition-all shadow-sm group"
              >
                {/* Clean Logo Container Pill for Contrast */}
                <div className="w-full h-16 bg-white dark:bg-white/95 rounded-xl p-2.5 flex items-center justify-center shadow-inner overflow-hidden">
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={160}
                      height={60}
                      className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <Building2 className="w-6 h-6 text-sienna/80" />
                  )}
                </div>

                <div>
                  <span className="text-[12px] font-sans text-bdazzled/70 dark:text-cerulean/70 uppercase tracking-wider block mt-0.5">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* SECTION 2: GLOBAL TRACK RECORD CARD (UPDATED WITH MAP & 2x2 GRID)     */}
        {/* ==================================================================== */}
        <div className="bg-white/80 dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 backdrop-blur-sm">

          {/* Card Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-4 border-b border-cerulean/20 dark:border-bdazzled/40">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-sans font-bold text-sienna uppercase tracking-wider mb-2">
                <Globe2 className="w-4 h-4" />
                <span>Track Record</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan tracking-tight">
                Innovation Focused, Results Oriented
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-bdazzled dark:text-cerulean">
              <span className="flex items-center gap-1.5 bg-lightcyan/30 dark:bg-bdazzled/30 px-3.5 py-2 rounded-xl border border-cerulean/20 font-bold">
                <Globe2 className="w-4 h-4 text-sienna" />
                Worldwide Grid Experience
              </span>
            </div>
          </div>

          {/* 2-Column Layout (Left: Paragraph + 2x2 Metric Grid | Right: Leaflet Map) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 h-full">

              <p className="text-sm text-gunmetal/80 dark:text-lightcyan/90 leading-relaxed font-medium">
                We develop technologies and tools to solve grid integration challenges of today and tomorrow. Our goal is to propel electrification, both on-grid and off-grid, unlocking economic opportunities for generators, utilities, and industrial consumers, anywhere and everywhere.
              </p>

              {/* 2x2 Metric Cards */}
              <div className="grid grid-cols-2 gap-4">

                <div className="bg-lightcyan/20 dark:bg-gunmetal/60 border border-cerulean/20 dark:border-bdazzled/40 p-5 rounded-2xl space-y-1">
                  <p className="text-2xl sm:text-3xl font-extrabold font-sans text-sienna">1 GW+</p>
                  <p className="text-xs font-bold text-gunmetal dark:text-lightcyan">Renewables Experience</p>
                  <p className="text-[11px] text-bdazzled/70 dark:text-cerulean/70">Across multiple global jurisdictions</p>
                </div>

                <div className="bg-lightcyan/20 dark:bg-gunmetal/60 border border-cerulean/20 dark:border-bdazzled/40 p-5 rounded-2xl space-y-1">
                  <p className="text-2xl sm:text-3xl font-extrabold font-sans text-gunmetal dark:text-cerulean">100%</p>
                  <p className="text-xs font-bold text-gunmetal dark:text-lightcyan">Repeat Clients</p>
                  <p className="text-[11px] text-bdazzled/70 dark:text-cerulean/70">While performing grid studies</p>
                </div>

                <div className="bg-lightcyan/20 dark:bg-gunmetal/60 border border-cerulean/20 dark:border-bdazzled/40 p-5 rounded-2xl space-y-1">
                  <p className="text-2xl sm:text-3xl font-extrabold font-sans text-sienna">2 US Patents</p>
                  <p className="text-xs font-bold text-gunmetal dark:text-lightcyan">Grid Adaptr & Mobile Grid</p>
                  <p className="text-[11px] text-bdazzled/70 dark:text-cerulean/70">Patents pending in OECD countries</p>
                </div>

                <div className="bg-lightcyan/20 dark:bg-gunmetal/60 border border-cerulean/20 dark:border-bdazzled/40 p-5 rounded-2xl space-y-1">
                  <p className="text-2xl sm:text-3xl font-extrabold font-sans text-gunmetal dark:text-cerulean">1st</p>
                  <p className="text-xs font-bold text-gunmetal dark:text-lightcyan">Multi-Renewable MGCS</p>
                  <p className="text-[11px] text-bdazzled/70 dark:text-cerulean/70">Deployed in remote Canada</p>
                </div>

              </div>

            </div>

            {/* Right Column: Interactive Leaflet Map */}
            <div className="lg:col-span-6 flex flex-col h-full min-h-[380px]">
              <ProjectMap />
            </div>

          </div>

        </div>

        {/* ==================================================================== */}
        {/* SECTION 3: PROJECT SPOTLIGHT CARD (HEIGHT MATCHED COLUMNS)          */}
        {/* ==================================================================== */}
        <div className="bg-white/80 dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 backdrop-blur-sm">

          {/* Card Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-cerulean/20 dark:border-bdazzled/40">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-sans font-bold text-sienna uppercase tracking-wider mb-1">
                <Award className="w-4 h-4" />
                <span>Featured Project Spotlight</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gunmetal dark:text-lightcyan">
                Mary&apos;s Harbour Microgrid
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-bdazzled dark:text-cerulean">
              <span className="flex items-center gap-1.5 bg-lightcyan/30 dark:bg-bdazzled/30 px-3 py-1.5 rounded-lg border border-cerulean/20">
                <MapPin className="w-3.5 h-3.5 text-sienna" />
                Southern Labrador
              </span>
              <span className="flex items-center gap-1.5 bg-lightcyan/30 dark:bg-bdazzled/30 px-3 py-1.5 rounded-lg border border-cerulean/20">
                <Zap className="w-3.5 h-3.5 text-sienna" />
                Proponent: Natural Forces
              </span>
            </div>
          </div>

          {/* Equal Height Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Visual Column: Flex-1 Image + Fixed Topology Block */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4 h-full">

              {/* Featured Project Image */}
              <div className="relative flex-1 min-h-[200px] w-full overflow-hidden rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 shadow-sm">
                <Image
                  src="/images/marys-harbour-renewables.jpg"
                  alt="Mary's Harbour Solar PV Array at sunset in Labrador"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* System Architecture Topology Diagram */}
              <div className="shrink-0 relative bg-lightcyan/20 dark:bg-gunmetal/60 p-4 rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 flex flex-col items-center justify-center text-center">

                <div className="grid grid-cols-3 gap-3 items-center w-full max-w-md">

                  {/* Diesel */}
                  <div className="bg-white dark:bg-gunmetal border border-sienna/40 p-2.5 rounded-xl shadow-sm text-center">
                    <Zap className="w-5 h-5 text-sienna mx-auto mb-1" />
                    <span className="text-[10px] font-bold text-gunmetal dark:text-lightcyan block">Diesel Generation</span>
                  </div>

                  {/* ADAPTR Controller Center */}
                  <div className="bg-sienna text-white p-3 rounded-xl shadow-md text-center border border-sienna">
                    <Cpu className="w-6 h-6 mx-auto mb-1" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wide block">ADAPTR MGCS</span>
                  </div>

                  {/* Renewables */}
                  <div className="space-y-1.5">
                    <div className="bg-white dark:bg-gunmetal border border-cerulean/40 p-2 rounded-xl shadow-sm text-center">
                      <span className="text-[9px] font-bold text-gunmetal dark:text-lightcyan block">Run-of-River Hydro</span>
                    </div>
                    <div className="bg-white dark:bg-gunmetal border border-cerulean/40 p-2 rounded-xl shadow-sm text-center">
                      <span className="text-[9px] font-bold text-gunmetal dark:text-lightcyan block">Solar & BESS</span>
                    </div>
                  </div>

                </div>

                <p className="text-[11px] font-sans font-bold text-bdazzled dark:text-cerulean mt-3">
                  Mary&apos;s Harbour Hybrid Power System Architecture
                </p>
              </div>

            </div>

            {/* Right Details Column: Defines Row Height */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 h-full">

              <div className="space-y-6">
                <p className="text-sm text-gunmetal dark:text-lightcyan leading-relaxed font-medium">
                  Mary&apos;s Harbour Renewables includes the refurbishment of a decommissioned run-of-river hydro plant, a solar PV array, and a lithium-ion battery energy storage system—all controlled and dynamically operated by <strong className="text-sienna">ADAPTR&apos;s Micro-Grid Control System (MGCS)</strong>.
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-sans font-extrabold uppercase tracking-wider text-sienna">
                    Key Technical Achievements
                  </h4>

                  <ul className="space-y-2.5 text-xs text-gunmetal dark:text-lightcyan">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong>1st multi-renewable MGCS</strong> deployed in remote Canadian territory.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span><strong>1st dynamic model validation</strong> for a remote microgrid in Canada.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span>Passed all strict utility commissioning tests on the <strong>very first attempt</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                      <span>Achieved <strong>4+ years of continuous, fault-free</strong> operational performance.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Verified Client Testimonial Box */}
              <div className="p-5 bg-lightcyan/30 dark:bg-bdazzled/30 border border-cerulean/20 dark:border-bdazzled/40 rounded-2xl relative space-y-2">
                <Quote className="w-6 h-6 text-sienna/40 absolute top-3 right-3" />
                <p className="text-xs italic text-gunmetal dark:text-lightcyan leading-relaxed">
                  &ldquo;ADAPTR&apos;s hard working staff and innovative approach to the Mary&apos;s Harbour Microgrid has led to a successful next-generation project.&rdquo;
                </p>
                <div className="text-[11px] font-bold text-sienna font-sans pt-1">
                  — Robert Apold, Executive Director, Natural Forces
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}