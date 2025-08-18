import Image from 'next/image';
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top right star */}
      <div className="absolute top-24 right-[350px] animate-pulse opacity-80">
        <Image src="/icons/Star.svg" width={112} height={112} alt="star" />
      </div>

      {/* Bottom left small star */}
      <div
        className="absolute bottom-60 left-[400px] animate-pulse opacity-80"
        style={{ animationDelay: '1s' }}
      >
        <Image src="/icons/Star.svg" width={40} height={40} alt="star" className="h-10 w-10" />
      </div>

      {/* Bottom right small star */}
      <div
        className="absolute right-80 bottom-[350px] animate-pulse opacity-80"
        style={{ animationDelay: '2s' }}
      >
        <Image src="/icons/Star.svg" width={36} height={36} alt="star" className="h-9 w-9" />
      </div>

      {/* Additional decorative elements */}
      <div
        className="text-primary absolute top-48 left-[400px] animate-bounce opacity-20"
        style={{ animationDelay: '0.5s', animationDuration: '3s' }}
      >
        <div className="h-6 w-6 rounded-full bg-current"></div>
      </div>

      <div
        className="text-primary absolute right-[400px] bottom-56 animate-bounce opacity-25"
        style={{ animationDelay: '1.5s', animationDuration: '4s' }}
      >
        <div className="h-6 w-6 rounded-full bg-current"></div>
      </div>
    </div>
  );
};

export default FloatingElements;
