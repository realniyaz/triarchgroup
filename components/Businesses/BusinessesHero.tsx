import BusinessEcosystemGraphic from "@/components/Businesses/BusinessEcosystemGraphic";

export default function BusinessesHero() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: TEXT (UNCHANGED CONTENT) */}
        <div>
          <p className="text-sm font-medium text-blue-600 mb-4">
            OUR ECOSYSTEM
          </p>

          <h1 className="text-5xl font-bold leading-tight max-w-3xl">
            Diverse Businesses,{" "}
            <span className="text-blue-600">Unified Vision</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            From enterprise solutions to emerging technology ventures,
            our portfolio spans the full spectrum of digital transformation.
          </p>
        </div>

        {/* RIGHT: BUSINESS GRAPHIC */}
        <div className="hidden lg:block">
          <BusinessEcosystemGraphic />
        </div>

      </div>
    </section>
  );
}
