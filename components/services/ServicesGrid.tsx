import { Code2, Briefcase } from "lucide-react";
import ServiceCard from "@/components/services/ServicesCard";

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 pb-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <ServiceCard
          icon={<Code2 />}
          title="Software Development"
          subtitle="Custom solutions built for scale"
          description="We design and develop tailored software solutions that drive business growth. From web applications to mobile platforms, our team delivers high-quality, scalable products."
          features={[
            "Custom Web & Mobile Applications",
            "API Development & Integration",
            "Cloud-Native Architecture",
            "Performance Optimization",
          ]}
        />

        <ServiceCard
          icon={<Briefcase />}
          title="IT Consulting"
          subtitle="Strategic technology guidance"
          description="Navigate the digital landscape with confidence. Our expert consultants help you make informed technology decisions that align with your business objectives."
          features={[
            "Technology Strategy & Roadmapping",
            "Digital Transformation Advisory",
            "System Architecture Review",
            "Process Optimization",
          ]}
        />

      </div>
    </section>
  );
}
