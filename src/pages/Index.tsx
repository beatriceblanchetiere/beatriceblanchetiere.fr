import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import EnjeuxSection from "@/components/EnjeuxSection";
import MethodeSection from "@/components/MethodeSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ClientsSection />
      <EnjeuxSection />
      <MethodeSection />
      <ServicesSection />
      <ExpertiseSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
