import Link from "next/link";
export default function BusinessesCTA() {
  return (
    <section className="bg-[#050b1a] py-32 text-center text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Partner?
        </h2>

        <p className="text-slate-400 mb-10">
          Whether you're looking for technology solutions or investment
          opportunities, we'd love to explore how we can work together.
        </p>
        <Link href="/contact">
        <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
          Start a Conversation →
        </button>
        </Link>
      </div>
    </section>
  );
}
