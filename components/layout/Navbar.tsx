"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, Linkedin, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- The Architecturally Perfected 3D Logo Element ---
const TriarchLogoElement = () => (
  <svg 
    viewBox="0 0 100 80" 
    className="w-full h-full antialiased" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Primary Gradient for the 3D surface */}
      <linearGradient id="logoGrad" x1="20" y1="20" x2="80" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7DD3FC" /> {/* Light Blue */}
        <stop offset="50%" stopColor="#3B82F6" /> {/* Mid Blue */}
        <stop offset="100%" stopColor="#1D4ED8" /> {/* Dark Blue */}
      </linearGradient>

      {/* Depth Shadow for the interlocking effect */}
      <linearGradient id="depthShadow" x1="50" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="black" stopOpacity="0.3" />
        <stop offset="50%" stopColor="black" stopOpacity="0" />
        <stop offset="100%" stopColor="black" stopOpacity="0.3" />
      </linearGradient>

      {/* Sphere Glow */}
      <radialGradient id="sphereGlow" cx="45%" cy="40%" r="50%">
        <stop offset="0%" stopColor="white" stopOpacity="0.4" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
    </defs>
    
    {/* Left 3D Wing */}
    <path 
      d="M48 15C30 15 15 28 15 45C15 62 30 75 48 75V58C40 58 35 52 35 45C35 38 40 32 48 32V15Z" 
      fill="url(#logoGrad)" 
    />
    <path 
      d="M48 15V32C40 32 35 38 35 45C35 52 40 58 48 58V75C30 75 15 62 15 45C15 28 30 15 48 15Z" 
      fill="url(#depthShadow)" 
    />
    
    {/* Right 3D Wing (Flipped & Interlocked) */}
    <path 
      d="M52 15C70 15 85 28 85 45C85 62 70 75 52 75V58C60 58 65 52 65 45C65 38 60 32 52 32V15Z" 
      fill="url(#logoGrad)" 
    />
    <path 
      d="M52 15V32C60 32 65 38 65 45C65 52 60 58 52 58V75C70 75 85 62 85 45C85 28 70 15 52 15Z" 
      fill="black" 
      fillOpacity="0.1" 
    />
    
    {/* Central Core Sphere */}
    <circle cx="50" cy="45" r="11" fill="#1D4ED8" />
    <circle cx="50" cy="45" r="11" fill="url(#logoGrad)" />
    <circle cx="50" cy="45" r="11" fill="url(#sphereGlow)" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Businesses", href: "/businesses" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/triarchgroup/" },
    { icon: Instagram, href: "https://www.instagram.com/triarch_group/" },
    { icon: MessageCircle, href: "https://wa.me/918796955728" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ease-[0.23,1,0.32,1] ${
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-xl border-b border-gray-100" 
          : "py-8 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between antialiased">
        
        {/* --- Logo Block --- */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <TriarchLogoElement />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base md:text-lg tracking-[-0.04em] text-[#1D1D1F] uppercase leading-none">
              Triarch<span className="text-blue-600 font-light ml-0.5">Group</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-gray-400 mt-1 leading-none">Intelligence Layer</span>
          </div>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-400 hover:text-[#1D1D1F]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="nav-line"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-blue-600"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* --- Social & CTA Cluster --- */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-4 pr-6 border-r border-gray-100">
            {contactLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
              >
                <social.icon size={16} strokeWidth={1.2} />
              </a>
            ))}
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#1D1D1F] text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-lg shadow-gray-200"
          >
            Contact Us <ArrowUpRight size={14} strokeWidth={2} />
          </Link>
        </div>

        {/* --- Mobile Trigger --- */}
        <button
          className="lg:hidden text-[#1D1D1F] flex items-center gap-2 group"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="text-[9px] font-bold uppercase tracking-widest">{mobileOpen ? 'Close' : 'Menu'}</span>
          <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
            {mobileOpen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
          </div>
        </button>
      </nav>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full inset-x-0 bg-white border-b border-gray-100 lg:hidden shadow-2xl overflow-hidden"
          >
            <div className="px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-3xl font-bold tracking-tight ${pathname === link.href ? 'text-blue-600' : 'text-[#1D1D1F]'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 mt-4 border-t border-gray-50 flex items-center justify-between">
                <div className="flex gap-5">
                  {contactLinks.map((social, i) => (
                    <a key={i} href={social.href} className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-[#1D1D1F]">
                      <social.icon size={18} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
                <Link 
                  href="/contact" 
                  onClick={() => setMobileOpen(false)}
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-xs font-bold"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}