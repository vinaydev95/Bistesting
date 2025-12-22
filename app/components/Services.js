export default function Services() {
  const services = [
    {
      icon: '📋',
      title: 'BIS Registration',
      description: 'Compulsory Registration Scheme for electronics, IT goods, and other products',
      features: ['CRS Registration', 'ISI Mark Certification', 'Foreign Manufacturer Scheme'],
      link: '/services/bis-registration'
    },
    {
      icon: '⭐',
      title: 'ISI Certification',
      description: 'Indian Standards Institute mark for product quality certification',
      features: ['Factory Inspection', 'Product Testing', 'Quality System Audit'],
      link: '/services/isi-certification'
    },
    {
      icon: '🌱',
      title: 'EPR Certification',
      description: 'Extended Producer Responsibility for e-waste management compliance',
      features: ['E-Waste Management', 'Plastic Waste Management', 'Battery Waste Management'],
      link: '/services/epr-certification'
    },
    {
      icon: '⚡',
      title: 'BEE Certification',
      description: 'Bureau of Energy Efficiency star labeling for energy efficiency',
      features: ['Star Rating', 'Energy Consumption', 'Performance Testing'],
      link: '/services/bee-certification'
    },
    {
      icon: '📡',
      title: 'WPC Certification',
      description: 'Wireless Planning & Coordination for wireless communication devices',
      features: ['ETA Approval', 'License Application', 'Frequency Allocation'],
      link: '/services/wpc-certification'
    },
    {
      icon: '🏆',
      title: 'ISO Certification',
      description: 'International Organization for Standardization quality management',
      features: ['ISO 9001:2015', 'ISO 14001', 'ISO 45001', 'ISO 27001'],
      link: '/services/iso-certification'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">Our Certification Services</h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Comprehensive certification and compliance services for Indian and international standards
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card hover:border-blue-200 group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-base text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full btn-secondary text-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Need Multiple Certifications?</h3>
            <p className="text-lg text-gray-600 mb-6">
              We offer bundled packages for businesses requiring multiple certifications. 
              Save time and money with our comprehensive certification solutions.
            </p>
            <button className="btn-primary text-lg">
              Get Package Deal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}