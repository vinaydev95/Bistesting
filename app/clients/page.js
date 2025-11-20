export default function Clients() {
  const clients = [
    { name: 'Tech Electronics', industry: 'Electronics', service: 'BIS Registration', logo: 'TE' },
    { name: 'Power Solutions', industry: 'Electrical', service: 'BEE Certification', logo: 'PS' },
    { name: 'Mobile Tech', industry: 'Telecom', service: 'WPC Approval', logo: 'MT' },
    { name: 'Green Devices', industry: 'IT Hardware', service: 'EPR Authorization', logo: 'GD' },
    { name: 'Quality Manufacturing', industry: 'Manufacturing', service: 'ISI Certification', logo: 'QM' },
    { name: 'Communication Systems', industry: 'Telecom', service: 'TEC Certification', logo: 'CS' },
    { name: 'Energy Efficient', industry: 'Appliances', service: 'BEE Star Rating', logo: 'EE' },
    { name: 'Digital Solutions', industry: 'IT', service: 'BIS CRS', logo: 'DS' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Mehta',
      company: 'Tech Electronics',
      comment: 'Createk QMS made our BIS registration process smooth and efficient. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Singh',
      company: 'Power Solutions',
      comment: 'Professional service with excellent guidance throughout the BEE certification process.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      company: 'Green Devices',
      comment: 'Their expertise in EPR authorization saved us time and resources. Great team!',
      rating: 4
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Trusted by 500+ businesses across India for their certification and compliance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Valued Clients</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {client.logo}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{client.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{client.industry}</p>
                <p className="text-xs text-blue-600 font-medium">{client.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-200">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-200">Success Rate</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <p className="text-blue-200">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <p className="text-blue-200">Certification Types</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}