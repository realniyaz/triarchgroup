"use client";

import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function CloudInfrastructurePage() {
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
            CLOUD & INFRASTRUCTURE
          </p>
          <h1 className="text-5xl font-bold max-w-4xl">
            Resilient Infrastructure Built for{" "}
            <span className="text-blue-600">Scale</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            Secure, scalable, and cloud-native infrastructure
            designed to support mission-critical workloads.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Heading & Intro */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Architectural Excellence</span>
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Systems Engineered for <br /> 
          <span className="text-slate-400">Absolute Continuity.</span>
        </h2>
      </div>
      <div className="max-w-md">
        <p className="text-slate-600 text-lg leading-relaxed border-l-2 border-slate-100 pl-6">
          We design infrastructure that prioritizes uptime, performance, and 
          long-term operational efficiency—building the foundation for 
          uninterrupted enterprise growth.
        </p>
      </div>
    </div>

    {/* The "Flashy" Tech Grid */}
    <div className="grid lg:grid-cols-4 gap-4">
      
      {/* Feature 1: Uptime */}
      <div className="group relative bg-slate-900 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <div className="relative z-10">
          <div className="text-blue-400 font-mono text-sm mb-4">01 // RELIABILITY</div>
          <h3 className="text-white text-xl font-bold mb-3">Guaranteed Uptime</h3>
          <p className="text-slate-400 text-sm">Eliminating single points of failure through redundant, self-healing architectures.</p>
        </div>
      </div>

      {/* Feature 2: Performance */}
      <div className="group relative bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-500 hover:border-blue-500">
        <div className="text-slate-400 font-mono text-sm mb-4">02 // SPEED</div>
        <h3 className="text-slate-900 text-xl font-bold mb-3">Peak Performance</h3>
        <p className="text-slate-600 text-sm">Low-latency environments optimized for high-frequency data processing and global delivery.</p>
        <div className="mt-6 flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`h-1 w-full rounded-full ${i < 5 ? 'bg-blue-600' : 'bg-slate-100'}`}></div>
          ))}
        </div>
      </div>

      {/* Feature 3: Efficiency */}
      <div className="group relative bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-500 hover:border-blue-500">
        <div className="text-slate-400 font-mono text-sm mb-4">03 // OPS</div>
        <h3 className="text-slate-900 text-xl font-bold mb-3">Operational Efficiency</h3>
        <p className="text-slate-600 text-sm">Automated resource allocation that reduces overhead while maximizing output.</p>
        <div className="mt-8 flex items-center justify-center">
            <div className="w-full h-px bg-slate-100 relative">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
        </div>
      </div>

      {/* Feature 4: Scalability */}
      <div className="group relative bg-slate-100 rounded-3xl p-8 transition-all duration-500 hover:bg-blue-600 group">
        <div className="text-slate-500 font-mono text-sm mb-4 group-hover:text-blue-200">04 // FUTURE</div>
        <h3 className="text-slate-900 text-xl font-bold mb-3 group-hover:text-white transition-colors">Elastic Growth</h3>
        <p className="text-slate-600 text-sm group-hover:text-blue-50 transition-colors">Infrastructure that expands dynamically as your enterprise footprint broadens.</p>
      </div>

    </div>
  </div>
</section>
<Footer/>
    </>
  );
}
