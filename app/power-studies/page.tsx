'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Activity,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Globe,
  FileText,
  Zap,
  Layers,
  Wrench,
  Video,
  X,
  ExternalLink,
  Sliders,
  AlertTriangle,
  RefreshCw,
  Laptop,
  Server,
  Workflow,
  ShieldAlert,
  Layers3,
  FolderDown,
  Maximize2,
  Eye,
  Check,
  ChevronRight,
  Network,
  BatteryCharging,
  Sun,
  Radio,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

// ─── 1. GOOGLE CALENDAR SCHEDULING MODAL ──────────────────────────────────
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
        <div className="flex justify-between items-start mb-4 border-b border-cerulean/20 pb-4 shrink-0">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 bg-sienna/15 border border-sienna/30 px-3 py-1 rounded-full text-[11px] font-bold text-sienna uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" />
              <span>30-Min Technical Consultation</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Schedule a Study Consultation
            </h2>
            <p className="text-xs text-cerulean/80">
              Select an available time directly below to consult with ADAPTR power system engineers about your project.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-cerulean/70 hover:text-white p-1 rounded-lg hover:bg-cerulean/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="w-full flex-1 min-h-[480px] rounded-2xl overflow-hidden bg-white border border-cerulean/20 shadow-inner relative">
          <iframe
            src={bookingUrl}
            className="w-full h-full min-h-[480px] border-0"
            title="Google Calendar Appointment Scheduling"
          />
        </div>

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

