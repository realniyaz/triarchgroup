import Image from "next/image";

type Props = {
  category: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  reverse?: boolean;
};

export default function BusinessSection({
  category,
  title,
  description,
  bullets,
  image,
  reverse = false,
}: Props) {
  return (
    <section className="py-32 bg-white">
      <div
        className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div>
          <span className="inline-block mb-4 text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600">
            {category}
          </span>

          <h2 className="text-3xl font-bold mb-4">
            {title}
          </h2>

          <p className="text-slate-600 mb-6 max-w-xl">
            {description}
          </p>

          <ul className="grid grid-cols-2 gap-y-3 text-sm text-slate-600 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                {b}
              </li>
            ))}
          </ul>

          <button className="text-sm font-medium text-blue-600 hover:underline">
            Learn More →
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative h-[420px] rounded-3xl bg-slate-50 shadow-sm flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-10"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
