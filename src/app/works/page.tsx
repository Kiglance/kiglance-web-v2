import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { projects } from '../../../data/static';

interface InfoStatics {
  label: string;
  value: number;
  type: 'number' | 'percentage';
}

const page = () => {
  const infoStatics: InfoStatics[] = [
    {
      label: 'Projects Completed',
      value: 20,
      type: 'number',
    },
    {
      label: 'Years Experience',
      value: 8,
      type: 'number',
    },
    {
      label: 'Client Satisfaction',
      value: 98,
      type: 'percentage',
    },
    {
      label: 'Expert Developer',
      value: 5,
      type: 'number',
    },
  ];
  return (
    <>
      <div className="bg-background relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="pb-16 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Featured Works
            </h1>
            <p className="text-neutral mx-auto mt-2 max-w-3xl px-4 text-sm leading-relaxed sm:text-base lg:text-lg">
              Explore our portfolio of results-driven digital solutions that combine thoughtful
              design with robust development.
            </p>
          </div>
          <div className="rounded-2xl bg-[#222222] px-4 py-6 sm:px-8 sm:py-5 md:px-12 lg:px-14">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              {infoStatics.map((item, idx) => {
                return (
                  <div key={idx} className="flex-1 text-center">
                    <p className="text-primary text-3xl font-semibold sm:text-4xl lg:text-5xl">
                      {item.value}
                      <span>{item.type === 'number' ? '+' : '%'}</span>
                    </p>
                    <p className="mt-1 text-sm text-white sm:text-base lg:text-lg">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-background-2 4xl:min-h-auto min-h-screen px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="OUR WORK" subTitle="Portfolio  Project" />
          {/* Projects Grid */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          {/* View All Projects Button */}
          <div className="flex justify-center">
            <Button
              variant="secondary"
              className="group flex items-center gap-3 px-8 py-4 font-medium transition-all duration-300"
            >
              Load more Projects
              <ArrowRight
                size={20}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