// ─── 2. STUDY CAPABILITY DRILL-DOWN MODAL ─────────────────────────────────
interface CapabilityModalProps {
  study: StudyItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

function CapabilityDetailModal({ study, onClose, onOpenConsultation }: CapabilityModalProps) {
  if (!study) return null;
  const Icon = study.icon;

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-gunmetal/80 backdrop-blur-md flex items-center justify-center z-[99990] p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-gunmetal border border-cerulean/30 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl text-lightcyan relative max-h-[90vh] overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start border-b border-cerulean/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-sienna/20 border border-sienna/30 text-sienna">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-black text-sienna uppercase tracking-widest block">
                {study.category} CLASSIFICATION
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">{study.title}</h2>
              <p className="text-xs text-cerulean/80 font-semibold">{study.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-cerulean/70 hover:text-white p-1 rounded-lg hover:bg-cerulean/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-cerulean/90 leading-relaxed font-medium">
          <p>{study.description}</p>

          <div className="space-y-2 pt-2 border-t border-cerulean/15">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-sienna block">
              KEY ANALYTICAL FOCUS AREAS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {study.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-gunmetal/60 p-2.5 rounded-xl border border-cerulean/20">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                  <span className="text-white font-medium text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-sienna/10 rounded-2xl border border-sienna/30 space-y-1">
            <span className="text-[10px] font-extrabold text-sienna uppercase tracking-wider block">
              FORMAL ENGINEERING DELIVERABLES
            </span>
            <p className="text-xs font-bold text-white">{study.deliverables}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-cerulean/20 flex flex-col sm:flex-row justify-between items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
          >
            <span>Consult on This Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="text-xs font-bold text-cerulean hover:text-white transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── 3. STAGE-GATED SCOPE INSPECTOR MODAL ────────────────────────────────
interface StageModalProps {
  stage: StageDetail | null;
  onClose: () => void;
}

function StageDetailModal({ stage, onClose }: StageModalProps) {
  if (!stage) return null;

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-gunmetal/80 backdrop-blur-md flex items-center justify-center z-[99990] p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-gunmetal border border-cerulean/30 w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl text-lightcyan relative max-h-[90vh] overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start border-b border-cerulean/20 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-sienna/20 border border-sienna/30 px-3 py-1 rounded-full text-[10px] font-black text-sienna uppercase tracking-wider">
              <span>{stage.stageNumber} SCOPE INSPECTOR</span>
            </div>
            <h2 className="text-2xl font-black text-white mt-1">{stage.phaseLabel}</h2>
            <p className="text-xs font-bold text-cerulean">Status: {stage.statusLabel}</p>
          </div>
          <button
            onClick={onClose}
            className="text-cerulean/70 hover:text-white p-1 rounded-lg hover:bg-cerulean/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-cerulean/90 leading-relaxed font-medium">
          {stage.summary}
        </p>

        {/* Highlighted Studies for this Stage */}
        <div className="bg-sienna/10 border border-sienna/30 p-3.5 rounded-2xl space-y-1.5">
          <span className="text-[10px] font-black text-sienna uppercase tracking-wider">
            PRIMARY STUDIES PERFORMED IN THIS STAGE
          </span>
          <div className="flex flex-wrap gap-2 pt-1">
            {stage.studiesIncluded.map((s, idx) => (
              <span key={idx} className="bg-gunmetal border border-cerulean/30 px-2.5 py-1 rounded-lg text-xs font-bold text-white">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gunmetal/80 p-4 rounded-2xl border border-cerulean/20 space-y-2.5">
            <div className="flex items-center gap-2 text-sienna font-extrabold text-xs uppercase tracking-wider border-b border-cerulean/20 pb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Scope & Tasks</span>
            </div>
            <ul className="space-y-1.5 text-xs font-semibold text-white">
              {stage.scopeTasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-sienna font-bold">•</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gunmetal/80 p-4 rounded-2xl border border-cerulean/20 space-y-2.5">
            <div className="flex items-center gap-2 text-cerulean font-extrabold text-xs uppercase tracking-wider border-b border-cerulean/20 pb-2">
              <FileText className="w-4 h-4" />
              <span>Required Inputs</span>
            </div>
            <ul className="space-y-1.5 text-xs font-semibold text-white">
              {stage.requiredDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-cerulean font-bold">•</span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gunmetal/80 p-4 rounded-2xl border border-cerulean/20 space-y-2.5">
            <div className="flex items-center gap-2 text-sienna font-extrabold text-xs uppercase tracking-wider border-b border-cerulean/20 pb-2">
              <FolderDown className="w-4 h-4" />
              <span>Deliverables</span>
            </div>
            <div className="space-y-2">
              {stage.deliverables.map((del, idx) => (
                <div key={idx} className="p-2.5 bg-gunmetal rounded-xl border border-cerulean/30 space-y-0.5">
                  <p className="text-xs font-bold text-white">{del.name}</p>
                  <p className="text-[10px] text-cerulean/80">{del.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-cerulean/20 flex justify-between items-center text-xs">
          <a
            href="https://adamm.adaptrenergy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sienna font-bold hover:underline"
          >
            <span>Open {stage.stageName} Workspace in ADAMM Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="bg-cerulean/20 hover:bg-cerulean/30 text-white font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── DATA DEFINITIONS ──────────────────────────────────────────────────────
const adammUrl = "https://adamm.adaptrenergy.com";

// Slide 2: Who We Are - 4 Domain Competencies
interface CompetencyDomain {
  icon: React.ElementType;
  title: string;
  focus: string;
  projects: string[];
}

const domainCompetencies: CompetencyDomain[] = [
  {
    icon: Network,
    title: 'Transmission Systems',
    focus: 'System transfer limits, interties & high-voltage lines',
    projects: ['MATL 240kV Transmission Interconnection', 'HVDC Interconnection Review (India)', 'Offshore AC/DC Platforms']
  },
  {
    icon: Sun,
    title: 'Renewables & IBRs',
    focus: 'Interconnection assessments & grid compliance packs',
    projects: ['North American ISO/RTO Queue Filings', 'Weak-Grid Inverter Controls', 'Salt River Solar-Storage SIS']
  },
  {
    icon: BatteryCharging,
    title: 'Energy Storage (BESS)',
    focus: 'BESS and Hybrid BESS sizing, dynamic control & impacts',
    projects: ['Hybrid Microgrid BESS Dispatching', 'Micro-cycling Degradation Analysis', 'Fast-Frequency Response Services']
  },
  {
    icon: Layers,
    title: 'System Design & Microgrids',
    focus: 'Hybrid renewables for remote, industrial & off-grid networks',
    projects: ["Mary's Harbour Wind+Solar+Hydro+BESS", 'Nain Arctic Remote Wind-Storage', 'Rankin Inlet Microgrid Integration']
  }
];

// Slide 3: What We Do - Categorized into Steady-State vs Transient
interface StudyItem {
  id: string;
  category: 'Steady-State' | 'Transient';
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
  deliverables: string;
}

const categorizedStudies: StudyItem[] = [
  // STEADY-STATE
  {
    id: 'hosting-capacity',
    category: 'Steady-State',
    title: 'Hosting Capacity Studies',
    subtitle: 'De-risk Bidding & Interconnection Capacity',
    icon: Zap,
    description: 'Uses full power system models and automated multi-contingency analyses to determine true feeder and substation hosting capacity limits prior to formal interconnection submissions.',
    highlights: [
      'Full power system model evaluation (PSS®E / PowerFactory)',
      'Large-scale N-1 and N-2 contingency analyses',
      'Early constraint identification to prevent interconnection rejection',
      'De-risks bidding and capital allocation decisions'
    ],
    deliverables: 'Hosting Capacity Assessment Report, Substation Capacity Matrices, Feeder Curtailment Risks'
  },
  {
    id: 'load-flow',
    category: 'Steady-State',
    title: 'Load Flow & BOP Loss Studies',
    subtitle: 'Electrical Infrastructure Sizing & Loss Optimization',
    icon: Activity,
    description: 'Detailed thermal and voltage profiles across normal and contingency operating regimes to compare design concepts, select optimal conductor sizing, and calculate Balance of Plant (BOP) losses.',
    highlights: [
      'Comparison of alternative collector design concepts',
      'Optimal substation and transformer infrastructure sizing',
      'Precise BOP electrical loss estimations across annual load profiles',
      'Reactive power compensation sizing (shunt reactors / capacitors)'
    ],
    deliverables: 'Thermal & Voltage Profile Reports, BOP Loss Schedule, Equipment Sizing Specs'
  },
  {
    id: 'short-circuit',
    category: 'Steady-State',
    title: 'Short Circuit & Fault Current Calculations',
    subtitle: 'Streamlined Modeling for Equipment Safety',
    icon: ShieldCheck,
    description: 'Calculates maximum and minimum three-phase and phase-to-ground fault currents in compliance with IEEE/IEC standards, specifically addressing inverter-based current-limiting characteristics.',
    highlights: [
      'Effective standards interpretation (IEEE 551, IEC 60909)',
      'Breaker interrupting rating validation and switchgear sizing',
      'Inverter fault contribution modeling under weak-grid conditions',
      'Fast turnaround models for early EPC procurement'
    ],
    deliverables: 'Short Circuit Duty Report, Breaker Evaluation Matrix, Fault Level Tabulation'
  },
  // TRANSIENT & DYNAMIC
  {
    id: 'dynamic-studies',
    category: 'Transient',
    title: 'Dynamic Stability & Controller Tuning',
    subtitle: 'Utility-Centric Scenarios & Validated Models',
    icon: Cpu,
    description: 'Time-domain simulations in PSS®E and PSCAD™ assessing transient stability, frequency ride-through, voltage recovery, and inverter controller tuning during severe grid disturbances.',
    highlights: [
      'Utility-centric study scenarios tailored to regional ISO rules',
      'Implementation and tuning of validated OEM vendor models',
      'PPC (Power Plant Controller) & Inverter parameter selection',
      'Weak-grid short circuit ratio (SCR) & sub-synchronous resonance (SSR)'
    ],
    deliverables: 'Dynamic Stability Report, Inverter/PPC Tuning Records, Simulation Event Waveforms'
  },
  {
    id: 'tov-pq',
    category: 'Transient',
    title: 'Transient Overvoltage (TOV) & Power Quality (PQ)',
    subtitle: 'Switching Surges, Harmonics & Voltage Transients',
    icon: Sliders,
    description: 'Comprehensive analysis of rapid voltage spikes, switching surges, capacitor energization transients, and harmonic distortion compliance with IEEE 519 and IEC 61000 standards.',
    highlights: [
      'Transient Overvoltage (TOV) & lightning/switching surge evaluations',
      'Surge arrester rating and insulation coordination',
      'Total Harmonic Distortion (THD) and resonance frequency scans',
      'Harmonic filter and dynamic VAR compensator sizing'
    ],
    deliverables: 'TOV Peak Evaluation Brief, IEEE 519 Compliance Certificate, Filter Sizing Specifications'
  },
  {
    id: 'sia-studies',
    category: 'Transient',
    title: 'System Impact Assessments (SIA)',
    subtitle: 'Global Grid-Code Compliance & Interconnection Filing',
    icon: BarChart3,
    description: 'Turnkey interconnection study packages covering utility grid code requirements, dynamic fault ride-through, and grid-forming/grid-following compliance across North America and international grids.',
    highlights: [
      'Global grid-code compliance experience (NERC, AESO, CAISO, IESO, IEC)',
      'Proficient in PSS®E, PSCAD, PSLF, PowerFactory, and MATLAB',
      'Advanced power electronics & inverter-grid decoupling modeling',
      'Utility RFI resolution and formal approval facilitation'
    ],
    deliverables: 'Utility-Ready Interconnection Package, Comprehensive SIA Report, Validated Model Archive'
  }
];

// Slide 4: ADAMM Value Pillars
const adammPillars = [
  {
    number: '01',
    title: 'Decrease Early Development Expenses',
    description:
      'Catch grid code non-compliance early during feasibility to avoid expensive redesigns and unbudgeted equipment additions during late-stage EPC.'
  },
  {
    number: '02',
    title: 'Increase Project Throughput',
    description:
      'Centralized orchestration between OEMs, Developers, Utilities, and Consultants reduces RFI loop delays and cuts study completion time dramatically.'
  },
  {
    number: '03',
    title: 'Ensure Lifetime Continuous Compliance',
    description:
      'Maintain an active, version-controlled digital twin from Stage 1 Feasibility through Stage 5 Operations, ensuring seamless model updates when grid codes evolve.'
  }
];

// Slide 5: Stage-Gated Scope of Works Offered by ADAPTR
interface StageDetail {
  id: string;
  stageNumber: string;
  stageName: string;
  phaseLabel: string;
  summary: string;
  studiesIncluded: string[];
  scopeTasks: string[];
  requiredDocs: string[];
  deliverables: { name: string; type: string; date?: string }[];
  statusLabel: string;
}

const stageDetails: StageDetail[] = [
  {
    id: 'stage-1',
    stageNumber: 'STAGE 1',
    stageName: 'Feasibility',
    phaseLabel: 'Stage 1 • Early Screening & Hosting Capacity',
    summary:
      'Formulating the initial grid model, assessing baseline grid codes, and determining substation hosting capacity to derisk early project origination.',
    studiesIncluded: ['Hosting Capacity Study', 'Baseline Load Flow', 'POI Sizing & Screening'],
    scopeTasks: [
      'Grid Code Assessment',
      'Grid Model Setup',
      'Power Flow Calculations',
      'Hosting Capacity Study',
      'Grid Code Compliance Validation'
    ],
    requiredDocs: [
      'Preliminary Single Line Diagram (SLD)',
      'Point of Interconnection (POI) Location Data',
      'Target Generation Profile & Feeder Data'
    ],
    deliverables: [
      { name: 'Feasibility Study Report.pdf', type: 'Formal Engineering Report', date: '2024-01-15' }
    ],
    statusLabel: 'Completed / Ready for Offtake Bid'
  },
  {
    id: 'stage-2',
    stageNumber: 'STAGE 2',
    stageName: 'Offtake Bid',
    phaseLabel: 'Stage 2 • Offtake Bid & SIA Package Prep',
    summary:
      'Reviewing OEM turbine/inverter models, formulating basic plant design, estimating BOP losses, and assembling utility-ready System Impact Assessment (SIA) packages.',
    studiesIncluded: ['BOP Electrical Loss Estimates', 'Preliminary SIA Package', 'OEM Model Benchmarking'],
    scopeTasks: [
      'OEM Model Reviews',
      'Basic Design Formulation & BOP Loss Calculations',
      'Grid Code Compliance Validation',
      'SIA Package Preparation',
      'Utility RFI Management'
    ],
    requiredDocs: [
      'Inverter / WTG Datasheets',
      'Collector System Layout & Substation Spec',
      'Preliminary Protection Philosophy'
    ],
    deliverables: [
      { name: 'SIA_Package_Submission.zip', type: 'Utility Interconnection Package', date: '2024-06-10' }
    ],
    statusLabel: 'Submitted for Utility System Impact Study'
  },
  {
    id: 'stage-3',
    stageNumber: 'STAGE 3',
    stageName: 'Engineering',
    phaseLabel: 'Stage 3 • Detailed Engineering & EMT Approvals',
    summary:
      'Validating design updates against utility RFI comments, updating PSS®E & PSCAD™ models, and conducting comprehensive Short Circuit, TOV, and Dynamic simulations.',
    studiesIncluded: ['Dynamic Stability & EMT', 'Short Circuit & Breaker Ratings', 'Transient Overvoltage (TOV)', 'Harmonics (IEEE 519)'],
    scopeTasks: [
      'Compliance Validation of Design Updates',
      'EMT & High-Fidelity Dynamic Simulations',
      'Harmonics & Switching Surge Verification',
      'Model Update Approval with Utility'
    ],
    requiredDocs: [
      'Inverter Impedance Profile',
      'Final OEM Model Data (PSCAD / PSS®E)',
      'Station Transformer Test Report'
    ],
    deliverables: [
      { name: 'Detailed CIA Report Rev A.pdf', type: 'Detailed Interconnection Report', date: '2025-10-24' },
      { name: 'PSSE_Case_Final_v2.sav', type: 'Validated PSS®E Simulation Model', date: '2025-10-25' }
    ],
    statusLabel: 'On Track for Utility Compliance Approval'
  },
  {
    id: 'stage-4',
    stageNumber: 'STAGE 4',
    stageName: 'Construction',
    phaseLabel: 'Stage 4 • Construction & Commissioning Validation',
    summary:
      'Benchmarking factory acceptance test (FAT) data and field commissioning results against PSS®E/PSCAD™ models to satisfy grid operator witnessing requirements.',
    studiesIncluded: ['FAT / SAT Benchmarking', 'HIL Controller Verification', 'Commissioning Test Plans'],
    scopeTasks: [
      'FAT & SAT Data Benchmarking',
      'Field Test Model Validation',
      'Real-Time HIL Controller Verification',
      'Commissioning Protocol Execution'
    ],
    requiredDocs: [
      'Factory Acceptance Test (FAT) Results',
      'Field Test Telemetry & SCADA Logs',
      'Site-Specific Controller Setting Files'
    ],
    deliverables: [
      { name: 'Commissioning_Model_Validation_Report.pdf', type: 'Field Validation Brief' },
      { name: 'As_Built_PSCAD_Model_Package.zip', type: 'Verified As-Built Model' }
    ],
    statusLabel: 'Commissioning Alignment & Verification'
  },
  {
    id: 'stage-5',
    stageNumber: 'STAGE 5',
    stageName: 'Operations',
    phaseLabel: 'Stage 5 • Operational Lifetime Compliance',
    summary:
      'Maintaining continuous model-reality alignment over the project lifetime, updating models when SCADA limits, curtailment rules, or utility software versions change.',
    studiesIncluded: ['Digital Twin Continuous Compliance', 'Grid Code Version Updates', 'Repowering Impact Studies'],
    scopeTasks: [
      'Model-Reality Alignment Validation',
      'SCADA Limits & Curtailment Integration',
      'Grid Operator Software Version Upgrades',
      'Repowering & BESS Retrofit Impact Studies'
    ],
    requiredDocs: [
      'Operational SCADA Performance Logs',
      'Updated Substation Transformer Specs',
      'Revised Grid Code Criteria'
    ],
    deliverables: [
      { name: 'Lifetime_Model_Status_Report.pdf', type: 'Operational Compliance Brief' },
      { name: 'Updated_PSSE_PSCAD_Operational_Case.zip', type: 'Updated Model Twin' }
    ],
    statusLabel: 'Continuous Lifetime Verification'
  }
];

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Evolving Interconnection Requirements',
    subtitle: 'Tightening Grid Codes & Mandatory Validation',
    description:
      'Utilities (e.g., NSPI, NERC) are shifting towards strict model benchmarking between PSS®E and PSCAD™ models within a 5% tolerance band, alongside mandatory field-test commissioning validation.'
  },
  {
    icon: Layers,
    title: 'Incomplete OEM Models',
    subtitle: 'Model Version Drift & Control Discrepancies',
    description:
      'Incomplete technical information and unvalidated OEM models cause critical delays during System Impact Studies (SIS), leading to design drift between early bidding and final engineering.'
  },
  {
    icon: RefreshCw,
    title: 'Piecemeal Studies & Data Loss',
    subtitle: 'Fragmented Hand-Offs Across Lifecycles',
    description:
      'Traditional modeling relies on discrete, one-off studies. Handing off models between feasibility, bidding, engineering, construction, and operations causes data loss and fragmented coordination.'
  },
  {
    icon: ShieldAlert,
    title: 'Cost of Reactive Compliance',
    subtitle: 'Late Discoveries & Sub-optimal Bids',
    description:
      'Discovering dynamic stability, harmonic distortion, or weak-grid issues late in engineering forces reactive compliance—resulting in costly STATCOM additions, BESS retrofits, or power curtailment.'
  }
];

const labEquipment = [
  { name: 'Opal-RT (RTS)', detail: 'Real-time digital simulator for HIL testing' },
  { name: 'Speedgoat (RTS)', detail: 'Rapid control prototyping for dynamic inverter controls' },
  { name: 'Imperix Modules', detail: 'Rapid prototyping power hardware' },
  { name: 'SEL RTAC & SEL Axion', detail: 'Utility-grade protection & automation controllers' },
  { name: 'AC/DC Programmable Loads', detail: 'Real-world load and impedance profiling' },
  { name: 'Precision Variac & DC Power Supply', detail: 'Voltage sag, swell, and weak-grid emulation' }
];

const experienceProjects = [
  { title: "Mary's Harbour Hybrid Renewable Microgrid Project", type: 'Wind + Solar + Hydro + BESS' },
  { title: 'Nain Wind-Storage Microgrid Project', type: 'Northern Remote Wind-Storage' },
  { title: 'Naujaat Solar-Storage Microgrid Project', type: 'High-Arctic Solar-BESS' },
  { title: 'Coral Harbour Solar-Storage Microgrid Project', type: 'Nunavut Solar-BESS' },
  { title: 'Rankin Inlet Wind-Storage Microgrid Project', type: 'Kivalliq Region Wind-BESS' },
  { title: 'Baker Lake Wind-Storage Microgrid Project', type: 'Nunavut Microgrid' },
  { title: 'Power System Studies for Offshore Oil & Gas Platforms', type: 'United Kingdom HVDC/AC' },
  { title: 'Transmission Planning Studies for MATL Interconnection', type: 'Alberta 240kV Corridor' },
  { title: 'System Impact Study for Salt River Solar-Storage Project', type: 'Arizona Utility Interconnection' },
  { title: 'Design Review of an HVDC Transmission Project', type: 'India Grid Interconnection' },
  { title: 'Vetting Grid Forming Functionality for Wind Farm', type: 'Alberta Weak-Grid Compliance' }
];

export default function PowerSystemStudiesPage() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [selectedCapabilityModal, setSelectedCapabilityModal] = useState<StudyItem | null>(null);
  const [selectedStageModal, setSelectedStageModal] = useState<StageDetail | null>(null);
  const [activeTechnicalTab, setActiveTechnicalTab] = useState<'Steady-State' | 'Transient'>('Steady-State');

  const filteredStudies = categorizedStudies.filter(
    (study) => study.category === activeTechnicalTab
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gunmetal text-gunmetal dark:text-lightcyan transition-colors duration-300">

      {/* ==================================================================== */}
      {/* SECTION 1: HERO VALUE BANNER (PPT SLIDE 1)                           */}
      {/* ==================================================================== */}
      <section className="relative pt-12 pb-20 px-6 sm:px-12 overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sienna/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cerulean/15 dark:bg-bdazzled/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-bdazzled dark:text-cerulean shadow-sm">
                <Sparkles className="w-4 h-4 text-sienna shrink-0" />
                <span>Smarter Interconnection Studies</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan leading-[1.15]">
                  Power System Studies
                </h1>
                <p className="text-xl sm:text-2xl font-black text-sienna leading-snug">
                  Less Onerous. Less Expensive. Continuously Compliant.
                </p>
              </div>

              <p className="text-base text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium max-w-2xl">
                We deliver the full suite of power system studies from early project origination to commercial operations. Backed by 25+ years of engineering experience and delivered through <strong>ADAMM</strong>—our adaptive model management platform that accelerates utility review cycles and protects your project timeline.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#adamm"
                  className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
                >
                  <Workflow className="w-5 h-5 text-white" />
                  <span>Explore ADAMM</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsMeetingModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-bdazzled hover:bg-lightcyan/30 dark:hover:bg-bdazzled/80 text-gunmetal dark:text-lightcyan font-medium text-base px-6 py-3.5 rounded-xl border border-cerulean/30 dark:border-cerulean/20 transition-all shadow-sm cursor-pointer"
                >
                  <Video className="w-5 h-5 text-sienna dark:text-cerulean" />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>

{/* Right Column: ADAMM 3-Tier Layered Architecture Graphic */}
<div className="lg:col-span-5 relative flex justify-center">
  <div className="w-full bg-gunmetal/95 backdrop-blur-xl border border-cerulean/30 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden text-lightcyan flex flex-col justify-between">

    {/* Ambient Glows */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-sienna/15 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-cerulean/15 rounded-full blur-3xl pointer-events-none" />

    {/* Card Header Chrome */}
    <div className="flex justify-between items-center border-b border-cerulean/20 pb-3 relative z-10 mb-2">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-sienna" />
          <span className="w-2.5 h-2.5 rounded-full bg-cerulean" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
        </div>
        <span className="text-[14px] font-mono text-cerulean font-bold ml-1 tracking-wider uppercase">
          Adaptive Model Manager - ADAMM
        </span>
      </div>
      <span className="bg-sienna/20 text-sienna px-2.5 py-0.5 rounded text-[10px] font-black border border-sienna/30 uppercase tracking-wider">
        3-Tier Platform
      </span>
    </div>

    {/* Isometric Graphic Container with Layer Callout Annotations */}
    <div className="relative w-full flex items-center justify-center">
      
      {/* Centered Isometric Image */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] flex items-center justify-center">
        <Image
          src="/images/adamm-approach.png"
          alt="ADAMM Three-Tier Architecture: ADAMM Portal, Orchestrator, and ADAPTR Engineering"
          fill
          priority
          className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
        />

        {/* ─── LAYER 1 ANNOTATION (TOP): ADAMM portal ─── */}
        <div className="absolute top-[8%] -left-2 sm:-left-4 z-20 animate-fadeIn">
          <div className="flex items-center gap-2">
            <div className="bg-gunmetal/90 border border-sienna/60 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2">
              
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-sienna font-black block leading-none">
                  Top Layer
                </span>
                <span className="text-xs font-black text-white whitespace-nowrap">
                  CLIENT PORTAL
                </span>
              </div>
            </div>
            {/* Visual Leader Indicator Line */}
            <div className="hidden sm:block w-8 border-t-2 border-dashed border-sienna/60" />
          </div>
        </div>

        {/* ─── LAYER 2 ANNOTATION (MID): Orchestrator ─── */}
        <div className="absolute top-[48%] -right-2 sm:-right-4 z-20 animate-fadeIn">
          <div className="flex items-center gap-2">
            {/* Visual Leader Indicator Line */}
            <div className="hidden sm:block w-8 border-t-2 border-dashed border-cerulean/60" />
            <div className="bg-gunmetal/90 border border-cerulean/60 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2">
              
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-cerulean font-black block leading-none">
                  Mid Layer
                </span>
                <span className="text-xs font-black text-white whitespace-nowrap">
                  COORDINATOR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── LAYER 3 ANNOTATION (BOTTOM): ADAPTR Engineering ─── */}
        <div className="absolute bottom-[8%] -left-2 sm:-left-4 z-20 animate-fadeIn">
          <div className="flex items-center gap-2">
            <div className="bg-gunmetal/90 border border-bdazzled/80 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2">
              
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-cerulean/80 font-black block leading-none">
                  Bottom Layer
                </span>
                <span className="text-xs font-black text-white whitespace-nowrap">
                  TECHNICAL STUDIES
                </span>
              </div>
            </div>
            {/* Visual Leader Indicator Line */}
            <div className="hidden sm:block w-8 border-t-2 border-dashed border-bdazzled/80" />
          </div>
        </div>

      </div>
    </div>

    {/* Bottom Summary Strip */}
    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-cerulean/20 text-center relative z-10">
      <div className="p-2 bg-gunmetal/80 border border-cerulean/20 rounded-xl">
        <p className="text-[9px] font-mono font-black uppercase tracking-widest text-sienna">Lower</p>
        <p className="text-xs font-black text-white mt-0.5">COST</p>
      </div>
      <div className="p-2 bg-gunmetal/80 border border-cerulean/20 rounded-xl">
        <p className="text-[9px] font-mono font-black uppercase tracking-widest text-sienna">Higher</p>
        <p className="text-xs font-black text-white mt-0.5">THROUGHPUT</p>
      </div>
      <div className="p-2 bg-gunmetal/80 border border-cerulean/20 rounded-xl">
        <p className="text-[9px] font-mono font-black uppercase tracking-widest text-sienna">Continous</p>
        <p className="text-xs font-black text-white mt-0.5">COMPLIANCE</p>
      </div>
    </div>

  </div>
</div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: WHO WE ARE - DOMAIN COMPETENCIES (PPT SLIDE 2)            */}
      {/* ==================================================================== */}
      <section id="competencies" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-sienna" />
              <span>Who We Are & Where We Operate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
              Competencies & Asset Domains
            </h2>
            <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium">
              Our engineering team has performed complex power system studies for IPPs, utilities, and global consultants across North America, Europe, and Asia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domainCompetencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-3xl shadow-md hover:border-sienna transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-sienna/10 border border-sienna/20 flex items-center justify-center text-sienna">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-gunmetal dark:text-lightcyan">
                        {comp.title}
                      </h3>
                      <p className="text-xs text-sienna font-bold mt-0.5">
                        {comp.focus}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-cerulean/15 text-xs">
                    <span className="text-[10px] font-black uppercase tracking-wider text-cerulean block">
                      Sample Engagements
                    </span>
                    <ul className="space-y-1.5 font-semibold text-gunmetal dark:text-lightcyan/90">
                      {comp.projects.map((proj, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sienna shrink-0 mt-0.5" />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 3: THE PROPRIETARY EDGE - INTRODUCING ADAMM (PPT SLIDE 4)   */}
      {/* ==================================================================== */}
      <section id="adamm" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sienna/15 border border-sienna/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>A New Way to Manage Interconnection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
              Introducing ADAMM
            </h2>
            <p className="text-xs font-extrabold text-sienna uppercase tracking-wider">
              Adaptive Model Manager for Optimized Project Delivery
            </p>
            <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              A platform that orchestrates workflow and compliance checks while embodying decades of interconnection experience across all project stages.
            </p>
          </div>

          {/* 3 Value Pillars (Slide 4) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adammPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-4 hover:border-sienna transition-all"
              >
                <div className="space-y-3">
                  <span className="text-4xl font-black text-sienna font-mono block">
                    {pillar.number}
                  </span>
                  <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto space-y-12">


          {/* 5 Stage-Gate Interactive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stageDetails.map((stage) => (
              <div
                key={stage.id}
                onClick={() => setSelectedStageModal(stage)}
                className="bg-white dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 p-5 rounded-3xl shadow-md hover:shadow-2xl hover:border-sienna transition-all cursor-pointer group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black font-mono text-sienna bg-sienna/10 px-2 py-0.5 rounded border border-sienna/20 uppercase">
                      {stage.stageNumber}
                    </span>
                    <Eye className="w-4 h-4 text-cerulean group-hover:text-sienna transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-gunmetal dark:text-lightcyan group-hover:text-sienna transition-colors">
                      {stage.stageName}
                    </h3>
                    <p className="text-[11px] text-bdazzled dark:text-cerulean/80 line-clamp-2 font-medium mt-1">
                      {stage.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-cerulean/15 space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-wider text-sienna block">Included Studies:</span>
                    <div className="flex flex-col gap-1">
                      {stage.studiesIncluded.map((studyName, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-semibold text-gunmetal dark:text-lightcyan/90 truncate">
                          • {studyName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-cerulean/15 flex items-center justify-between text-[11px] font-bold text-sienna">
                  <span>Inspect Scope</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

          {/* Value Action Banner */}
          <div className="p-6 bg-gradient-to-r from-gunmetal via-gunmetal to-bdazzled rounded-3xl border border-cerulean/30 text-lightcyan flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white">Smarter Interconnection Starts Here</h4>
              <p className="text-xs text-cerulean/80">Faster Studies. Greater Accuracy. Complete Visibility.</p>
            </div>
            <a
              href={adammUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md shrink-0"
            >
              <span>Explore ADAMM Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
        
      </section>

      
      {/* ==================================================================== */}
      {/* SECTION 5: TECHNICAL STUDY TAXONOMY (PPT SLIDE 3 DRAWER/TOGGLE)     */}
      {/* ==================================================================== */}
      <section id="study-taxonomy" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-10">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-sienna" />
              <span>What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
              Technical Studies Catalog
            </h2>
            <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium">
              Classified by fundamental power system analysis regimes. Click any study to review analytical focus and formal deliverables.
            </p>
          </div>

          {/* Tab Filter Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 bg-gunmetal border border-cerulean/30 rounded-2xl">
              <button
                type="button"
                onClick={() => setActiveTechnicalTab('Steady-State')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTechnicalTab === 'Steady-State'
                    ? 'bg-sienna text-white shadow-md'
                    : 'text-cerulean hover:text-white'
                }`}
              >
                Steady-State Studies
              </button>
              <button
                type="button"
                onClick={() => setActiveTechnicalTab('Transient')}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTechnicalTab === 'Transient'
                    ? 'bg-sienna text-white shadow-md'
                    : 'text-cerulean hover:text-white'
                }`}
              >
                Transient & Dynamic Studies
              </button>
            </div>
          </div>

          {/* Active Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredStudies.map((study) => {
              const Icon = study.icon;
              return (
                <div
                  key={study.id}
                  onClick={() => setSelectedCapabilityModal(study)}
                  className="bg-white dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-3xl shadow-md hover:shadow-2xl hover:border-sienna transition-all cursor-pointer group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="p-3 rounded-2xl bg-sienna/10 border border-sienna/20 text-sienna group-hover:bg-sienna group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="p-1.5 rounded-full bg-lightcyan/50 dark:bg-gunmetal/80 text-cerulean group-hover:text-sienna">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-gunmetal dark:text-lightcyan group-hover:text-sienna transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs font-bold text-sienna uppercase tracking-wider">
                      {study.subtitle}
                    </p>
                    <p className="text-xs text-bdazzled dark:text-cerulean/90 line-clamp-3 font-medium">
                      {study.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-cerulean/15 flex items-center justify-between text-xs font-bold text-sienna">
                    <span>Inspect Methodology</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 6: IN-HOUSE LAB SETUP & SIMULATION COMPETENCIES             */}
      {/* ==================================================================== */}
      <section id="lab" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <Server className="w-3.5 h-3.5 text-sienna" />
              <span>In-House Testing Facility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
              ADAPTR's Hardware-in-the-Loop (HIL) Lab
            </h2>
            <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Our 25+ years of modeling experience is validated by an in-house real-time laboratory for hardware-in-the-loop and controller prototyping.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-10 rounded-3xl shadow-xl">

            {/* Left: Lab Hardware */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-sienna block">
                LAB HARDWARE & REAL-TIME SIMULATORS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {labEquipment.map((eq, idx) => (
                  <div key={idx} className="p-3 bg-lightcyan/30 dark:bg-gunmetal/60 rounded-xl border border-cerulean/20 space-y-0.5">
                    <p className="text-xs font-extrabold text-gunmetal dark:text-lightcyan">{eq.name}</p>
                    <p className="text-[10px] text-bdazzled dark:text-cerulean/80 font-medium">{eq.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Real-World Testing & Benchmarking */}
            <div className="lg:col-span-6 space-y-4 border-t lg:border-t-0 lg:border-l border-cerulean/20 dark:border-bdazzled/30 pt-6 lg:pt-0 lg:pl-8">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-cerulean block">
                VALIDATION METHODOLOGY & STANDARDS:
              </span>
              <p className="text-xs text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
                We bridge the simulation gap by bench-testing controllers against high-fidelity real-time simulators prior to site commissioning:
              </p>
              <div className="space-y-2 text-xs font-semibold text-gunmetal dark:text-lightcyan">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0" />
                  <span>PSS®E and PSCAD™ 5% tolerance cross-validation benchmarks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0" />
                  <span>Rapid Control Prototyping (RCP) for complex hybrid microgrids</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0" />
                  <span>Factory Acceptance Test (FAT) telemetry benchmark comparisons</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sienna shrink-0" />
                  <span>Active & reactive power control under weak-grid SCR conditions</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 7: TRUSTED EXPERIENCE & GLOBAL TRACK RECORD                 */}
      {/* ==================================================================== */}
      <section id="experience" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-sienna" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
              Trusted Experience Across Global Grids
            </h2>
            <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Our competencies are trusted by IPPs, Utilities, First Nations, Industrial Consumers, OEMs, and the Canadian Federal Government.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experienceProjects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-5 rounded-2xl space-y-1.5 shadow-sm hover:border-sienna/40 transition-all"
              >
                <span className="bg-sienna/10 text-sienna text-[9px] font-extrabold px-2 py-0.5 rounded border border-sienna/20 uppercase inline-block">
                  {proj.type}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-gunmetal dark:text-lightcyan leading-snug">
                  {proj.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 8: CALL TO ACTION (CTA)                                      */}
      {/* ==================================================================== */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gunmetal to-bdazzled dark:from-gunmetal/90 dark:to-bdazzled/40 text-lightcyan rounded-3xl p-8 sm:p-12 border border-cerulean/30 shadow-2xl text-center space-y-8 relative overflow-hidden">

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to Derisk Your Interconnection?
            </h2>
            <p className="text-base text-cerulean/90 font-medium leading-relaxed">
              Streamline your power system studies, catch compliance issues early, and manage model lifecycle seamlessly with ADAPTR & ADAMM.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <a
              href={adammUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
            >
              <Laptop className="w-5 h-5 text-white" />
              <span>Launch ADAMM Portal</span>
              <ExternalLink className="w-4 h-4 text-white/80" />
            </a>
            <button
              type="button"
              onClick={() => setIsMeetingModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-3.5 rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              <Video className="w-5 h-5" />
              <span>Schedule Study Consultation</span>
            </button>
          </div>

        </div>
      </section>

      {/* ─── MODALS ─────────────────────────────────────────────────────── */}
      <ScheduleMeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
      />

      <CapabilityDetailModal
        study={selectedCapabilityModal}
        onClose={() => setSelectedCapabilityModal(null)}
        onOpenConsultation={() => setIsMeetingModalOpen(true)}
      />

      <StageDetailModal
        stage={selectedStageModal}
        onClose={() => setSelectedStageModal(null)}
      />

    </div>
  );
}