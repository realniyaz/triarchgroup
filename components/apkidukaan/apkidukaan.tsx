"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  PackageCheck, 
  Smartphone, 
  Globe2, 
  ArrowRight, 
  Rocket 
} from 'lucide-react';
import Link from 'next/link';

export default function ApkidukaanLanding() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Store className="w-6 h-6" />,
      title: "Digital Storefront",
      desc: "Create your own branded online store in minutes with no technical skills required.", //
      color: "blue"
    },
    {
      icon: <PackageCheck className="w-6 h-6" />,
      title: "Order Management",
      desc: "Streamlined order processing and inventory management for seamless operations.", //
      color: "indigo"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile First",
      desc: "Fully responsive design optimized for mobile shopping experiences.", //
      color: "cyan"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Wide Reach",
      desc: "Expand your customer base beyond geographical limitations.", //
      color: "emerald"
    }
  ];

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 skew-x-12 -mr-20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Rocket className="w-3 h-3" /> Launching Soon // apkidukaan {/* */}
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Your Digital <span className="text-blue-600">Storefront</span> {/* */}
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-10 leading-relaxed">
              Empowering local businesses to establish and grow their online presence. {/* */}
              apkidukaan is a comprehensive e-commerce platform designed for small and medium businesses. {/* */}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2">
                Register Interest <ArrowRight className="w-5 h-5" /> {/* */}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What to Expect</h2> {/* */}
            <p className="text-slate-500 max-w-2xl mx-auto">
              A powerful suite of tools designed to help your business thrive in the digital marketplace. {/* */}
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 bg-slate-50 text-blue-600 shadow-sm`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 italic">Stay Updated</h2> {/* */}
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Be the first to know when apkidukaan launches. Contact us to register your interest. {/* */}
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all">
            Contact Us Now {/* */}
          </Link>
        </div>
      </section>
    </div>
  );
}