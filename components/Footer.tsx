'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gunmetal text-bdazzled dark:text-cerulean border-t border-cerulean/20 dark:border-bdazzled/40 pt-16 pb-12 px-6 sm:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Logo & Technical Pitch */}
          <div className="lg:col-span-2 space-y-0">
            <Link href="/" className="inline-block">
              {/* Dark Logo for Light Background */}
              <Image
                src="/Logo_dark.png"
                alt="ADAPTR Inc. Logo"
                width={180}
                height={45}
                className="h-7 w-auto object-contain block dark:hidden"
              />
              {/* Light Logo for Dark Background */}
              <Image
                src="/Logo_light.png"
                alt="ADAPTR Inc. Logo"
                width={180}
                height={45}
                className="h-7 w-auto object-contain hidden dark:block"
              />
            </Link>

            <p className="text-sm text-gunmetal/80 dark:text-cerulean/80 leading-relaxed max-w-sm pt-1 font-medium">
            Towards Electricity On Demand. 
            </p>
            <p className="text-sm text-gunmetal/80 dark:text-cerulean/80 leading-relaxed max-w-sm pt-1 font-medium">
            Anywhere, Everywhere. 
            </p>          
          </div>

          {/* Solutions Column
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gunmetal dark:text-lightcyan">
              Services
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="#solutions" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
                  ADAMM™
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
                  EEVE™
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
                  Power Studies
                </Link>
              </li>
              <li>

              </li>
            </ul>
          </div>*/}

          {/* Technology Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gunmetal dark:text-lightcyan">
              Technology
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/grid-adaptr" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
                  Grid Adaptr™
                </Link>
              </li>
              <li>
                <Link href="/amgcs" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
                  Adaptive MGCS
                </Link>
              </li>
              <li>
                <Link href="/mobilegrid" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
                  Mobile Grid
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gunmetal dark:text-lightcyan">
              Company
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/about" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gunmetal dark:text-lightcyan">
              Contact Us
            </h3>
            <div className="space-y-2.5 text-sm font-medium">
              <a
                href="mailto:info@adaptrinc.com"
                className="flex items-center gap-2 text-gunmetal dark:text-cerulean hover:text-sienna dark:hover:text-lightcyan transition-colors"
              >
                <Mail className="w-4 h-4 text-sienna shrink-0" />
                <span>info@adaptrenergy.com</span>
              </a>
              <div className="flex items-start gap-2 text-bdazzled dark:text-cerulean/80">
                <MapPin className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                <span>411 Richmond St E, Toronto, CA</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#assessment"
                className="inline-flex items-center gap-2 bg-lightcyan/60 dark:bg-bdazzled/40 hover:bg-cerulean/20 dark:hover:bg-bdazzled/60 text-gunmetal dark:text-lightcyan border border-cerulean/30 px-4 py-2 rounded-lg text-xs font-semibold transition-all shadow-sm"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Connect</span>
                
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cerulean/20 dark:border-bdazzled/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-bdazzled/80 dark:text-cerulean/70">
          <p>© {new Date().getFullYear()} ADAPTR Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-sienna dark:hover:text-lightcyan transition-colors">
              Patents & Legal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}