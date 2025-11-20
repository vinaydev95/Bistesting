export default function Features() {
  const features = [
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions that fit your unique business requirements.',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your business runs smoothly.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Solutions that grow with your business needs.',
    },
    {
      title: 'Security First',
      description: 'Enterprise-level security for all your digital assets.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional value through our commitment to quality, 
            innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}