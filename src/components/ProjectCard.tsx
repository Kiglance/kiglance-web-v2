'use client';

import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Button from './ui/Button';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const ProjectCard = ({ title, description, image, technologies }: ProjectCardProps) => {
  const route = useRouter();
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#2D2D2D] transition-all duration-500 hover:scale-105 hover:transform">
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image src={image} alt="featured-project" fill className="absolute inset-0 object-cover" />

        {/* Action Buttons - Show on Hover */}
        <div className="inset-0 hidden flex-col items-center justify-center gap-4 bg-[#090909] opacity-90 transition-all duration-300 group-hover:absolute group-hover:flex">
          <Button variant="secondary" className="group/action-1 flex items-center gap-1">
            Live Website
            <ExternalLink
              size={16}
              className="transition-transform duration-200 group-hover/action-1:translate-x-1"
            />
          </Button>

          <Button
            onClick={() => route.push(`/works/${title}`)}
            className="group/action-2 flex items-center gap-1"
          >
            Read case Study
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover/action-2:translate-x-1"
            />
          </Button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <p className="text-neutral mb-6 text-sm leading-relaxed">{description}</p>

        {/* Technologies */}
        <div className="flex w-full gap-2 overflow-y-auto">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
