import Link from 'next/link';

export default function Footer() {
  const services = [
    { name: 'BIS Registration', href: '/services/bis-crs-certification' },
    { name: 'ISI Certification', href: '/services/bis-isi-mark' },
    { name: 'EPR Certification', href: '/services/epr-e-waste' },
    { name: 'BEE Certification', href: '/services/bee-star-label' },
    { name: 'WPC Certification', href: '/services/wpc-eta' },
    { name: 'TEC Certification', href: '/services/tec-mtcte' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Clients', href: '/clients' },
    { name: 'Updates', href: '/updates' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0E7490] to-[#0891B2] text-white pt-4">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img 
                src="/JSRLOGO.png" 
                alt="JSR Compliance" 
                className="h-12 w-12 rounded-lg bg-white p-1"
              />
              <div>
                <h3 className="font-bold text-lg">JSR Compliance</h3>
                <p className="text-xs text-cyan-100">Certification Experts</p>
              </div>
            </div>
            <p className="text-cyan-50 text-sm leading-relaxed mb-5">
              Professional certification consultants helping businesses achieve compliance with BIS, ISI, EPR, BEE, WPC, and TEC standards.
            </p>
            <div className="flex items-center gap-2 text-sm text-cyan-50">
              <span className="text-[#F97316] font-bold">500+</span>
              <span>Happy Clients</span>
              <span className="mx-2">•</span>
              <span className="text-[#F97316] font-bold">100%</span>
              <span>Success Rate</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#F97316] rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-cyan-50 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-200 rounded-full group-hover:bg-[#F97316] transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#F97316] rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-cyan-50 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-200 rounded-full group-hover:bg-[#F97316] transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#F97316] rounded-full"></span>
              Reach Us
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm">📍</span>
                </div>
                <p className="text-cyan-50 text-sm leading-relaxed">
                  K-11, Kh. No.-74/20, Ground Floor,
                  Sharma Colony Phase-2, Budh Vihar,
                  New Delhi - 110086
                </p>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-sm">📞</span>
                </div>
                <a href="tel:+91-9711551135" className="text-cyan-50 text-sm hover:text-white transition-colors">
                  +91-9711551135
                </a>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-sm">✉️</span>
                </div>
                <a href="mailto:jsrcompliance@gmail.com" className="text-cyan-50 text-sm hover:text-white transition-colors">
                  jsrcompliance@gmail.com
                </a>
              </div>
              
              {/* Business Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm">🕐</span>
                </div>
                <div className="text-cyan-50 text-sm">
                  <p>Mon - Fri: 9AM - 6PM</p>
                  <p>Sat: 9AM - 2PM</p>
                </div>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-2 pt-2">
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F97316] transition-all duration-300 group">
                  <span className="text-cyan-50 group-hover:text-white text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F97316] transition-all duration-300 group">
                  <span className="text-cyan-50 group-hover:text-white text-sm font-bold">in</span>
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F97316] transition-all duration-300 group">
                  <span className="text-cyan-50 group-hover:text-white text-sm">📷</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cyan-100 text-sm">
              © 2024 JSR Compliance. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-cyan-100 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cyan-100 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-cyan-100 hover:text-white text-sm transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}