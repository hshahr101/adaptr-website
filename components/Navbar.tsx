'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight, User, Video, ExternalLink } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gunmetal/90 backdrop-blur-md border-b border-cerulean/20 dark:border-bdazzled/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
        
        {/* Adaptive Brand Logo */}
        <Link href="/" className="flex items-center group">
          {/* Dark Logo for Light Background */}
          <Image
            src="/Logo_dark.png"
            alt="ADAPTR Inc. Logo"
            width={160}
            height={40}
            className="h-6 w-auto object-contain block dark:hidden group-hover:scale-105 transition-transform duration-200"
            priority
          />
          {/* Light Logo for Dark Background */}
          <Image
            src="/Logo_light.png"
            alt="ADAPTR Inc. Logo"
            width={160}
            height={40}
            className="h-6 w-auto object-contain hidden dark:block group-hover:scale-105 transition-transform duration-200"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gunmetal dark:text-cerulean">
          <Link href="/grid-adaptr" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
            Grid Adaptr™
          </Link>
          <Link href="/amgcs" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
            A-MGCS
          </Link>
          <Link href="/mobilegrid" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
            Mobile Grid
          </Link>
          <Link href="/experience" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
            Experience
          </Link>
          <Link href="/about" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
            About
          </Link>
        </nav>

        {/* Header Controls: Free Consultation -> Login -> Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* 1. Free Consultation CTA Button */}
          <button
            type="button"
            onClick={() => setIsMeetingModalOpen(true)}
            className="inline-flex items-center gap-2 bg-sienna hover:bg-sienna/90 text-white dark:text-gunmetal font-bold text-sm px-4 sm:px-5 py-2.5 rounded-lg transition-all shadow-md shadow-sienna/10 hover:scale-[1.02] cursor-pointer"
          >
            <span>Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* 2. Login Button */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 border border-cerulean/30 dark:border-bdazzled/40 bg-lightcyan/20 dark:bg-gunmetal/60 hover:border-sienna/50 text-gunmetal dark:text-cerulean hover:text-sienna dark:hover:text-lightcyan font-semibold text-sm px-4 py-2.5 rounded-lg transition-all"
          >
            <User className="w-4 h-4 text-sienna" />
            <span>Login</span>
          </Link>

          {/* 3. Light / Dark Theme Toggle */}
          <ThemeToggle />

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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gunmetal border-b border-cerulean/20 dark:border-bdazzled/40 px-6 py-6 space-y-4 shadow-xl transition-colors duration-300">
          <nav className="flex flex-col space-y-3 font-medium text-gunmetal dark:text-cerulean">
            <Link
              href="/grid-adaptr"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-sienna dark:hover:text-lightcyan transition-colors border-b border-cerulean/10 dark:border-bdazzled/20"
            >
              Grid ADAPTR™
            </Link>
            <Link
              href="/amgcs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-sienna dark:hover:text-lightcyan transition-colors border-b border-cerulean/10 dark:border-bdazzled/20"
            >
              A-MGCS
            </Link>
            <Link
              href="/mobilegrid"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-sienna dark:hover:text-lightcyan transition-colors border-b border-cerulean/10 dark:border-bdazzled/20"
            >
              Mobile Grid
            </Link>
            <Link
              href="/experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-sienna dark:hover:text-lightcyan transition-colors border-b border-cerulean/10 dark:border-bdazzled/20"
            >
              Experience
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-sienna dark:hover:text-lightcyan transition-colors border-b border-cerulean/10 dark:border-bdazzled/20"
            >
              About
            </Link>
          </nav>
          
          <div className="pt-2 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsMeetingModalOpen(true);
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-sienna text-white dark:text-gunmetal font-bold text-sm px-5 py-3 rounded-lg shadow-md cursor-pointer"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 border border-cerulean/30 dark:border-bdazzled/40 text-gunmetal dark:text-cerulean font-semibold text-sm px-5 py-3 rounded-lg"
            >
              <User className="w-4 h-4 text-sienna" />
              <span>Login to Client Portal</span>
            </Link>
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