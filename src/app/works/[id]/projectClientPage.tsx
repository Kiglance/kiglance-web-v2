'use client';

import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import Button from '@/components/ui/Button';
import { CheckCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { projects } from '../../../../data/static';

const ProjectClientPage = ({ projectId }: { projectId: string }) => {
  const project = projects.find((proj) => proj.id === Number(projectId));

  if (!project) {
    return (
      <div className="bg-background-light dark:bg-background flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Project not found</h1>
      </div>
    );
  }

  const {
    title,
    description,
    image,
    highlights,
    services,
    projectOverview,
    clientName,
    duration,
    website,
  } = project;
  return (
    <div>
      {/* Banner section */}
      <div className="relative">
        {/* Background Image */}
        <Image src={image} alt="project-name" fill className="h-full w-full object-cover" />

        {/* Overlay  */}
        <div className="absolute inset-0 z-10 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
            <p className="mx-auto mt-2 max-w-3xl px-4 text-sm leading-relaxed text-white/95 sm:text-base lg:text-lg">
              {description}
            </p>

            <Button
              onClick={() => {
                window.open(website, '_blank');
              }}
              variant="primary"
              className="group/action-1 flex items-center gap-1"
            >
              Live Website
              <ExternalLink
                size={16}
                className="transition-transform duration-200 group-hover/action-1:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Project Overview page */}
      <div className="bg-background-light p-8 lg:p-16 dark:bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Project Overview */}
              <div>
                <h1 className="text-neutral-1-light mb-8 text-4xl font-bold lg:text-5xl dark:text-white">
                  Project Overview
                </h1>
                <p className="text-neutral-1-light mb-8 text-sm leading-relaxed lg:text-base dark:text-white">
                  {projectOverview}
                </p>
              </div>

              {/* Client */}
              <div>
                <h2 className="text-neutral-1-light mb-4 text-2xl font-bold lg:text-3xl dark:text-white">
                  Client
                </h2>
                <p className="text-neutral-1-light text-lg dark:text-white">{clientName}</p>
              </div>

              {/* Duration */}
              <div>
                <h2 className="text-neutral-1-light mb-4 text-2xl font-bold lg:text-3xl dark:text-white">
                  Duration
                </h2>
                <p className="text-neutral-1-light text-lg dark:text-white">{duration}</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Project Highlights */}
              <div className="bg-opacity-50 rounded-2xl bg-gray-800 p-8 backdrop-blur-sm">
                <h2 className="mb-8 text-2xl font-bold text-white lg:text-3xl">
                  Project Highlights
                </h2>
                <div className="space-y-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <CheckCircle className="text-primary flex-shrink-0" size={24} />
                      <span className="text-base text-white lg:text-lg">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-neutral-1-light mb-8 text-2xl font-bold lg:text-3xl dark:text-white">
                  Services
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="hover:bg-opacity-80 bg-primary rounded-md px-6 py-3 text-center text-sm font-medium text-black transition-all duration-300 lg:text-base"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ProjectClientPage;
