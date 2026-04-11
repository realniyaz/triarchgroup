"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnerBenefits() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-blue-600 mb-4">
            WHY PARTNER WITH TRIARCH
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Built for{" "}
            <span className="text-blue-600">Mutual Growth</span>
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>• Access to diversified technology ecosystem</li>
            <li>• Shared R&D and innovation resources</li>
            <li>• Global market expansion opportunities</li>
            <li>• Dedicated partnership management</li>
            <li>• Co-branded go-to-market strategies</li>
          </ul>
        </motion.div>

        {/* RIGHT CARD */}
        <div
  className="
    relative
    rounded-[32px]
    p-14
    bg-gradient-to-br from-white via-white to-blue-50
    border border-slate-200/60
    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    overflow-hidden
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_30px_80px_rgba(37,99,235,0.15)]
  "
>
  {/* SOFT GLOW BACKGROUND */}
  <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />

  {/* CONTENT */}
  <div className="relative text-center max-w-md mx-auto">
    {/* ICON */}
    <div className="flex justify-center mb-6">
      <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center">
        🤝
      </div>
    </div>

    <h3 className="text-2xl font-semibold mb-4">
      Join Our Ecosystem
    </h3>

    <p className="text-base text-slate-600 mb-8 leading-relaxed">
      Start a conversation about how we can work together to
      create something extraordinary.
    </p>

    <Link
      href="/contact"
      className="
        inline-flex items-center justify-center gap-2
        bg-blue-600 text-white
        px-8 py-4
        rounded-xl
        font-medium
        hover:bg-blue-700
        transition
      "
    >
      Get in Touch →
    </Link>
  </div>
</div>

      </div>
    </section>
  );
}
