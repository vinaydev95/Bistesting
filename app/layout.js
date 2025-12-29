import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JSR Compliance | BIS, ISO, EPR, BEE, WPC, ISI Certification',
  description: 'Professional certification consultants for BIS Registration, ISO Certification, EPR Compliance, BEE Star Rating, WPC Approval, and ISI Mark. 100% success rate.',
  icons: {
    icon: '/JSRLOGO.png',
    shortcut: '/JSRLOGO.png',
    apple: '/JSRLOGO.png',
  },
};

import FloatingContact from './components/FloatingContact';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}