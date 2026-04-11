import EcosystemHero from "@/components/ecosystem/EcosystemHero";
import EcosystemPillars from "@/components/ecosystem/EcosystemPillars";
import EcosystemModel from "@/components/ecosystem/EcosystemModel";
import EcosystemCTA from "@/components/ecosystem/EcosystemCTA";
import Footer from "@/components/layout/Footer";

export default function EcosystemPage() {
  return (
    <>
      <EcosystemHero />
      <EcosystemPillars />
      <EcosystemModel />
      <EcosystemCTA />
      <Footer/>
    </>
  );
}
