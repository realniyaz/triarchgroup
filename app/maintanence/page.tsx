"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';

// --- Precise Raw SVGs for Elite Branding (Replacing Lucide) ---
const LinkedInSVG = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookSVG = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramSVG = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppSVG = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const TriarchLogoElement = () => (
  <svg viewBox="0 0 100 80" className="w-full h-full antialiased" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="20" y1="20" x2="80" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7DD3FC" />
        <stop offset="50%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="depthShadow" x1="50" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="black" stopOpacity="0.3" />
        <stop offset="50%" stopColor="black" stopOpacity="0" />
        <stop offset="100%" stopColor="black" stopOpacity="0.3" />
      </linearGradient>
      <radialGradient id="sphereGlow" cx="45%" cy="40%" r="50%">
        <stop offset="0%" stopColor="white" stopOpacity="0.4" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
    <path d="M48 15C30 15 15 28 15 45C15 62 30 75 48 75V58C40 58 35 52 35 45C35 38 40 32 48 32V15Z" fill="url(#logoGrad)" />
    <path d="M48 15V32C40 32 35 38 35 45C35 52 40 58 48 58V75C30 75 15 62 15 45C15 28 30 15 48 15Z" fill="url(#depthShadow)" />
    <path d="M52 15C70 15 85 28 85 45C85 62 70 75 52 75V58C60 58 65 52 65 45C65 38 60 32 52 32V15Z" fill="url(#logoGrad)" />
    <path d="M52 15V32C60 32 65 38 65 45C65 52 60 58 52 58V75C70 75 85 62 85 45C85 28 70 15 52 15Z" fill="black" fillOpacity="0.1" />
    <circle cx="50" cy="45" r="11" fill="#1D4ED8" />
    <circle cx="50" cy="45" r="11" fill="url(#logoGrad)" />
    <circle cx="50" cy="45" r="11" fill="url(#sphereGlow)" />
  </svg>
);

export default function UnderDevelopmentPage() {
  return (
    <div className="bg-white text-[#1D1D1F] min-h-[90vh] flex flex-col justify-between antialiased selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
      {/* Soft Ambient Vector Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[140px] -z-10 rounded-full" />

      {/* Empty Top Space to align layout perfectly with your Navbar */}
      <div className="h-20" />

      {/* --- Main Informational Core --- */}
      <main className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-grow">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-14 mb-8"
        >
          <TriarchLogoElement />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">System Status // Deployment</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-[#1D1D1F] mb-6">
            Project Under <br /> <span className="text-gray-400">Development.</span>
          </h1>
          <p className="max-w-md mx-auto text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-10">
            Triarch Group engineers are actively finalizing this environment. We are conducting structural integrity, system scaling, and custom AI alignment tests.
          </p>
        </motion.div>

        {/* --- High-End Call to Actions --- */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="/contact"
            className="w-full sm:w-auto bg-[#1D1D1F] text-white px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 transition-all duration-300 text-center shadow-lg shadow-gray-100"
          >
            Initiate Consultation
          </a>
          <a 
            href="https://wa.me/919315956745"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 bg-white text-[#1D1D1F] px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:border-gray-400 transition-all duration-300"
          >
            <WhatsAppSVG />
            Direct Contact
          </a>
        </motion.div>
      </main>

      {/* --- Footer & Clean Raw SVG Social Grid --- */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-10 py-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-gray-400 text-[11px] font-medium tracking-tight text-center sm:text-left">
           Triarch Group. Global Technical Operations.
        </p>

        <div className="flex items-center gap-4">
          {[
            { SVG: LinkedInSVG, href: "https://www.linkedin.com/company/triarchgroup/" },
            { SVG: FacebookSVG, href: "https://www.facebook.com/profile.php?id=61572116851109" },
            { SVG: InstagramSVG, href: "https://www.instagram.com/triarch_group/" }
          ].map((social, i) => (
            <a 
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-[#1D1D1F] hover:text-white transition-all duration-300"
            >
              <social.SVG />
            </a>
          ))}
        </div>
      </footer>
    <Footer/>  
    </div>
    
  );
}