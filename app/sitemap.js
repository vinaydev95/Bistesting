export default function sitemap() {
  const baseUrl = 'https://www.jsrcompliance.com'; // Replace with your actual domain

  // Main pages
  const routes = [
    '',
    '/about',
    '/services',
    '/clients',
    '/updates',
    '/contact',
  ];

  // Service specific pages
  const services = [
    '/services/bee-star-label',
    '/services/bis-crs-certification',
    '/services/bis-isi-mark',
    '/services/epr-e-waste',
    '/services/tec-mtcte',
    '/services/wpc-eta',
    '/services/icet-arai',
    '/services/nabl-testing',
    '/services/epr-plastic-waste',
  ];

  const allRoutes = [...routes, ...services];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
