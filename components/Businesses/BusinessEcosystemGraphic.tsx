"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: "10%", y: "25%" },
  { x: "60%", y: "15%" },
  { x: "35%", y: "55%" },
  { x: "75%", y: "60%" },
];

export default function BusinessEcosystemGraphic() {
  return (
    <div className="relative h-[420px] rounded-3xl bg-white shadow-sm overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />

      {/* connection lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1="10" y1="25" x2="60" y2="15" stroke="#93c5fd" strokeWidth="0.3" />
        <line x1="60" y1="15" x2="75" y2="60" stroke="#93c5fd" strokeWidth="0.3" />
        <line x1="10" y1="25" x2="35" y2="55" stroke="#93c5fd" strokeWidth="0.3" />
        <line x1="35" y1="55" x2="75" y2="60" stroke="#93c5fd" strokeWidth="0.3" />
      </svg>

      {/* nodes */}
      {nodes.map((n, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-14 rounded-xl bg-white border border-blue-200 shadow-sm"
          style={{ left: n.x, top: n.y }}
          animate={{ y: [-6, 6, -6] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-blue-600" />
          </div>
        </motion.div>
      ))}

      {/* subtle ambient glow */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.35), transparent 70%)",
        }}
      />
    </div>
  );
}
