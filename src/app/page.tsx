import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessPreview } from "@/components/ProcessPreview";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessPreview />
      <PortfolioPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
