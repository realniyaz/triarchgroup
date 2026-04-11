"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Cpu,
  Database,
  Network,
  Sparkles,
} from "lucide-react";

const technologies = [
  {
    title: "Cloud-Native Architecture",
    description:
      "Scalable, resilient systems built on AWS, Azure, and GCP using cloud-native best practices.",
    icon: Cloud,
  },
  {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security frameworks with compliance-first architecture and risk mitigation.",
    icon: Shield,
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent automation and AI-driven solutions that optimize operations and decision-making.",
    icon: Sparkles,
  },
  {
    title: "High-Performance Systems",
    description:
      "Optimized backend systems designed for high availability, low latency, and massive scale.",
    icon: Cpu,
  },
  {
    title: "Data Platforms",
    description:
      "Robust data infrastructure enabling analytics, insights, and real-time intelligence.",
    icon: Database,
  },
  {
    title: "Distributed Infrastructure",
    description:
      "Global infrastructure engineered for reliability, fault tolerance, and growth.",
    icon: Network,
  },
];

export default function Technology() {
  return (
    <section className="relative bg-[#050b1a] py-32 text-white overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        
<div className="max-w-3xl mx-auto text-center">
  <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide">
    TECHNOLOGY & INNOVATION
  </p>

  <h2 className="text-4xl font-bold leading-tight">
    Powered by
    <span className="text-blue-600"> Modern Technology</span>
  </h2>

  <p className="mt-6 text-slate-600">
    Our technology stack is designed to support enterprise-scale operations,
    rapid innovation, and long-term sustainability across all business
    verticals.
  </p>
</div>


        {/* Cards */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-6">
                <tech.icon className="text-blue-400" size={22} />
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {tech.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
