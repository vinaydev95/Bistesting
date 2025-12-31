export default function WhyChooseUs() {
  const features = [
    {
      icon: '🎯',
      title: 'All India Services',
      description: 'Comprehensive certification services across all states and union territories'
    },
    {
      icon: '⚡',
      title: 'Fast Processing',
      description: 'Quick turnaround with dedicated application tracking for all certifications'
    },
    {
      icon: '💰',
      title: 'Best Pricing',
      description: 'Competitive pricing with transparent costs and no hidden charges'
    },
    {
      icon: '📞',
      title: 'Single Point Contact',
      description: 'Dedicated relationship manager for all your certification needs'
    },
    {
      icon: '🔒',
      title: '100% Success Rate',
      description: 'Proven track record with guaranteed approval for all certifications'
    },
    {
      icon: '🏢',
      title: 'Industry Experts',
      description: 'Specialized consultants for each certification type with domain expertise'
    }
  ];

  const certifications = [
    { name: 'BIS Registration', clients: '250+' },
    { name: 'ISO Certification', clients: '150+' },
    { name: 'EPR Certification', clients: '100+' },
    { name: 'BEE Certification', clients: '120+' },
    { name: 'WPC Certification', clients: '80+' },
    { name: 'ISI Certification', clients: '200+' },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Why Choose Our Certification Services?</h2>
        <p className="section-subtitle">
          We make certification simple, fast, and reliable for businesses across India
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Certification Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-[#0891B2] transition-colors">
                <div className="text-2xl font-bold text-[#0891B2] mb-2">{cert.clients}</div>
                <div className="text-gray-700 font-medium">{cert.name}</div>
                <div className="text-sm text-gray-500">Clients Certified</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}