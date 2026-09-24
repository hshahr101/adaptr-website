'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Zap, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  RotateCcw,
  Sliders,
  Cpu,
  ArrowRight,
  X,
  Gauge,
  Loader2
} from 'lucide-react';

// Discrete Feeder Voltage Levels
const VOLTAGE_STEPS = [4.16, 12.47, 27.6, 34.5, 44.0];

interface OscilloscopeProps {
  title: string;
  badge: string;
  voltDev: number;
  flickerPst: number;
  thdVal: number;
  phaseUnbal: number;
  pulseMW: number;
  availableLoadMVA: number;
  isClean: boolean;
}

// Real-Time HTML5 Canvas Oscilloscope Component (DPI Auto-Scaled)
function OscilloscopeCard({
  title,
  badge,
  voltDev,
  flickerPst,
  thdVal,
  phaseUnbal,
  pulseMW,
  availableLoadMVA,
  isClean,
}: OscilloscopeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let phase = 0;

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const width = rect.width;
      const height = rect.height;
      const centerY = height / 2;
      const centerX = width / 2;

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Background Grid Lines
      ctx.strokeStyle = '#3D5A8022';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const colors = ['#EE6C4D', '#98C1D9', '#3D5A80'];
      const baseAmp = 18;

      const FLICKER_THRESHOLD = 0.45;
      const isFlickerActive = !isClean && flickerPst > FLICKER_THRESHOLD;
      const pulseFrequency = isFlickerActive ? 0.25 + (flickerPst - FLICKER_THRESHOLD) * 1.4 : 0;
      const pulseCycle = pulseFrequency > 0 ? (phase * pulseFrequency) % 1.0 : 0;
      const isPulseBurstActive = isFlickerActive && pulseCycle < 0.22;
      const pulseTimeProgress = isPulseBurstActive ? Math.sin((pulseCycle / 0.22) * Math.PI) : 0;

      const excessPulseLoad = Math.max(0, pulseMW - (availableLoadMVA || 4.5));
      const burstAmplitudeBoost = !isClean && excessPulseLoad > 0 ? excessPulseLoad * 5.5 : 0;
      const spatialSigma = width * 0.16;

      colors.forEach((color, idx) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        const phaseOffset = (idx * 2 * Math.PI) / 3;

        let phaseAmp = baseAmp;
        if (!isClean && phaseUnbal > 0) {
          if (idx === 0) phaseAmp += Math.min(phaseUnbal * 1.5, 10);
          else if (idx === 1) phaseAmp -= Math.min(phaseUnbal * 1.0, 6);
          else if (idx === 2) phaseAmp -= Math.min(phaseUnbal * 0.6, 4);
          phaseAmp = Math.max(6, phaseAmp);
        }

        for (let x = 0; x < width; x++) {
          const t = (x / width) * 9 * Math.PI + phase + phaseOffset;
          const distFromCenter = x - centerX;
          const spatialEnvelope = Math.exp(-0.5 * Math.pow(distFromCenter / spatialSigma, 2));
          const totalCenterBoost = spatialEnvelope * pulseTimeProgress * burstAmplitudeBoost;
          const dynamicAmp = phaseAmp + totalCenterBoost;

          let y = centerY + Math.sin(t) * dynamicAmp;

          if (!isClean && thdVal > 0) {
            const thdDistortion =
              Math.sin(t * 5) * (thdVal * 0.3) +
              Math.sin(t * 7) * (thdVal * 0.18) +
              (Math.random() - 0.5) * (thdVal * 0.12);
            y += thdDistortion;
          }

          y = Math.max(5, Math.min(height - 5, y));

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      ctx.restore();
      phase += 0.05;
      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [voltDev, flickerPst, thdVal, phaseUnbal, pulseMW, availableLoadMVA, isClean]);

  return (
    <div className="flex-1 bg-white/80 dark:bg-gunmetal/90 border border-cerulean/20 dark:border-bdazzled/40 rounded-2xl p-4 shadow-sm transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Activity className={`w-4 h-4 ${isClean ? 'text-bdazzled dark:text-cerulean' : 'text-sienna'}`} />
          <span className="text-xs font-bold text-gunmetal dark:text-lightcyan uppercase tracking-wider">
            {title}
          </span>
        </div>
        <span
          className={`text-[10px] font-sans font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
            isClean
              ? 'bg-cerulean/20 text-bdazzled dark:text-cerulean border border-cerulean/40'
              : 'bg-sienna/15 text-sienna border border-sienna/30'
          }`}
        >
          {badge}
        </span>
      </div>
      <canvas
        ref={canvasRef}
        className="w-full h-[110px] block rounded-lg bg-lightcyan/20 dark:bg-gunmetal border border-cerulean/10 dark:border-bdazzled/30"
      />
    </div>
  );
}

interface RequestConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  pulseCapacity: number;
  ibrCapacity: number;
  unbalancedCapacity: number;
  availableFeederMVA: number;
  feederVoltagekV: number;
}

