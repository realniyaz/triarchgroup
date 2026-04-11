import Footer from '@/components/layout/Footer';
import React from 'react';

export default function TermsOfServicePage() {
  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'usage', title: 'Acceptable Use' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'termination', title: 'Service Termination' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase bg-indigo-50 px-3 py-1 rounded-md">
                Governance & Compliance
              </span>
              <h1 className="text-5xl font-extrabold text-slate-900 mt-4 mb-4">
                Terms of Service
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                These terms govern the use of Triarch Group’s enterprise ecosystem. 
                By accessing our services, you agree to our operational standards and legal frameworks.
              </p>
            </div>
            <div className="text-slate-400 text-sm font-mono pb-2">
              Version: 2.4.0 // Feb 2026
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-32 space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">Agreement Sections</p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-2 py-1 text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all border-l-2 border-transparent hover:border-indigo-600"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content Body */}
          <div className="max-w-3xl space-y-20">
            
            <section id="acceptance" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Acceptance of Terms</h2>
              <div className="prose prose-slate">
                <p className="text-slate-600 leading-relaxed">
                  By utilizing Triarch Group’s infrastructure, software, or advisory services, you enter into a binding legal agreement. If you are entering into this agreement on behalf of a company, you represent that you have the authority to bind such entity to these terms.
                </p>
              </div>
            </section>

            <section id="usage" className="scroll-mt-32">
              <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Acceptable Use Policy</h2>
                <div className="space-y-6 text-slate-600 text-sm">
                  <p>Users are strictly prohibited from utilizing Triarch resources for:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                      <div className="w-5 h-5 bg-red-100 text-red-600 rounded flex items-center justify-center mt-0.5 font-bold">!</div>
                      <p><strong className="text-slate-900">Security Probing:</strong> Unauthorized stress testing or vulnerability scanning.</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                      <div className="w-5 h-5 bg-red-100 text-red-600 rounded flex items-center justify-center mt-0.5 font-bold">!</div>
                      <p><strong className="text-slate-900">Resource Abuse:</strong> Intentional degradation of service performance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="liability" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                To the maximum extent permitted by law, Triarch Group shall not be liable for any indirect, incidental, or consequential damages resulting from service interruptions or data processing delays.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                <p className="text-amber-800 text-sm italic">
                  "Triarch Group provides infrastructure 'as-is' with an uptime commitment defined specifically within individual Service Level Agreements (SLAs)."
                </p>
              </div>
            </section>

            <section id="termination" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Service Termination</h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to suspend or terminate access to our ecosystem immediately, without prior notice, if we determine a breach of security protocols or non-compliance with these terms.
              </p>
            </section>

          </div>
        </div>
      </main>

      
      <Footer/>
    </div>
  );
}