'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ChevronDown, Video, ExternalLink } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

// ─── GOOGLE CALENDAR APPOINTMENT SCHEDULING MODAL ─────────────────────────
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

// ─── NAVIGATION STRUCTURE & SUBHEADINGS ───────────────────────────────────
interface SubheadingLink {
  name: string;
  href: string;
}

interface NavItem {
  title: string;
  href: string;
  subheadings?: SubheadingLink[];
}

const navItems: NavItem[] = [
  {
    title: 'Grid Adaptr™',
    href: '/grid-adaptr',
    subheadings: [
      { name: 'Core Functionalities', href: '/grid-adaptr#functionalities' },
      { name: 'Patented Architecture', href: '/grid-adaptr#architecture' },
      { name: 'Prototype Validation', href: '/grid-adaptr#validation' },
      { name: 'Application Areas', href: '/grid-adaptr#applications' },
    ],
  },
  {
    title: 'A-MGCS',
    href: '/amgcs',
    subheadings: [
      { name: 'Proven Functionalities', href: '/amgcs#functionalities' },
      { name: 'Configuration Options', href: '/amgcs#scopes' },
      { name: 'Application Areas', href: '/amgcs#applications' },
    ],
  },
  {
    title: 'Mobile Grid',
    href: '/mobilegrid',
  },
  {
    title: 'Experience',
    href: '/experience',
  },
  {
    title: 'About',
    href: '/about',
    subheadings: [
      { name: 'Our Philosophy', href: '/about#hierarchy' },
      { name: 'Team Members', href: '/about#team' },
      { name: 'Vision, Mission & Approach', href: '/about#vision' },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);

  const pathname = usePathname();

  // Active page's item with subheadings for contextual sub-bar
  const activeNavItem = navItems.find(
    (item) => item.href === pathname && item.subheadings && item.subheadings.length > 0
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gunmetal/95 backdrop-blur-md border-b border-cerulean/20 dark:border-bdazzled/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
        
        {/* Adaptive Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/Logo_dark.png"
            alt="ADAPTR Inc. Logo"
            width={160}
            height={40}
            className="h-6 w-auto object-contain block dark:hidden group-hover:scale-105 transition-transform duration-200"
            priority
          />
          <Image
            src="/Logo_light.png"
            alt="ADAPTR Inc. Logo"
            width={160}
            height={40}
            className="h-6 w-auto object-contain hidden dark:block group-hover:scale-105 transition-transform duration-200"
            priority
          />
        </Link>

        {/* Desktop Navigation Links with Dropdown Menus */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gunmetal dark:text-cerulean">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.title} className="relative group py-5">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 transition-colors ${
                    isActive
                      ? 'text-sienna font-extrabold'
                      : 'hover:text-sienna dark:hover:text-lightcyan'
                  }`}
                >
                  <span>{item.title}</span>
                  {item.subheadings && (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-70" />
                  )}
                </Link>

                {/* Dropdown Menu on Hover */}
                {item.subheadings && (
                  <div className="absolute top-full left-0 hidden group-hover:block w-56 pt-2 z-50">
                    <div className="bg-white dark:bg-gunmetal border border-cerulean/20 dark:border-bdazzled/40 rounded-2xl p-2 shadow-xl backdrop-blur-md">
                      {item.subheadings.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-3.5 py-2 text-xs font-medium text-gunmetal dark:text-lightcyan hover:bg-lightcyan/40 dark:hover:bg-bdazzled/30 hover:text-sienna rounded-xl transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Header Controls: Free Consultation CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMeetingModalOpen(true)}
            className="inline-flex items-center gap-2 bg-sienna hover:bg-sienna/90 text-white font-bold text-sm px-4 sm:px-5 py-2.5 rounded-lg transition-all shadow-md shadow-sienna/10 hover:scale-[1.02] cursor-pointer"
          >
            <span>Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-lightcyan/50 dark:bg-bdazzled/30 text-gunmetal dark:text-cerulean hover:text-sienna dark:hover:text-lightcyan border border-cerulean/20"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ─── ACTIVE PAGE CONTEXTUAL SUB-NAVBAR ─────────────────────────────── */}
      {/* Visible automatically when on Grid Adaptr, A-MGCS, or About pages    */}
      {activeNavItem && (
        <div className="hidden md:block bg-lightcyan/30 dark:bg-gunmetal/90 border-t border-cerulean/15 dark:border-bdazzled/20 py-2.5 px-6 sm:px-12 transition-all">
          <div className="max-w-7xl mx-auto flex items-center gap-6 overflow-x-auto text-xs font-semibold text-bdazzled dark:text-cerulean no-scrollbar">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-sienna shrink-0">
              {activeNavItem.title} Sections:
            </span>
            {activeNavItem.subheadings?.map((sub) => (
              <Link
                key={sub.name}
                href={sub.href}
                className="shrink-0 hover:text-sienna dark:hover:text-lightcyan transition-colors bg-white/60 dark:bg-gunmetal/60 border border-cerulean/15 dark:border-bdazzled/30 px-3 py-1 rounded-full shadow-2xs"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gunmetal border-b border-cerulean/20 dark:border-bdazzled/40 px-6 py-6 space-y-4 shadow-xl transition-colors duration-300 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2 font-medium text-gunmetal dark:text-cerulean">
            {navItems.map((item) => (
              <div key={item.title} className="border-b border-cerulean/10 dark:border-bdazzled/20 pb-2">
                <div className="flex justify-between items-center py-2">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-sienna dark:hover:text-lightcyan transition-colors font-bold text-sm"
                  >
                    {item.title}
                  </Link>

                  {item.subheadings && (
                    <button
                      onClick={() =>
                        setMobileExpandedItem(
                          mobileExpandedItem === item.title ? null : item.title
                        )
                      }
                      className="p-1 text-cerulean hover:text-sienna"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExpandedItem === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Expanded Subheadings in Mobile Menu */}
                {item.subheadings && (mobileExpandedItem === item.title || pathname === item.href) && (
                  <div className="pl-4 py-1.5 space-y-1.5 border-l-2 border-sienna/30 my-1 bg-lightcyan/20 dark:bg-gunmetal/50 rounded-r-xl">
                    {item.subheadings.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-bdazzled dark:text-cerulean hover:text-sienna transition-colors font-medium"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsMeetingModalOpen(true);
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-sienna text-white font-bold text-sm px-5 py-3 rounded-lg shadow-md cursor-pointer"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Google Meeting Scheduler Modal */}
      <ScheduleMeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
      />
    </header>
  );
}