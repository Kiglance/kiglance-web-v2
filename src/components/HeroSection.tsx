'use client';

import React from 'react';
import Navbar from './Navbar';
import Button from './ui/Button';
import TrustedSection from './TrustedSection';
import FloatingElements from './FloatingElements';

const HeroSection: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-radial"></div>

      {/* Floating Decorative Elements */}
      <FloatingElements />

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center">
          {/* Main Heading */}
          <div className="space-y-4 leading-[103px]">
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Bringing Your
            </h1>
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl xl:text-8xl">
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
            <Button size="lg" className="px-10 py-4 text-lg">
              Start Your Project
            </Button>
          </div>
        </div>

        {/* Trusted Section */}
        {/* <TrustedSection /> */}
      </div>
    </div>
  );
};

export default HeroSection;
