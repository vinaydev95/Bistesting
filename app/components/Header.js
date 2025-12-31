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
    { name: 'OUR SERVICES', href: '/services' },
    { name: 'CLIENTS', href: '/clients' },
    { name: 'UPDATES', href: '/updates' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'ABOUT US', href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/JSRLOGO.png" 
              alt="JSR Compliance" 
              className="h-20 w-20"
            />
            <div className="hidden sm:block">
              
              <span className="text-3xl font-bold text-cyan-700 whitespace-nowrap"> JSR Compliance</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold transition-all duration-200 text-base xl:text-lg uppercase tracking-wide px-3 xl:px-5 py-2 rounded-md ${
                  pathname === item.href
                    ? 'bg-[#F97316] text-white'
                    : 'text-gray-700 hover:border-2 hover:border-[#F97316] hover:text-[#F97316]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Search Icon */}
            {/* <button className="text-gray-700 hover:text-orange-500 transition-colors">
              <Search size={20} />
            </button> */}
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
                  className={`font-semibold py-2 uppercase text-lg ${
                    pathname === item.href
                      ? 'text-orange-500 font-bold border-l-4 border-orange-500 pl-3'
                      : 'text-gray-700 hover:text-orange-500'
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