import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    {
      url: '/',
      changeFreq: 'monthly',
      priority: 1.0,
    },
    {
      url: '/works',
      changeFreq: 'monthly',
      priority: 0.8,
    },
  ];

  return routes;
}
