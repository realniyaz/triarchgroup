import Link from "next/link";
export default function ServicesCTA() {
  return (
    <section className="bg-slate-50 pb-40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-100 p-14 text-center shadow-sm">

          <h3 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>

          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            Let’s discuss how our services can help transform your business
            and drive meaningful results.
          </p>
            <Link href="/contact">
          <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Contact Us Today →
          </button>
          </Link>

        </div>
      </div>
    </section>
  );
}
