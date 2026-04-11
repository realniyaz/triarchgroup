"use client";

import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function EnterpriseSolutionsPage() {
  return (
    <>
      <section className="bg-slate-50 py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6"
        >
          <p className="text-sm font-medium text-blue-600 mb-4">
            ENTERPRISE SOLUTIONS
          </p>
          <h1 className="text-5xl font-bold max-w-4xl">
            Scalable Solutions for{" "}
            <span className="text-blue-600">Modern Enterprises</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            We design and deploy enterprise-grade systems that support
            large-scale operations, security, and long-term growth.
          </p>
        </motion.div>
      </section>


<section className="bg-white py-32">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    {/* Header */}
    <div className="max-w-3xl mx-auto mb-20">
      <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-4 py-2 rounded-full">
        Enterprise Solutions
      </span>
      <h2 className="text-4xl font-bold text-slate-900 mt-6 mb-6">
        Infrastructure Built for Global Scale
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed">
        We provide the architecture and resilience necessary for organizations to 
        innovate without compromising on security or performance.
      </p>
    </div>

    {/* Modern Horizontal Grid */}
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Pillar 1 */}
      <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-500 group text-left">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-slate-500 uppercase tracking-tighter">High Availability</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Reliability at Scale</h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          Engineered to maintain 99.99% uptime across global regions, ensuring mission-critical operations never stall.
        </p>
        <div className="h-1 w-12 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
      </div>

      {/* Pillar 2 */}
      <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-200/40 transition-all duration-500 group text-left">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-slate-500 uppercase tracking-tighter">Compliant Frameworks</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Adaptive Governance</h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          Integrated frameworks that evolve with international regulations, giving you granular control over data sovereignty.
        </p>
        <div className="h-1 w-12 bg-indigo-600 group-hover:w-full transition-all duration-500"></div>
      </div>

      {/* Pillar 3 */}
      <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-cyan-200/40 transition-all duration-500 group text-left">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
          <span className="text-sm font-medium text-slate-500 uppercase tracking-tighter">Seamless Connect</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Integration</h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          Modern API-first approach that bridges the gap between legacy stability and the speed of modern cloud stacks.
        </p>
        <div className="h-1 w-12 bg-cyan-600 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  </div>
</section>
      <Footer/>
    </>
  );
}
