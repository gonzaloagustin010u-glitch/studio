import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'; // Reemplaza esto con tu dominio

  // Aquí puedes añadir la lógica para generar rutas dinámicas, por ejemplo, desde una base de datos.
  // Por ahora, añadiremos las rutas estáticas.
  const staticRoutes = [
    '/',
    '/login',
    '/sell',
    '/signup',
    // Añade otras rutas estáticas aquí
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '/' ? 1 : 0.8,
  }));
  
  // Ejemplo de cómo añadir rutas dinámicas (descomentar y adaptar si es necesario)
  /*
  const projectIds = ['1', '2', '3']; // Deberías obtener estos IDs de tu base de datos
  const projectRoutes = projectIds.map(id => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...sitemapEntries, ...projectRoutes];
  */

  return sitemapEntries;
}