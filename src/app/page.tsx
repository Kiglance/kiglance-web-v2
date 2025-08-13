import FeaturedProjects from '@/components/FeaturedProjects';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <main className="h-full w-full">
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
    </main>
  );
}
