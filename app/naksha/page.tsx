"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  BrainCircuit, 
  Target, 
  Sparkles, 
  LineChart, 
  ArrowRight, 
  Cpu,
  GraduationCap,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

/**
 * NAKSHA - AI BASED EDUCATION PLATFORM
 * Fully Corrected Single-file Architecture
 */

// Explicitly typing variants to resolve the ease: number[] error
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" // Changed from array to string to ensure TS compatibility
    } 
  }
};

export default function NakshaPage() {
  const features = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI Personalization",
      desc: "An adaptive engine that reshapes the curriculum in real-time based on your grasping power.",
      color: "from-indigo-600 to-violet-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Coaching",
      desc: "Strategic prep for competitive exams using predictive modeling to identify weak areas.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Growth Analytics",
      desc: "Visualizing the learning journey with deep-dive metrics that go beyond simple grades.",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Skill Synthesis",
      desc: "Bridging the gap between traditional degrees and the high-demand digital economy.",
      color: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[120px] -mr-80 -mt-80 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] -ml-40 -mb-40 opacity-60" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-10 shadow-xl shadow-slate-200"
            >
              <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Powered by Intelligence
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-8xl font-bold text-slate-900 mb-8 leading-[1] tracking-tight"
            >
              Learn with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500">
                Pure Precision.
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Naksha is a cognitive map for your future. We use AI to personalize every chapter, every test, and every skill to match your unique learning pace.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-3 group">
                Join Waitlist <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold flex items-center justify-center gap-2">
                <GraduationCap className="w-5 h-5" /> Launching 2026
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURE SECTION --- */}
      <section className="py-24 lg:py-40 bg-[#fbfbfd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h4 className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase mb-6">
                The Ecosystem
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                Beyond the <br />Classroom.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                Traditional education follows a fixed path. Naksha builds a unique roadmap for you, adapting as you grow and ensuring mastery at every step.
              </p>
              <ul className="space-y-4">
                {['Personalized AI Tutoring', 'Performance Forecasting', 'Digital Skill Certification'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-indigo-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="grid sm:grid-cols-2 gap-6"
              >
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="group p-8 lg:p-10 rounded-[40px] border border-slate-200/60 bg-white hover:border-indigo-200 hover:shadow-[0_40px_80px_-15px_rgba(79,70,229,0.1)] transition-all duration-500"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-[50px] bg-slate-900 p-12 lg:p-24 relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              Ready to redefine your <br />
              <span className="text-indigo-400 italic font-serif">Learning Curve?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
              Join the pioneers who are using AI to master their craft. Early access for beta learners is opening soon.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-12 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-indigo-500 hover:text-white transition-all shadow-xl"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
<Footer/>
    </main>
  );
}