'use client';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'OUR SERVICES', href: '/services' },
    { name: 'CLIENTS', href: '/clients' },
    { name: 'UPDATES', href: '/updates' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              BS
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900">
              Logo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors text-sm uppercase tracking-wide ${
                  pathname === item.href
                    ? 'text-blue-700 font-semibold'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Search Icon */}
            <button className="text-gray-700 hover:text-blue-700 transition-colors">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium py-2 uppercase text-sm ${
                    pathname === item.href
                      ? 'text-blue-700 font-semibold'
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center pt-2">
                <Search size={18} className="text-gray-700 mr-2" />
                <span className="text-gray-700">SEARCH</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}