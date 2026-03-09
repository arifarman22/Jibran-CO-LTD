import HeroSection from "@/sections/HeroSection";
import TradingFeaturesSection from "@/sections/TradingFeaturesSection";
import ProductsShowcaseSection from "@/sections/ProductsShowcaseSection";
import ServicesSection from "@/sections/ServicesSection";
import StatsSection from "@/sections/StatsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import CtaSection from "@/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TradingFeaturesSection />
      <ServicesSection />
      <ProductsShowcaseSection />
      <ProjectsSection />
      <StatsSection />
      <CtaSection />
    </>
  );
}
