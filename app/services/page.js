'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const serviceImages = [
  { src: '/slider-bis-crs.png', alt: 'BIS CRS Certification' },
  { src: '/slider-wpc.png', alt: 'WPC ETA Approval' },
  { src: '/slider-nabl.png', alt: 'NABL Testing' },
  { src: '/slider-bee.png', alt: 'BEE Star Label' },
  { src: '/slider-ewaste.png', alt: 'EPR E-Waste' },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % serviceImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
  };

  const services = [
    {
      title: 'BIS Registration',
      description: 'Bureau of Indian Standards registration for electronics and IT products under Compulsory Registration Scheme.',
      features: [
        'CRS Registration',
        'Foreign Manufacturers Certification',
        'Domestic Manufacturers Registration',
        'Product Testing Coordination',
        'Documentation Support'
      ],
      duration: '4-6 weeks',
      documents: '10-12 documents'
    },
    {
      title: 'ISI Certification',
      description: 'Indian Standards Institute mark certification for product quality and safety standards.',
      features: [
        'Factory Inspection',
        'Product Testing',
        'Quality System Audit',
        'Surveillance Audit',
        'Marking Permission'
      ],
      duration: '6-8 weeks',
      documents: '15-20 documents'
    },
    {
      title: 'EPR Certification',
      description: 'Extended Producer Responsibility authorization for e-waste, plastic waste, and battery waste management.',
      features: [
        'E-Waste Management',
        'Plastic Waste Management',
        'Battery Waste Management',
        'Annual Filing',
        'Compliance Reporting'
      ],
      duration: '2-3 weeks',
      documents: '8-10 documents'
    },
    {
      title: 'BEE Certification',
      description: 'Bureau of Energy Efficiency star labeling for energy consumption standards.',
      features: [
        'Star Rating',
        'Energy Consumption Testing',
        'Model Registration',
        'Label Design Approval',
        'Annual Compliance'
      ],
      duration: '3-4 weeks',
      documents: '6-8 documents'
    },
    {
      title: 'WPC Certification',
      description: 'Wireless Planning & Coordination approval for wireless communication devices.',
      features: [
        'ETA Approval',
        'License Application',
        'Frequency Allocation',
        'Equipment Type Approval',
        'Import Clearance'
      ],
      duration: '2-3 weeks',
      documents: '5-7 documents'
    },
    {
      title: 'TEC Certification',
      description: 'Telecommunication Engineering Center approval for telecom equipment.',
      features: [
        'MTCTE Compliance',
        'Technical Standards',
        'Security Testing',
        'Interface Approval',
        'Essential Requirements'
      ],
      duration: '4-5 weeks',
      documents: '8-12 documents'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section with Image Slider */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Comprehensive certification and registration services to ensure your products 
                comply with Indian standards and regulations. We provide end-to-end support 
                for BIS, ISI, EPR, BEE, WPC, and TEC certifications.
              </p>
            </motion.div>

            {/* Right Content - Image Slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border border-white/20 h-72">
                {/* Image Slider */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={serviceImages[currentIndex].src}
                    alt={serviceImages[currentIndex].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-blue-600/80 hover:bg-blue-600 p-2 rounded-full text-white transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600/80 hover:bg-blue-600 p-2 rounded-full text-white transition-all"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-center">{serviceImages[currentIndex].alt}</p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {serviceImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-yellow-400 w-6' : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Grid - Same as Home Page */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: '/svc-bee.jpg', title: 'BEE Star Label', description: 'Energy efficiency star labeling for appliances and equipment', link: '/services/bee-star-label' },
              { image: '/svc-bis-crs.jpg', title: 'BIS CRS Certificate', description: 'Compulsory Registration Scheme for electronics and IT goods', link: '/services/bis-crs-certification' },
              { image: '/svc-isi.jpg', title: 'BIS ISI Mark (FMCS)', description: 'Foreign Manufacturers Certification Scheme for ISI marking', link: '/services/bis-isi-mark' },
              { image: '/svc-ewaste.jpg', title: 'EPR For E-Waste', description: 'Extended Producer Responsibility for electronic waste management', link: '/services/epr-e-waste' },
              { image: '/svc-tec.jpg', title: 'TEC MTCTE Certification', description: 'Mandatory Testing and Certification of Telecom Equipment', link: '/services/tec-mtcte' },
              { image: '/svc-wpc.jpg', title: 'WPC ETA Approval', description: 'Equipment Type Approval for wireless products', link: '/services/wpc-eta' },
              { image: '/svc-arai.jpg', title: 'iCET ARAI Approvals', description: 'Automotive certification and homologation services', link: '/services/icet-arai' },
              { image: '/svc-nabl.jpg', title: 'NABL Testing Report', description: 'Accredited laboratory testing services', link: '/services/nabl-testing' },
              { image: '/svc-plastic.jpg', title: 'EPR for Plastic Waste', description: 'Plastic packaging waste management compliance', link: '/services/epr-plastic-waste' },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden"
              >
                {/* Service Image */}
                <div className="h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Certification Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Free initial consultation and requirement analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600">Document preparation and application filing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600">Product testing and quality evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Approval</h3>
              <p className="text-gray-600">Certificate issuance and delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
