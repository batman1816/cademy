import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SubjectFilter from "@/components/SubjectFilter";
import WhyCademySection from "@/components/WhyCademySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <div className="bg-black">
        <SubjectFilter />
        <WhyCademySection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
