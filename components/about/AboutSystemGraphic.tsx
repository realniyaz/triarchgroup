"use client";

import { motion } from "framer-motion";

export default function AboutSystemGraphic() {
  return (
    <div className="relative h-[420px] rounded-3xl bg-white shadow-sm overflow-hidden">

      {/* soft background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />

      {/* orbit rings */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-16 rounded-full border border-blue-200/40" />
        <div className="absolute inset-32 rounded-full border border-blue-200/30" />
      </motion.div>

      {/* nodes */}
      {[
        { top: "20%", left: "60%" },
        { top: "45%", left: "30%" },
        { top: "70%", left: "55%" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-blue-500"
          style={pos}
          animate={{ y: [-6, 6, -6] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* center core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-blue-600/10 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-blue-600" />
        </div>
      </div>

    </div>
  );
}
