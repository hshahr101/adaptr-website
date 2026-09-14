import React from 'react';
import { Quote } from 'lucide-react';

export default function TrustProof() {
  return (
    <section className="bg-white dark:bg-bdazzled/10 py-16 px-6 sm:px-12 border-b border-cerulean/20 dark:border-bdazzled/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
     
        {/* Validation Matrix Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white dark:bg-gunmetal/60 rounded-xl border border-cerulean/20 dark:border-bdazzled/40 shadow-sm transition-colors duration-300">
            <p className="text-3xl font-extrabold text-sienna">Patented</p>
            <p className="text-xs text-bdazzled dark:text-cerulean mt-1 font-medium">US Patent Granted & Pending in OECD Countries, China & India</p>
          </div>
          <div className="p-6 bg-white dark:bg-gunmetal/60 rounded-xl border border-cerulean/20 dark:border-bdazzled/40 shadow-sm transition-colors duration-300">
            <p className="text-3xl font-extrabold text-gunmetal dark:text-lightcyan">TRL 8</p>
            <p className="text-xs text-bdazzled dark:text-cerulean mt-1 font-medium">250/500kW Module Prototype Commissioned</p>
          </div>
          <div className="p-6 bg-white dark:bg-gunmetal/60 rounded-xl border border-cerulean/20 dark:border-bdazzled/40 shadow-sm transition-colors duration-300">
            <p className="text-3xl font-extrabold text-sienna">Validated</p>
            <p className="text-xs text-bdazzled dark:text-cerulean mt-1 font-medium">Validated Performance of the Lab-scale 5kW Grid Adaptr prototype</p>
          </div>
          <div className="p-6 bg-white dark:bg-gunmetal/60 rounded-xl border border-cerulean/20 dark:border-bdazzled/40 shadow-sm transition-colors duration-300">
            <p className="text-3xl font-extrabold text-gunmetal dark:text-lightcyan">Compliant</p>
            <p className="text-xs text-bdazzled dark:text-cerulean mt-1 font-medium">Functionalities compliant with IEEE 1547 & system compliance with UL 9540</p>
          </div>
        </div>

      </div>
    </section>
  );
}