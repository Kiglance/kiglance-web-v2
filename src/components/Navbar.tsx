'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './ui/Button';
import { usePathname, useRouter } from 'next/navigation';
import ToggleDarkMode from './ToggleDarkMode';
import { navItems } from '@/constants/navLinks';
import { NavItem } from '@/types/index.interface';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('');

  const isActiveLink = (href: string): boolean => {
    // For hash-based navigation on home page
    if (href.startsWith('/#') && pathname === '/') {
      const sectionId = href.substring(2); // Remove '/#'
      return activeSection === sectionId;
    }

    // For regular page routes
    if (!href.startsWith('/#')) {
      return pathname === href;
    }

    // For hash links when not on home page
    if (href.startsWith('/#') && pathname !== '/') {
      return false;
    }

    return false;
  };

  // Handle scroll effect and section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);

      // Only detect sections on home page
      if (pathname === '/') {
        // Get all sections that could be active
        const sections = ['home', 'services', 'testimonials', 'contact'];
        let currentSection = '';

        // Check which section is currently in view
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementHeight = rect.height;

            // Consider section active if it's in the top half of viewport
            if (
              elementTop <= window.innerHeight / 2 &&
              elementTop + elementHeight > window.innerHeight / 2
            ) {
              currentSection = sectionId;
              break;
            }
          }
        }

        // If no section is detected but we're near the top, default to home
        if (!currentSection && scrollTop < 100) {
          currentSection = 'home';
        }

        setActiveSection(currentSection);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('[data-mobile-menu]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 ${className} transition-all duration-200 ${
          isScrolled
            ? 'bg-background-light/80 dark:bg-background/80 backdrop-blur-md'
            : 'bg-background-light dark:bg-background'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/#home"
                className="text-neutral-1-light text-3xl font-bold dark:text-white"
              >
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
                      isActiveLink(item.href)
                        ? 'text-primary'
                        : 'hover:text-primary text-neutral-1-light dark:text-white'
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
              <Button size="md" onClick={() => router.push('/#contact')}>
                Get in touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-3 lg:hidden">
              <ToggleDarkMode />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-1-light focus:ring-primary/50 relative inline-flex items-center justify-center rounded-xl border border-gray-200/20 bg-white/10 p-2.5 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 focus:ring-2 focus:outline-none dark:border-gray-700/30 dark:bg-gray-800/50 dark:text-white dark:hover:bg-gray-800/70"
                aria-expanded={isOpen}
                aria-label="Toggle main menu"
                data-mobile-menu
              >
                <div className="relative h-6 w-6">
                  <span
                    className={`absolute top-2 left-0 h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                      isOpen ? 'translate-y-1 rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`absolute top-3 left-0 h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                      isOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`absolute top-4 left-0 h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                      isOpen ? '-translate-y-1 -rotate-45' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-out lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`absolute top-20 right-4 left-4 mx-auto max-w-sm transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-4 scale-95 opacity-0'
          }`}
          data-mobile-menu
        >
          <div className="overflow-hidden rounded-lg border border-gray-200/20 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-gray-700/30 dark:bg-gray-900/95">
            {/* Menu Header */}
            <div className="border-b border-gray-200/20 px-6 py-4 dark:border-gray-700/30">
              <h3 className="text-neutral-1-light text-lg font-semibold dark:text-white">
                Navigation
              </h3>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {navItems.map((item: NavItem, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-6 py-3 text-base font-medium transition-all duration-200 ${
                    isActiveLink(item.href)
                      ? 'text-primary bg-primary/10 border-primary border-r-2'
                      : 'text-neutral-1-light hover:text-primary hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex-1">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Menu Footer */}
            <div className="border-t border-gray-200/20 bg-gray-50/50 px-6 py-4 dark:border-gray-700/30 dark:bg-gray-800/30">
              <Button size="md" className="w-full justify-center">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
