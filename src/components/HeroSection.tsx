'use client';

import React from 'react';
import FloatingElements from './FloatingElements';
import Button from './ui/Button';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
  const router = useRouter();
  return (
    <div
      id="home"
      className="4xl:min-h-auto bg-background-light dark:bg-background relative min-h-screen overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-radial"></div>

      {/* Floating Decorative Elements */}
      <FloatingElements />

      {/* Hero Content */}
      <div className="4xl:min-h-auto relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="4xl:pt-20 4xl:pb-16 text-center">
          {/* Main Heading */}
          <div className="space-y-4 leading-[103px]">
            <h1 className="text-neutral-1-light text-5xl font-bold sm:text-6xl lg:text-7xl xl:text-8xl dark:text-white">
              Bringing Your
            </h1>
            <h1 className="text-neutral-1-light text-5xl font-bold sm:text-6xl lg:text-7xl xl:text-8xl dark:text-white">
              Dream Into <span className="text-primary italic">Reality</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mx-auto mt-12 max-w-3xl">
            <p className="text-neutral text-base leading-relaxed sm:text-lg">
              We increase revenue and ensure sustainable long-term growth
            </p>
            <p className="text-neutral mt-2 text-base leading-relaxed sm:text-lg">
              for your business through powerful Webflow websites.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <Button
              size="lg"
              className="px-10 py-4 text-lg"
              onClick={() => router.push('/#contact')}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
