import ContactSection from '@/components/ContactSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main className="h-full w-full">
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
