export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'Understand your certification requirements',
      details: ['Requirement analysis', 'Document checklist', 'Timeline estimation']
    },
    {
      number: '02',
      title: 'Document Preparation',
      description: 'Collect and prepare all necessary documents',
      details: ['Application forms', 'Technical documents', 'Test reports']
    },
    {
      number: '03',
      title: 'Testing & Evaluation',
      description: 'Product testing and quality evaluation',
      details: ['Lab testing', 'Sample evaluation', 'Quality audit']
    },
    {
      number: '04',
      title: 'Application Submission',
      description: 'Submit application to relevant authority',
      details: ['Online submission', 'Fee payment', 'Application tracking']
    },
    {
      number: '05',
      title: 'Liaison & Follow-up',
      description: 'Regular follow-up with certification body',
      details: ['Status updates', 'Query resolution', 'Inspection coordination']
    },
    {
      number: '06',
      title: 'Certificate Delivery',
      description: 'Receive your certification',
      details: ['Certificate collection', 'Quality check', 'Renewal planning']
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Our Certification Process</h2>
        <p className="section-subtitle">
          Simple, transparent, and efficient process for all types of certifications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-600">• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Start Your Certification Journey Today</h3>
            <p className="mb-6 opacity-90">
              Get expert guidance for BIS, ISO, EPR, BEE, WPC, and ISI certifications from India&rsquo;s trusted consultants.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Begin Certification Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}