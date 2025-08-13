'use client';

import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { ContactItem, SocialIcon } from './ContactItem';
import { UpworkIcon } from './ui/UpworkIcon';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface NavigationLink {
  href: string;
  label: string;
}

// NavigationLink
const NavigationLink: React.FC<NavigationLinkProps> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="hover:text-primary cursor-pointer text-gray-300 transition-colors duration-200"
    >
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  const navigationLinks: NavigationLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/works', label: 'Works' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    console.log(`Navigate to: ${href}`);
  };

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer  */}
        <div className="py-16">
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
                <ContactItem icon={Phone} text="(001) 1231 3435" type="phone" />
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <SocialIcon icon={UpworkIcon} href="https://upwork.com" />
                <SocialIcon icon={Linkedin} href="https://linkedin.com" />
                <SocialIcon icon={Github} href="https://github.com" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6 md:gap-8">
              {navigationLinks.map((link: NavigationLink) => (
                <NavigationLink
                  key={link.label}
                  href={link.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </NavigationLink>
              ))}
            </nav>

            {/* Copyright */}
            <div className="text-neutral text-sm">
              © {currentYear} Kiglance - All Right Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
