'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, X, ShieldCheck, FileText } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── PRIVACY POLICY MODAL COMPONENT ───────────────────────────────────────
function PrivacyPolicyModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 w-screen h-screen bg-gunmetal/80 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gunmetal border border-cerulean/30 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl text-lightcyan relative max-h-[85vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-cerulean/20 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sienna" />
            <h2 className="text-xl font-black text-white">Privacy Policy</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-cerulean/70 hover:text-white p-1 rounded-lg hover:bg-cerulean/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto my-4 space-y-4 text-xs text-cerulean/90 leading-relaxed pr-2 font-medium">
          <p className="text-[11px] text-sienna font-bold uppercase tracking-wider">
            Last Updated: September 30, 2026
          </p>

          <p>
            This Privacy Policy applies to <strong>ADAPTR Inc.</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and sets out our policy regarding the collection, use, and protection of information gathered across our website, simulators, and digital platforms (collectively, &quot;Sites&quot;). The Company complies with Canadian Federal and Provincial privacy laws, including the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA).
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">1. Collection of Personal Information</h3>
          <p>
            You are not required to register to access our Sites, but you may voluntarily provide personal information when submitting forms, feedback, search queries, or technical assessment requests. This information may include:
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li><strong>Contact Details:</strong> Your name, email address, telephone number, and physical mailing address.</li>
            <li><strong>Employment & Corporate Details:</strong> Job title, place of work, company name, and project role.</li>
            <li><strong>Simulation & Project Data:</strong> Load parameters (MW/MVA), feeder line voltages, and utility zone configurations submitted via our Grid Compliance Estimators.</li>
          </ul>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">2. Use of Gathered Information</h3>
          <p>
            Information collected on our Sites may be used in the aggregate for research and development, site optimization, and tailoring content to your preferences by tracking pattern page views. Specifically, we use your information to:
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Generate simulation reports and preliminary budgetary grid interconnection assessments.</li>
            <li>Monitor interest in our range of technologies (including Grid Adaptr™, A-MGCS, and Mobile Grid).</li>
            <li>Send promotional materials, offers, or technical engineering updates (where express permission has been granted).</li>
            <li>Facilitate consultation scheduling and resolve inquiries or technical support requests.</li>
          </ul>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">3. Promotional Offers & Opt-Out</h3>
          <p>
            If you have opted in to receive promotional or informational communications, you may object to or opt out of such use at any time by emailing us or following unsubscribe instructions.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">4. Disclosure of Information</h3>
          <p>
            The Company will not disclose your personal information to third parties except:
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li>To authorized Company agents or hosting partners bound by confidentiality agreements.</li>
            <li>To comply with legal requirements such as a law, regulation, search warrant, subpoena, or court order.</li>
            <li>To Canadian or international regulatory authorities where required.</li>
          </ul>
          <p className="pt-1">
            Please note that processing or storage of personal information may occur outside of Canada and may be subject to foreign legal requirements.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">5. Protection of Children</h3>
          <p>
            The protection of children&apos;s privacy online is paramount. We do not knowingly collect or solicit personal information from children, nor allow them to request information through our Sites.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">6. Security Safeguards</h3>
          <p>
            We maintain physical, electronic, and managerial procedures appropriate to the sensitivity of the data to safeguard against unauthorized access, maintain security, and ensure correct data usage. Personal information is accessible only to authorized personnel on a need-to-know basis.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">7. Contact & Data Inquiries</h3>
          <p>
            To modify your personal information, request data deletion, or ask questions regarding this policy, please contact us at:
          </p>
          <p className="text-sienna font-bold">
            ADAPTR Inc.<br />
            411 Richmond St E, Toronto, ON, Canada<br />
            Email: <a href="mailto:info@adaptrenergy.com" className="underline">info@adaptrenergy.com</a>
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-cerulean/20 shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="bg-sienna hover:bg-sienna/90 text-white font-extrabold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── TERMS OF SERVICE MODAL COMPONENT ────────────────────────────────────
function TermsOfServiceModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 w-screen h-screen bg-gunmetal/80 backdrop-blur-md flex items-center justify-center z-[99999] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gunmetal border border-cerulean/30 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl text-lightcyan relative max-h-[85vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-cerulean/20 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sienna" />
            <h2 className="text-xl font-black text-white">Terms of Service</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-cerulean/70 hover:text-white p-1 rounded-lg hover:bg-cerulean/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto my-4 space-y-4 text-xs text-cerulean/90 leading-relaxed pr-2 font-medium">
          <p className="text-[11px] text-sienna font-bold uppercase tracking-wider">
            Last Updated: September 21, 2026
          </p>

          <p>
            Welcome to <strong>ADAPTR Inc.</strong> (&quot;ADAPTR,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website located at <code>https://adaptr-website.vercel.app/</code>, as well as associated software, simulators, products, and services (collectively, the &quot;Services&quot;). By accessing or using our Website and Services, you agree to be bound by these Terms.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">1. Description of Services</h3>
          <p>
            ADAPTR Inc. provides hardware, control platforms, and power systems engineering services for commercial and industrial entities, including the Grid Adaptr™ PCS, Micro-Grid Control Systems (A-MGCS), and Mobile Grid technologies. Interactive web tools, such as the Grid Compliance Estimator, are provided for simulation and demonstration purposes only.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">2. Eligibility & Authority</h3>
          <p>
            You must be at least the age of majority in your jurisdiction to use our Website. By using this Website, you represent and warrant that you have the legal capacity and authority to enter into these Terms, either on your own behalf or on behalf of the corporate entity you represent.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">3. Intellectual Property Rights</h3>
          <p>
            All content, features, algorithms, system architectures, software, trade names, and tools—including the Grid Adaptr™ name, A-MGCS™, Mobile Grid™, and the Interactive Grid Compliance Estimator—are the exclusive property of ADAPTR Inc. or its licensors and are protected under Canadian, U.S., and international copyright, patent, and trademark laws.
          </p>
          <p className="pt-1">
            You may not copy, reproduce, distribute, reverse-engineer, modify, or create derivative works of our Services, proprietary hardware specifications, or software tools without express prior written consent from ADAPTR Inc.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">4. User Conduct & Prohibited Uses</h3>
          <p>When using our Website and Services, you agree not to:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Violate any applicable local, national, or international law or regulation.</li>
            <li>Attempt to gain unauthorized access to, damage, or disrupt any server, computer, or database connected to our Services.</li>
            <li>Use automated devices, robots, or spiders to scrape, monitor, or copy materials from the Website.</li>
            <li>Input malicious code, viruses, or harmful data into our simulators or contact forms.</li>
          </ul>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">5. Disclaimer of Warranties</h3>
          <p className="uppercase text-[11px] font-bold text-sienna">
            The Website, Simulators, Estimators, and all content are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
          </p>
          <p>
            ADAPTR Inc. disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that simulation tools will be error-free or 100% accurate. All telemetry and upgrade cost estimates are for demonstration purposes only and do not constitute binding engineering or financial advice.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">6. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, ADAPTR Inc., its directors, employees, or partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages—including loss of profits, loss of data, equipment downtime, or grid failures—arising out of your use of the Services.
          </p>
          <p className="pt-1">
            In no event shall ADAPTR Inc.&apos;s total cumulative liability exceed the total amount paid by you to ADAPTR Inc. (if any) for accessing this Website in the twelve (12) months preceding the claim.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">7. Third-Party Links</h3>
          <p>
            Our Website may contain links to third-party partners or programs (such as Natural Resources Canada, EDF Renewables, or Stantec). ADAPTR Inc. assumes no responsibility for the content, privacy policies, or practices of third-party websites.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">8. Governing Law & Jurisdiction</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any legal proceeding arising out of or related to these Terms shall be brought exclusively in the courts located in <strong>Toronto, Ontario, Canada</strong>, and you consent to the personal jurisdiction of such courts.
          </p>

          <h3 className="text-sm font-bold text-white uppercase tracking-wider pt-2">9. Contact Information</h3>
          <p>
            For questions or legal notices regarding these Terms, please contact us at:
          </p>
          <p className="text-sienna font-bold">
            ADAPTR Inc.<br />
            411 Richmond St E, Toronto, ON, Canada<br />
            Email: <a href="mailto:info@adaptrenergy.com" className="underline">info@adaptrenergy.com</a>
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-cerulean/20 shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="bg-sienna hover:bg-sienna/90 text-white font-extrabold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN FOOTER COMPONENT ────────────────────────────────────────────────
export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

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
            <ul className="space-y-2.5 text-sm font-medium">
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
              {/* LinkedIn & YouTube Icons */}
              <li className="pt-0 flex items-center gap-3 text-bdazzled dark:text-cerulean">
                <a
                  href="https://www.linkedin.com/company/adaptre-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-sienna dark:hover:text-lightcyan transition-colors"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@adaptrinc.4352"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:text-sienna dark:hover:text-lightcyan transition-colors"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
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
                href="mailto:info@adaptrenergy.com"
                className="flex items-center gap-2 text-gunmetal dark:text-cerulean hover:text-sienna dark:hover:text-lightcyan transition-colors"
              >
                <Mail className="w-4 h-4 text-sienna shrink-0" />
                <span>info@adaptrenergy.com</span>
              </a>

              <a
                href="tel:1-833-423-2787"
                className="flex items-center gap-2 text-gunmetal dark:text-cerulean hover:text-sienna dark:hover:text-lightcyan transition-colors"
              >
                <Phone className="w-4 h-4 text-sienna shrink-0" />
                <span>1-833-423-2787</span>
              </a>

              <div className="flex items-start gap-2 text-bdazzled dark:text-cerulean/80">
                <MapPin className="w-4 h-4 text-sienna shrink-0 mt-0.5" />
                <span>411 Richmond St E, Toronto</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Modal Triggers */}
        <div className="pt-8 border-t border-cerulean/20 dark:border-bdazzled/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-bdazzled/80 dark:text-cerulean/70">
          <p>© {new Date().getFullYear()} ADAPTR Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-sienna dark:hover:text-lightcyan transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-sienna dark:hover:text-lightcyan transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modals */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <TermsOfServiceModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </footer>
  );
}