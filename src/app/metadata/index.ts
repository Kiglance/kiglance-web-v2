import type { Metadata } from 'next';

// Base metadata
export const baseMetadata: Metadata = {
  title: {
    default: 'Kiglance - Professional Web Development & Digital Solutions',
    template: '%s | Kiglance',
  },
  description:
    'Kiglance delivers cutting-edge web development, mobile applications, and digital solutions. Transform your business with our expert development services in Kigali, Rwanda.',
  keywords: [
    'web development',
    'mobile app development',
    'digital solutions',
    'software development',
    'UI/UX design',
    'e-commerce development',
    'Kigali',
    'Rwanda',
    'freelance developer',
    'custom software',
    'responsive design',
    'full-stack development',
  ],
  authors: [{ name: 'Kiglance Team' }],
  creator: 'Kiglance',
  publisher: 'Kiglance',
  metadataBase: new URL('https://kiglance.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kiglance.com',
    title: 'Kiglance - Professional Web Development & Digital Solutions',
    description:
      'Transform your business with cutting-edge web development and digital solutions. Expert services in Kigali, Rwanda.',
    siteName: 'Kiglance',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
  classification: 'Business',
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

// JSON-LD Structured Data
export const jsonLdData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kiglance',
    url: 'https://kiglance.com',
    logo: 'https://kiglance.com/logo.png',
    description:
      'Professional web development and digital solutions company based in Kigali, Rwanda',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kigali',
      addressCountry: 'Rwanda',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+250-xxx-xxx-xxx',
      contactType: 'customer service',
      availableLanguage: ['English', 'Kinyarwanda', 'French'],
    },
    sameAs: [
      'https://upwork.com/kiglance',
      'https://linkedin.com/company/kiglance',
      'https://github.com/kiglance',
    ],
  },

  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kiglance',
    url: 'https://kiglance.com',
    description: 'Professional web development and digital solutions',
  },

  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development Services',
    description: 'Professional web development, mobile app development, and digital solutions',
    provider: {
      '@type': 'Organization',
      name: 'Kiglance',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Rwanda',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Consulting',
          },
        },
      ],
    },
  },
};
