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
    name: "S-Decor",
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
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            In Development
          </span>

          <h2 className="text-4xl font-bold">
            Our Ongoing Projects
          </h2>

          <p className="mt-6 text-slate-600">
            Exciting ventures currently in development. Stay tuned for the
            launch of these innovative platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
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
                  bg-white
                  rounded-3xl
                  p-12
                  border
                  border-slate-200/70
                  transition-all
                  duration-300
                  hover:-translate-y-[6px]
                  hover:border-blue-300
                  hover:shadow-[0_30px_80px_rgba(31,94,255,0.18)]
                  hover:bg-gradient-to-br
                  hover:from-blue-50/40
                  hover:to-white
                "
              >
                {/* Status */}
                <span className="absolute top-6 right-6 text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                  {project.status}
                </span>

                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={64}
                    height={64}
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    {project.name}
                  </h3>

                  <p className="text-blue-600 font-medium mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-slate-600 max-w-md mx-auto">
                    {project.description}
                  </p>
                </div>

                {/* CTA */}
                
                <div className="mt-10 flex justify-center">
                  <Link href={project.href}>
                  <button
                    className="
                      px-6 py-3
                      rounded-xl
                      border border-blue-600
                      text-blue-600
                      font-medium
                      inline-flex items-center gap-2
                      transition-all
                      duration-200
                      group-hover:bg-blue-600
                      group-hover:text-white
                    "
                  >
                    Learn More <ArrowRight size={16} />
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
