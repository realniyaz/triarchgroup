import Link from "next/link";

export default function PartnerCTA() {
  return (
    <section className="bg-[#050b1a] py-28 text-center text-white">
      <h2 className="text-4xl font-bold mb-4">
        Let’s Build the Future Together
      </h2>
      <p className="text-slate-400 mb-10">
        Ready to explore partnership opportunities? Reach out and let’s
        discuss how we can create value together.
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center justify-center
                   bg-blue-600 px-8 py-4 rounded-xl font-medium
                   hover:bg-blue-700 transition"
      >
        Start a Conversation →
      </Link>
    </section>
  );
}
