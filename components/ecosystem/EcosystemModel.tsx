"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Network, Sparkles } from "lucide-react";

export default function EcosystemModel() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-medium text-blue-600 mb-4">
            OPERATING MODEL
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Designed for{" "}
            <span className="text-blue-600">Scale & Longevity</span>
          </h2>

          <p className="text-slate-600 text-lg mb-4">
            Triarch Group functions as a strategic orchestrator —
            aligning leadership, capital, technology, and execution
            across all entities.
          </p>

          <p className="text-slate-600">
            This structure enables rapid innovation without
            compromising governance, resilience, or long-term value.
          </p>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            h-[420px]
            rounded-3xl
            bg-gradient-to-br from-blue-50 to-slate-100
            flex items-center justify-center
            shadow-inner
          "
        >
          <ModelVisual />
        </motion.div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* RIGHT BLOCK VISUAL COMPONENT                                        */
/* ------------------------------------------------------------------ */

function ModelVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative
        bg-white
        rounded-3xl
        p-10
        border border-slate-200
        overflow-hidden
      "
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 pointer-events-none" />

      {/* FLOATING ICONS */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center"
      >
        <Database size={22} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-14 left-16 w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center"
      >
        <Network size={22} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-16 right-14 w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center"
      >
        <Sparkles size={22} />
      </motion.div>

      {/* CENTER CORE */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className="
            w-20 h-20
            rounded-2xl
            bg-blue-600
            text-white
            flex items-center justify-center
            shadow-xl
            mb-6
          "
        >
          <Cpu size={32} />
        </div>

        <h3 className="text-xl font-semibold mb-2">
          AI Decision Core
        </h3>

        <p className="text-sm text-slate-600 max-w-xs">
          Orchestrating data, intelligence, and automation into
          a unified enterprise-grade AI system.
        </p>
      </div>
    </motion.div>
  );
}
