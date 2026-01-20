import Image from 'next/image';
import React from 'react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  className = '',
}) => {
  return (
    <div className={`group cursor-pointer ${className} h-full`}>
      <div className="border-primary/9 h-full border p-8">
        {/* Icon */}
        <div className="justify-left mb-8 flex">
          <Image src={`/icons/${icon}.svg`} alt={icon} width={40} height={40} />
        </div>

        {/* Number and Title */}
        <div className="mb-6 text-left">
          <h3 className="text-neutral-1-light mb-2 text-2xl font-bold dark:text-white">
            <span>{number}.</span> {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-left text-sm text-[#6B7280] md:text-base dark:text-[#9593A4]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
