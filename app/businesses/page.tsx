import BusinessesHero from "@/components/Businesses/BusinessesHero";
import BusinessSection from "@/components/Businesses/BusinessSection";
import BusinessesCTA from "@/components/Businesses/BusinessesCTA";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "Our Businesses — Triarch Group",
  description:
    "Explore Triarch Group’s diverse portfolio of technology-driven businesses and ventures.",
};

export default function BusinessesPage() {
  return (
    <>
      <BusinessesHero />

      <BusinessSection
        category="ERP & Business Systems"
        title="Enterprise Solutions"
        description="Comprehensive enterprise resource planning solutions that unify operations, streamline workflows, and drive organizational efficiency at scale."
        bullets={[
          "Custom ERP Development",
          "Business Process Automation",
          "Legacy System Modernization",
          "Enterprise Integration",
        ]}
        image="/businesses/enterprise-solutions.png"
      />

      <BusinessSection
        reverse
        category="SaaS & Cloud Products"
        title="Digital Platforms"
        description="Scalable cloud-native applications serving millions of users across healthcare, fintech, logistics, and enterprise collaboration."
        bullets={[
          "Multi-tenant Architecture",
          "Real-time Analytics",
          "API-first Design",
          "White-label Solutions",
        ]}
        image="/businesses/digital-platforms.png"
      />

      <BusinessSection
        category="Advisory & Transformation"
        title="Strategic Consulting"
        description="Expert guidance on digital transformation, technology strategy, and operational excellence for Fortune 500 companies."
        bullets={[
          "Digital Strategy",
          "Change Management",
          "Technology Assessment",
          "Performance Optimization",
        ]}
        image="/businesses/strategic-consulting.png"
      />

      <BusinessSection
        reverse
        category="DevOps & Platform Engineering"
        title="Cloud Infrastructure"
        description="Enterprise-grade infrastructure services ensuring security, scalability, and reliability for mission-critical workloads."
        bullets={[
          "Cloud Migration",
          "CI/CD Pipelines",
          "Kubernetes & Containers",
          "Security & Compliance",
        ]}
        image="/businesses/cloud-infrastructure.png"
      />

      <BusinessSection
        category="Data Intelligence"
        title="AI & Analytics"
        description="Advanced analytics and AI-powered insights that transform raw data into strategic advantage and automated decision-making."
        bullets={[
          "Machine Learning",
          "Data Pipelines",
          "Predictive Analytics",
          "Business Intelligence",
        ]}
        image="/businesses/ai-analytics.png"
      />

      <BusinessSection
        reverse
        category="Innovation & Investment"
        title="Digital Ventures"
        description="Incubating next-generation digital products and providing strategic investment to technology startups with global potential."
        bullets={[
          "Startup Incubation",
          "Market Acceleration",
          "Strategic Investment",
          "Global Expansion",
        ]}
        image="/businesses/digital-ventures.png"
      />

      <BusinessesCTA />
      <Footer />
    </>
  );
}
