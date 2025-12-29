import { Zap, ShieldCheck, Award, Recycle, Radio, Signal, Car, Beaker, Package } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'BEE Star Label',
      description: 'Energy efficiency star labeling for appliances and equipment',
      link: '/services/bee-star-label'
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      title: 'BIS CRS Certificate',
      description: 'Compulsory Registration Scheme for electronics and IT goods',
      link: '/services/bis-crs-certification'
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'BIS ISI Mark (FMCS)',
      description: 'Foreign Manufacturers Certification Scheme for ISI marking',
      link: '/services/bis-isi-mark'
    },
    {
      icon: <Recycle className="w-12 h-12 text-blue-600" />,
      title: 'EPR For E-Waste',
      description: 'Extended Producer Responsibility for electronic waste management',
      link: '/services/epr-e-waste'
    },
    {
      icon: <Radio className="w-12 h-12 text-blue-600" />,
      title: 'TEC MTCTE Certification',
      description: 'Mandatory Testing and Certification of Telecom Equipment',
      link: '/services/tec-mtcte'
    },
    {
      icon: <Signal className="w-12 h-12 text-blue-600" />,
      title: 'WPC ETA Approval',
      description: 'Equipment Type Approval for wireless products',
      link: '/services/wpc-eta'
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: 'iCET ARAI Approvals',
      description: 'Automotive certification and homologation services',
      link: '/services/icet-arai'
    },
    {
      icon: <Beaker className="w-12 h-12 text-blue-600" />,
      title: 'NABL Testing Report',
      description: 'Accredited laboratory testing services',
      link: '/services/nabl-testing'
    },
    {
      icon: <Package className="w-12 h-12 text-blue-600" />,
      title: 'EPR for Plastic Waste',
      description: 'Plastic packaging waste management compliance',
      link: '/services/epr-plastic-waste'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">
                {service.description}
              </p>
              <Link 
                href={service.link}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Click Here
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
