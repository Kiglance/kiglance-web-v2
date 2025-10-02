'use client';

import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { ContactItem, SocialIcon } from './ContactItem';
import { UpworkIcon } from './ui/UpworkIcon';
import { navItems } from '@/constants/navLinks';
import { NavItem } from '@/types/index.interface';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
}

interface NavigationLink {
  href: string;
  label: string;
}

// NavigationLink
const NavigationLink: React.FC<NavigationLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="hover:text-primary cursor-pointer text-gray-300 transition-colors duration-200"
    >
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  // const navItems: NavigationLink[] = [
  //   { href: '/', label: 'Home' },
  //   { href: '/services', label: 'Services' },
  //   { href: '/works', label: 'Works' },
  //   { href: '/testimonials', label: 'Testimonials' },
  //   { href: '/contact', label: 'Contact us' },
  // ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    console.log(`Navigate to: ${href}`);
  };

  return (
    <footer className="dark:bg-background bg-[#1A202C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:px-0">
        {/* Main Footer  */}
        <div className="py-10">
          <div className="flex flex-col gap-y-6 md:flex-row md:items-start md:justify-between">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Kig<span className="text-primary">lance</span>
                  <span className="text-primary">/&gt;</span>
                </h2>
              </div>

              <p className="max-w-md text-base leading-relaxed text-gray-300">
                Kiglance - the leading digital agency based in the Kigali - Rwanda, working with
                top-tier clients, from start-ups to enterprises.
              </p>
            </div>

            {/* Right Side*/}
            <div className="space-y-6">
              <div className="space-y-4">
                <ContactItem icon={Mail} text="info@kiglance.com" type="email" />
                <ContactItem icon={Phone} text="(+250) 789810670" type="phone" />
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <SocialIcon
                  icon={UpworkIcon}
                  href="https://www.upwork.com/agencies/1802386715619577856/"
                />
                {/* <SocialIcon icon={Linkedin} href="https://linkedin.com" /> */}
                <SocialIcon icon={Github} href="https://github.com/Kiglance" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6 md:gap-8">
              {navItems.map((link: NavItem) => (
                <NavigationLink key={link.name} href={link.href}>
                  {link.name}
                </NavigationLink>
              ))}
            </nav>

            {/* Copyright */}
            <div className="text-neutral text-sm">
              © {currentYear} Kiglance - All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
