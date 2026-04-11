"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ================= BACKGROUND LAYERS ================= */}

      {/* Layer 1: Base vertical gradient */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/60 to-transparent pointer-events-non" />

      {/* Layer 2: Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Layer 3: Radial focus behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_35%,rgba(31,94,255,0.12),transparent_60%)]" />

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-sm text-slate-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Technology-Driven Business Group
          </div>

          {/* Heading */}
          <h1 className="heading text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Triarch <span className="text-blue-600">Group</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            A technology-driven business group building scalable enterprises.
            We combine strategic vision with technological innovation to
            create long-term value across industries.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/ecosystem">
            <button
              className="
                px-6 py-2.5 rounded-xl
  bg-gradient-to-b from-[#1F5EFF] to-[#184ED8]
  text-white font-medium
  shadow-[0_10px_25px_rgba(31,94,255,0.35)]
  transition-all duration-200
  hover:-translate-y-[1px]
  hover:shadow-[0_16px_35px_rgba(31,94,255,0.45)]
  active:translate-y-[1px]
  active:shadow-[0_6px_15px_rgba(31,94,255,0.35)]
              "
            >
              Explore Our Ecosystem →
            </button></Link>
            <Link href="/partner">
            <button className="px-8 py-3.5 rounded-xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition">
              Partner With Us
            </button>
            </Link>
            
          </div>

          {/* STATS */}
          <div className="mt-16 flex gap-12">
            <Stat value="5+" label="Years Experience" />
            <Stat value="5" label="Business Verticals" />
            <Stat value="100+" label="Projects" />
          </div>
        </motion.div>

        {/* RIGHT: VISUAL PLACEHOLDER */}
            <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative flex justify-center"
        >
        <Image
            src="/hero-orbit.svg"
            alt="Strategy Technology Execution"
            width={520}
            height={520}
            priority
        />
        </motion.div>
      </div>
      {/* Hero bottom fade */}
<div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />

    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  );
}

function Pillar({ label }: { label: string }) {
  return (
    <div className="w-32 h-32 bg-white rounded-2xl shadow-md flex items-center justify-center font-medium">
      {label}
    </div>
  );
}
