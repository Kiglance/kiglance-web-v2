import React from 'react';
import './globals.css';
import { Metadata } from 'next';
import NotFountComponent from '@/components/NotFountComponent';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NotFountComponent />
      </body>
    </html>
  );
}
