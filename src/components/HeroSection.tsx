"use client";

import React from "react";
import Navbar from "./Navbar";
import Button from "./ui/Button";
import TrustedSection from "./TrustedSection";
import FloatingElements from "./FloatingElements";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black"></div>

      {/* Floating Decorative Elements */}
      {/* <FloatingElements /> */}

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-20 pb-16">
          {/* Main Heading */}
          <div className="space-y-4 leading-[103px]">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
              Bringing Your
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white xl:text-8xl font-bold">
              Dream Into <span className="text-lime-400 italic">Reality</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-white leading-relaxed">
              We increase revenue and ensure sustainable long-term growth
            </p>
            <p className="text-base sm:text-lg text-white leading-relaxed mt-2">
              for your business through powerful Webflow websites.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <Button size="lg" className="text-lg px-10 py-4">
              Start Your Project
            </Button>
          </div>
        </div>

        {/* Trusted Section */}
        {/* <TrustedSection /> */}
      </div>

      {/* Additional Background Elements */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div> */}
    </div>
  );
};

export default HeroSection;
