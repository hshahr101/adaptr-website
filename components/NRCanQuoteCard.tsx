'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Landmark, Users, Zap } from 'lucide-react';

const quotesData = [
  {
    id: 'government',
    tag: 'Federal Endorsement',
    icon: Landmark,
    quote:
      'This is how Canada becomes an energy superpower — by working with partners and by investing in the modernization and optimization of our electricity system.',
    author: 'Honourable Tim Hodgson',
    title: 'Minister of Energy & Natural Resources of Canada',
  },
  {
    id: 'partner',
    tag: 'FN Champion',
    icon: Users,
    quote:
      'Thanks to NRCan, and our technology partner, ADAPTR, we are building a new way. A system that helps to connect the past with the present and helps to unlock our future.',
    author: 'Grant Taibossigai',
    title: "Business & Economic Development, M'Chigeeng First Nation",
  },
  {
    id: 'adaptr',
    tag: 'ADAPTR Leadership',
    icon: Zap,
    quote:
      "It is our privilege to be able to support M'Chigeeng in its vision to modernize and decarbonize the power system in Manitoulin Island with the Grid Adaptr technology.",
    author: 'Hassan Shahriar',
    title: 'President, ADAPTR Inc.',
  },
];

export default function NRCanQuoteCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotesData.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const currentQuote = quotesData[activeIndex];

  return (
    <section className="bg-white dark:bg-gunmetal border-b border-cerulean/20 dark:border-bdazzled/30 py-16 px-6 sm:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gunmetal dark:text-lightcyan tracking-tight">
            Natural Resources Canada Approved
          </h2>
          <p className="text-base text-bdazzled dark:text-cerulean font-medium leading-relaxed">
            Led by the HIAH Corp. of M'Chigeeng First Nation, the <span className="text-sienna font-bold">Grid Adaptr</span> demonstration project was selected by Natural Resources Canada's 2025 Smart Grid Program.
          </p>
        </div>
        {/* Solid Card Container */}
        <div className="relative bg-white dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 rounded-3xl p-6 sm:p-10 shadow-xl dark:shadow-2xl overflow-hidden transition-all duration-300">
          
          {/* Ambient Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sienna/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Announcement Photo */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center">
              <div className="relative w-full rounded-2xl overflow-hidden border border-cerulean/20 dark:border-cerulean/30 shadow-md bg-white dark:bg-gunmetal/60">
                <Image
                  src="/NRCan_announce.jpg"
                  alt="NRCan Smart Grid Announcement Team"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <span className="mt-2 text-bdazzled dark:text-cerulean/70 text-[12px] font-heading self-start font-medium">
                Hassan Shahriar, Minister Hodgeson, Grant Taibossigai, Laura Suthers
              </span>
            </div>

            {/* Interactive Carousel */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between min-h-[320px]">
              
              {/* Header Region: Section Title + Speaker Tabs */}
              <div className="border-b border-cerulean/20 dark:border-bdazzled/40 pb-4 space-y-3">
                
                {/* Section Title Above Buttons */}
                <div className="flex items-center justify-between">

                  <Quote className="w-7 h-7 text-cerulean/30 dark:text-cerulean/20 hidden sm:block shrink-0" />
                </div>

                {/* Speaker Tabs */}
                <div className="flex flex-wrap items-center gap-2">
                  {quotesData.map((item, idx) => {
                    const TabIcon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveIndex(idx)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                          activeIndex === idx
                            ? 'bg-sienna text-white dark:text-gunmetal shadow-md scale-105'
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

              {/* Dynamic Text Body */}
              <div className="space-y-5 py-0 transition-all duration-300">
                <blockquote className="text-base sm:text-base lg:text-base font-small text-gunmetal dark:text-lightcyan leading-relaxed italic">
                  &ldquo;{currentQuote.quote}&rdquo;
                </blockquote>

                <div className="pt-2">
                  <p className="font-extrabold text-sienna text-base sm:text-lg">
                    — {currentQuote.author}
                  </p>
                  <p className="text-xs sm:text-sm text-bdazzled dark:text-cerulean/80 font-medium">
                    {currentQuote.title}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-cerulean/20 dark:border-bdazzled/30">
                <div className="flex gap-1.5">
                  {quotesData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        activeIndex === idx ? 'w-8 bg-sienna' : 'w-2 bg-cerulean/20 dark:bg-bdazzled/60'
                      }`}
                      aria-label={`Go to quote ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveIndex(
                        (prev) => (prev - 1 + quotesData.length) % quotesData.length
                      )
                    }
                    className="p-2 rounded-lg bg-lightcyan/60 dark:bg-bdazzled/30 hover:bg-cerulean/20 dark:hover:bg-bdazzled/60 text-bdazzled dark:text-cerulean hover:text-gunmetal dark:hover:text-lightcyan transition-colors border border-cerulean/20 dark:border-transparent"
                    aria-label="Previous quote"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveIndex((prev) => (prev + 1) % quotesData.length)
                    }
                    className="p-2 rounded-lg bg-lightcyan/60 dark:bg-bdazzled/30 hover:bg-cerulean/20 dark:hover:bg-bdazzled/60 text-bdazzled dark:text-cerulean hover:text-gunmetal dark:hover:text-lightcyan transition-colors border border-cerulean/20 dark:border-transparent"
                    aria-label="Next quote"
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
  );
}