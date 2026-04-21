import React from 'react';

const leaders = [
  { 
    name: "Niyaz Ahmed", 
    role: "Co-founder & CEO", 
    bio: "Visionary lead driving the intersection of AI and intuitive design." 
  },
  { 
    name: "Sachin Maurya", 
    role: "Co-founder & CTO", 
    bio: "Architecting scalable ecosystems with cutting-edge data engineering." 
  },
];

export default function Leadership() {
  return (
    <section className="bg-[#fbfbfd] py-24 lg:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <h4 className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4">
              Our Founding Team
            </h4>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              Built by builders, <br />
              <span className="text-slate-400">driven by data.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
            Combining deep technical expertise with a relentless focus on user-centric innovation.
          </p>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={leader.name}
              className="group relative bg-white border border-slate-200/60 rounded-[32px] p-10 lg:p-16 transition-all duration-700 hover:border-blue-500/30 overflow-hidden"
            >
              {/* Subtle Background Accent */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  {/* High-end Monogram */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-2xl font-light group-hover:bg-blue-600 transition-colors duration-500 shadow-2xl shadow-slate-900/20">
                      {leader.name[0]}
                    </div>
                    {/* Floating Decorative Ring */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl border border-slate-900/10 scale-125 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
                  </div>
                  
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300 group-hover:text-blue-500 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                    {leader.name}
                  </h3>
                  <p className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                    {leader.role}
                  </p>
                  <p className="text-slate-500 leading-relaxed text-sm pt-4 max-w-sm">
                    {leader.bio}
                  </p>
                </div>

                {/* Animated "Explore" line */}
                <div className="mt-12 h-[1px] w-full bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}