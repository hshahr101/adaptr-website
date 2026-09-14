'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  Users, 
  Zap, 
  Wrench, 
  Workflow, 
  Quote, 
  Target, 
  Compass, 
  ShieldCheck,
  Video,
  CheckCircle2,
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

interface TeamMember {
  id: string;
  name: string;
  role: string;
  badgeRole?: string;
  expertise: string[];
  achievements: string[];
  imageUrl: string;
  linkedin?: string;
}

interface HierarchyTier {
  id: number;
  priorityLabel: string;
  levelName: string;
  title: string;
  subtitle: string;
  description: string;
}

interface ClientVerdict {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const hierarchyTiers: HierarchyTier[] = [
  {
    id: 1,
    priorityLabel: 'Priority 1',
    levelName: 'Tier 1 • Non-Negotiable Foundation',
    title: 'Availability and Reliability',
    subtitle: 'CONTINUOUS ACCESS & UNINTERRUPTED POWER',
    description: 'Above all else, consumers prioritize availability and reliability of energy which forms the foundational prerequisite for any energy decision.',
  },
  {
    id: 2,
    priorityLabel: 'Priority 2',
    levelName: 'Tier 2 • Secondary Focus',
    title: 'Cost and Convenience',
    subtitle: 'FINANCIAL IMPACT & ECONOMIC VALUE',
    description: 'Once power availability is confirmed, cost and operational convenience of the energy solution enter the decision-making process.',
  },
  {
    id: 3,
    priorityLabel: 'Priority 3',
    levelName: 'Tier 3 • Elevated Priority',
    title: 'Benefits to Society',
    subtitle: 'CLEAN ENERGY & ENVIRONMENTAL IMPACT',
    description: 'Lastly, consumers turn their focus to societal considerations and impact of their energy choices, whether they are clean and sustainabiles.',
  },
];

const clientVerdicts: ClientVerdict[] = [
  {
    id: '1',
    quote: "My time with Hassan spans over 8 years and I worked with him directly almost all the time. Hassan is a restless goal-getter who did everything for his clients to get them across the finish line. His expertise, his knowledge of what it takes to develop critical and challenging projects is immense and impressed me continuously. For anyone with the need to push a challenging project over the finish line, Hassan is the person to work with.",
    author: 'Michael Weidemann',
    role: 'Executive Vice President',
    company: 'ENERCON Canada Inc.',
  },
  {
    id: '2',
    quote: "ADAPTR's Grid Adaptr technology has proven essential for decoupling heavy transient loads from our local feeder lines. Their technical execution and power system know-how made our microgrid integration seamless and reliable.",
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

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Hassan Shahriar',
    role: 'FOUNDER & PRESIDENT',
    badgeRole: 'FOUNDER',
    expertise: ['Business Development', 'Commercial Transactions', 'Strategy & Communications'],
    achievements: [
      'Led commercial transactions for over 500MW of wind energy projects',
      'Led the revitalization of the iconic wind turbine project in downtown Toronto',
      'Managed the deployment of ADAPTR’s technologies from concept to commercial operation',
    ],
    imageUrl: '/images/team/hassan-shahriar.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '2',
    name: 'Dr. Amgad El-Deib',
    role: 'CTO',
    badgeRole: 'R&D LEAD',
    expertise: ['Power Systems', 'Controls & PCS', 'Research & Development'],
    achievements: [
      'R&D veteran with decades of power systems engineering experience',
      'Served in ENERCON’s R&D department in Aurich, Germany',
      'University professor specializing in grid controls and system stability',
    ],
    imageUrl: '/images/team/amgad-eldeib.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '3',
    name: 'Alex Fournier',
    role: 'COO (Fractional)',
    badgeRole: 'Operations',
    expertise: ['Management', 'Operations & Execution', 'Planning & Coordination'],
    achievements: [
      'Proven track-record of growt',
      'Manages power electronics manufacturing for grid-edge applications',
      'Pioneered modular multi-bay PCS panel engineering',
    ],
    imageUrl: '/images/team/sarah-lin.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '4',
    name: 'Mohamed Hafez',
    role: 'Research Scientist',
    badgeRole: 'R&D',
    expertise: ['Control Algorithms', 'Microgrid Automation', 'R&D', 'Hardware-in-loop'],
    achievements: [
      'Specializes in dynamic power system modeling and transient studies',
      'Executes high-penetration DER hosting capacity assessments',
      'Leads grid interconnection compliance engineering across global utilities',
    ],
    imageUrl: '/images/team/marcus-vance.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '5',
    name: 'Hossein Chabok',
    role: 'Power System Modeler',
    badgeRole: 'Engineering',
    expertise: ['Power Project Modeling', 'Grid Codes', 'PSSE / PSCAD / SymPowerSystems'],
    achievements: [
      'Architect of Smart-Grid CS supervisory control algorithms',
      'Engineered seamless islanding and black-start capability',
      'Designed dynamic energy management for hybrid ESS applications',
    ],
    imageUrl: '/images/team/david-okafor.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '6',
    name: 'Carman Mach',
    role: 'Product Lead (Software)',
    badgeRole: 'Software',
    expertise: ['Software Development', 'UX/UI', 'Client Enagagement'],
    achievements: [
      'Coordinates utility interconnection frameworks across North America',
      'Drives regulatory alignment for non-standard DER installations',
      'Leads field validation and site commissioning protocols',
    ],
    imageUrl: '/images/team/elena-rostova.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: '7',
    name: 'Miranda Martin',
    role: 'Market Development Coordinator',
    badgeRole: 'Marketing',
    expertise: ['Marketing', 'Stakeholder Engagement', 'Coordination', 'Workflow Management'],
    achievements: [
      'Develops real-time supervisory software for high-frequency converters',
      'Engineered fast micro-grid switching algorithms',
      'Optimizes SiL and HiL controller code execution',
    ],
    imageUrl: '/images/team/alex-rivera.jpg',
    linkedin: 'https://linkedin.com',
  },
];

const coreValues = [
  {
    title: 'Embody "Kaizen"',
    desc: 'Striving to continuously improve every aspect of our customers’ experience and product design.',
    icon: TrendingUp,
  },
  {
    title: 'Relationship Driven',
    desc: 'Prioritizing genuine human connections to solve complex renewable energy project needs.',
    icon: Users,
  },
  {
    title: 'Proactive Innovation',
    desc: 'Goal-oriented and ready to take initiatives beyond identified tasks to anticipate grid hurdles.',
    icon: Zap,
  },
  {
    title: 'Equipped to Deliver',
    desc: 'Utilizing proprietary tools and specialized equipment to fast-track performance and fulfill commitments.',
    icon: Wrench,
  },
  {
    title: 'Experienced Leadership',
    desc: 'Bringing decades of industry experience to help clients navigate the known unknowns in power systems.',
    icon: Award,
  },
  {
    title: 'Streamlined Execution',
    desc: 'Implementing proven frameworks that mitigate risk and accelerate clean energy deployment.',
    icon: Workflow,
  },
];

export default function AboutPage() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

