'use client';

import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import Button from './ui/Button';
import { SectionHeader } from './SectionHeader';
import { projects } from '../../data/static';
import { useRouter } from 'next/navigation';

const FeaturedProjects = () => {
  const router = useRouter();
  return (
    <section className="dark:bg-background 4xl:min-h-auto bg-background-light min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="OUR WORK" subTitle="Featured Projects" />
        {/* Projects Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        {/* View All Projects Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => router.push('/works')}
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
    </section>
  );
};

export default FeaturedProjects;