// Configuration Request Modal Component with Real HTTP POST Email Dispatch
function RequestConfigModal({ 
  isOpen, 
  onClose, 
  pulseCapacity,
  ibrCapacity,
  unbalancedCapacity,
  availableFeederMVA,
  feederVoltagekV 
}: RequestConfigModalProps) {
  const [userName, setUserName] = useState('');
  const [utilityZone, setUtilityZone] = useState(`Ontario Feeder — ${feederVoltagekV.toFixed(2)} kV Class`);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setUtilityZone(`Ontario Feeder — ${feederVoltagekV.toFixed(2)} kV Class`);
  }, [feederVoltagekV]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !userName || !utilityZone) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName,
          utilityZone,
          email,
          pulseCapacity,
          ibrCapacity,
          unbalancedCapacity,
          availableFeederMVA,
          feederVoltagekV,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 3000);
      } else {
        setErrorMessage('Failed to send request. Please try again or email engagements@adaptrenergy.com directly.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 w-screen h-screen bg-gunmetal/80 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gunmetal border border-cerulean/30 w-full max-w-lg rounded-2xl p-6 sm:p-7 shadow-2xl text-lightcyan relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base sm:text-lg font-extrabold tracking-wider text-white uppercase flex items-center gap-2">
            <Gauge className="w-5 h-5 text-sienna" />
            Interconnection Assessment
          </h2>
          <button 
            onClick={onClose}
            className="text-cerulean/70 hover:text-white p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-cerulean/80 leading-relaxed mb-4">
          Please enter your information below to receive the simulation report and free technical consultation timeslot to discuss Grid Adaptr™ PCS configuration to meet grid code compliance for your project.
        </p>

        {/* Selected Simulation Parameters Card */}
        <div className="bg-gunmetal/90 border border-cerulean/25 rounded-xl p-4 mb-5 space-y-3 shadow-inner">
          <div className="flex justify-between items-center border-b border-cerulean/15 pb-2">
            <span className="text-[10px] font-extrabold text-sienna uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" />
              Selected Simulation Parameters
            </span>
            <span className="text-[10px] font-bold text-cerulean bg-cerulean/10 px-2 py-0.5 rounded border border-cerulean/20">
              Live Capture
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-cerulean/10 p-2 rounded-lg border border-cerulean/15">
              <span className="text-cerulean/70 text-[10px] block font-medium">Industrial Pulse Load:</span>
              <span className="font-extrabold text-sienna">{pulseCapacity.toFixed(1)} MW</span>
            </div>
            <div className="bg-cerulean/10 p-2 rounded-lg border border-cerulean/15">
              <span className="text-cerulean/70 text-[10px] block font-medium">IBR Renewables:</span>
              <span className="font-extrabold text-sienna">{ibrCapacity.toFixed(1)} MW</span>
            </div>
            <div className="bg-cerulean/10 p-2 rounded-lg border border-cerulean/15">
              <span className="text-cerulean/70 text-[10px] block font-medium">Unbalanced Load:</span>
              <span className="font-extrabold text-sienna">{unbalancedCapacity.toFixed(1)} MW</span>
            </div>
            <div className="bg-cerulean/10 p-2 rounded-lg border border-cerulean/15">
              <span className="text-cerulean/70 text-[10px] block font-medium">Substation Capacity:</span>
              <span className="font-extrabold text-lightcyan">{availableFeederMVA.toFixed(1)} MVA</span>
            </div>
          </div>

          <div className="bg-sienna/10 p-2 rounded-lg border border-sienna/20 flex justify-between items-center text-xs">
            <span className="text-cerulean/80 text-[10px] font-semibold">Feeder Line Voltage:</span>
            <span className="font-extrabold text-sienna">{feederVoltagekV.toFixed(2)} kV Class</span>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center text-cerulean font-bold text-sm space-y-2">
            <CheckCircle2 className="w-10 h-10 text-sienna mx-auto animate-bounce" />
            <p className="text-white text-base font-extrabold">✓ Report Request Submitted!</p>
            <p className="text-xs text-cerulean/80 font-normal leading-relaxed">
              Your simulation parameters and request details have been dispatched to <span className="text-sienna font-bold">engagements@adaptrenergy.com</span>. An engineer will follow up with your detailed report shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {errorMessage && (
              <p className="text-xs font-semibold text-red-400 bg-red-900/30 p-2.5 rounded-lg border border-red-500/30">
                {errorMessage}
              </p>
            )}

            {/* User Name (Mandatory) */}
            <div>
              <label className="block text-[10px] font-extrabold text-cerulean uppercase tracking-wider mb-1.5">
                Your Name *
              </label>
              <input 
                type="text"
                required
                placeholder="e.g., Jane Snow"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-cerulean/20 bg-gunmetal/90 text-white text-xs focus:outline-none focus:border-cerulean"
              />
            </div>

            {/* Target Utility Zone / Location (Mandatory) */}
            <div>
              <label className="block text-[10px] font-extrabold text-cerulean uppercase tracking-wider mb-1.5">
                PROJECT LOCATION *
              </label>
              <input 
                type="text"
                required
                placeholder="e.g., Ontario Feeder / Toronto Area"
                value={utilityZone}
                onChange={(e) => setUtilityZone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-cerulean/20 bg-gunmetal/90 text-cerulean font-semibold text-xs focus:outline-none focus:border-cerulean"
              />
            </div>

            {/* Email Address (Mandatory) */}
            <div>
              <label className="block text-[10px] font-extrabold text-cerulean uppercase tracking-wider mb-1.5">
                WORK EMAIL ADDRESS *
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
              disabled={isSubmitting}
              className="w-full mt-2 py-3 rounded-xl bg-sienna hover:bg-sienna/90 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Request...</span>
                </>
              ) : (
                <>
                  <span>Request Report</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>
        )}
      </div>
    </div>
  );
}

