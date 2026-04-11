import BrandMotionCard from "@/components/about/BrandMotionCard";

<div>
  <BrandMotionCard />
</div>

export default function OurStory() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-slate-600 mb-4">
            Founded by three visionary entrepreneurs, Triarch Group was born
            from a shared belief that technology could transform how businesses
            operate and scale globally.
          </p>

          <p className="text-slate-600 mb-4">
            The name “Triarch” represents our three founding pillars:
            Strategy, Technology, and Execution. These principles guide
            every decision we make and every business we build.
          </p>

          <p className="text-slate-600">
            Today, Triarch Group operates across multiple verticals,
            serving enterprise clients worldwide while investing in
            emerging technologies and ambitious founders.
          </p>
        </div>

        {/* RIGHT */}
        <div>
  <BrandMotionCard />
</div>
      </div>
    </section>
  );
}
