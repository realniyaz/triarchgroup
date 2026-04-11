"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Paintbrush, 
  Layout, 
  Award, 
  Users, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import Link from 'next/link';

export default function SDecorLanding() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Custom Design",
      desc: "Personalized interior design solutions tailored to your unique style and preferences." 
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Complete Solutions",
      desc: "End-to-end home decor services from concept to professional installation." 
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      desc: "Curated selection of high-quality furniture and décor items for modern living." 
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Consultation",
      desc: "Professional interior designers to guide you through every step of your transformation." 
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 skew-x-12 -mr-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" /> Launching Soon // S-Decor
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Transform Your <span className="text-blue-600">Space</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Premium interior design and home décor solutions for modern living spaces. 
              S-Decor brings together expert designers, quality products, and innovative ideas to transform your house into a dream home.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2 group">
                Register Interest
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What to Expect</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Comprehensive interior solutions designed to elevate your living experience.
            </p>
          </div>

          {/* Corrected Grid: Uses lg:grid-cols-4 to keep all 4 cards on one row on large screens */}
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
                className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12 bg-slate-50 text-blue-600 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {feature.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Premium Service</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 italic">Stay Updated</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Be the first to know when S-Decor launches. Contact us to register your interest.
          </p>
          <Link href="/contact" className="inline-block px-12 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}