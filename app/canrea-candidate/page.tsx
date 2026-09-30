'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Award, 
  Briefcase, 
  Cpu, 
  Handshake, 
  UserCheck, 
  Megaphone, 
  ChevronLeft, 
  ChevronRight, 
  Video, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  MapPin,
  TrendingUp,
  Layers,
  Zap,
  Radio,
  Quote,
  Target,
  Compass
} from 'lucide-react';

interface ExpertiseItem {
  id: string;
  tag: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  image: string;
  imageCaption: string;
  summary: string;
  highlights: string[];
}

const expertiseData: ExpertiseItem[] = [
  {
    id: 'overview',
    tag: 'Overview',
    icon: Award,
    title: 'Hassan Shahriar',
    subtitle: 'President, ADAPTR Inc. • Running for BTM Board Seat',
    image: '/images/canrea_candidate/hassan_shahriar.jpg',
    imageCaption: 'Hassan Shahriar — 15+ Years in Canadian Renewable Energy',
    summary:
      'Serving in renewables since 2010, Hassan’s experience spans technical, commercial, engineering, development, communications, M&A, and leadership across Canada.',
    highlights: [
      'Proven commercial experience having led transactions with aggregate contract values exceeding $500M+',
      'Proven technical expertise in conceiving necessary technologies and overseeing their development',
      'Ability to persevere and persist—key ingredients to operating successfully in the hard-tech space',
      'Fiduciary experience through active Board and leadership roles across multiple entities',
    ],
  },
  {
    id: 'commercial',
    tag: 'Commercial & M&A',
    icon: Briefcase,
    title: 'Commercial Negotiations & Development',
    subtitle: '500MW+ Portfolio & Contract Delivery',
    image: '/images/canrea_candidate/E-126_hassan.jpg',
    imageCaption: 'ENERCON E-126 7.5MW WTG at Aurich, Germany',
    summary:
      'Deep background structuring risk-mitigated commercial transactions in the power system space and beyond.',
    highlights: [
      'Led commercial negotiations for over 500MW of wind energy projects during ENERCON tenure',
      'Navigated complex commercial challenges between global entities to reach contractual consensus',
      'Initiated and led asset purchase and sale agreements to ensure continuity of Exhibition Place wind turbine',
      'Negotiated commercial transactions for ADAPTR Inc. with entities across various scales and operating domains',
    ],
  },
  {
    id: 'technical',
    tag: 'Tech & Development',
    icon: Cpu,
    title: 'Technology Development & Deployment',
    subtitle: 'Addressing Key CanREA Board Skills Gaps',
    image: '/images/canrea_candidate/Demo_Group_Pic.jpg',
    imageCaption: 'Demonstrating lab-scale Grid Adaptr to stakeholders',
    summary:
      'Directly addresses CanREA’s identified board gap in technology manufacturing and development, creating hardware and control platforms for grid stability.',
    highlights: [
      'Co-inventor of patented Grid Adaptr™ technology solving power quality issues in weak grid areas',
      'Grid Adaptr was selected by NRCan’s Energy Innovation Team for Smart Grid Demonstration 2025',
      'Deployed commercial Microgrid Control Systems (MGCS) operating in Labrador since 2021',
      'Co-inventor of the Mobile Electric Grid architecture for enhanced flexibility and resiliency of the existing grid',
    ],
  },
  {
    id: 'stakeholder',
    tag: 'Stakeholder Relations',
    icon: Handshake,
    title: 'Stakeholder & Indigenous Relations',
    subtitle: 'Building Trust Across Communities & Utilities',
    image: '/images/canrea_candidate/NRCan_announce.jpg',
    imageCaption: "Collaborating with M'Chigeeng First Nation and NRCan",
    summary:
      'Extensive experience communicating at project open houses, supporting community co-op stewardship, government engagements, and Indigenous clean energy partnerships.',
    highlights: [
      "Partnered with M'Chigeeng First Nation for NRCan Smart Grid demonstration project on Manitoulin Island",
      'Preserved community ownership and operation of Toronto’s iconic Exhibition Place turbine',
      'Proactive engagements with industrial consumers in multiple sectors on their electrification needs and challenges',
      'Active participant at conferences, sharing insights on project experiences, technical hurdles, and solutions',
    ],
  },
  {
    id: 'policy',
    tag: 'Governance',
    icon: UserCheck,
    title: 'Leadership & Governance',
    subtitle: '15+ Years Active CanWEA / CanREA Involvement',
    image: '/images/canrea_candidate/G&L1.jpg',
    imageCaption: 'CanREA delegation at the Exhibition Place Wind Turbine in Toronto',
    summary:
      'Elected as Director and President for WindShare Co-op and a Toronto Condominium Corporation multiple times.',
    highlights: [
      'Over 10+ years of combined Director and Leadership experience',
      'Articulating needs and generating consensus in Board settings',
      'Upholding fiduciary responsibilities across a variety of corporate and community contexts',
      'Serving as official spokesperson on behalf of Boards for stakeholder engagements',
    ],
  },
  {
    id: 'communications',
    tag: 'Communications',
    icon: Megaphone,
    title: 'Listening, Learning & Sharing',
    subtitle: 'Resonant Value Propositions for Energy Consumers',
    image: '/images/education.jpg',
    imageCaption: 'Hosting and mentoring students in renewable generation & STEM',
    summary:
      'Communicating the benefits of renewable energy on cost, resiliency, and speed of deployment.',
    highlights: [
      "Listened to electricity consumers' perspectives and developed the Hierarchy of Energy Priorities philosophy",
      'Took an active role to frame and communicate challenges facing electrification to a wide audience',
      'Hosted multiple educational workshops for students and community members on renewable energy',
      'Communicating directly via this interactive platform to provide full transparency beyond brief profile summaries',
    ],
  },
];

