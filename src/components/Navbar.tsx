'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './ui/Button';
import { usePathname } from 'next/navigation';
import ToggleDarkMode from './ToggleDarkMode';

interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Works', href: '/works' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact us', href: '/contact' },
  ];

  const isActiveLink = (href: string): boolean => {
    return pathname === href;
  };

  return (
    <nav className={`sticky top-0 z-50 ${className}bg-background`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-white">
              Kig<span className="text-primary">lance</span>
              <span className="text-primary">{`/>`}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item: NavItem) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-base font-medium transition-colors duration-300 ${
                    isActiveLink(item.href) ? 'text-primary' : 'hover:text-primary text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Right */}
          <div className="hidden items-center space-x-4 lg:flex">
            <ToggleDarkMode />
            <Button size="md">Get in touch</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <ToggleDarkMode />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-20 right-5 lg:hidden">
          <div className="space-y-1 rounded-lg bg-gray-900/95 px-2 pt-2 pb-3 backdrop-blur-sm sm:px-3">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300 ${
                  isActiveLink(item.href) ? 'text-primary' : 'hover:text-primary text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button size="sm" className="w-full">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
