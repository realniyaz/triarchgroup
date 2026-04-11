"use client";

import { motion } from "framer-motion";
import { BarChart3, Cpu, Zap } from "lucide-react";

const pillars = [
  {
    title: "Strategy",
    description:
      "Long-term vision and market positioning that drives sustainable growth and competitive advantage.",
    icon: BarChart3,
  },
  {
    title: "Technology",
    description:
      "Deep technical expertise across AI, cloud infrastructure, and enterprise systems built to scale.",
    icon: Cpu,
  },
  {
    title: "Execution",
    description:
      "Disciplined delivery and operational excellence that turns strategy into measurable results.",
    icon: Zap,
  },
];

export default function Pillars() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-blue-600 mb-4">
          WHO WE ARE
        </p>

        <h2 className="text-4xl font-bold">
          Three Pillars of <span className="text-blue-600">Excellence</span>
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-slate-600">
          Triarch Group is built on the foundation of strategic clarity,
          technological innovation, and flawless execution. Together, these
          pillars enable us to build and scale world-class enterprises.
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
  key={pillar.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="
    group
    relative
    bg-white
    p-8
    rounded-2xl
    border
    border-slate-200/70
    transition-all
    duration-300
    hover:-translate-y-[2px]
    hover:bg-blue-50/40
    text-left
  "
>
  {/* Icon */}
  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
    <pillar.icon className="text-blue-600" size={24} />
  </div>

  {/* Title */}
  <h3 className="text-xl font-semibold mb-3">
    {pillar.title}
  </h3>

  {/* Description */}
  <p className="text-slate-600 text-sm leading-relaxed">
    {pillar.description}
  </p>

  {/* Bottom accent line */}
  <span
    className="
      absolute
      left-0
      bottom-0
      h-[3px]
      w-0
      bg-blue-600
      rounded-b-2xl
      transition-all
      duration-300
      group-hover:w-full
    "
  />
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