  // Force page to load at the absolute top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  const [activeTierId, setActiveTierId] = useState<number>(1);
  const currentTier = hierarchyTiers.find((t) => t.id === activeTierId) || hierarchyTiers[0];

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
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-bdazzled dark:text-cerulean shadow-sm">
                <Sparkles className="w-4 h-4 text-sienna shrink-0" />
                <span>About ADAPTR Inc.</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan leading-tight">
                  Evolving Power Systems
                </h1>
                <p className="text-2xl sm:text-3xl font-extrabold text-sienna leading-tight">
                  To Drive Prosperity.
                </p>
              </div>
              
              <p className="text-base sm:text-base text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                Imagine unconstrained access to electricity, with weather-resistant resiliency at costs that foster economic growth. ADAPTR innovates renewable energy solutions that align with consumers&apos; hierarchy of energy priorities, both on and off the traditional grid.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#hierarchy"
                  className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-7 py-3 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Explore Priorities Framework</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#team"
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-bdazzled hover:bg-lightcyan/30 dark:hover:bg-bdazzled/80 text-gunmetal dark:text-lightcyan font-medium text-base px-6 py-3 rounded-xl border border-cerulean/30 dark:border-cerulean/20 transition-all shadow-sm"
                >
                  <Users className="w-5 h-5 text-sienna dark:text-cerulean" />
                  <span>Meet the ADAPTR Team</span>
                </a>
              </div>
            </div>

