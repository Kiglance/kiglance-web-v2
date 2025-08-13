import Image from 'next/image';
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right star */}
      <div className="absolute top-32 right-32 text-lime-400 opacity-60 animate-pulse">
        <Image src="/icons/Star.svg" width={112} height={112} alt="star" />
      </div>

      {/* Bottom left small star */}
      <div
        className="absolute bottom-40 left-20 text-lime-400 opacity-40 animate-pulse"
        style={{ animationDelay: '1s' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0L14.0434 7.50557L21.6 3L16.0944 9.95656L24 12L16.0944 14.0434L21.6 21L14.0434 16.4944L12 24L9.95656 16.4944L2.4 21L7.90557 14.0434L0 12L7.90557 9.95656L2.4 3L9.95656 7.50557L12 0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Bottom right small star */}
      <div
        className="absolute bottom-32 right-48 text-lime-400 opacity-30 animate-pulse"
        style={{ animationDelay: '2s' }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0L11.7029 6.2546L18 2.5L13.4112 8.29695L20 10L13.4112 11.7029L18 17.5L11.7029 13.7454L10 20L8.29709 13.7454L2 17.5L6.58875 11.7029L0 10L6.58875 8.29709L2 2.5L8.29709 6.2546L10 0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Additional decorative elements */}
      <div
        className="absolute top-48 left-40 text-lime-400 opacity-20 animate-bounce"
        style={{ animationDelay: '0.5s', animationDuration: '3s' }}
      >
        <div className="w-2 h-2 bg-current rounded-full"></div>
      </div>

      <div
        className="absolute bottom-56 right-20 text-lime-400 opacity-25 animate-bounce"
        style={{ animationDelay: '1.5s', animationDuration: '4s' }}
      >
        <div className="w-1 h-1 bg-current rounded-full"></div>
      </div>
    </div>
  );
};

export default FloatingElements;
