"use client";

import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TechnologyConsultingPage() {
  return (
    <>
      <section className="bg-slate-50 py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <p className="text-sm font-medium text-blue-600 mb-4">
            TECHNOLOGY CONSULTING
          </p>
          <h1 className="text-5xl font-bold max-w-4xl">
            Strategic Guidance for{" "}
            <span className="text-blue-600">Complex Systems</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            Our consulting services help organizations make informed,
            future-ready technology decisions.
          </p>
        </motion.div>
      </section>

      <section className="bg-slate-50 py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 relative">
    
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-24">
      <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
        Strategic Guidance for the Digital Age
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed">
        We partner with enterprise leaders to architect future-proof strategies, 
        ensuring technology initiatives deliver measurable business objectives.
      </p>
    </div>

    <div className="relative">
      {/* Central Animated Graphic (Hidden on mobile for better layout) */}
      <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Pulsing Outer Rings */}
          <div className="absolute inset-0 bg-blue-100/40 rounded-full animate-ping duration-[3000ms]"></div>
          <div className="absolute inset-10 bg-indigo-50/60 rounded-full animate-pulse"></div>
          
          {/* Core Logo/Brain Box */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl rotate-45 flex items-center justify-center shadow-2xl shadow-blue-500/40 border border-white/20 relative z-10">
            <div className="-rotate-45 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
          </div>

          {/* Floating Connectivity Nodes */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-400 rounded-full shadow-lg shadow-slate-400/50"></div>
        </div>
      </div>

      {/* Flashy Cards Grid */}
      <div className="grid md:grid-cols-2 gap-x-48 gap-y-12 relative z-20">
        
        {/* Card 1: Enterprise Architecture */}
        <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default">
          <div className="flex flex-col items-start gap-5">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Architecture</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Designing resilient, scalable tech stacks that form the bedrock of future innovation and digital agility.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Scalability & Growth */}
        <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default">
          <div className="flex flex-col items-start gap-5">
            <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Scalability & Growth</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Building solutions that effortlessly expand with your business demands, from startup to global enterprise.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Cybersecurity & Trust */}
        <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default">
          <div className="flex flex-col items-start gap-5">
            <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cybersecurity & Trust</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Implementing multi-layered defense mechanisms to protect sensitive data and ensure global compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Execution & Delivery */}
        <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default">
          <div className="flex flex-col items-start gap-5">
            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m9.01 16.5 2.08 2.08a1 1 0 0 0 1.41 0l4.49-4.49"/></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Execution & Delivery</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Turning strategy into reality through disciplined project management and high-velocity execution.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  );
}
