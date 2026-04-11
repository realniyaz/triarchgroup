import AboutSystemGraphic from "@/components/about/AboutSystemGraphic";

export default function AboutHero() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: TEXT (UNCHANGED CONTENT) */}
        <div>
          <p className="text-sm font-medium text-blue-600 mb-4">
            ABOUT TRIARCH GROUP
          </p>

          <h1 className="text-5xl font-bold leading-tight max-w-3xl">
            Building the Future of{" "}
            <span className="text-blue-600">Enterprise Technology</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            Triarch Group is a technology-driven business group that combines
            strategic vision with operational excellence to build and scale
            world-class enterprises.
          </p>
        </div>

        {/* RIGHT: GRAPHIC */}
        <div className="hidden lg:block">
          <AboutSystemGraphic />
        </div>

      </div>
    </section>
  );
}
