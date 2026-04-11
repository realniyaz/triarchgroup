"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Businesses", href: "/businesses" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
  className={`
    sticky top-0 z-50
    transition-all duration-300
    ${
      scrolled
        ? "bg-white/80 backdrop-blur-md border-b shadow-sm"
        : "bg-white/10 backdrop-blur-md"
    }
  `}
>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight">
          Triarch<span className="text-blue-600">Group</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
  const isActive = pathname === link.href;

  return (
    <Link
      key={link.href}
      href={link.href}
      className="relative text-sm font-medium group"
    >
      <span
        className={`transition-colors ${
          isActive ? "text-blue-600" : "text-slate-700 group-hover:text-blue-600"
        }`}
      >
        {link.name}
      </span>

      {/* underline */}
      <span
        className={`
          absolute left-0 -bottom-1 h-[2px] bg-blue-600
          transition-all duration-300
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </Link>
  );
})}

        </div>

        {/* CTAs */}
        <div className="hidden md:flex gap-3">
          <button className="px-6 py-2.5 text-sm rounded-xl
  border border-blue-600 text-blue-600 font-medium
  transition-all duration-200
  hover:-translate-y-[1px]
  hover:bg-blue-50">
            <Link href="/partner">Partner With Us</Link>
          </button>
          <button className="px-6 py-2.5 text-sm rounded-xl
    bg-gradient-to-b from-[#1F5EFF] to-[#184ED8]
    text-white font-medium

    shadow-[0_10px_25px_rgba(31,94,255,0.35)]
    transition-all duration-200 ease-out

    hover:-translate-y-[1px]
    hover:shadow-[0_16px_35px_rgba(31,94,255,0.45)]

    active:translate-y-[1px]
    active:shadow-[0_6px_15px_rgba(31,94,255,0.35)]">
              <Link href="/ecosystem">Explore Ecosystem</Link>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t">
          <div className="px-6 py-6 space-y-4 text-sm font-medium animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block ${
                  pathname === link.href
                    ? "text-blue-600"
                    : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t space-y-3">
              <button className="w-full py-2 border rounded-md">
                Partner With Us
              </button>
              <button className="w-full py-2 bg-blue-600 text-white rounded-md">
                Explore Ecosystem
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
