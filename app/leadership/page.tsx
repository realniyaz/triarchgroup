import Leadership from "@/components/about/Leadership";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        label="LEADERSHIP"
        title="Leadership with"
        highlight="Vision & Accountability"
        description="Triarch Group is led by founders and operators with deep experience across strategy, technology, and execution."
      />

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-slate-600 max-w-3xl text-lg mx-auto text-center">
  Our leadership philosophy is centered on long-term value creation,
  disciplined execution, and responsible governance. Each business
  within the Triarch ecosystem is guided by experienced leaders with
  clear accountability.
</p>
        </div>
      </section>
      <Leadership/>
      <Footer/>
    </>
  );
}
