import React from 'react';

interface Brand {
  name: string;
  icon: string;
}

const TrustedSection: React.FC = () => {
  const brands: Brand[] = [
    { name: 'Layers', icon: '🌟' },
    { name: 'Quotient', icon: '💬' },
    { name: 'Circooles', icon: '🔵' },
    { name: 'Hourglass', icon: '⏳' },
    { name: 'Command+R', icon: '⌘' },
  ];

  return (
    <div className="mt-6 mb-8">
      {/* Trusted By Text */}
      <div className="mb-12 flex items-center justify-center">
        <div className="to-primary h-px flex-1 bg-gradient-to-r from-transparent"></div>
        <div className="px-6">
          <p className="text-sm font-semibold tracking-wider text-white uppercase">
            Trusted by Amazing Brands
          </p>
        </div>
        <div className="to-primary h-px flex-1 bg-gradient-to-l from-transparent"></div>
      </div>

      {/* Brand Logos */}
      <div className="rounded-2xl bg-[#222222] px-8 py-6 backdrop-blur-sm">
        <div className="flex items-center justify-between space-x-8 overflow-x-auto overflow-y-hidden">
          {brands.map((brand, index) => (
            <div key={index} className="group flex flex-shrink-0 items-center space-x-3">
              <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                {brand.icon}
              </span>
              <span className="text-lg font-medium whitespace-nowrap text-[#CDD0D8] transition-colors duration-300 hover:text-white">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
