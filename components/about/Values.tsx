"use client";

import {
  Award,
  Users,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const values = [
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in everything we do.",
    icon: Award,
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of diverse teams working together.",
    icon: Users,
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency and ethical principles.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description:
      "We embrace technology to solve complex challenges.",
    icon: Cpu,
  },
];

export default function Values() {
  return (
    <section className="bg-[#050b1a] py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-widest text-blue-500 mb-3">
            OUR VALUES
          </p>
          <h2 className="text-4xl font-bold text-white">
            What Drives Us
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="
                relative
                rounded-2xl
                border border-white/10
                bg-white/5
                p-10
                text-center
                transition-all duration-300
                hover:border-white/20
                hover:-translate-y-1
              "
            >
              {/* Icon */}
              <div className="
                w-14 h-14 mx-auto mb-6
                rounded-xl
                bg-[#0b1530]
                flex items-center justify-center
              ">
                <v.icon className="text-blue-500" size={26} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {v.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
