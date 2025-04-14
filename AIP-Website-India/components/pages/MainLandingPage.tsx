import AboutSection from "../Sections/AboutSection";
import CTASection from "../Sections/CTASection";
import HeroSection from "../Sections/HeroSection";
import SolutionSection from "../Sections/SolutionSection";
import TestimonialsSection from "../Sections/TestimonialsSection";
import WorkshopSection from "../Sections/WorkshopSection";

export default function MainLandingPage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection></HeroSection>

      {/* About Section */}
      <AboutSection></AboutSection>

      {/* Workshop Section */}
      <WorkshopSection></WorkshopSection>

      {/* Solutions Section */}
      <SolutionSection></SolutionSection>

      {/* Testimonials Section */}
      <TestimonialsSection></TestimonialsSection>

      {/* CTA Section */}
      <CTASection></CTASection>
    </main>
  );
}
