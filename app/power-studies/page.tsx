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
  Building2
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
  study: StudyType | null;
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
                TECHNICAL CAPABILITY DEEP DIVE
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

// ─── DATA STRUCTURES ────────────────────────────────────────────────────────
const adammUrl = "https://adamm.adaptrenergy.com";

interface StudyType {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  deliverables: string;
}

const studyTypes: StudyType[] = [
  {
    id: 'interconnection',
    icon: Activity,
    title: 'Interconnection & System Impact Studies (SIS)',
    subtitle: 'Ensuring Full Grid Code Compliance',
    description:
      'Advanced power system modeling for both distribution and transmission connected projects, evaluating impact on feeder thermal limits, voltage profiles, and utility protection schemes.',
    highlights: [
      'Hosting capacity determination for distribution LDCs',
      'System Impact Studies (SIS) for transmission & LDC interconnection',
      'Evaluation of grid-forming vs. grid-following IBR inverter behavior',
      'Contingency analysis & N-1 reliability evaluations'
    ],
    deliverables: 'Comprehensive SIS Report, Utility-ready Interconnection Briefs, Feeder Load Flow Models'
  },
  {
    id: 'emt',
    icon: Cpu,
    title: 'Electromagnetic Transient (EMT) Simulations',
    subtitle: 'Deep Dynamic Analysis for Inverter-Based Resources',
    description:
      'High-fidelity time-domain EMT simulations (PSCAD / Matlab) to model fast transient phenomena, weak-grid decoupling, sub-synchronous control interactions (SSCI), and fault ride-through performance.',
    highlights: [
      'Weak-grid dynamic stability & SCR (Short Circuit Ratio) analysis',
      'Validation of high-penetration solar, wind & battery inverter controls',
      'Transient overvoltage (TOV) & switching surge assessment',
      'Fault Ride-Through (FRT) & dynamic reactive power support validation'
    ],
    deliverables: 'PSCAD/Matlab EMT Simulation Models, Dynamic Compliance Reports, Controller Parameter Tuning Specs'
  },
  {
    id: 'power-quality',
    icon: Sliders,
    title: 'Harmonics, Power Quality & Flicker Analysis',
    subtitle: 'Mitigating Grid Transients & Distortions',
    description:
      'Rigorous power quality assessments ensuring DERs and heavy industrial loads comply with IEEE 519, IEC 61000, and regional LDC Distribution System Codes.',
    highlights: [
      'Total Harmonic Distortion (THD) and individual harmonic spectrum limits',
      'Voltage flicker severity (Pst / Plt) evaluation for pulsed industrial loads',
      'Filter design & dynamic reactive power compensation sizing',
      'Phase unbalance & voltage sag mitigation strategies'
    ],
    deliverables: 'Harmonic Compliance Telemetry, Active/Passive Filter Design Specs, Mitigation Strategy Brief'
  },
  {
    id: 'protection',
    icon: ShieldCheck,
    title: 'Protection Coordination & Short Circuit Studies',
    subtitle: 'Safeguarding Equipment & Personnel',
    description:
      'Detailed short circuit calculations and relay protection coordination studies designed to maintain fault selectivity, speed, and safety across complex hybrid DER microgrids.',
    highlights: [
      'Fault current contribution calculations for inverter-limited generation',
      'Relay coordination curves (TCC) & breaker interruption capacity validation',
      'Anti-islanding & loss-of-mains (LOM) protection philosophy',
      'Arc flash boundary calculations and safety documentation'
    ],
    deliverables: 'Relay Setting Files, Time-Current Characteristic (TCC) Curves, Protection Philosophy Documentation'
  },
  {
    id: 'hybrid-simulation',
    icon: Layers,
    title: 'EnVision Hybrid System Optimization',
    subtitle: 'Derisking Hybrid Renewable Designs Early',
    description:
      'Leveraging ADAPTR’s proprietary EnVision project simulator to merge economic analysis with power flow simulation, enabling developers to size BESS, Solar, Hydro, and Wind assets with complete confidence.',
    highlights: [
      'BESS micro-cycling & operational lifetime impact analysis',
      'Optimization of multi-asset dispatch logic (Hydro + Solar + Wind + BESS)',
      'Substation capacity maximization & curtailment minimization',
      'Generation profile replication with <2% uncertainty'
    ],
    deliverables: 'Optimized Asset Sizing Matrix, Financial-Technical Dispatch Model, BESS Degradation Forecasts'
  },
  {
    id: 'model-validation',
    icon: BarChart3,
    title: 'Dynamic Model Validation & Measurement Campaigns',
    subtitle: 'Operational Field Verification',
    description:
      'Field measurement campaigns and Hardware-in-the-Loop (HIL) testing to validate dynamic models against actual operating data, bridging the gap between simulation and real-world asset operation.',
    highlights: [
      '1st dynamic model validation for a remote microgrid in Canada',
      'Rapid Control Prototyping (RCP) & Hardware-in-the-Loop (HIL) testing',
      'Measurement campaigns during live site commissioning',
      'OEM grid code compliance obligation reviews'
    ],
    deliverables: 'Validated PSS/E & PSCAD Model Benchmarks, Field Measurement Comparison Reports'
  }
];

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Evolving Interconnection Requirements',
    subtitle: 'Tightening Grid Codes & Mandatory Validation',
    description:
      'Utilities (e.g., NSPI, NERC) are shifting towards strict model benchmarking between PSS®E and PSCAD™ models within a 5% tolerance band, alongside mandatory field-test commissioning validation.',
  },
  {
    icon: Layers,
    title: 'Incomplete OEM Models',
    subtitle: 'Model Version Drift & Control Discrepancies',
    description:
      'Incomplete technical information and unvalidated OEM models cause critical delays during System Impact Studies (SIS), leading to design drift between early bidding and final engineering.',
  },
  {
    icon: RefreshCw,
    title: 'Piecemeal Studies & Data Loss',
    subtitle: 'Fragmented Hand-Offs Across Lifecycles',
    description:
      'Traditional modeling relies on discrete, one-off studies. Handing off models between feasibility, bidding, engineering, construction, and operations causes data loss and fragmented coordination.',
  },
  {
    icon: ShieldAlert,
    title: 'Cost of Reactive Compliance',
    subtitle: 'Late Discoveries & Sub-optimal Bids',
    description:
      'Discovering dynamic stability, harmonic distortion, or weak-grid issues late in engineering forces reactive compliance—resulting in costly STATCOM additions, BESS retrofits, or power curtailment.',
  },
];

