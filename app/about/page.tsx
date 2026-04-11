import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import Leadership from "@/components/about/Leadership";
import Values from "@/components/about/Values";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "About Us — Triarch Group",
  description:
    "Learn about Triarch Group’s vision, leadership, and long-term approach to building world-class enterprises.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Leadership />
      <Values />
      <AboutCTA />
      <Footer />
    </>
  );
}
