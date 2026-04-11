"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

const reasons = [
  {
    title: "Strong Governance",
    description:
      "We operate with clear governance structures, accountability frameworks, and compliance-first thinking.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable by Design",
    description:
      "Our businesses are engineered to scale across markets, geographies, and customer segments.",
    icon: TrendingUp,
  },
  {
    title: "Leadership-Driven",
    description:
      "Founder-led execution with experienced leadership across strategy, technology, and operations.",
    icon: Users,
  },
  {
    title: "Global Outlook",
    description:
      "We design solutions for global relevance, remote operations, and cross-border growth.",
    icon: Globe,
  },
];

export default function WhyTriarch() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT: CONTENT */}
        <div>
          <p className="text-sm font-medium text-blue-600 mb-4">
            WHY TRIARCH GROUP
          </p>

          <h2 className="text-4xl font-bold leading-tight">
            Built for Long-Term
            <span className="text-blue-600"> Value Creation</span>
          </h2>

          <p className="mt-6 text-slate-600 max-w-xl">
            Triarch Group is designed as a long-term institution, not a
            short-term venture. Our focus is on sustainable growth, strong
            governance, and building businesses that endure.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-blue-600" size={20} />
                </div>

                <div>
                  <h3 className="font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: VISUAL BLOCK */}
        {/* RIGHT: FOUNDATION CARD */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <div className="
    bg-white
    rounded-3xl
    p-12
    border
    border-slate-200/70
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-[2px]
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
  ">
    
    {/* Title */}
    <h3 className="text-lg font-semibold mb-10">
      Our Foundation
    </h3>

    {/* 2x2 Grid */}
    <div className="grid grid-cols-2 gap-x-16 gap-y-12">
      <FoundationItem
        title="Strategy"
        subtitle="Vision-Driven Approach"
      />
      <FoundationItem
        title="Technology"
        subtitle="Innovation at Core"
      />
      <FoundationItem
        title="Execution"
        subtitle="Results That Matter"
      />
      <FoundationItem
        title="Global"
        subtitle="Remotely Operated"
      />
    </div>

    {/* Divider */}
    <div className="my-12 h-px bg-slate-200" />

    {/* Footer */}
    <p className="text-center text-slate-600">
      Building sustainable enterprises for the future
    </p>
  </div>
</motion.div>


      </div>
    </section>
  );
}

function FoundationItem({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <p className="text-2xl font-bold text-blue-600 mb-2">
        {title}
      </p>
      <p className="text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}
