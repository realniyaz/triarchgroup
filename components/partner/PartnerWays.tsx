"use client";
import {
  Briefcase,
  Globe,
  ShieldCheck,
  Users,
  Lightbulb,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const ways = [
  {
    title: "Strategic Investors",
    desc: "Join us in funding high-growth digital ventures with scalable models.",
    icon: Briefcase,
  },
  {
    title: "Global Partners",
    desc: "Collaborate across international markets and joint ventures.",
    icon: Globe,
  },
  {
    title: "Technology Alliances",
    desc: "Build integrated solutions combining engineering strengths.",
    icon: ShieldCheck,
  },
  {
    title: "Channel Partners",
    desc: "Resell and distribute our enterprise solutions globally.",
    icon: Users,
  },
  {
    title: "Innovation Partners",
    desc: "Co-create next-gen products through R&D and incubation.",
    icon: Lightbulb,
  },
  {
    title: "Enterprise Clients",
    desc: "Engage us for large-scale digital transformation projects.",
    icon: Building2,
  },
];

export default function PartnerWays() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-medium text-blue-600 text-center mb-3">
          HOW WE PARTNER
        </p>

        <h2 className="text-4xl font-bold text-center mb-16">
          Multiple Ways to{" "}
          <span className="text-blue-600">Collaborate</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((w, index) => (
            <motion.div
  key={w.title}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: true }}
  whileHover={{
    y: -4,
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.08)",
  }}
  className="
    bg-white
    rounded-3xl
    p-10
    border border-slate-200/60
    transition-all
  "
>
  {/* ICON */}
  <div
    className="
      w-14 h-14
      rounded-2xl
      bg-blue-50
      text-blue-600
      flex items-center justify-center
      mb-8
    "
  >
    <w.icon size={24} strokeWidth={1.8} />
  </div>

  {/* TITLE */}
  <h3 className="font-semibold text-xl mb-3 text-slate-900">
    {w.title}
  </h3>

  {/* DESCRIPTION */}
  <p className="text-base text-slate-600 leading-relaxed">
    {w.desc}
  </p>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
