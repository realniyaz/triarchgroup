"use client";

import { motion } from "framer-motion";

export default function PageHero({
  label,
  title,
  highlight,
  description,
}: {
  label: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <section className="bg-slate-50 py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-sm font-medium text-blue-600 mb-4">
          {label}
        </p>

        <h1 className="text-5xl font-bold leading-tight max-w-4xl">
          {title}{" "}
          {highlight && (
            <span className="text-blue-600">{highlight}</span>
          )}
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
