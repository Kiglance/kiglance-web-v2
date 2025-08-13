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
    <div className="mt-20 mb-8">
      {/* Trusted By Text */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
        <div className="px-6">
          <p className="text-gray-400 text-sm font-medium tracking-wider uppercase">
            Trusted by Amazing Brands
          </p>
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
      </div>

      {/* Brand Logos */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl py-6 px-8 border border-gray-700/50">
        <div className="flex items-center justify-between space-x-8 overflow-x-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 flex-shrink-0 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {brand.icon}
              </span>
              <span className="font-medium text-lg whitespace-nowrap">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
