import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Scale, 
  Globe, 
  Copyright, 
  Cookie, 
  ShieldAlert 
} from 'lucide-react';
import Footer from '@/components/layout/Footer';

export default function LegalHub() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* --- HEADER SECTION --- */}
      <header className="bg-white border-b border-slate-200 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="max-w-3xl">
            <span className="text-slate-500 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
              Corporate Governance & Trust
            </span>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Legal & Compliance <span className="text-slate-400">Hub</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Triarch Group operates under a rigorous global compliance framework. 
              This portal provides access to our regulatory disclosures, ethical standards, 
              and legal agreements.
            </p>
          </div>
        </div>
      </header>

      {/* --- GRID SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* The Grid: 3 columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Privacy & Data */}
          <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Privacy & Data</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Learn how we protect your personal and enterprise data through encryption and sovereignty protocols.
              </p>
            </div>
            <a href="/privacy" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:gap-2 transition-all">
              View Policy <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Card 2: Terms of Service */}
          <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Terms of Service</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Understand the legal requirements and operational boundaries for utilizing Triarch infrastructure.
              </p>
            </div>
            <a href="/terms" className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:gap-2 transition-all">
              View Terms <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Card 3: Compliance Notices */}
          <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance Notices</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Disclosures regarding SOC 2, ISO 27001, and our adherence to international fintech regulations.
              </p>
            </div>
            <div className="inline-flex items-center w-fit text-[10px] font-bold tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-600 uppercase">
              Audit in Progress
            </div>
          </div>

          {/* Card 4: Code of Conduct */}
          <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Code of Conduct</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Our commitment to ethical AI, environmental responsibility, and fair business practices.
              </p>
            </div>
            <a href="#" className="inline-flex items-center text-sm font-semibold text-cyan-600 hover:gap-2 transition-all">
              Read Statement <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Card 5: Intellectual Property */}
          <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Copyright className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Intellectual Property</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Guidelines regarding our trademarks, patents, and the proprietary architecture of the Triarch ecosystem.
              </p>
            </div>
            <a href="#" className="inline-flex items-center text-sm font-semibold text-amber-600 hover:gap-2 transition-all">
              IP Guidelines <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Card 6: Cookie Preferences */}
          <div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cookie className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cookie Preferences</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Manage how we use localized data and tracking pixels to optimize your enterprise experience.
              </p>
            </div>
            <button className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:gap-2 transition-all text-left">
              Update Settings <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>

        {/* --- CONTACT / REDIRECT SECTION --- */}
        <div className="mt-32 rounded-[3rem] bg-slate-900 p-12 lg:p-20 relative overflow-hidden">
          {/* Subtle Ambient Light Effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-xl">
                <ShieldAlert className="text-blue-400 w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need Specific Documentation?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl leading-relaxed">
              For enterprise-specific MSAs, vendor risk assessments, or specialized 
              compliance requests, please connect with our legal department.
            </p>
            
            <a 
              href="/contact" 
              className="group bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-blue-900/40"
            >
              Contact Our Counsel
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-500 text-xs font-mono tracking-widest uppercase">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Rapid Response</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Direct Legal Access</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Global Compliance</span>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}