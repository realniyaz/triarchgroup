"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Linkedin, Instagram, Facebook } from 'lucide-react';
import Footer from '@/components/layout/Footer';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Apkidukaan",
    subtitle: "AI Marketplace",
    description: "Digital bridge for local retail to scale globally with smart automation.",
    longDesc: "A centralized digital ecosystem designed for hosting and scaling online retail. It features AI-driven inventory management and enterprise-grade security protocols.",
    category: "Digital Transformation",
    image: "/projects/apkidukaan-.png",
    link: "https://apki-dukaan.vercel.app/"
  },
  {
    id: 2,
    title: "NRI Realty Fm",
    subtitle: "PropTech CRM",
    description: "Real estate portal serving international investors with AI lead tracking.",
    longDesc: "A sophisticated dashboard managing multi-currency transactions and lead pipelines, specifically tailored for High Net-Worth Individuals.",
    category: "Real Estate",
    image: "/projects/logorealtyfm.png",
    link: "https://nri.realtyfm.com/"
  },
  {
    id: 3,
    title: "Sh. Dhirender Singh",
    subtitle: "Public Governance",
    description: "Transparency and outreach platform for Noida & Jewar constituency.",
    longDesc: "An exclusive platform developed to manage large-scale public outreach, grievance tracking, and real-time development updates.",
    category: "Government",
    image: "/projects/bjp-logo-png.png",
    link: "https://www.dhirendrasingh.in/"
  },
  {
    id: 4,
    title: "Servenest",
    subtitle: "Service Platform",
    description: "Secure marketplace for professional domestic and corporate services.",
    longDesc: "Utilizing intelligent routing to connect certified service providers with luxury residential hubs.",
    category: "Service Ecosystem",
    image: "/projects/sdecor.png",
    link: "/maintanence"
  },
  {
    id: 5,
    title: "Naksha",
    subtitle: "EdTech Brand",
    description: "Typographic education platform focusing on competitive exam prep.",
    longDesc: "Designed with a focus on cognitive load management, Naksha offers AI-synced learning paths for elite students.",
    category: "Education",
    image: "/projects/naksha.jpg",
    link: "/maintanence"
  },
  {
    id: 6,
    title: "Tutified",
    subtitle: "AI Advisory Hub",
    description: "24/7 intelligent advisory layer for educational institutions.",
    longDesc: "A high-conversion environment featuring an advanced NLP engine capable of handling complex administrative queries.",
    category: "Artificial Intelligence",
    image: "/projects/tutified.png",
    link: "http://tutified.triarchgroup.in/"
  },
  {
    id: 7,
    title: "ApnaFarm",
    subtitle: "Beautiful Resort | Uttarakhand",
    description: "24/7 intelligent guest engagement and booking assistance system for luxury resort experiences.",
    longDesc: "A premium AI-powered hospitality ecosystem for ApnaFarm Resort featuring an advanced conversational engine capable of handling guest inquiries, room recommendations, booking assistance, travel guidance, local activity suggestions, and personalized resort experiences with seamless customer interaction.",
    category: "Hospitality",
    image: "/projects/apnafarm.png",
    link: "/maintanence"
  },
  {
    id: 8,
    title: "VYRN",
    subtitle: "Street Wear Brand - By Aryan",
    description: "24/7 AI-powered fashion engagement and customer experience system for modern streetwear culture.",
    longDesc: "A premium digital commerce ecosystem for VYRN featuring an advanced AI-driven interaction engine capable of handling personalized styling recommendations, product discovery, customer engagement, fashion assistance, order support, and high-conversion shopping experiences tailored for the next generation of streetwear consumers.",
    category: "Fashion",
    image: "/projects/vyrn.png",
    link: "/maintanence"
  },
  {
    id: 9,
    title: "Tare",
    subtitle: "Elegance in Every Thread",
    description: "24/7 AI-powered luxury fashion experience system crafted for elegant and modern lifestyle consumers.",
    longDesc: "A sophisticated digital commerce ecosystem for TARÉ featuring an intelligent AI-driven engagement engine capable of delivering personalized fashion recommendations, seamless customer interaction, premium shopping assistance, order support, and curated luxury experiences designed for modern elegance and timeless style.",
    category: "Fashion",
    image: "/projects/tare.jpeg",
    link: "/maintanence"
  },
  {
    id: 10,
    title: "RitiVastra",
    subtitle: "Drapped In Tradition",
    description: "Premium Indian ethnic wear brand celebrating timeless saree traditions with modern elegance.",
    longDesc: "RitiVastra is a premium ethnic fashion brand rooted in the richness of Indian heritage and craftsmanship. Specializing in elegant sarees and traditional wear, the brand blends cultural authenticity with refined contemporary aesthetics.",
    category: "Fashion",
    image: "/projects/Ritivastra.png",
    link: "/maintanence"
  },
  {
    id: 11,
    title: "Nature Homez",
    subtitle: "Premium Real Estate Management",
    description: "24/7 AI-powered property discovery and customer engagement platform for premium real estate experiences.",
    longDesc: "A luxury real estate ecosystem for Nature Homez featuring an intelligent AI-driven engagement engine capable of handling property discovery, personalized investment recommendations, buyer assistance, inquiry management, lead nurturing, and seamless digital experiences across premium residential opportunities in Delhi–NCR and Uttarakhand.",
    category: "Real Estate",
    image: "/projects/nh.png",
    link: "https://nature-homez.vercel.app/"
  },
  {
    id: 12,
    title: "The Sports Front - APP",
    subtitle: "Legends are Returning",
    description: "AI-powered customer engagement platform for sports experience.",
    longDesc: "A luxury Sports ecosystem for THE SPORTS FRONT featuring an intelligent AI-driven engagement engine capable of handling property recommendations, assistance, user management and seamless digital experiences.",
    category: "Artificial Intelligence",
    image: "/projects/TSF - logo.png",
    link: "/maintanence"
  },
  {
  id: 13,
  title: "Gaur Chrysalis 2.0",
  subtitle: "3 & 4 BHK Luxury Apartments",
  description: "Ultra-luxury high-end residential portal engineered for seamless lead acquisition.",
  longDesc: "A premium real estate ecosystem for Gaur Chrysalis featuring an immersive design layout, contextual navigation matrices, clean dynamic model collection modals, and a specialized interactive AI Smart Bot acting as a digital guide for prospective homebuyers.",
  category: "Web Engineering & Marketing Development",
  image: "/logo.png",
  link: "https://gaur-chrysalis.vercel.app/"
}
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Dynamically extract categories to avoid typos and keep it scale-friendly
  const categories = useMemo(() => {
    const unique = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(unique)];
  }, []);

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-white text-[#1D1D1F] min-h-screen selection:bg-blue-600 selection:text-white antialiased">
      
      {/* --- Compact Hero --- */}
      <section className="pt-24 pb-6 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="border-l-2 border-blue-600 pl-6"
        >
          <span className="text-blue-600 font-bold uppercase text-[10px] tracking-widest mb-2 block">Case Studies</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-none">
            Proven <span className="text-gray-300">Excellence.</span>
          </h1>
          <p className="max-w-md text-gray-500 font-medium leading-snug">
            Strategic digital solutions architected for high-impact leaders and global institutions.
          </p>
        </motion.div>
      </section>

      {/* --- Category Switcher (Horizontal Scrolling on Mobile) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-10 overflow-x-auto no-scrollbar scroll-smooth flex items-center py-2">
        <div className="flex gap-2 whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 text-xs md:text-sm font-semibold rounded-full tracking-wide transition-colors duration-300 ${
                activeCategory === cat ? 'text-white' : 'text-gray-500 hover:text-black bg-gray-100'
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* --- Refined 3-Column Grid --- */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-[#F5F5F7] rounded-3xl overflow-hidden cursor-pointer border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image with fixed smaller aspect ratio */}
                  <div className="aspect-[16/10] overflow-hidden bg-gray-200">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>

                  {/* Content: Concise and clean */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-bold tracking-widest uppercase text-blue-600">{project.category}</span>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-1">{project.title}</h3>
                    <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- Networking Strip: Premium Social Connect --- */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[#1D1D1F] rounded-[2rem] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -z-0" />
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-tight">Connect with Triarch</h2>
            <p className="text-gray-500 text-sm font-medium">Join our network of global partners and stakeholders.</p>
          </div>

          <div className="flex gap-3 relative z-10">
            {[
              { Icon: Linkedin, link: "https://www.linkedin.com/company/triarchgroup/" },
              { Icon: Facebook, link: "https://www.facebook.com/profile.php?id=61572116851109" },
              { Icon: Instagram, link: "https://www.instagram.com/triarch_group/" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
              >
                <social.Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- Full-Screen Responsive Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[100]"
            />
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="fixed inset-x-4 bottom-4 top-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-auto md:w-[95%] md:max-w-5xl h-auto md:h-[80vh] max-h-[90vh] bg-white z-[101] rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-3 bg-gray-100/80 backdrop-blur-md rounded-full hover:bg-black hover:text-white transition-all z-50 shadow-sm"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="w-full md:w-1/2 bg-gray-50 aspect-square sm:aspect-video md:aspect-auto h-2/5 md:h-full relative shrink-0">
                <img 
                  src={selectedProject.image} 
                  className="w-full h-full object-cover" 
                  alt={selectedProject.title} 
                />
              </div>

              {/* Content Panel (Independently scrollable on small viewports) */}
              <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto flex flex-col justify-between h-3/5 md:h-full bg-white">
                <div className="mb-6 md:my-auto">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-[9px] mb-2 md:mb-4 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 tracking-tighter leading-tight text-balance">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-medium">
                    {selectedProject.longDesc}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100 md:border-none">
                  <a 
                    href={selectedProject.link} 
                    target={selectedProject.link.startsWith('http') ? "_blank" : "_self"}
                    className="flex items-center justify-center gap-2 bg-[#1D1D1F] text-white w-full py-3.5 md:py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-md text-sm md:text-base"
                  >
                    Launch Live Platform <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <Footer/>
    </div>
  );
}