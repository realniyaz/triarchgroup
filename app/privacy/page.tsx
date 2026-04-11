import Footer from '@/components/layout/Footer';
import React from 'react';

export default function PrivacyPolicyPage() {
  const sections = [
    { id: 'collection', title: 'Data Collection' },
    { id: 'usage', title: 'How We Use Data' },
    { id: 'security', title: 'Security Protocols' },
    { id: 'rights', title: 'Your Rights' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-md">
                Legal Framework
              </span>
              <h1 className="text-5xl font-extrabold text-slate-900 mt-4 mb-4">
                Privacy Policy
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                At Triarch Group, we treat data privacy as a fundamental architectural requirement. 
                This policy outlines our rigorous standards for data collection, processing, and protection.
              </p>
            </div>
            <div className="text-slate-400 text-sm font-mono pb-2">
              Last Updated: February 2026
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-32 space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">On this page</p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-2 py-1 text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all border-l-2 border-transparent hover:border-blue-600"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content Body */}
          <div className="max-w-3xl space-y-20">
            
            <section id="introduction">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Commitment to Transparency</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Triarch Group ("we," "us," or "our") operates with a privacy-by-design philosophy. We ensure that our ecosystem of enterprise solutions adheres to the highest global standards of data sovereignty, including GDPR and CCPA compliance.
              </p>
            </section>

            <section id="collection" className="scroll-mt-32">
              <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Collection</h2>
                <div className="space-y-4 text-slate-600">
                  <p>We collect information necessary to provide high-performance services, including:</p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-blue-600">
                    <li><strong className="text-slate-900">Identity Data:</strong> Full name, professional title, and organization.</li>
                    <li><strong className="text-slate-900">Technical Data:</strong> IP addresses, browser telemetry, and system performance logs.</li>
                    <li><strong className="text-slate-900">Usage Data:</strong> Interaction metrics with our enterprise interfaces.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="usage" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Your data is used exclusively to optimize operational efficiency and ensure system security. We do not sell, trade, or monetize your personal information to third-party advertisers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Service Optimization</h4>
                  <p className="text-slate-500 text-xs">Improving UI/UX and system response times.</p>
                </div>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Threat Detection</h4>
                  <p className="text-slate-500 text-xs">Monitoring for anomalous activity and security breaches.</p>
                </div>
              </div>
            </section>

            <section id="security" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Security Protocols</h2>
              <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl font-mono text-sm leading-relaxed relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <p className="mb-4">Data is encrypted at rest using AES-256 and in transit via TLS 1.3. Our infrastructure undergoes quarterly SOC 2 Type II audits to ensure absolute integrity.</p>
                <div className="flex gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-slate-700"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-slate-700"></span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer Contact Callout */}
      <footer className="bg-white border-t border-slate-200 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Privacy Inquiries</h3>
          <p className="text-slate-600 mb-8">
            If you have questions regarding our data practices or wish to exercise your data rights, 
            contact our Data Protection Officer.
          </p>
          <a href="contact" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors">
            Contact DPO
          </a>
        </div>
      </footer>
        <Footer/>
    
    </div>
  );
}