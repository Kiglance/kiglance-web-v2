'use client';

import React, { use } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { useRouter } from 'next/navigation';

const CTASection = () => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/#contact');
  };
  return (
    <div className="flex items-center justify-center bg-gray-800 p-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Main Heading */}
        <h1 className="mb-8 text-4xl leading-14 font-semibold text-white lg:text-6xl">
          Become part of the <span className="relative inline-block">design revolution</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300 lg:text-xl">
          Ready to discuss your procurement needs? Our team is here to help you create exceptional
          spaces.
        </p>

        {/* CTA Button */}
        <Button onClick={handleCTAClick} size="md" className="group inline-flex items-center gap-3">
          Get in Touch
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-transform duration-200 group-hover:translate-x-1">
            <ArrowRight size={14} className="text-primary" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
