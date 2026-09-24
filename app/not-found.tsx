'use client';

import React from 'react';
import Link from 'next/link';
import { ZapOff, ArrowLeft, RotateCcw, Compass, Sliders } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-white dark:bg-gunmetal text-gunmetal dark:text-lightcyan flex items-center justify-center px-6 sm:px-12 py-20 transition-colors duration-300">
      <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
        
        {/* Glow Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sienna/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-sienna/10 dark:bg-sienna/20 border border-sienna/30 px-4 py-1.5 rounded-full text-xs font-sans font-bold text-sienna uppercase tracking-wider shadow-sm">
          <ZapOff className="w-4 h-4 text-sienna shrink-0" />
          <span>Error 404 • Signal Tripped</span>
        </div>

        {/* Hero Code & Witty Title */}
        <div className="space-y-3 relative">
          <p className="text-7xl sm:text-8xl font-black tracking-tighter text-gunmetal/15 dark:text-lightcyan/10 font-sans select-none">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan tracking-tight -mt-10 sm:-mt-12">
            Grid Line Disconnected
          </h1>
          <p className="text-base sm:text-lg text-sienna font-extrabold">
            Looks like you've stumbled into an open circuit.
          </p>
        </div>

        {/* Descriptive Witty Text */}
        <p className="text-sm sm:text-base text-bdazzled dark:text-cerulean/90 font-medium leading-relaxed max-w-lg mx-auto">
          The node or page you are looking for has been re-routed, decommissioned, or never existed on this feeder line. Don't worry—our automatic reclosers have isolated the fault.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-sienna/20 hover:scale-[1.02] cursor-pointer uppercase tracking-wider w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Main Grid</span>
          </Link>


        </div>

        {/* Technical Footer Note */}
        <p className="text-xs text-bdazzled/70 dark:text-cerulean/60 font-mono pt-6 border-t border-cerulean/15 dark:border-bdazzled/20">
          Telemetry Code: ERR_POI_NODE_NOT_FOUND • ADAPTR Inc.
        </p>

      </div>
    </div>
  );
}