export default function GridSimulator() {
  // Asset & Feeder Controls
  const [pulseCapacity, setPulseCapacity] = useState<number>(3.0);
  const [ibrCapacity, setIbrCapacity] = useState<number>(2.5);
  const [unbalancedCapacity, setUnbalancedCapacity] = useState<number>(1.5);
  const [availableFeederMVA, setAvailableFeederMVA] = useState<number>(4.5);
  const [feederVoltagekV, setFeederVoltagekV] = useState<number>(27.6);
  const [gridAdaptrActive, setGridAdaptrActive] = useState<boolean>(false);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const totalAssetMW = pulseCapacity + ibrCapacity + unbalancedCapacity;

  // Feeder Voltage Stiffness Multiplier (Baseline: 27.6 kV)
  const voltageStiffnessFactor = 27.6 / feederVoltagekV;

  // Raw Physics Calculations (Scaled by Voltage Stiffness)
  const rawVoltageDev = parseFloat(
    ((((totalAssetMW / availableFeederMVA) * 4.5 + pulseCapacity * 1.8) * voltageStiffnessFactor)).toFixed(1)
  );
  const rawPhaseUnbalance = parseFloat(
    ((((unbalancedCapacity / availableFeederMVA) * 8.5) * Math.sqrt(voltageStiffnessFactor))).toFixed(1)
  );
  const rawTHD = parseFloat((1.2 + ((ibrCapacity * 1.8 + pulseCapacity * 2.2) / availableFeederMVA) * 4.0).toFixed(1));
  const rawFlickerPst = parseFloat(
    ((0.2 + ((pulseCapacity / availableFeederMVA) * 2.8) * voltageStiffnessFactor)).toFixed(2)
  );
  const rawThermalLoading = Math.round(((pulseCapacity + unbalancedCapacity) / availableFeederMVA) * 100);

  // Compliance Code Limits
  const limits = { voltageDev: 6.0, phaseUnbal: 3.0, thd: 5.0, flickerPst: 0.9, thermalLoad: 100.0 };

  // Mitigated Physics Calculations (When Grid Adaptr is active, cap parameters that exceed their limit to the limit value itself)
  const voltDev = gridAdaptrActive ? Math.min(rawVoltageDev, limits.voltageDev) : rawVoltageDev;
  const phaseUnbal = gridAdaptrActive ? Math.min(rawPhaseUnbalance, limits.phaseUnbal) : rawPhaseUnbalance;
  const thdVal = gridAdaptrActive ? Math.min(rawTHD, limits.thd) : rawTHD;
  const flickerPst = gridAdaptrActive ? parseFloat(Math.min(rawFlickerPst, limits.flickerPst).toFixed(2)) : rawFlickerPst;
  const thermalLoad = gridAdaptrActive ? Math.min(rawThermalLoading, limits.thermalLoad) : rawThermalLoading;

  const passesVoltage = voltDev <= limits.voltageDev;
  const passesPhase = phaseUnbal <= limits.phaseUnbal;
  const passesTHD = thdVal <= limits.thd;
  const passesFlicker = flickerPst <= limits.flickerPst;
  const passesThermal = thermalLoad <= limits.thermalLoad;

  const isCompliant = passesVoltage && passesPhase && passesTHD && passesFlicker && passesThermal;

  // Traditional Infrastructure CapEx Upgrade Cost (Scaled by Voltage Class)
  let traditionalUpgradeCostCAD = 0;
  if (!isCompliant) {
    const baseStationCost = feederVoltagekV > 27.6 ? 3500000 : 1800000;
    const deficitMW = Math.max(0, totalAssetMW - availableFeederMVA);
    const capacityExpansionCost = deficitMW * 450000;
    const voltageMultiplier = feederVoltagekV <= 13.8 ? 1.0 : (feederVoltagekV <= 27.6 ? 1.25 : 1.6);
    traditionalUpgradeCostCAD = Math.round((baseStationCost + capacityExpansionCost) * voltageMultiplier);
  }

  const handleReset = () => {
    setPulseCapacity(3.0);
    setIbrCapacity(2.5);
    setUnbalancedCapacity(1.5);
    setAvailableFeederMVA(4.5);
    setFeederVoltagekV(27.6);
    setGridAdaptrActive(true);
  };

  // Find index of current voltage level
  const currentVoltageIndex = VOLTAGE_STEPS.indexOf(feederVoltagekV) !== -1 
    ? VOLTAGE_STEPS.indexOf(feederVoltagekV) 
    : 2; // Default to 27.6 kV (index 2)

  return (
    <section id="simulator" className="relative bg-white dark:bg-gunmetal py-20 px-6 sm:px-12 overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/30 transition-colors duration-300">
      
      {/* Background Glow Accents */}

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-lightcyan/40 dark:bg-bdazzled/30 border border-cerulean/30 px-3.5 py-1.5 rounded-full text-xs font-sans font-bold text-gunmetal dark:text-cerulean uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Grid Compliance Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan tracking-tight">
            Simulate Grid Interconnection Impact
          </h2>
          <p className="text-base text-bdazzled dark:text-cerulean font-medium leading-relaxed">
            Adjust industrial loads and DER capacities below to estimate the impact on power quality compliance with the <span className="text-sienna font-bold">Grid Adaptr</span> set to <span className="text-sienna font-bold">ON</span> or <span className="text-sienna font-bold">OFF</span> mode.
          </p>
        </div>

        {/* MAIN SIMULATOR CARD */}
        <div className="bg-white/80 dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-2xl space-y-8 backdrop-blur-sm">
          
          {/* TOPOLOGY IMAGE */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-cerulean/20 dark:border-bdazzled/40 bg-white shadow-sm">
            <Image
              src="/images/grid-adaptr-system.jpg"
              alt="Grid Adaptr Multi-Port PCS System Architecture Topology"
              width={1400}
              height={560}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Secondary Header Row: Reset Button */}
          <div className="flex items-center justify-end pb-2 border-b border-cerulean/20 dark:border-bdazzled/40">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-bdazzled dark:text-cerulean hover:text-sienna dark:hover:text-lightcyan transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Parameters</span>
            </button>
          </div>

          {/* Controls & Compliance Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-6 bg-lightcyan/20 dark:bg-bdazzled/20 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl flex flex-col justify-between h-full space-y-6">
              
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-sienna font-sans flex items-center gap-2 mb-6">
                  <Sliders className="w-4 h-4" />
                  Asset & Grid Capacity Controls
                </h3>

                <div className="space-y-5">
                  
                  {/* Slider 1: Pulse Load */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-gunmetal dark:text-lightcyan">Industrial Pulse / Heavy Load</span>
                      <span className="text-sienna font-sans">{pulseCapacity.toFixed(1)} MW</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="0.5"
                      value={pulseCapacity}
                      onChange={(e) => setPulseCapacity(parseFloat(e.target.value))}
                      className="w-full accent-sienna cursor-pointer bg-cerulean/30 rounded-lg h-2"
                    />
                  </div>

                  {/* Slider 2: IBR Renewables */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-gunmetal dark:text-lightcyan">IBR Renewables (Solar/Wind)</span>
                      <span className="text-sienna font-sans">{ibrCapacity.toFixed(1)} MW</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="0.5"
                      value={ibrCapacity}
                      onChange={(e) => setIbrCapacity(parseFloat(e.target.value))}
                      className="w-full accent-sienna cursor-pointer bg-cerulean/30 rounded-lg h-2"
                    />
                  </div>

                  {/* Slider 3: Single Phase Load */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-gunmetal dark:text-lightcyan">Unbalanced/Single Phase Load</span>
                      <span className="text-sienna font-sans">{unbalancedCapacity.toFixed(1)} MW</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="0.5"
                      value={unbalancedCapacity}
                      onChange={(e) => setUnbalancedCapacity(parseFloat(e.target.value))}
                      className="w-full accent-sienna cursor-pointer bg-cerulean/30 rounded-lg h-2"
                    />
                  </div>

                </div>
              </div>

              {/* Substation & Feeder Controls Block */}
              <div className="space-y-5 pt-4 border-t border-cerulean/20 dark:border-bdazzled/40">
                
                {/* Slider 4: Substation Capacity */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-bdazzled dark:text-cerulean">Available Substation Capacity</span>
                    <span className="text-bdazzled dark:text-cerulean font-sans">{availableFeederMVA.toFixed(1)} MVA</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.5"
                    value={availableFeederMVA}
                    onChange={(e) => setAvailableFeederMVA(parseFloat(e.target.value))}
                    className="w-full accent-bdazzled dark:accent-cerulean cursor-pointer bg-cerulean/30 rounded-lg h-2"
                  />
                </div>

                {/* Slider 5: Feeder Line Voltage (kV) Discrete Step Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-bdazzled dark:text-cerulean">Feeder Line Voltage</span>
                    <span className="text-bdazzled dark:text-cerulean font-sans">{feederVoltagekV.toFixed(2)} kV</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={VOLTAGE_STEPS.length - 1}
                    step="1"
                    value={currentVoltageIndex}
                    onChange={(e) => setFeederVoltagekV(VOLTAGE_STEPS[parseInt(e.target.value)])}
                    className="w-full accent-bdazzled dark:accent-cerulean cursor-pointer bg-cerulean/30 rounded-lg h-2"
                  />
                  <div className="flex justify-between text-[10px] font-sans text-bdazzled/60 dark:text-cerulean/60 px-0.5">
                    <span>4.16 kV (Weak)</span>
                    <span>12.47 kV</span>
                    <span>27.6 kV (Std)</span>
                    <span>34.5 kV</span>
                    <span>44.0 kV (Stiff)</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Compliance Results Column */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6 h-full">
              
              <div className="bg-lightcyan/20 dark:bg-bdazzled/20 border border-cerulean/20 dark:border-bdazzled/40 p-6 rounded-2xl space-y-4">
                
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-sienna font-sans flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Grid Code Compliance Telemetry
                </h3>

                <div className="space-y-3 font-sans text-xs">
                  
                  {/* Parameter 1 */}
                  <div className="flex justify-between items-center pb-2 border-b border-cerulean/15 dark:border-bdazzled/40">
                    <span className="text-gunmetal/80 dark:text-cerulean font-sans font-semibold">Voltage Deviation</span>
                    <div className="flex items-center gap-2 font-bold">
                      <span className={passesVoltage ? 'text-bdazzled dark:text-cerulean' : 'text-sienna'}>
                        {voltDev}%
                      </span>
                      <span className="text-[10px] text-bdazzled/60 dark:text-cerulean/60 font-normal">(Limit: ±6.0%)</span>
                    </div>
                  </div>

                  {/* Parameter 2 */}
                  <div className="flex justify-between items-center pb-2 border-b border-cerulean/15 dark:border-bdazzled/40">
                    <span className="text-gunmetal/80 dark:text-cerulean font-sans font-semibold">Phase Unbalance</span>
                    <div className="flex items-center gap-2 font-bold">
                      <span className={passesPhase ? 'text-bdazzled dark:text-cerulean' : 'text-sienna'}>
                        {phaseUnbal}%
                      </span>
                      <span className="text-[10px] text-bdazzled/60 dark:text-cerulean/60 font-normal">(Limit: 3.0%)</span>
                    </div>
                  </div>

                  {/* Parameter 3 */}
                  <div className="flex justify-between items-center pb-2 border-b border-cerulean/15 dark:border-bdazzled/40">
                    <span className="text-gunmetal/80 dark:text-cerulean font-sans font-semibold">Total Harmonics (THD)</span>
                    <div className="flex items-center gap-2 font-bold">
                      <span className={passesTHD ? 'text-bdazzled dark:text-cerulean' : 'text-sienna'}>
                        {thdVal}%
                      </span>
                      <span className="text-[10px] text-bdazzled/60 dark:text-cerulean/60 font-normal">(Limit: 5.0%)</span>
                    </div>
                  </div>

                  {/* Parameter 4 */}
                  <div className="flex justify-between items-center pb-2 border-b border-cerulean/15 dark:border-bdazzled/40">
                    <span className="text-gunmetal/80 dark:text-cerulean font-sans font-semibold">Flicker Severity (Pst)</span>
                    <div className="flex items-center gap-2 font-bold">
                      <span className={passesFlicker ? 'text-bdazzled dark:text-cerulean' : 'text-sienna'}>
                        {flickerPst}
                      </span>
                      <span className="text-[10px] text-bdazzled/60 dark:text-cerulean/60 font-normal">(Limit: 0.90)</span>
                    </div>
                  </div>

                  {/* Parameter 5 */}
                  <div className="flex justify-between items-center">
                    <span className="text-gunmetal/80 dark:text-cerulean font-sans font-semibold">Feeder Thermal Loading</span>
                    <div className="flex items-center gap-2 font-bold">
                      <span className={passesThermal ? 'text-bdazzled dark:text-cerulean' : 'text-sienna'}>
                        {thermalLoad}%
                      </span>
                      <span className="text-[10px] text-bdazzled/60 dark:text-cerulean/60 font-normal">(Limit: 100%)</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Interconnection Status Readout */}
              <div className={`p-6 rounded-2xl border transition-all ${
                isCompliant 
                  ? 'bg-cerulean/10 border-cerulean/30 dark:bg-bdazzled/20 dark:border-bdazzled/40' 
                  : 'bg-sienna/10 border-sienna/30'
              }`}>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-bdazzled dark:text-cerulean">
                      Interconnection Status:
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      {isCompliant ? (
                        <>
                          <CheckCircle2 className="w-6 h-6 text-bdazzled dark:text-cerulean shrink-0" />
                          <span className="text-xl font-extrabold text-bdazzled dark:text-cerulean">PASSED</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-6 h-6 text-sienna shrink-0" />
                          <span className="text-xl font-extrabold text-sienna">FAILED CODE COMPLIANCE</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Dynamic Cost or Configuration Request Message */}
                  {gridAdaptrActive ? (
                    <div className="text-left sm:text-right max-w-xs">
                      <p className="text-xs font-bold text-bdazzled dark:text-cerulean leading-snug">
                        Request Simulation Report to explore viable Grid Adaptr Configuration.
                      </p>
                    </div>
                  ) : (
                    <div className="text-left sm:text-right">
                      <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-bdazzled dark:text-cerulean">
                        Est. grid upgrade cost:
                      </span>
                      <p className={`text-xl font-extrabold font-sans mt-1 ${isCompliant ? 'text-bdazzled dark:text-cerulean' : 'text-sienna'}`}>
                        {isCompliant ? '$0 CAD' : `$${traditionalUpgradeCostCAD.toLocaleString()} CAD`}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footnote Disclaimers */}
                <div className="pt-4 mt-4 border-t border-cerulean/20 dark:border-bdazzled/40 space-y-1.5 text-[11px] text-bdazzled/80 dark:text-cerulean/80 leading-snug">
                  <p>(i) Compliance parameters specific to Ontario&apos;s Distribution System Code requirements.</p>
                  <p>(ii) Upgrade costs estimates are based on NREL calculations for DER interconnection costs.</p>
                </div>

              </div>

            </div>

          </div>

          {/* RELOCATED REAL-TIME OSCILLOSCOPES (Below Interconnection Status) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            <OscilloscopeCard
              title="Downstream (Asset Output)"
              badge="Unmitigated Transients"
              voltDev={rawVoltageDev}
              flickerPst={rawFlickerPst}
              thdVal={rawTHD}
              phaseUnbal={rawPhaseUnbalance}
              pulseMW={pulseCapacity}
              availableLoadMVA={availableFeederMVA}
              isClean={false}
            />
            <OscilloscopeCard
              title="Upstream (Utility POI)"
              badge={gridAdaptrActive ? 'Grid Adaptr ON' : 'Grid Adaptr OFF'}
              voltDev={voltDev}
              flickerPst={flickerPst}
              thdVal={thdVal}
              phaseUnbal={phaseUnbal}
              pulseMW={pulseCapacity}
              availableLoadMVA={availableFeederMVA}
              isClean={gridAdaptrActive}
            />
          </div>

          {/* COMBINED CONTROL TOGGLE & SIMULATION REPORT CTA ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-cerulean/20 dark:border-bdazzled/40">
            
            {/* Box 1: Grid Adaptr Control Toggle */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gunmetal/90 dark:bg-gunmetal/95 border border-cerulean/30 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md h-full">
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="text-xs sm:text-sm font-sans font-extrabold uppercase tracking-wider text-sienna block">
                  GRID ADAPTR CONTROL
                </span>
                <p className="text-xs sm:text-xs font-medium text-lightcyan leading-snug">
                  Turn on Grid Adaptr to vet impact on connection compliance.
                </p>
              </div>

              <button
                onClick={() => setGridAdaptrActive(!gridAdaptrActive)}
                aria-label="Toggle Grid Adaptr Status"
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer shrink-0 ${
                  gridAdaptrActive
                    ? 'bg-sienna text-white shadow-sienna/30 scale-105'
                    : 'bg-gunmetal text-cerulean border border-cerulean/30 hover:text-white'
                }`}
              >
                {/* Visual Toggle Switch Track & Knob */}
                <div
                  className={`w-7 h-4 flex items-center rounded-full p-0.5 transition-colors duration-300 ${
                    gridAdaptrActive ? 'bg-white/30' : 'bg-cerulean/30'
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full shadow-sm transform transition-transform duration-300 ${
                      gridAdaptrActive ? 'translate-x-3 bg-white' : 'translate-x-0 bg-cerulean'
                    }`}
                  />
                </div>
                <Zap className={`w-3.5 h-3.5 ${gridAdaptrActive ? 'fill-current' : ''}`} />
                <span>{gridAdaptrActive ? 'ON' : 'OFF'}</span>
              </button>
            </div>

            {/* Box 2: Request Simulation Report CTA */}
            <div className="p-5 sm:p-6 rounded-2xl bg-lightcyan/20 dark:bg-bdazzled/20 border border-cerulean/20 dark:border-bdazzled/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner h-full">
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-xs text-bdazzled dark:text-cerulean/90 font-medium leading-snug">
                  Generate a custom technical report based on your live simulation settings.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer uppercase tracking-wider shrink-0 w-full sm:w-auto"
              >
                <span>Request Simulation Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Configuration Request Modal */}
      <RequestConfigModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pulseCapacity={pulseCapacity}
        ibrCapacity={ibrCapacity}
        unbalancedCapacity={unbalancedCapacity}
        availableFeederMVA={availableFeederMVA}
        feederVoltagekV={feederVoltagekV}
      />
    </section>
  );
}