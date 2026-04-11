import Footer from "@/components/layout/Footer";
import Ecosystem from "@/components/sections/Ecosystem";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import Projects from "@/components/sections/Projects";
import Technology from "@/components/sections/Technology";
import WhyTriarch from "@/components/sections/WhyTriarch";
export const metadata = {
  title: "Triarch Group — Technology-Driven Business Group",
  description:
    "Triarch Group builds scalable, technology-driven enterprises across industries with a long-term vision.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars/>
      <Ecosystem/>
      <Technology/>
      <WhyTriarch/>
      <Projects/>
      <FinalCTA />
      <Footer />

    </>
  );
}
