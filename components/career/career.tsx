"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Mail, Phone, Search, X, ArrowRight, Send, CheckCircle2, User, Code2 } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  note?: string;
}

const CareerPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  const CONTACT_EMAIL = "contact.triarchgroup@gmail.com";
  const CONTACT_PHONE = "+91 8796955728";

  // Updated categories to include 'Tech'
  const categories = ['All', 'Tech', 'Marketing', 'Business', 'Content'];

  // Updated jobs array with the new Full Stack Intern role
  const jobs: Job[] = [
    {
      id: 0,
      title: "Full Stack Developer Intern",
      category: "Tech",
      type: "Remote / Internship",
      note: "Fresher • Startup Experience",
      description: "Join the core founder team to build modern digital products. Must be proficient in React, Next.js, and Python. Offering direct mentorship and project-based or commission-based compensation."
    },
    {
      id: 1,
      title: "Content Creation Associate",
      category: "Content",
      type: "Full-time / Remote",
      description: "Produce high-quality digital content, social media assets, and technical blogs to engage our community."
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      category: "Marketing",
      type: "Full-time",
      description: "Optimize our digital presence through SEO/SEM, lead generation, and performance marketing strategies."
    },
    {
      id: 3,
      title: "Business Development Associate",
      category: "Business",
      type: "Hybrid",
      note: "Female candidates preferred",
      description: "Identify new growth opportunities, manage client relations, and drive Triarch Group's market expansion."
    }
  ];

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openApplyModal = (job: Job) => {
    setActiveJob(job);
    setIsModalOpen(true);
  };

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-24 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden bg-white border-b border-slate-100 z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -right-20 -top-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600 rounded-full blur-[100px] pointer-events-none"
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 mb-6 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-lg"
          >
            Careers at Triarch Group
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter"
          >
            Build what <span className="text-blue-600">Matters.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium"
          >
            Join a tech-driven collective redefining the next chapter of digital evolution.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <div className="max-w-5xl mx-auto px-6 relative z-30 -mt-8 md:-mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-3 md:p-4 flex flex-col md:flex-row gap-4 items-center border border-slate-100 w-full"
        >
          <div className="relative flex-1 w-full group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors size-5" />
            <input 
              type="text"
              placeholder="Search roles (e.g. React, Developer)..."
              className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-transparent rounded-xl md:rounded-2xl focus:bg-white focus:border-blue-500/20 outline-none transition-all text-slate-700 font-bold"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto p-1 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-black transition-all whitespace-nowrap border-2 ${
                  selectedCategory === cat 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200' 
                  : 'bg-white text-slate-400 border-slate-100 hover:border-slate-200 hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Jobs List */}
      <motion.section 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto py-16 md:py-24 px-6 relative z-10"
      >
        <AnimatePresence mode='popLayout'>
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6 md:gap-8">
              {filteredJobs.map((job) => (
                <motion.div 
                  layout
                  variants={itemVars}
                  key={job.id}
                  className="group bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 hover:border-blue-100 transition-all hover:shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5">
                        {job.category === 'Tech' && <Code2 size={12} />} {job.category}
                      </span>
                      {job.note && (
                        <span className="flex items-center gap-2 text-[10px] font-black text-rose-600 bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100 uppercase">
                          <User size={12} className="stroke-[3px]" /> {job.note}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-blue-500 text-xs font-bold mb-4 tracking-wide uppercase">{job.type}</p>
                    <p className="text-slate-500 font-medium leading-relaxed max-w-2xl text-base md:text-lg">
                      {job.description}
                    </p>
                  </div>
                  <button 
                    onClick={() => openApplyModal(job)}
                    className="bg-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl md:rounded-[1.5rem] font-black flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shrink-0 active:scale-95 shadow-lg"
                  >
                    Apply Now <ArrowRight size={20} className="stroke-[3px]" />
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-slate-400 font-bold text-xl">No roles found matching your criteria.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && activeJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-xl rounded-[2.5rem] md:rounded-[3rem] shadow-3xl overflow-hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-8 md:mb-10">
                  <div className="bg-blue-600 p-4 md:p-5 rounded-2xl md:rounded-[1.5rem] text-white shadow-xl shadow-blue-200">
                    <Send size={28} className="stroke-[2.5px]" />
                  </div>
                  <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-all">
                    <X size={24} className="text-slate-400" />
                  </button>
                </div>

                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter leading-none">Apply Direct</h3>
                  <p className="text-blue-600 font-bold text-base md:text-lg">
                    {activeJob.title}
                  </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                      <p className="text-slate-600 font-bold text-base md:text-lg leading-snug">
                        Subject: <span className="text-slate-900">Application: {activeJob.title}</span>
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                      <p className="text-slate-600 font-bold text-base md:text-lg leading-snug">
                        Attach your <span className="text-slate-900">Portfolio/Resume</span>.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Official Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl md:text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors break-all">
                      {CONTACT_EMAIL}
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-slate-900 p-3 rounded-xl text-white"><Phone size={20} /></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">HR Helpline</p>
                      <p className="text-lg font-black text-slate-800">{CONTACT_PHONE}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}?subject=Application: ${activeJob.title}`}
                    className="w-full bg-blue-600 text-white py-5 md:py-6 rounded-2xl md:rounded-[1.8rem] font-black text-lg md:text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95"
                  >
                    Compose Email Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareerPage;