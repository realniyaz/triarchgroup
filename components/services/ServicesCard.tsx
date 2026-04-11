import { ArrowRight, CheckCircle } from "lucide-react";

type Props = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
};

export default function ServiceCard({
  icon,
  title,
  subtitle,
  description,
  features,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">

      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-blue-600 mt-1">{subtitle}</p>

      <p className="mt-4 text-slate-600 text-sm leading-relaxed">
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle className="text-blue-600 mt-0.5" size={16} />
            {f}
          </li>
        ))}
      </ul>

      <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:gap-3 transition-all">
        Learn More <ArrowRight size={16} />
      </button>

    </div>
  );
}
