import Link from 'next/link';

export default function Services() {
  const services = [
    {
      image: '/svc-bee-new.png',
      title: 'BEE Star Label',
      description: 'Energy efficiency star labeling for appliances and equipment',
      link: '/services/bee-star-label'
    },
    {
      image: '/svc-bis-crs-new.png',
      title: 'BIS CRS Certificate',
      description: 'Compulsory Registration Scheme for electronics and IT goods',
      link: '/services/bis-crs-certification'
    },
    {
      image: '/svc-isi-new.png',
      title: 'BIS ISI Mark (FMCS)',
      description: 'Foreign Manufacturers Certification Scheme for ISI marking',
      link: '/services/bis-isi-mark'
    },
    {
      image: '/svc-ewaste-new.png',
      title: 'EPR For E-Waste',
      description: 'Extended Producer Responsibility for electronic waste management',
      link: '/services/epr-e-waste'
    },
    {
      image: '/svc-tec-new.png',
      title: 'TEC MTCTE Certification',
      description: 'Mandatory Testing and Certification of Telecom Equipment',
      link: '/services/tec-mtcte'
    },
    {
      image: '/svc-wpc-new.png',
      title: 'WPC ETA Approval',
      description: 'Equipment Type Approval for wireless products',
      link: '/services/wpc-eta'
    },
    {
      image: '/svc-arai-new.png',
      title: 'iCET ARAI Approvals',
      description: 'Automotive certification and homologation services',
      link: '/services/icet-arai'
    },
    {
      image: '/svc-nabl-new.png',
      title: 'NABL Testing Report',
      description: 'Accredited laboratory testing services',
      link: '/services/nabl-testing'
    },
    {
      image: '/svc-plastic-new.png',
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
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-[#0891B2] font-semibold hover:text-[#0E7490] transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
