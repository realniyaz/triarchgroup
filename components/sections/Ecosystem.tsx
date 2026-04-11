"use client";

import { motion } from "framer-motion";

const ecosystem = [
  {
    tag: "ERP & Systems",
    title: "Enterprise Solutions",
    description:
      "End-to-end enterprise resource planning solutions that streamline operations and drive efficiency.",
    icon: "📊",
  },
  {
    tag: "SaaS Products",
    title: "Cloud Platforms",
    description:
      "Scalable cloud-native applications serving millions of users across diverse industries.",
    icon: "☁️",
  },
  {
    tag: "Advisory Services",
    title: "Strategic Consulting",
    description:
      "Expert guidance on digital transformation, technology strategy, and business optimization.",
    icon: "💡",
  },
  {
    tag: "Innovation Lab",
    title: "Digital Ventures",
    description:
      "Building and scaling new digital products with startup agility and enterprise discipline.",
    icon: "🚀",
  },
  {
    tag: "Analytics & AI",
    title: "Data Intelligence",
    description:
      "Advanced analytics and AI-driven insights that enable smarter decision-making.",
    icon: "🧠",
  },
  {
    tag: "Cloud & DevOps",
    title: "Infrastructure",
    description:
      "Secure, scalable infrastructure and DevOps systems designed for reliability and growth.",
    icon: "🛠️",
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-4">
              OUR ECOSYSTEM
            </p>

            <h2 className="text-4xl font-bold leading-tight">
              Building Scalable
              <br />
              <span className="text-blue-600">Enterprises</span>
            </h2>
          </div>

          <a
            href="/businesses"
            className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
          >
            View All Businesses ↗
          </a>
        </div>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ecosystem.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="
                group
                relative
                bg-white
                rounded-3xl
                p-8
                border
                border-slate-200/70
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:bg-blue-50/40
              "
            >
              {/* Tag */}
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-6">
                {item.tag}
              </span>

              {/* Icon */}
              <div className="text-3xl mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
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
                  rounded-b-3xl
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
