export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'], // Disallow API and private routes
    },
    sitemap: 'https://www.jsrcompliance.com/sitemap.xml', // Replace with your actual domain
  }
}
