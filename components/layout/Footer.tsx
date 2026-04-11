import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050b1a] text-slate-300">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-white">
              Triarch<span className="text-blue-500">Group</span>
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            A technology-driven business group building scalable enterprises.
            We combine strategic vision with operational excellence to create
            lasting value for our partners and stakeholders.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 pt-2">
            <SocialIcon href="https://www.linkedin.com/company/triarchgroup/">
              <Linkedin size={18} />
            </SocialIcon>
            
            
            <SocialIcon href="https://www.instagram.com/triarch_group/">
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/profile.php?id=61572116851109">
              <Facebook size={18} />
            </SocialIcon>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-5">Company</h4>
          <ul className="space-y-3 text-sm">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/businesses">Our Businesses</FooterLink>
            <FooterLink href="/leadership">Leadership</FooterLink>
            <FooterLink href="/governance">Governance</FooterLink>
            <FooterLink href="/Careers">Careers</FooterLink>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4 className="text-white font-semibold mb-5">Solutions</h4>
          <ul className="space-y-3 text-sm">
            <FooterLink href="/solutions/enterprise">
              Enterprise Solutions
            </FooterLink>
            <FooterLink href="/solutions/digital-transformation">
              Digital Transformation
            </FooterLink>
            <FooterLink href="/solutions/technology-consulting">
              Technology Consulting
            </FooterLink>
            <FooterLink href="/solutions/cloud-infrastructure">
              Cloud & Infrastructure
            </FooterLink>
          </ul>
        </div>

        {/* CONNECT */}
        <div className="space-y-5">
          <h4 className="text-white font-semibold">Connect</h4>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-blue-500 mt-0.5" />
              <span>Remotely Operated</span>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={16} className="text-blue-500 mt-0.5" />
              <div>
                <p>+91 93159 56745</p>
                <p>+91 95690 96741</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Triarch Group. All rights reserved.</p>

          <div className="flex gap-6">
            <BottomLink href="/privacy">Privacy Policy</BottomLink>
            <BottomLink href="/terms">Terms of Service</BottomLink>
            <BottomLink href="/legal">Legal</BottomLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- helpers ---------- */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-slate-400 hover:text-white transition"
      >
        {children}
      </Link>
    </li>
  );
}

function BottomLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link
      href={href}
      className="hover:text-white transition"
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
        w-9 h-9 rounded-full bg-white/5
        flex items-center justify-center
        text-slate-300
        hover:bg-blue-500/20
        hover:text-blue-400
        transition
      "
    >
      {children}
    </Link>
  );
}