const visionPillars = [
  {
    number: '01',
    title: 'Aligning on Resonant Consumer Messaging',
    subtitle: 'Lowest Cost & Highest Resiliency',
    description:
      'Focusing consumer-facing messaging on value propositions beyond sustainability—specifically lowest cost for Front-of-the-Meter (FTM) and highest resiliency for Behind-the-Meter (BTM) with rapid deployment speed.',
  },
  {
    number: '02',
    title: 'Supporting Grid Modernization for Utilities (UTM)',
    subtitle: 'Unlock-The-Meter (UTM) Collaboration',
    description:
      'Framing CanREA member solutions as an economic driver for distribution utilities’ grid modernization and expansion—enabling industrial growth on one side and service expansion for utilities on the other.',
  },
  {
    number: '03',
    title: 'Incepting Vertical Alliances with Major Consumers',
    subtitle: 'Critical Infrastructure Integration',
    description:
      'Incepting vertical alliances with associations in critical infrastructure segments—including utilities, transportation, mining, defence, and digital infrastructure—to address energy flexibility and current geopolitical realities.',
  },
];

const mediaVideos = [
  {
    id: '1',
    title: 'Hierarchy of Energy Priorities',
    category: 'ADAPTR Insights',
    embedUrl: 'https://www.youtube.com/embed/QxEV9ioCjA8',
    description: 'Hassan Shahriar discusses evolving power system delivery to meet availability and reliability needs.',
  },
];

