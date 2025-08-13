import ContactSection from '@/components/ContactSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <main className="h-full w-full">
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <ContactSection />
      <Footer />
    </main>
  );
}
