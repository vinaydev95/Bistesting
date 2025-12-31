export default function About() {
  return (
    <section id="about" className="py-8 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our JSR Compliance Services
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a team of experienced JSR Compliance consultants with over 7 years of expertise 
              in helping businesses navigate the complex landscape of Indian certification requirements.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to simplify the certification journey for manufacturers and importers — 
              from BIS registration, ISI marking, and ISO certification to EPR authorization, BEE star labeling, 
              and WPC approvals. We ensure seamless compliance with Indian standards while saving you time and resources.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#0891B2] mb-2">7+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#0891B2] mb-2">500+</div>
                <div className="text-gray-600">Clients Served</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#0891B2] mb-2">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#0891B2] mb-2">15+</div>
                <div className="text-gray-600">Product Categories</div>
              </div>
            </div>
            
           
          </div>

          {/* Right Content */}
          <div className="bg-cyan-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0891B2] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Professional Help?</h3>
              <p className="text-gray-600 max-w-md">
                Navigating BIS, ISO, EPR, BEE, WPC, and TEC certification requirements can be complex. 
                Our experts ensure smooth, error-free certification with minimal documentation delays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}