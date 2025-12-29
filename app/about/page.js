export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About JSR Compliance</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading certification consultants with 10+ years of experience in helping businesses 
              achieve compliance with Indian standards and regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2013, JSR Compliance has been at the forefront of certification and 
                compliance services in India. We started with a simple mission: to make complex 
                certification processes simple and accessible for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have helped more than 500 clients across various industries 
                to obtain mandatory certifications and registrations required for their products 
                to be sold in the Indian market.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experienced professionals understands the intricacies of Indian 
                regulatory frameworks and works closely with clients to ensure smooth and 
                efficient certification processes.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="w-24 h-24 bg-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  2013
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Established</h3>
                <p>Serving businesses for over a decade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide comprehensive, reliable, and efficient certification services that 
                enable businesses to comply with Indian standards while focusing on their core 
                operations. We strive to simplify complex regulatory processes through expert 
                guidance and personalized support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted certification consultancy in India, recognized for our 
                expertise, integrity, and commitment to client success. We aim to contribute to 
                the growth of Indian manufacturing by ensuring quality standards and regulatory 
                compliance across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-lg">CEO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rahul Sharma</h3>
              <p className="text-blue-600 font-semibold mb-2">Chief Executive Officer</p>
              <p className="text-gray-600">15+ years in certification industry</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-lg">COO</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Patel</h3>
              <p className="text-blue-600 font-semibold mb-2">Chief Operating Officer</p>
              <p className="text-gray-600">12+ years in quality management</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-lg">HOD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amit Kumar</h3>
              <p className="text-blue-600 font-semibold mb-2">Head of Certification</p>
              <p className="text-gray-600">Expert in BIS and regulatory affairs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}