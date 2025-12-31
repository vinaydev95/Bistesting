export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JSR Compliance',
    alternateName: 'JSR Compliance Consultants',
    url: 'https://www.jsrcompliance.com',
    logo: 'https://www.jsrcompliance.com/JSRLOGO.png',
    email: 'jsrcompliance@gmail.com',
    telephone: '+91-9711551135',
    sameAs: [
      'https://www.instagram.com/jsrcompliance', // Replace if actual link is different
      'https://www.linkedin.com/company/jsr-compliance' // Replace if actual link is different
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'K-11, Kh. No.-74/20, Ground Floor, Sharma Colony Phase-2, Budh Vihar, Sultanpuri',
      addressLocality: 'New Delhi',
      postalCode: '110086',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9711551135',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi']
    },
    description: 'JSR Compliance specializes in BIS Registration, ISO Certification, BEE Star Labeling, EPR Authorization, WPC ETA Approval, and TEC Certification in India.'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
