"use client";

import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function DigitalTransformationPage() {
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
            DIGITAL TRANSFORMATION
          </p>
          <h1 className="text-5xl font-bold max-w-4xl">
            Transforming Businesses Through{" "}
            <span className="text-blue-600">Technology</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            We help organizations modernize operations, systems, and
            customer experiences through strategic digital initiatives.
          </p>
        </motion.div>
      </section>

      <section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Centered Heading Block */}
    <div className="max-w-3xl mx-auto text-center mb-20">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        Execution with Precision
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed">
        Our approach balances rapid innovation with operational stability,
        ensuring transformation initiatives deliver measurable impact 
        without disrupting your core business velocity.
      </p>
    </div>

    {/* Flashy Cards Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
        <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          {/* Icon Placeholder (e.g., Zap/Bolt) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Agile Integration</h3>
        <p className="text-slate-600 leading-relaxed">
          Deploying modern solutions through iterative phases that allow for 
          rapid feedback loops and immediate value realization.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
        <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          {/* Icon Placeholder (e.g., Shield/Check) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Risk-Mitigated Growth</h3>
        <p className="text-slate-600 leading-relaxed">
          Proprietary frameworks designed to identify and isolate operational 
          risks before they impact your existing production environment.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
        <div className="w-12 h-12 bg-slate-900 rounded-lg mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          {/* Icon Placeholder (e.g., BarChart) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Impact Measurement</h3>
        <p className="text-slate-600 leading-relaxed">
          Moving beyond vanity metrics to track real-world performance, 
          ROI, and scalability benchmarks across your enterprise.
        </p>
      </div>

    </div>
  </div>
</section>`

`
<Footer/>
    </>
  );
}