            {/* Right Column: Static Image Showcase */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="w-full bg-white/80 dark:bg-gunmetal/80 p-4 sm:p-5 rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 shadow-xl dark:shadow-2xl space-y-4">
                
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-lightcyan/20 dark:bg-gunmetal border border-cerulean/10 dark:border-bdazzled/30 shadow-inner">
                  <Image
                    src="/images/DSC05412.jpg"
                    alt="Mountain Landscape & Clean Energy Environment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-3 left-3 bg-gunmetal/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-cerulean/30 flex items-center gap-2 shadow-md z-10">
                    <ShieldCheck className="w-4 h-4 text-sienna" />
                    <span className="text-xs font-bold text-lightcyan uppercase tracking-wider">
                      Energy Anywhere and Everywhere
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-lightcyan/30 dark:bg-gunmetal rounded-lg border border-cerulean/20 dark:border-bdazzled/40 text-xs text-bdazzled dark:text-cerulean space-y-2">
                  <div className="flex justify-between items-center border-b border-cerulean/15 dark:border-bdazzled/30 pb-2">
                    <span className="font-bold text-gunmetal dark:text-lightcyan text-xs">
                      ADAPTR's Foundational Vision
                    </span>
                    <span className="bg-sienna/15 dark:bg-sienna/20 text-sienna px-2.5 py-0.5 rounded text-[11px] font-bold border border-sienna/30">
                      Unlock Energy to Drive Prosperity
                    </span>
                  </div>
                  <p className="text-[11px] text-bdazzled dark:text-cerulean/80 font-medium">
                    Building next generation technologies to evolve our power systems for energy anywhere and everywhere.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FEATURED VIDEO SHOWCASE CARD                                         */}
      {/* ==================================================================== */}
      <section className="py-12 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-8 rounded-3xl shadow-xl dark:shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-cerulean/15 dark:border-bdazzled/30 pb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3 py-1 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
                  <Video className="w-3.5 h-3.5 text-sienna" />
                  <span>Featured Video</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gunmetal dark:text-lightcyan">
                  How Important is Renewable Energy?
                </h2>
              </div>
              <span className="bg-sienna/15 dark:bg-sienna/20 text-sienna px-3 py-1.5 rounded-md text-xs font-bold border border-sienna/30 shrink-0">
                ADAPTR Insights
              </span>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-lightcyan/20 dark:bg-gunmetal border border-cerulean/10 dark:border-bdazzled/30 shadow-inner">
              <iframe
                src="https://www.youtube.com/embed/QxEV9ioCjA8"
                title="ADAPTR - Evolving Energy Delivery"
                className="w-full h-full rounded-2xl border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: CONSUMER ENERGY HIERARCHY (INTERACTIVE PYRAMID)           */}
      {/* ==================================================================== */}
      <section id="hierarchy" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Consumer Decision Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Hierarchy of Energy Priorities
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Everyone ultimately makes energy choices based on a common set of needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-10 rounded-3xl shadow-xl dark:shadow-2xl">
            
            {/* Pyramid Interactive Area */}
            <div 
              className="lg:col-span-4 flex flex-col items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-sienna/5 blur-3xl rounded-full pointer-events-none" />
              
              <svg viewBox="0 0 400 340" className="w-full max-w-md h-auto drop-shadow-xl relative z-10">
                
                {/* Tier 3: Red Triangle - Benefits to Society */}
                <g
                  onClick={() => setActiveTierId(3)}
                  onMouseEnter={() => setActiveTierId(3)}
                  className="cursor-pointer group"
                >
                  <polygon
                    points="200,30 144,135 256,135"
                    className={`${
                      activeTierId === 3
                        ? 'fill-sienna stroke-sienna scale-[1.02]'
                        : 'fill-sienna/80 dark:fill-sienna/100 stroke-transparent'
                    } transition-all duration-300 origin-center stroke-2 hover:fill-sienna`}
                  />
                  <text
                    x="200"
                    y="78"
                    textAnchor="middle"
                    className="fill-gunmetal dark:fill-white font-extrabold text-[10px] tracking-wider uppercase pointer-events-none drop-shadow-sm"
                  >
                    <tspan x="200" dy="24">Benefits</tspan>
                    <tspan x="200" dy="14">to Society</tspan>
                  </text>
                </g>

                {/* Tier 2: Blue Trapezoid - Cost and Convenience */}
                <g
                  onClick={() => setActiveTierId(2)}
                  onMouseEnter={() => setActiveTierId(2)}
                  className="cursor-pointer group"
                >
                  <polygon
                    points="140,143 260,143 312,240 88,240"
                    className={`${
                      activeTierId === 2
                        ? 'fill-cerulean stroke-cerulean scale-[1.02]'
                        : 'fill-cerulean/80 dark:fill-cerulean/100 stroke-transparent'
                    } transition-all duration-300 origin-center stroke-2 hover:fill-cerulean`}
                  />
                  <text
                    x="200"
                    y="184"
                    textAnchor="middle"
                    className="fill-gunmetal font-extrabold text-[14px] tracking-wider uppercase pointer-events-none"
                  >
                    <tspan x="200" dy="0">Cost and</tspan>
                    <tspan x="200" dy="18">Convenience</tspan>
                  </text>
                </g>