interface StageDetail {
  id: string;
  stageNumber: string;
  stageName: string;
  phaseLabel: string;
  summary: string;
  scopeTasks: string[];
  requiredDocs: string[];
  deliverables: { name: string; type: string; date?: string }[];
  statusLabel: string;
}

const adammPillars = [
  {
    number: '01',
    title: 'Decrease Early Development Expenses',
    description:
      'Catch grid code non-compliance early during feasibility to avoid expensive redesigns and unbudgeted equipment additions during late-stage EPC.',
  },
  {
    number: '02',
    title: 'Increase Project Throughput',
    description:
      'Centralized orchestration between OEMs, Developers, Utilities, and Consultants reduces RFI loop delays and cuts study completion time dramatically.',
  },
  {
    number: '03',
    title: 'Ensure Lifetime Continuous Compliance',
    description:
      'Maintain an active, version-controlled digital twin from Stage 1 Feasibility through Stage 5 Operations, ensuring seamless model updates when grid codes evolve.',
  },
];

const stageDetails: StageDetail[] = [
  {
    id: 'stage-1',
    stageNumber: 'STAGE 1',
    stageName: 'Feasibility',
    phaseLabel: 'Stage 1 • Early Screening & Hosting Capacity',
    summary:
      'Formulating the initial grid model, assessing baseline grid codes, and determining substation hosting capacity to derisk early project origination.',
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
      'Reviewing OEM turbine/inverter models, formulating basic plant design, and assembling utility-ready System Impact Assessment (SIA) packages.',
    scopeTasks: [
      'OEM Model Reviews',
      'Basic Design Formulation',
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
      'Validating design updates against utility RFI comments, updating PSS®E & PSCAD™ models, and securing formal CIA/SIA utility approvals.',
    scopeTasks: [
      'Compliance Validation of Design Updates',
      'Model Updates with Approved Changes',
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

const comparisonTable = [
  {
    criterion: 'Coordination',
    traditional: 'Onerous & fragmented across email / disconnected silos',
    adamm: 'Centralized & automated workflow orchestration',
  },
  {
    criterion: 'Model Accuracy',
    traditional: 'Version drift between PSS®E & PSCAD™ models',
    adamm: 'Continuous validation for high-fidelity accuracy',
  },
  {
    criterion: 'Compliance',
    traditional: 'Verified only when requested by utility (reactive)',
    adamm: 'Continuous verification aligned with latest grid code needs',
  },
  {
    criterion: 'Information Sources',
    traditional: 'Dispersed across OEM, consultant, and utility inboxes',
    adamm: 'Centralized and fully traceable single source of truth',
  },
  {
    criterion: 'Time to Completion',
    traditional: 'Prolonged due to multi-party RFI loops & rework',
    adamm: 'Shortened via streamlined interface & template workflows',
  },
  {
    criterion: 'Lifecycle Interest',
    traditional: 'Discrete, one-off transactional studies',
    adamm: 'Project lifetime success & continuous partnership',
  },
];

const labEquipment = [
  { name: 'Opal-RT (RTS)', detail: 'Real-time digital simulator for HIL testing' },
  { name: 'Speedgoat (RTS)', detail: 'Rapid control prototyping for dynamic inverter controls' },
  { name: 'Imperix Modules', detail: 'Rapid prototyping power hardware' },
  { name: 'SEL RTAC & SEL Axion', detail: 'Utility-grade protection & automation controllers' },
  { name: 'AC/DC Programmable Loads', detail: 'Real-world load and impedance profiling' },
  { name: 'Precision Variac & DC Power Supply', detail: 'Voltage sag, swell, and weak-grid emulation' },
];

const studyScopeGrid = [
  'Micro-Grid Control Philosophy',
  'System Impact Study (SIS)',
  'Dynamic Stability & EMT Study',
  'Load Flow & Feeder Analysis',
  'PQ, TOV & Short Circuit Studies',
  'Hosting Capacity Determination',
  'Protection Philosophy',
  'BESS RFP Requirements & Specs',
  'Commissioning Protocols & Validation'
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
  { title: 'Vetting Grid Forming Functionality for Wind Farm', type: 'Alberta Weak-Grid Compliance' },
];

export default function PowerSystemStudiesPage() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [selectedCapabilityModal, setSelectedCapabilityModal] = useState<StudyType | null>(null);
  const [selectedStageModal, setSelectedStageModal] = useState<StageDetail | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gunmetal text-gunmetal dark:text-lightcyan transition-colors duration-300">

      {/* ==================================================================== */}
      {/* SECTION 1: PRESENTATION HERO DECK HEADER                             */}
      {/* ==================================================================== */}
      <section className="relative pt-10 pb-16 px-6 sm:px-12 overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-sienna/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cerulean/15 dark:bg-bdazzled/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          <div className="flex flex-wrap justify-between items-center gap-4 bg-gunmetal/90 border border-cerulean/30 px-5 py-3 rounded-2xl text-lightcyan">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sienna animate-ping" />
              <span className="text-xs font-black uppercase tracking-wider text-sienna">
                Client Interactive Deck Mode
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold">
              <a href="#study-types" className="hover:text-sienna transition-colors">1. Capabilities</a>
              <span>•</span>
              <a href="#pain-points" className="hover:text-sienna transition-colors">2. Pain Points</a>
              <span>•</span>
              <a href="#adamm" className="hover:text-sienna transition-colors">3. ADAMM Platform</a>
              <span>•</span>
              <a href="#stage-gated-scope" className="hover:text-sienna transition-colors">4. Stage Gates</a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Column: Deck Pitch */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-bdazzled dark:text-cerulean shadow-sm">
                <Sparkles className="w-4 h-4 text-sienna shrink-0" />
                <span>Power System Engineering & ADAMM Platform</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gunmetal dark:text-lightcyan leading-tight">
                  Power System Studies
                </h1>
                <p className="text-xl sm:text-2xl font-extrabold text-sienna leading-snug">
                  For Renewables, Storage & Hybrid Renewables.
                </p>
              </div>

              <p className="text-base text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium max-w-2xl">
                Combining 25+ years of power systems engineering and an in-house Hardware-in-the-Loop (HIL) laboratory with <strong>ADAMM</strong>—our platform that orchestrates modeling workflows, eliminates version drift, and guarantees continuous connection compliance across all project stages.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={adammUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-base px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer"
                >
                  <Laptop className="w-5 h-5 text-white" />
                  <span>Launch ADAMM App</span>
                  <ExternalLink className="w-4 h-4 text-white/80" />
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

            {/* Right Column: Key Metrics Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full bg-gunmetal p-6 rounded-3xl border border-cerulean/30 shadow-2xl text-lightcyan space-y-4">
                <div className="flex justify-between items-center border-b border-cerulean/20 pb-3">
                  <span className="text-[10px] font-mono text-sienna font-black uppercase tracking-widest">
                    ADAPTR DECK OVERVIEW
                  </span>
                  <span className="bg-sienna/20 text-sienna px-2.5 py-0.5 rounded text-[10px] font-bold border border-sienna/30">
                    Live Demo Ready
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-gunmetal/80 border border-cerulean/20 rounded-2xl">
                    <p className="text-2xl font-black text-white">1 GW+</p>
                    <p className="text-[10px] text-cerulean/80 font-bold uppercase">Renewables Studied</p>
                  </div>
                  <div className="p-3 bg-gunmetal/80 border border-cerulean/20 rounded-2xl">
                    <p className="text-2xl font-black text-white">&lt;5%</p>
                    <p className="text-[10px] text-cerulean/80 font-bold uppercase">Model Tolerance</p>
                  </div>
                  <div className="p-3 bg-gunmetal/80 border border-cerulean/20 rounded-2xl">
                    <p className="text-2xl font-black text-white">5 Stages</p>
                    <p className="text-[10px] text-cerulean/80 font-bold uppercase">Continuous Gate</p>
                  </div>
                  <div className="p-3 bg-gunmetal/80 border border-cerulean/20 rounded-2xl">
                    <p className="text-2xl font-black text-white">25+ Yrs</p>
                    <p className="text-[10px] text-cerulean/80 font-bold uppercase">Engineering Exp</p>
                  </div>
                </div>

                <div className="p-3 bg-sienna/10 rounded-xl border border-sienna/20 text-center">
                  <p className="text-xs text-lightcyan font-semibold">
                    Click any capability or stage-gate below to open deep-dive client presentation cards.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 2: INTERACTIVE CAPABILITIES SLIDE (CLEAN SLIDE TILES)        */}
      {/* ==================================================================== */}
      <section id="study-types" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lightcyan/30 dark:bg-bdazzled/40 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-sienna" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
              Power System Study Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium">
              Click any study domain below to inspect analytical focus areas and formal deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyTypes.map((study) => {
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
                    <p className="text-xs font-bold text-cerulean uppercase tracking-wider">
                      {study.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-cerulean/15 flex items-center justify-between text-xs font-bold text-sienna">
                    <span>Click to Inspect Scope</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 3: IPP PAIN POINTS & UTILITY POLICY SPOTLIGHT                */}
      {/* ==================================================================== */}
      <section id="pain-points" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sienna/10 border border-sienna/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Interconnection Realities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
              Observations on Coordination & Compliance
            </h2>
            <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Evolving utility requirements and incomplete technical information lead to severe coordination bottlenecks between OEMs, Developers, Utilities, and Consultants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-8 rounded-3xl space-y-3 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sienna/10 border border-sienna/20 flex items-center justify-center text-sienna shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-gunmetal dark:text-lightcyan">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-extrabold text-sienna uppercase tracking-wider">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-bdazzled dark:text-cerulean/90 leading-relaxed font-medium pt-1">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Real-World Utility Policy Spotlight */}
          <div className="bg-gradient-to-br from-gunmetal via-gunmetal to-bdazzled text-lightcyan border border-cerulean/30 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-cerulean/20 pb-4">
              <div>
                <span className="text-[10px] font-bold text-sienna uppercase tracking-widest block">
                  UTILITY POLICY SPOTLIGHT
                </span>
                <h3 className="text-xl font-bold text-white">
                  Tighter Interconnection Requirements
                </h3>
              </div>
              <span className="bg-cerulean/20 text-cerulean border border-cerulean/30 px-3 py-1 rounded-lg text-xs font-bold shrink-0">
                NSPI / NERC Benchmarking Standards
              </span>
            </div>

            <p className="text-xs sm:text-sm text-cerulean/90 leading-relaxed font-medium">
              Utilities like Nova Scotia Power Inc. (NSPI) now perform stringent model quality testing. The PSS®E model must be an accurate representation of plant response and <strong>benchmarked against the validated PSCAD™ model within a 5% tolerance band</strong> for 3-phase faults across 0%, 10%, 50%, and 80% residual voltage levels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 text-xs font-medium">
              <div className="bg-gunmetal/80 p-4 rounded-xl border border-cerulean/20 space-y-1">
                <span className="text-sienna font-bold block">4.0 Model Quality Testing</span>
                <p className="text-cerulean/80 text-[11px]">All PSS®E and PSCAD™ deficiencies must be remedied before study commencement.</p>
              </div>
              <div className="bg-gunmetal/80 p-4 rounded-xl border border-cerulean/20 space-y-1">
                <span className="text-sienna font-bold block">5.0 Field Commissioning</span>
                <p className="text-cerulean/80 text-[11px]">Model results are benchmarked against Factory Acceptance Test (FAT) & field test data.</p>
              </div>
              <div className="bg-gunmetal/80 p-4 rounded-xl border border-cerulean/20 space-y-1">
                <span className="text-sienna font-bold block">6.0 Lifetime Revisions</span>
                <p className="text-cerulean/80 text-[11px]">Facility modifications or utility software updates require updated model submittals.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 4: THE ADAMM SOLUTION & COMPARISON MATRIX                    */}
      {/* ==================================================================== */}
      <section id="adamm" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 bg-lightcyan/10 dark:bg-gunmetal/50">
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

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adammPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-4"
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

          {/* Comparison Table */}
          <div className="space-y-6 pt-2">
            <div className="text-center space-y-1">
              <h3 className="text-xl font-extrabold text-gunmetal dark:text-lightcyan">
                The ADAMM Approach Summary
              </h3>
              <p className="text-xs text-bdazzled dark:text-cerulean/80 font-medium">
                Comparing current traditional modeling against ADAMM continuous orchestration.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-cerulean/20 dark:border-bdazzled/40 shadow-lg">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-gunmetal text-white border-b border-cerulean/30">
                    <th className="p-3.5 font-black uppercase text-[10px] tracking-wider">Criteria</th>
                    <th className="p-3.5 font-black uppercase text-[10px] tracking-wider text-cerulean/80">Current Approach</th>
                    <th className="p-3.5 font-black uppercase text-[10px] tracking-wider text-sienna">ADAMM Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cerulean/15 dark:divide-bdazzled/30 font-medium">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white/60 dark:bg-gunmetal/60' : 'bg-lightcyan/30 dark:bg-gunmetal/30'}>
                      <td className="p-3.5 font-bold text-gunmetal dark:text-lightcyan">{row.criterion}</td>
                      <td className="p-3.5 text-bdazzled dark:text-cerulean/80">{row.traditional}</td>
                      <td className="p-3.5 font-bold text-sienna dark:text-sienna">{row.adamm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION 5: INTERACTIVE STAGE-GATED PIPELINE (SLIDES 12-14 MODALS)     */}
      {/* ==================================================================== */}
      <section id="stage-gated-scope" className="py-20 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sienna/10 border border-sienna/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-sienna uppercase tracking-wider">
              <Layers3 className="w-3.5 h-3.5" />
              <span>Project Delivery Scope</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
              Stage-Gated Scope of Works Offered by ADAPTR
            </h2>
            <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
              Click any stage gate below to open the interactive scope inspector detailing tasks, required documentation, and formal deliverables.
            </p>
          </div>

          {/* Interactive Stage-Gated Pipeline Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stageDetails.map((stage) => (
              <div
                key={stage.id}
                onClick={() => setSelectedStageModal(stage)}
                className="bg-white dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 p-5 rounded-3xl shadow-md hover:shadow-2xl hover:border-sienna transition-all cursor-pointer group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black font-mono text-sienna bg-sienna/10 px-2 py-0.5 rounded border border-sienna/20 uppercase">
                      {stage.stageNumber}
                    </span>
                    <Eye className="w-4 h-4 text-cerulean group-hover:text-sienna transition-colors" />
                  </div>
                  <h3 className="text-base font-extrabold text-gunmetal dark:text-lightcyan group-hover:text-sienna transition-colors">
                    {stage.stageName}
                  </h3>
                  <p className="text-[11px] text-bdazzled dark:text-cerulean/80 line-clamp-2 font-medium">
                    {stage.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-cerulean/15 flex items-center justify-between text-[11px] font-bold text-sienna">
                  <span>Inspect Scope</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Stage Flow Indicator Banner */}
          <div className="p-4 bg-gunmetal rounded-2xl border border-cerulean/30 text-center text-xs text-lightcyan flex flex-wrap justify-between items-center gap-3">
            <div className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-4 h-4 text-sienna shrink-0" />
              <span>Continuous Model Twin across all 5 project stages eliminates data loss during hand-offs.</span>
            </div>
            <a
              href={adammUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sienna font-bold hover:underline"
            >
              <span>Explore ADAMM Digital Twin</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
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
              Our 25+ years of modeling and simulation experience is backed by an in-house laboratory for real-time power system testing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/80 dark:bg-gunmetal/80 border border-cerulean/20 dark:border-bdazzled/40 p-6 sm:p-10 rounded-3xl shadow-xl">

            {/* Left: Lab Hardware */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-sienna block">
                LAB SETUP & SIMULATORS:
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

            {/* Right: Full Study Scope Coverage */}
            <div className="lg:col-span-6 space-y-3 border-t lg:border-t-0 lg:border-l border-cerulean/20 dark:border-bdazzled/30 pt-6 lg:pt-0 lg:pl-8">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-cerulean block">
                FULL STUDY COMPETENCIES:
              </span>
              <p className="text-xs text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed">
                Comprehensive study reports accepted by utilities and system operators:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {studyScopeGrid.map((studyName, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-gunmetal dark:text-lightcyan">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sienna shrink-0" />
                    <span>{studyName}</span>
                  </div>
                ))}
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