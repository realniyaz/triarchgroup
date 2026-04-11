import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";

export default function GovernancePage() {
  return (
    <>
      <PageHero
        label="GOVERNANCE"
        title="Built on"
        highlight="Strong Governance"
        description="Governance at Triarch Group ensures transparency, compliance, and long-term institutional integrity."
      />

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Accountability & Oversight
            </h3>
            <p className="text-slate-600">
              Clear governance structures ensure every business operates with
              responsibility, compliance, and ethical discipline.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Risk & Compliance
            </h3>
            <p className="text-slate-600">
              We proactively manage operational, financial, and regulatory
              risks through structured controls and audits.
            </p>
          </div>
        </div>
      </section>

        <section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Strategic Synergy
      </h3>
      <p className="text-slate-600">
        We leverage the collective strength of our ecosystem to drive 
        cross-sector innovation and shared operational excellence.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">
        Human Capital
      </h3>
      <p className="text-slate-600">
        Our success is built on empowering high-performing leaders and 
        fostering a culture of continuous development and meritocracy.
      </p>
    </div>
  </div>
</section>

      <Footer/>
    </>
  );
}
