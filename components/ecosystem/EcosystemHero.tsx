"use client";

import { motion } from "framer-motion";

export default function EcosystemHero() {
  return (
    <section className="bg-slate-50 py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-sm font-medium text-blue-600 mb-4">
          OUR ECOSYSTEM
        </p>

        <h1 className="text-5xl font-bold leading-tight max-w-4xl">
          One Vision.{" "}
          <span className="text-blue-600">Many Strengths.</span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          Triarch Group operates a unified ecosystem of platforms,
          partnerships, and ventures designed to scale innovation
          globally with long-term governance.
        </p>
      </motion.div>
    </section>
  );
}
