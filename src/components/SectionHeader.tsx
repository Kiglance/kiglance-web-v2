import React from 'react';

interface SectionHeaderProps {
  title: string;
  subTitle: string;
  description?: string;
}

export const SectionHeader = ({ title, subTitle, description }: SectionHeaderProps) => {
  return (
    <div className="mb-10 space-y-4 text-center md:mb-16">
      <div className="inline-block">
        <p className="text-primary text-sm uppercase md:text-base">{title}</p>
      </div>
      <h2 className="text-3xl leading-tight font-semibold text-white sm:text-4xl md:text-5xl xl:text-6xl">
        {subTitle}
      </h2>
      {description && <p className="text-center text-xs text-white md:text-sm">{description}</p>}
    </div>
  );
};
