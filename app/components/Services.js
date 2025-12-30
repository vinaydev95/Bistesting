import Link from 'next/link';

export default function Services() {
  const services = [
    {
      image: '/svc-bee.jpg',
      title: 'BEE Star Label',
      description: 'Energy efficiency star labeling for appliances and equipment',
      link: '/services/bee-star-label'
    },
    {
      image: '/svc-bis-crs.jpg',
      title: 'BIS CRS Certificate',
      description: 'Compulsory Registration Scheme for electronics and IT goods',
      link: '/services/bis-crs-certification'
    },
    {
      image: '/svc-isi.jpg',
      title: 'BIS ISI Mark (FMCS)',
      description: 'Foreign Manufacturers Certification Scheme for ISI marking',
      link: '/services/bis-isi-mark'
    },
    {
      image: '/svc-ewaste.jpg',
      title: 'EPR For E-Waste',
      description: 'Extended Producer Responsibility for electronic waste management',
      link: '/services/epr-e-waste'
    },
    {
      image: '/svc-tec.jpg',
      title: 'TEC MTCTE Certification',
      description: 'Mandatory Testing and Certification of Telecom Equipment',
      link: '/services/tec-mtcte'
    },
    {
      image: '/svc-wpc.jpg',
      title: 'WPC ETA Approval',
      description: 'Equipment Type Approval for wireless products',
      link: '/services/wpc-eta'
    },
    {
      image: '/svc-arai.jpg',
      title: 'iCET ARAI Approvals',
      description: 'Automotive certification and homologation services',
      link: '/services/icet-arai'
    },
    {
      image: '/svc-nabl.jpg',
      title: 'NABL Testing Report',
      description: 'Accredited laboratory testing services',
      link: '/services/nabl-testing'
    },
    {
      image: '/svc-plastic.jpg',
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
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
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
