import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "Services — Triarch Group",
  description:
    "Enterprise technology, digital transformation, and scalable solutions by Triarch Group.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
      <Footer/>
    </>
  );
}
