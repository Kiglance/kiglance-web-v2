'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import CustomSlider from './CustomSlider';
import TestimonialCard, { Testimonial } from './TestimonialCard';

interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
}

interface SliderDotsProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

// Dummy data
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    author: 'Lora Smith',
    position: 'Founding Partner',
  },
  {
    id: 2,
    quote:
      'Working with Kiglance has been an absolute game-changer for our business. Their attention to detail and innovative solutions exceeded our expectations.',
    author: 'James Wilson',
    position: 'CEO',
    company: 'TechStart Inc.',
  },
  {
    id: 3,
    quote:
      'The team at Kiglance delivered a stunning website that perfectly captured our brand vision. Highly professional and creative approach throughout.',
    author: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'Creative Agency',
  },
  {
    id: 4,
    quote:
      'Exceptional quality and outstanding customer service. Kiglance transformed our digital presence and helped us reach new heights in our industry.',
    author: 'Michael Chen',
    position: 'Founder',
    company: 'Digital Solutions',
  },
];

// NavigationButton
const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`hover:border-primary hover:text-primary rounded-full border border-gray-600 p-3 text-gray-400 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-30 ${disabled ? 'hover:border-gray-600 hover:text-gray-400' : ''} `}
      aria-label={direction === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
    >
      {direction === 'prev' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
};

// SliderDots
const SliderDots: React.FC<SliderDotsProps> = ({ totalSlides, currentSlide, onDotClick }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-3 w-3 rounded-full transition-all duration-200 ${
            index === currentSlide ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-500'
          } `}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const totalSlides = testimonialsData.length;

  // Auto-play functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToPrevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <section className="dark:bg-background-2 bg-[#e2e1e1] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="CLIENT FEEDBACK" subTitle=" What Our Clients Say" />

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 z-10 hidden -translate-y-1/2 lg:block">
            <NavigationButton direction="prev" onClick={goToPrevSlide} />
          </div>

          <div className="absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 lg:block">
            <NavigationButton direction="next" onClick={goToNextSlide} />
          </div>

          {/* Testimonials Slider */}
          <div className="py-12">
            <CustomSlider currentSlide={currentSlide}>
              {testimonialsData.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </CustomSlider>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="mb-8 flex items-center justify-center gap-4 lg:hidden">
            <NavigationButton direction="prev" onClick={goToPrevSlide} />
            <NavigationButton direction="next" onClick={goToNextSlide} />
          </div>

          {/* Slider Dots */}
          <SliderDots
            totalSlides={totalSlides}
            currentSlide={currentSlide}
            onDotClick={goToSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
