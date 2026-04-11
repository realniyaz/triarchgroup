import ContactHero from "@/components/Contact/ContactHero";
import ContactFormPanel from "@/components/Contact/ContactFormPanel";
import ContactInfoPanel from "@/components/Contact/ContactInfoPanel";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "Contact — Triarch Group",
  description:
    "Get in touch with Triarch Group to discuss partnerships, services, or business opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-slate-50 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-16 items-start">
          <ContactFormPanel />
          <ContactInfoPanel />
        </div>
      </section>
      <Footer/>
    </>
  );
}
