import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CaloriesSection from "@/components/CaloriesSection";
import IntegrationSection from "@/components/IntegrationSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <CaloriesSection />
      <WhyChooseSection />
      <IntegrationSection />
      <BonusSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
