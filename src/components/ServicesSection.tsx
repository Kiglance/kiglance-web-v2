import React from 'react';
import ServiceCard from './ServiceCard';
import { SectionHeader } from './SectionHeader';

interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ className = '' }) => {
  const services: Service[] = [
    {
      id: 1,
      number: '1',
      title: 'Web Development',
      description:
        'Custom web applications and responsive websites built with modern frameworks and best practices.',
      icon: 'code',
    },
    {
      id: 2,
      number: '2',
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      icon: 'mobile',
    },
    {
      id: 3,
      number: '3',
      title: 'UI/UX Design',
      description:
        'User-centered design solutions that combine aesthetics with functionality for optimal user engagement.',
      icon: 'brush',
    },
    {
      id: 4,
      number: '4',
      title: 'E-Commerce Solutions',
      description:
        'Scalable online stores with secure payment gateways, inventory management, and customer analytics.',
      icon: 'cart',
    },
    {
      id: 5,
      number: '5',
      title: 'Cloud Services',
      description:
        'Cloud infrastructure setup, migration, and management for improved scalability and performance.',
      icon: 'cloud',
    },
    {
      id: 6,
      number: '6',
      title: 'IT Consulting',
      description:
        'Strategic technology consulting to help businesses leverage digital solutions for growth and efficiency.',
      icon: 'light',
    },
  ];

  return (
    <section
      id="services"
      className={`dark:bg-background-2 relative overflow-hidden bg-[#e2e1e1] py-10 lg:py-16 ${className}`}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="What We Offer" subTitle="We can help you with..." />
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service: Service, index: number) => (
            <div key={service.id}>
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
