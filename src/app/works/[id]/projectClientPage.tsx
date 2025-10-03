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
    technologies,
    highlights,
    services,
    projectOverview,
    clientName,
    duration,
  } = project;
  return (
    <div>
      {/* Banner section */}
      <div className="relative">
        {/* Background Image */}
        <Image src={image} alt="project-name" fill className="h-full w-full object-cover" />

        {/* Overlay  */}
        <div className="absolute inset-0 z-10 bg-black/85"></div>

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
            <p className="text-neutral mx-auto mt-2 max-w-3xl px-4 text-sm leading-relaxed sm:text-base lg:text-lg">
              {description}
            </p>

            <Button variant="secondary" className="group/action-1 flex items-center gap-1">
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

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-gray-700 px-4 py-2 text-sm font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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

      {/* TestimonialSection */}
      <div className="dark:bg-background-2 flex items-center justify-center bg-[#e2e1e1] p-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader title="TESTIMONIAL" subTitle="Customer is Our Top Priority" />

          {/* Testimonial Card */}
          <div className="rounded-3xl bg-white p-8 shadow-2xl lg:p-12">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                {/* Gymstory Logo/Brand */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                    <span className="text-lg font-bold text-white">G</span>
                  </div>
                  <span className="text-xl font-semibold text-black">Gymstory</span>
                </div>

                {/* Testimonial Title */}
                <h2 className="text-2xl leading-tight font-bold text-black lg:text-3xl">
                  Kiglance Is The Best Digital Agency I Have Ever Seen! Highly Recommended!
                </h2>

                {/* Testimonial Content */}
                <p className="text-base leading-relaxed text-gray-600 lg:text-lg">
                  "I recently hired <span className="font-semibold text-black">Kiglance</span> for a
                  custom web development project and couldn't be happier with the results. The team
                  was able to bring my unique ideas to life and create a website that truly stands
                  out."
                </p>

                {/* Author Info */}
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-black">Peter Loreza</h3>
                  <p className="text-sm font-medium text-gray-500">
                    Director of <span className="font-bold">GYMSTORY</span>
                  </p>
                </div>
              </div>

              {/* Right Profile Image */}
              <div className="flex-shrink-0">
                <div className="h-64 w-64 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 lg:h-80 lg:w-80">
                  <div className="flex h-full w-full items-end justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-300 to-blue-500">
                    {/* Placeholder  */}
                    {/* <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-500">
                        <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 lg:h-60 lg:w-60">
                          <span className="text-4xl font-bold text-blue-800">PL</span>
                        </div>
                      </div> */}

                    <Image
                      src="https://i.pinimg.com/1200x/a4/ad/e3/a4ade34601af89c976de99b6c1cb42a5.jpg"
                      alt="Peter Loreza"
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>
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
