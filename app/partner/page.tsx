import PartnerHero from "@/components/partner/PartnerHero";
import PartnerWays from "@/components/partner/PartnerWays";
import PartnerBenefits from "@/components/partner/PartnerBenefits";
import PartnerCTA from "@/components/partner/PartnerCTA";
import Footer from "@/components/layout/Footer";

export default function PartnerPage() {
  return (
    <>
      <PartnerHero />
      <PartnerWays />
      <PartnerBenefits />
      <PartnerCTA />
      <Footer/>
    </>
  );
}
