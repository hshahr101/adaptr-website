'use client';

import React from 'react';
import { Zap, Building2, UtilityPole, CheckCircle2 } from 'lucide-react';

const stakeholders = [
  {
    title: "Generators & IPPs",
    icon: Zap,
    description: "Accelerate commercial operation dates and lower connection cost for renewable assets.",
    benefits: [
      "Unlock new renewable energy projects",
      "Ensure strict connection compliance",
      "Mitigate intermittent power export issues"
    ]
  },
  {
    title: "Commercial & Industrial",
    icon: Building2,
    description: "Connect heavy industrial loads and rapid EV chargers to existing weak distribution lines.",
    benefits: [
      "Enable heavy/pulse load integration",
      "Suppress voltage flicker & harmonics",
      "Enhance site power resiliency"
    ]
  },
  {
    title: "Distribution Utilities",
    icon: UtilityPole,
    description: "Optimize existing grid capacity, suppress fast voltage fluctuations, and defer CapEx.",
    benefits: [
      "Monetize existing transformer capacity",
      "Enhance local distribution stability",
      "Establish mobile grid nodes for flexibility"
    ]
  }
];

export default function StakeholderMatrix() {
  return (
    <section className="relative bg-white dark:bg-gunmetal py-20 px-6 sm:px-12 overflow-hidden border-b border-cerulean/20 dark:border-bdazzled/30 transition-colors duration-300">
      
      {/* Background Glow Accents - Matched with Hero Card */}
      <div className="absolute bottom-0 right-0 -mb-12 -ml-12 w-96 h-96 bg-cerulean/15 dark:bg-sienna/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-cerulean/15 dark:bg-sienna/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-sienna">Tailored Value Propositions</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan">
            Solving Grid Interconnection Bottlenecks Across the Energy Spectrum
          </h3>
          <p className="text-bdazzled dark:text-cerulean font-medium">
            Grid Adaptr's multi-port power conversion architecture decouples upstream grid impacts from downstream network dynamics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stakeholders.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx} 
                className="bg-white/80 dark:bg-bdazzled/20 backdrop-blur-sm border border-cerulean/20 dark:border-bdazzled/50 hover:border-sienna/50 p-8 rounded-2xl transition-all flex flex-col justify-between group shadow-sm hover:shadow-md dark:shadow-none"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-bdazzled dark:bg-bdazzled/40 flex items-center justify-center text-white group-hover:bg-sienna group-hover:text-white dark:group-hover:text-gunmetal transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-gunmetal dark:text-lightcyan">{s.title}</h4>
                  <p className="text-sm text-bdazzled dark:text-cerulean leading-relaxed font-medium">{s.description}</p>
                  
                  <ul className="space-y-2 pt-4 border-t border-cerulean/20 dark:border-bdazzled/40">
                    {s.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-sm text-gunmetal/90 dark:text-lightcyan/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                        <span>{benefit}</span>
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
  );
}