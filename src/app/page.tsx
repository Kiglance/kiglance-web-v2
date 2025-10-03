import ContactSection from '@/components/ContactSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kiglance - Professional Web Development & Digital Solutions',
  description:
    'Leading web development agency in Kigali, Rwanda. We create stunning websites, mobile apps, and digital solutions that drive business growth.',
  alternates: {
    canonical: '/',
  },
};

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
