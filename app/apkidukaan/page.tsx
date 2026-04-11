import ApkidukaanLanding from "@/components/apkidukaan/apkidukaan";
import Footer from "@/components/layout/Footer";

// Metadata for SEO - specifically for apkidukaan
export const metadata = {
  title: "apkidukaan | Your Digital Storefront", // 
  description: "Empowering local businesses to establish and grow their online presence with comprehensive e-commerce tools.", // [cite: 11, 12]
};

export default function ApkidukaanPage() {
  return (
    <main>
      {/* This renders the animated UI we created earlier */}
      <ApkidukaanLanding/>
      <Footer/>
    </main>
  );
}