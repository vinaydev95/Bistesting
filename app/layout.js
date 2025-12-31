import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.jsrcompliance.com'), // Replace with actual domain
  title: {
    default: 'JSR Compliance | BIS, ISO, EPR, BEE, WPC, ISI Certification Consultants',
    template: '%s | JSR Compliance'
  },
  description: 'Leading compliance consultants for BIS Registration, ISO Certification, EPR Authorization, BEE Star Rating, WPC Approval, and ISI Mark. 100% Success Rate & Fast Processing.',
  keywords: ['BIS Certification', 'ISO Certification', 'EPR Compliance', 'BEE Star Rating', 'WPC Approval', 'ISI Mark', 'BIS Registration', 'Compliance Consultants India', 'JSR Compliance', 'TEC Certification'],
  authors: [{ name: 'JSR Compliance' }],
  creator: 'JSR Compliance',
  publisher: 'JSR Compliance',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'JSR Compliance | Expert Certification Consultants in India',
    description: 'Get fast and reliable BIS, ISO, EPR, and BEE certification services. We help your business grow with hassle-free compliance solutions.',
    url: 'https://www.jsrcompliance.com',
    siteName: 'JSR Compliance',
    images: [
      {
        url: '/JSRLOGO.png', // Ideally should be a larger OG image, using logo for now
        width: 800,
        height: 600,
        alt: 'JSR Compliance Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSR Compliance | BIS & ISO Certification Experts',
    description: 'Simplify your compliance journey with JSR Compliance. Experts in BIS, ISO, EPR, BEE, and WPC certifications.',
    images: ['/JSRLOGO.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/JSRLOGO.png',
    shortcut: '/JSRLOGO.png',
    apple: '/JSRLOGO.png',
  },
  verification: {
    google: 'google-site-verification-code', // User needs to replace this
  },
};

import FloatingContact from './components/FloatingContact';
import JsonLd from './components/JsonLd';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}