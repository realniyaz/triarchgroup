"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export default function EcosystemCTA() {
  return (
    <section className="py-28 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="rounded-3xl bg-white border
                        shadow-[0_40px_120px_rgba(59,130,246,0.12)]
                        p-16 text-center relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br
                          from-blue-50 to-transparent" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-blue-100
                            text-blue-600 flex items-center
                            justify-center mx-auto mb-6">
              <Handshake size={28} />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Join Our Ecosystem
            </h3>

            <p className="text-slate-600 mb-8">
              Start a conversation about how we can collaborate
              to build long-term, scalable value together.
            </p>

            <Link
              href="/partner"
              className="inline-flex items-center
                         bg-blue-600 text-white
                         px-8 py-4 rounded-xl
                         font-medium hover:bg-blue-700
                         transition"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
