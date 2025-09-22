import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CaloriesSection from "@/components/CaloriesSection";
import IntegrationSection from "@/components/IntegrationSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import DelayedContent from "@/components/DelayedContent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DelayedContent delayInSeconds={80}>
        <CaloriesSection />
        <IntegrationSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <PricingSection />
        <Footer />
      </DelayedContent>
    </div>
  );
};

export default Index;
