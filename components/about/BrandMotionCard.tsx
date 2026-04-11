"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandMotionCard() {
  return (
    <div className="relative h-[320px] rounded-3xl bg-white overflow-hidden shadow-[0_30px_80px_rgba(37,99,235,0.15)]">
      
      {/* Ambient Glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.25), transparent 65%)",
        }}
      />

      {/* Logo */}
      <motion.div
        className="relative z-10 flex items-center justify-center h-full"
        animate={{
          y: [-6, 6, -6],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/triarch.png"   // 🔴 change if your file name differs
          alt="Triarch Group Logo"
          width={500}
          height={500}
          priority
        />
      </motion.div>
    </div>
  );
}
