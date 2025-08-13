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
      <div className="border-primary/8 h-full border p-8">
        {/* Icon */}
        <div className="justify-left mb-8 flex">
          <Image src={`/icons/${icon}.svg`} alt={icon} width={40} height={40} />
        </div>

        {/* Number and Title */}
        <div className="mb-6 text-left">
          <h3 className="mb-2 text-2xl font-bold text-white">
            <span>{number}.</span> {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-left text-sm text-[#9593A4] md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
