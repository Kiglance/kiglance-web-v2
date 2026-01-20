import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../../data/static';
import CountContainer from '@/components/CountContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Works & Portfolio',
  description:
    'Explore our portfolio of results-driven digital solutions that combine thoughtful design with robust development.',
  alternates: {
    canonical: '/works',
  },
};

const page = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="dark:bg-background bg-background-light">
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="pb-16 text-center">
              <h1 className="text-neutral-1-light text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-white">
                Featured Works
              </h1>
              <p className="text-neutral mx-auto mt-2 max-w-3xl px-4 text-sm leading-relaxed sm:text-base lg:text-lg">
                Explore our portfolio of results-driven digital solutions that combine thoughtful
                design with robust development.
              </p>
            </div>
            <CountContainer />
          </div>
        </div>
      </div>

      <section className="dark:bg-background-2 4xl:min-h-auto min-h-screen bg-[#e2e1e1] px-4 py-20 sm:px-6 lg:px-8">
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
