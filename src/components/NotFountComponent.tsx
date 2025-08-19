'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

function NotFountComponent() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'Works', href: '/works' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <div className="bg-background-light dark:bg-background flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            {/* Large 404 Text */}
            <h1 className="text-8xl font-bold text-gray-200 select-none sm:text-9xl dark:text-gray-800">
              404
            </h1>

            {/* Floating Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Code Brackets */}
                <span className="text-primary absolute top-1/2 -left-16 -translate-y-1/2 transform animate-pulse font-mono text-4xl">
                  {`{`}
                </span>
                <span className="text-primary absolute top-1/2 -right-16 -translate-y-1/2 transform animate-pulse font-mono text-4xl">
                  {`}`}
                </span>

                {/* Center Icon */}
                <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    className="text-primary h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m6-6v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8m16 0V7a2 2 0 00-2-2H5a2 2 0 00-2-2v3m16 0L12 9 3 6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-neutral-1-light mb-4 text-3xl font-bold sm:text-4xl dark:text-white">
            Page Not Found
          </h2>
          <p className="mb-2 text-lg text-gray-600 dark:text-gray-400">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-base text-gray-500 dark:text-gray-500">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={handleGoBack}
            className="text-neutral-1-light inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium transition-colors duration-200 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>

          <Link
            href="/#home"
            className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-lg px-6 py-3 text-base font-medium text-white transition-colors duration-200"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-8 dark:border-gray-700">
          <h3 className="text-neutral-1-light mb-4 text-lg font-semibold dark:text-white">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 group rounded-lg border border-gray-200 p-3 transition-all duration-200 dark:border-gray-700"
              >
                <span className="text-neutral-1-light group-hover:text-primary text-sm font-medium transition-colors duration-200 dark:text-white">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need help? Contact our support team or check our{' '}
            <Link href="/#services" className="text-primary hover:underline">
              services
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFountComponent;
