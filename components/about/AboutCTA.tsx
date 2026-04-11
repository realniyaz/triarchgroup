import Link from "next/link";
export default function AboutCTA() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want to Learn More?
        </h2>

        <p className="text-slate-600 mb-8">
          Explore our ecosystem of businesses or get in touch to
          discuss partnership opportunities.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/businesses">
          <button className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
            Explore Businesses →
          </button>
          </Link>

          <Link href="/contact">
          <button className="px-6 py-3 rounded-md border hover:bg-white transition">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
