export default function Services() {
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive certification and registration services to ensure your products 
              comply with Indian standards and regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                  <span>Duration: {service.duration}</span>
                  <span>Documents: {service.documents}</span>
                </div>

                <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors mt-4">
                  Get Quote
                </button>
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