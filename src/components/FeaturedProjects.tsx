'use client';

import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import Button from './ui/Button';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'LuxMarket E-Commerce',
      description:
        'A premium online shopping experience with advanced filtering and AI recommendations.',
      image: 'https://i.pinimg.com/736x/5d/e0/93/5de093ef89b1ccb4d72a41b9a88120e5.jpg',
      technologies: ['React.js', 'Node.js', 'Tailwind CSS'],
      hasLiveDemo: true,
      hasCaseStudy: true,
    },
    {
      id: 2,
      title: 'FinTrack Banking App',
      description:
        'A premium online shopping experience with advanced filtering and AI recommendations.',
      image: 'https://i.pinimg.com/1200x/53/7e/9c/537e9c22a28f9e0001b232055a1125a8.jpg',
      technologies: ['Next js', 'Node.js', 'Java'],
      hasLiveDemo: true,
      hasCaseStudy: false,
    },
    {
      id: 3,
      title: 'MediCare Platform',
      description:
        'A premium online shopping experience with advanced filtering and AI recommendations.',
      image: 'https://i.pinimg.com/1200x/75/78/81/757881df41ef534807b71f2093fb1f5d.jpg',
      technologies: ['Node.js', 'Angular', 'Nest js'],
      hasLiveDemo: true,
      hasCaseStudy: false,
    },
  ];

  return (
    <section className="bg-background 4xl:min-h-auto min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center md:mb-16">
          <p className="text-primary mb-4 text-sm uppercase md:text-base">OUR WORK</p>
          <h2 className="text-3xl leading-tight font-semibold text-white sm:text-4xl md:text-5xl xl:text-6xl">
            Featured Projects
          </h2>
        </div>

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
            View All Projects
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary absolute top-1/4 left-10 h-32 w-32 rounded-full opacity-5 blur-3xl" />
        <div className="absolute right-10 bottom-1/4 h-40 w-40 rounded-full bg-purple-500 opacity-5 blur-3xl" />
      </div>
    </section>
  );
};

export default FeaturedProjects;