                {/* Tier 1: Dark Base - Availability and Reliability */}
                <g
                  onClick={() => setActiveTierId(1)}
                  onMouseEnter={() => setActiveTierId(1)}
                  className="cursor-pointer group"
                >
                  <polygon
                    points="84,248 316,248 370,350 30,350"
                    className={`${
                      activeTierId === 1
                        ? 'fill-gunmetal dark:fill-lightcyan stroke-gunmetal dark:stroke-lightcyan scale-[1.02]'
                        : 'fill-gunmetal/85 dark:fill-lightcyan/100 stroke-transparent'
                    } transition-all duration-300 origin-center stroke-2 hover:fill-gunmetal dark:hover:fill-lightcyan/60`}
                  />
                  <text
                    x="200"
                    y="292"
                    textAnchor="middle"
                    className="fill-lightcyan dark:fill-gunmetal font-extrabold text-[18px] tracking-wider uppercase pointer-events-none"
                  >
                    <tspan x="200" dy="0">Availability and</tspan>
                    <tspan x="200" dy="20">Reliability</tspan>
                  </text>
                </g>
              </svg>

              <span className="text-xs text-bdazzled dark:text-cerulean mt-4 font-medium">
                Hover/Click Tier to explore priorities
              </span>
            </div>

            {/* Right Column: Matched Layout */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Main Heading & Subtext */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-2xl font-extrabold text-gunmetal dark:text-lightcyan">
                  How Consumers Make Energy Decisions
                </h3>
                <p className="text-sm sm:text-base text-gunmetal/80 dark:text-lightcyan/80 font-medium leading-relaxed">
                  Much like Maslow’s hierarchy of human needs, the needs that guide energy consumers' choice of their energy solution follow a strict sequential order, in the form of a hierarchy.
                </p>
              </div>

              {/* Priority Pills */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                {hierarchyTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setActiveTierId(tier.id)}
                    className={`py-3 px-4 text-sm font-extrabold rounded-full border transition-all ${
                      activeTierId === tier.id
                        ? 'bg-sienna text-white border-sienna shadow-md scale-[1.02]'
                        : 'bg-white dark:bg-gunmetal/60 text-gunmetal dark:text-lightcyan border-cerulean/20 dark:border-bdazzled/40 hover:border-sienna'
                    }`}
                  >
                    {tier.priorityLabel}
                  </button>
                ))}
              </div>

              {/* Sub-Card Box */}
              <div className="p-6 sm:p-8 rounded-3xl border border-gunmetal/70 dark:border-cerulean/40 bg-lightcyan/20 dark:bg-gunmetal/60 shadow-inner space-y-3 transition-all duration-300">
                <h4 className="text-2xl font-extrabold text-gunmetal dark:text-lightcyan">
                  {currentTier.title}
                </h4>
                <p className="text-xs font-bold text-sienna uppercase tracking-wider">
                  {currentTier.subtitle}
                </p>
                <p className="text-sm sm:text-base text-gunmetal/80 dark:text-lightcyan/80 font-medium leading-relaxed pt-1">
                  {currentTier.description}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 4: CORE VALUES ("WHY PARTNER WITH ADAPTR")                   */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Why Partner With ADAPTR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Our Experience, Your Advantage
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Decades of power systems expertise deployed into every project engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const ValueIcon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-sienna/10 flex items-center justify-center text-sienna">
                      <ValueIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-gunmetal dark:text-lightcyan">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Restructured 3-Card Client's Verdicts Section */}
          <div className="space-y-8 pt-8 border-t border-cerulean/20 dark:border-bdazzled/30">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gunmetal dark:text-lightcyan tracking-tight">
                Stakeholder Feedback
              </h3>
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

                  <div className="space-y-3 pt-4 border-t border-cerulean/20">
                    <div>
                      <p className="text-sm font-extrabold text-white">
                        {verdict.author}
                      </p>
                      <p className="text-xs font-bold text-sienna uppercase tracking-wider">
                        {verdict.role}, {verdict.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 5: LEADERSHIP & ENGINEERING TEAM (UPDATED CONTENT CARDS)     */}
      {/* ==================================================================== */}
      <section id="team" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <span>Leadership & Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan">
              Meet the ADAPTR Team
            </h2>
            <p className="text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              A multidisciplinary team with cumulative wind, microgrid, and power electronics experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-sienna/40"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-72 w-full overflow-hidden bg-gunmetal/10 dark:bg-gunmetal">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-gunmetal/90 backdrop-blur-md px-3 py-1 rounded-lg border border-cerulean/30 text-[10px] font-black text-lightcyan uppercase tracking-wider">
                      {member.badgeRole || member.role.split(' ')[0]}
                    </div>
                  </div>
                  
                  {/* Content Area: Name, Role, Expertise Tags, Achievement Bullets */}
                  <div className="p-6 sm:p-7 space-y-5">
                    
                    {/* Header */}
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black tracking-tight text-gunmetal dark:text-lightcyan">
                        {member.name}
                      </h3>
                      <p className="text-xs font-extrabold text-sienna uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>

                    {/* Expertise Pills */}
                    <div className="space-y-2 pt-2 border-t border-cerulean/15 dark:border-bdazzled/30">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-sienna block">
                        EXPERTISE
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-sienna/10 dark:bg-sienna/20 border border-sienna/20 text-gunmetal dark:text-lightcyan text-xs font-semibold px-3 py-1.5 rounded-xl shadow-2xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievement Bullets */}
                    <div className="space-y-2.5 pt-3 border-t border-cerulean/15 dark:border-bdazzled/30">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-gunmetal/85 dark:text-lightcyan/90 font-medium leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Footer Link */}
                {member.linkedin && (
                  <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-cerulean/15 dark:border-bdazzled/30">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-cerulean hover:text-sienna transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 6: VISION & MISSION CARDS                                    */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-8 sm:p-10 rounded-2xl space-y-4 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-sienna/10 flex items-center justify-center text-sienna">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-sienna font-extrabold text-xs tracking-widest uppercase">Vision</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gunmetal dark:text-lightcyan">
                Drive Prosperity
              </h2>
              <p className="text-sm sm:text-base text-gunmetal/80 dark:text-lightcyan/80 leading-relaxed font-medium">
                ADAPTR aspires to bring energy solutions with the right mix of priorities to everyone, everywhere, expanding clean energy use to unlock economic opportunity for generators, utilities, and industrial consumers.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-8 sm:p-10 rounded-2xl space-y-4 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-cerulean/10 flex items-center justify-center text-cerulean">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-sienna font-extrabold text-xs tracking-widest uppercase">Mission</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gunmetal dark:text-lightcyan">
                Evolve Energy Delivery
              </h2>
              <p className="text-sm sm:text-base text-gunmetal/80 dark:text-lightcyan/80 leading-relaxed font-medium">
                We aim to expand access to resilient and affordable energy by evolving the delivery of energy from generation sources directly to consumption locations using control solutions and advanced power electronics.
              </p>
            </div>

          </div>

          {/* Quote Banner */}
          <blockquote className="bg-gradient-to-r from-lightcyan/30 via-lightcyan/10 to-transparent dark:from-bdazzled/30 dark:to-gunmetal border-l-4 border-sienna p-8 sm:p-10 rounded-2xl shadow-md space-y-4">
            <Quote className="w-8 h-8 text-sienna/60" />
            <p className="text-lg sm:text-xl italic font-medium text-gunmetal dark:text-lightcyan leading-relaxed">
              &ldquo;To make a meaningful change, you need to put in a meaningful amount of time and effort.&rdquo;
            </p>
            <cite className="block text-xs sm:text-sm font-bold text-sienna not-italic uppercase tracking-wider">
              — Siddiqua Begum (Founder&apos;s Mentor & Mother)
            </cite>
          </blockquote>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 7: CALL TO ACTION (CTA)                                      */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gunmetal to-bdazzled dark:from-gunmetal/90 dark:to-bdazzled/40 text-lightcyan rounded-3xl p-8 sm:p-12 border border-cerulean/30 shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to Power Prosperity for Your Business or Community?
            </h2>
            <p className="text-base text-cerulean/90 font-medium leading-relaxed">
              Work with us to unlock electricity solutions and futureproof your energy sources.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              type="button"
              onClick={() => setIsMeetingModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>Get in Touch</span>
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