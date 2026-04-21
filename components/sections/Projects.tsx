"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "apkidukaan",
    tagline: "Your Digital Storefront",
    description:
      "A comprehensive e-commerce platform empowering local businesses to establish their online presence.",
    logo: "/projects/apkidukaan-.png",
    status: "Coming Soon",
    href: "/apkidukaan",
  },
  {
    name: "Naksha",
    tagline: "The Future of Learning",
    description:
      "An AI-driven education platform designed to personalize learning paths and optimize student performance.",
    logo: "/projects/naksha.jpg", // Ensure this path is correct
    status: "Coming Soon",
    href: "/naksha",
  },
  {
    name: "Servenest",
    tagline: "Transform Your Space",
    description:
      "Premium interior design and home décor solutions for modern living spaces.",
    logo: "/projects/sdecor.png",
    status: "Coming Soon",
    href: "/sdecor",
  },
];

export default function Projects() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            In Development
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Our Ongoing Projects
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Exciting ventures currently in development. Stay tuned for the
            launch of these innovative platforms.
          </p>
        </div>

        {/* Cards Grid - Optimized for 3 items */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className="
                  relative
                  h-full
                  bg-white
                  rounded-[32px]
                  p-10
                  border
                  border-slate-200/70
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-400/50
                  hover:shadow-[0_40px_80px_-15px_rgba(31,94,255,0.12)]
                  flex flex-col
                "
              >
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Project 0{index + 1}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                    {project.status}
                  </span>
                </div>

                {/* Logo Section */}
                <div className="mb-8 flex items-center justify-center h-16 w-16 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-500 overflow-hidden">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={48}
                    height={48}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-blue-600 text-sm font-semibold mb-4 tracking-wide">
                    {project.tagline}
                  </p>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-10">
                  <Link href={project.href} className="inline-block w-full">
                    <button
                      className="
                        w-full
                        px-6 py-4
                        rounded-2xl
                        border border-slate-200
                        text-slate-900
                        text-sm
                        font-bold
                        inline-flex items-center justify-center gap-2
                        transition-all
                        duration-300
                        group-hover:bg-slate-900
                        group-hover:text-white
                        group-hover:border-slate-900
                      "
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}