"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Lightbulb, Globe } from "lucide-react";

const pillars = [
  {
    title: "Strategy & Governance",
    desc: "Clear decision frameworks, accountability, and long-term value creation.",
    icon: ShieldCheck,
  },
  {
    title: "Technology Platforms",
    desc: "Scalable infrastructure powering enterprise and digital ventures.",
    icon: Cpu,
  },
  {
    title: "Innovation Engine",
    desc: "Continuous experimentation through R&D, incubation, and venture building.",
    icon: Lightbulb,
  },
  {
    title: "Global Partnerships",
    desc: "Collaborative growth across markets, geographies, and ecosystems.",
    icon: Globe,
  },
];

export default function EcosystemPillars() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-16"
        >
          How the{" "}
          <span className="text-blue-600">Ecosystem Works</span>
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 24px 60px rgba(59,130,246,0.12)",
              }}
              className="
                bg-white
                rounded-3xl
                p-10
                border border-slate-200
                transition-all
              "
            >
              {/* ICON */}
              <div
                className="
                  w-12 h-12
                  rounded-xl
                  bg-blue-100
                  text-blue-600
                  flex items-center justify-center
                  mb-6
                "
              >
                <p.icon size={22} strokeWidth={1.8} />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg mb-3 text-slate-900">
                {p.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
