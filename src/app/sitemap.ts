import { MetadataRoute } from 'next';
import { projects } from '../../data/static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectRoutes = projects.map((project) => ({
    url: `/works/${project.id}`,
    changeFreq: 'monthly',
    priority: 0.7,
  }));

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
    ...projectRoutes,
  ];

  return routes;
}
