export default function Updates() {
  const updates = [
    {
      title: 'New BIS Regulations for Smart Devices',
      date: '2024-11-15',
      category: 'Regulatory Update',
      excerpt: 'BIS has introduced new regulations for smart home devices under CRS scheme.',
      image: '📱'
    },
    {
      title: 'EPR Compliance Deadline Extended',
      date: '2024-11-10',
      category: 'News',
      excerpt: 'Government extends EPR compliance deadline for e-waste management by 3 months.',
      image: '🌱'
    },
    {
      title: 'BEE Star Rating Changes',
      date: '2024-11-05',
      category: 'Update',
      excerpt: 'New energy efficiency standards announced for home appliances.',
      image: '⚡'
    },
    {
      title: 'WPC Import Guidelines Updated',
      date: '2024-10-28',
      category: 'Regulatory Update',
      excerpt: 'Updated guidelines for import of wireless equipment in India.',
      image: '📡'
    },
    {
      title: 'TEC Certification Process Simplified',
      date: '2024-10-20',
      category: 'News',
      excerpt: 'Simplified process for telecom equipment certification announced.',
      image: '📞'
    },
    {
      title: 'ISI Mark for New Product Categories',
      date: '2024-10-15',
      category: 'Update',
      excerpt: 'ISI mark now mandatory for additional kitchen appliance categories.',
      image: '⭐'
    }
  ];

  const categories = ['All', 'Regulatory Update', 'News', 'Update', 'Industry Insights'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0E7490] to-[#0891B2] py-20">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Updates & News</h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Stay updated with the latest regulatory changes, news, and insights from the 
              certification industry.
            </p>
          </div>
        </div>
      </section>

      {/* Updates Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 border border-[#0891B2] text-[#0891B2] rounded-full hover:bg-[#0891B2] hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Updates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-cyan-100 p-8 flex items-center justify-center">
                  <span className="text-4xl">{update.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#0891B2] font-semibold">{update.category}</span>
                    <span className="text-sm text-gray-500">{update.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{update.title}</h3>
                  <p className="text-gray-600 mb-4">{update.excerpt}</p>
                  <button className="text-[#0891B2] font-semibold hover:text-[#0E7490] transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-[#0891B2] text-white px-8 py-3 rounded-lg hover:bg-[#0E7490] transition-colors">
              Load More Updates
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest updates and regulatory changes 
              directly in your inbox.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891B2] focus:border-transparent"
              />
              <button className="bg-[#0891B2] text-white px-6 py-3 rounded-lg hover:bg-[#0E7490] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}