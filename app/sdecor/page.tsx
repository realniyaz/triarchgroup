import Footer from "@/components/layout/Footer";
import SDecorLanding from "@/components/servenest/sdecor";

export const metadata = {
  title: "Servenest | Transform Your Space",
  description: "Premium interior design and home décor solutions for modern living spaces by Triarch Group.",
};

export default function SDecorPage() {
  return (
    <main>
      <SDecorLanding />
      <Footer/>
    </main>
  );
}