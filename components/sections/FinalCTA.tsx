"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050b1a]">
      
      {/* GRID BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)]
          bg-[size:44px_44px]
          z-0
          pointer-events-none
        "
      />

      {/* RADIAL FADE */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),transparent_60%)]
          z-0
          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Build{" "}
            <span className="text-blue-500">Something Great?</span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Whether you're an investor, partner, or enterprise client,
            we're ready to explore how Triarch Group can add value to
            your vision.
          </p>

          <div className="mt-12 flex justify-center gap-4">
            <Link href="/contact">
            <button className="
              px-8 py-4 rounded-xl
              bg-gradient-to-r from-blue-600 to-blue-500
              text-white font-medium
              shadow-[0_20px_40px_rgba(37,99,235,0.45)]
              hover:-translate-y-[2px]
              transition-all
            ">
              Start a Conversation <ArrowRight className="inline ml-2" size={18} />
            </button>
            </Link>
            <Link href="/ecosystem">
            <button className="
              px-8 py-4 rounded-xl
              border border-white/20
              text-white
              hover:bg-white/10
              transition
            ">
              Explore Our Ecosystem
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