export default function CanreaCandidatePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentItem = expertiseData[activeIndex];

  return (
    <div className="min-h-screen bg-white dark:bg-gunmetal text-gunmetal dark:text-lightcyan transition-colors duration-300">
      
      {/* ==================================================================== */}
      {/* SECTION 1: CANDIDATE HERO HEADER                                     */}
      {/* ==================================================================== */}
      <section className="relative pt-12 pb-12 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sienna/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cerulean/15 dark:bg-bdazzled/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-sienna/15 border border-sienna/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-sienna uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-sienna shrink-0" />
            <span>CanREA Board of Directors Candidate (2026)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan leading-tight">
            Hassan Shahriar
          </h1>

          <p className="text-xl sm:text-2xl font-extrabold text-sienna leading-snug">
            President, ADAPTR Inc. • Running for BTM Board Seat
          </p>

          <p className="text-sm sm:text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Bringing 15+ years of frontline experience across wind, solar, storage, microgrids, and technology development & deployment to accelerate Canada’s clean energy transition and expansion.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-2 pt-2 text-xs font-bold">
            <span className="bg-lightcyan/60 dark:bg-bdazzled/30 border border-cerulean/30 px-3 py-1 rounded-lg text-gunmetal dark:text-lightcyan">
              FTM & BTM Experienced
            </span>
            <span className="bg-lightcyan/60 dark:bg-bdazzled/30 border border-cerulean/30 px-3 py-1 rounded-lg text-gunmetal dark:text-lightcyan">
              Inventor of Patented Grid Techs
            </span>
            <span className="bg-lightcyan/60 dark:bg-bdazzled/30 border border-cerulean/30 px-3 py-1 rounded-lg text-gunmetal dark:text-lightcyan">
              500MW+ TSAs Negotiated
            </span>
            <span className="bg-lightcyan/60 dark:bg-bdazzled/30 border border-cerulean/30 px-3 py-1 rounded-lg text-gunmetal dark:text-lightcyan">
              Multiple Leadership Roles
            </span>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 1.5: WHY I AM RUNNING FOR A BOARD POSITION                    */}
      {/* ==================================================================== */}
      <section className="py-16 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-white dark:bg-gunmetal">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 bg-sienna/10 border border-sienna/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>Candidacy Motivation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan tracking-tight">
              Why I Am Running for the BTM Board Seat
            </h2>
          </div>

          {/* Statement Callout Card */}
          <div className="relative bg-gradient-to-br from-gunmetal via-gunmetal to-bdazzled dark:from-gunmetal/90 dark:to-bdazzled/40 border border-cerulean/30 rounded-3xl p-8 sm:p-12 shadow-2xl text-lightcyan overflow-hidden">
            
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-sienna/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-8 max-w-5xl mx-auto">
              
              <div className="flex items-center gap-4 border-b border-cerulean/20 pb-6">
                <div className="w-12 h-12 rounded-2xl bg-sienna/20 border border-sienna/30 flex items-center justify-center text-sienna shrink-0">
                  <Quote className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Unlocking the Meters & Expanding Opportunities
                  </h3>
                  <p className="text-xs font-bold text-sienna uppercase tracking-wider">
                    Hassan Shahriar &bull; BTM Candidate Statement
                  </p>
                </div>
              </div>

              {/* Main Statement Text */}
              <div className="space-y-5 text-sm sm:text-base leading-relaxed text-lightcyan/95 font-medium">
                <p className="text-base sm:text-lg text-white font-semibold leading-relaxed border-l-4 border-sienna pl-4 sm:pl-6 italic">
                  &ldquo;A major technical bottleneck for BTM renewables and energy storage is the limitation of existing grid capacity. Seven years ago, I left ENERCON to build hard-tech solutions to address these grid constraints, resulting in patented technologies supported by NRCan&apos;s Energy Innovation team.&rdquo;
                </p>

                <p>
                  However, technology alone is not enough—we need the aligned support of regulators, utilities, governments, and consumers to accelerate electrification.
                </p>

                <p className="text-white font-bold text-base sm:text-lg">
                  Garnering that consensus is my primary mission: one that will unlock meters and commercial opportunities for all CanREA members.
                </p>

                <p className="text-cerulean font-medium pt-2">
                  This is the task I am eager to take on, on your behalf, as your BTM Board Member.
                </p>
              </div>

              {/* Mission Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-cerulean/20 text-xs">
                <div className="bg-gunmetal/80 border border-cerulean/20 p-4 rounded-xl space-y-1.5">
                  <span className="text-sienna font-extrabold uppercase tracking-wider text-[10px] block">01 &bull; Hard Tech & Grid Resilience</span>
                  <p className="text-white font-bold text-xs">Overcoming Grid Limits</p>
                  <p className="text-cerulean/80 text-[11px]">Pursuing grid modernization initiatives to solve BTM hosting capacity limits.</p>
                </div>

                <div className="bg-gunmetal/80 border border-cerulean/20 p-4 rounded-xl space-y-1.5">
                  <span className="text-sienna font-extrabold uppercase tracking-wider text-[10px] block">02 &bull; Multi-Stakeholder Alignment</span>
                  <span className="text-white font-bold text-xs">Building True Consensus</span>
                  <p className="text-cerulean/80 text-[11px]">Uniting regulators, utilities, governments, and consumers for electrification.</p>
                </div>

                <div className="bg-gunmetal/80 border border-cerulean/20 p-4 rounded-xl space-y-1.5">
                  <span className="text-sienna font-extrabold uppercase tracking-wider text-[10px] block">03 &bull; Member Business Growth</span>
                  <span className="text-white font-bold text-xs">Unlocking the Meters</span>
                  <p className="text-cerulean/80 text-[11px]">Driving faster deployment and expanded business pipelines for CanREA members.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: INTERACTIVE EXPERTISE HERO CARD                           */}
      {/* ==================================================================== */}
      <section className="py-16 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sienna block">
              Core Competencies & Board Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gunmetal dark:text-lightcyan">
              Explore Background & Experience
            </h2>
            <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/80 font-medium">
              Select a domain below to review Hassan&apos;s 15+ year track record in Canadian renewables.
            </p>
          </div>

          <div className="relative bg-white dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl p-6 sm:p-10 shadow-xl dark:shadow-2xl overflow-hidden transition-all duration-300">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-sienna/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              <div className="lg:col-span-5 flex flex-col justify-center items-center">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-cerulean/20 dark:border-bdazzled/40 shadow-md bg-white dark:bg-gunmetal/60">
                  <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-gunmetal/90 backdrop-blur-md px-3 py-1 rounded-lg border border-cerulean/30 text-[10px] font-black text-lightcyan uppercase tracking-wider">
                    {currentItem.tag}
                  </div>
                </div>
                <span className="mt-2 text-bdazzled dark:text-cerulean/80 text-xs font-medium self-start">
                  {currentItem.imageCaption}
                </span>
              </div>

              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between min-h-[360px]">
                
                <div className="border-b border-cerulean/20 dark:border-bdazzled/40 pb-4 space-y-3">
                  
                  <div className="flex flex-wrap items-center gap-2">
                    {expertiseData.map((item, idx) => {
                      const TabIcon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveIndex(idx)}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            activeIndex === idx
                              ? 'bg-sienna text-white shadow-md scale-105'
                              : 'bg-lightcyan/60 dark:bg-bdazzled/30 text-bdazzled dark:text-cerulean hover:text-gunmetal dark:hover:text-lightcyan border border-cerulean/20 dark:border-transparent'
                          }`}
                        >
                          <TabIcon className="w-3.5 h-3.5" />
                          <span>{item.tag}</span>
                        </button>
                      );
                    })}
                  </div>

                </div>

                <div className="space-y-4 transition-all duration-300">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-gunmetal dark:text-lightcyan tracking-tight">
                      {currentItem.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
                    {currentItem.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-cerulean/15 dark:border-bdazzled/30">
                    {currentItem.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gunmetal/85 dark:text-lightcyan/90 font-medium leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-cerulean/20 dark:border-bdazzled/30">
                  <div className="flex gap-1.5">
                    {expertiseData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          activeIndex === idx ? 'w-8 bg-sienna' : 'w-2 bg-cerulean/20 dark:bg-bdazzled/60'
                        }`}
                        aria-label={`Go to item ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setActiveIndex(
                          (prev) => (prev - 1 + expertiseData.length) % expertiseData.length
                        )
                      }
                      className="p-2 rounded-lg bg-lightcyan/60 dark:bg-bdazzled/30 hover:bg-cerulean/20 dark:hover:bg-bdazzled/60 text-bdazzled dark:text-cerulean hover:text-gunmetal dark:hover:text-lightcyan transition-colors border border-cerulean/20 dark:border-transparent cursor-pointer"
                      aria-label="Previous item"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveIndex((prev) => (prev + 1) % expertiseData.length)
                      }
                      className="p-2 rounded-lg bg-lightcyan/60 dark:bg-bdazzled/30 hover:bg-cerulean/20 dark:hover:bg-bdazzled/60 text-bdazzled dark:text-cerulean hover:text-gunmetal dark:hover:text-lightcyan transition-colors border border-cerulean/20 dark:border-transparent cursor-pointer"
                      aria-label="Next item"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 3: CANREA 3-YEAR STRATEGIC VISION                            */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-sienna" />
              <span>Execution Mode for 2050 Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
              CanREA Objectives for the Next 3 Years
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              CanREA has set ambitious targets in its 2050 Vision. To ensure renewables and storage are adopted at scale and drive transition, Hassan outlines three key strategic objectives:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 transition-all hover:border-sienna/40"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-sienna font-mono">
                      {pillar.number}
                    </span>
                    <span className="bg-sienna/10 border border-sienna/20 text-sienna text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                      Strategic Pillar
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-gunmetal dark:text-lightcyan leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-cerulean uppercase tracking-wider">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 4: JURISDICTIONS & SECTOR REPRESENTATION                     */}
      {/* ==================================================================== */}
      <section className="py-16 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-10 rounded-3xl shadow-xl">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 bg-sienna/10 border border-sienna/20 px-3 py-1 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Cross-Canada Reach</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gunmetal dark:text-lightcyan">
                Active Jurisdictions & Technology Scope
              </h3>
              <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
                Hassan brings hands-on project experience across diverse Canadian regional markets and energy subsectors, representing the full spectrum of CanREA members.
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-extrabold text-sienna uppercase tracking-wider block">
                  Engaged Jurisdictions:
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  {['Ontario', 'British Columbia', 'Nova Scotia', 'Newfoundland and Labrador', 'Nunavut'].map((j, idx) => (
                    <span key={idx} className="bg-sienna/15 dark:bg-sienna/20 text-sienna border border-sienna/30 px-3 py-1.5 rounded-xl">
                      ✓ {j}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 border-t lg:border-t-0 lg:border-l border-cerulean/20 dark:border-bdazzled/30 pt-6 lg:pt-0 lg:pl-8">
              <span className="text-[11px] font-extrabold text-cerulean uppercase tracking-wider block">
                Technology & Scale Coverage:
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gunmetal/85 dark:text-lightcyan/90 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                  <span><strong>Technologies:</strong> Wind Energy, Solar Energy, Energy Storage, Control Systems</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                  <span><strong>Deployment Scale:</strong> Both Front-of-the-Meter (FTM) and Behind-the-Meter (BTM)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                  <span><strong>Board Skill Alignment:</strong> Technology Manufacture, Service Provision, Technology Development</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                  <span><strong>Core Focus:</strong> Communications, Stakeholder Relations, Strategic Planning, Commercial Negotiations</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 5: MEDIA & EVENT APPEARANCES (SINGLE FEATURED VIDEO)        */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <Video className="w-3.5 h-3.5 text-sienna" />
              <span>Featured Keynote</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
              Hierarchy of Energy Priorities
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Watch Hassan Shahriar present on power system evolution, grid stability, and clean energy priorities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {mediaVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-sienna/40 space-y-6 p-6 sm:p-8"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black border border-cerulean/10 shadow-inner">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full border-0 rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <span className="text-[11px] font-bold text-sienna uppercase tracking-wider bg-sienna/10 px-2.5 py-1 rounded-md border border-sienna/20 inline-block">
                      {video.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gunmetal dark:text-lightcyan leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 6: CALL TO ACTION FOR CANREA MEMBERS                         */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gunmetal to-bdazzled dark:from-gunmetal/90 dark:to-bdazzled/40 text-lightcyan rounded-3xl p-8 sm:p-12 border border-cerulean/30 shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Vote Hassan Shahriar for the CanREA Board
            </h2>
            <p className="text-base text-cerulean/90 font-medium leading-relaxed">
              Bringing perseverance, multi-stakeholder perspectives, and hands-on technology development experience to represent CanREA voting members.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <a
              href="mailto:hassan@adaptrenergy.com?subject=CanREA%20Board%20Candidacy%20Inquiry"
              className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>Connect via Email</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-shahriar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}