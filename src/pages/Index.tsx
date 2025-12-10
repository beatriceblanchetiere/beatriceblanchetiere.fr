import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <ClientsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
