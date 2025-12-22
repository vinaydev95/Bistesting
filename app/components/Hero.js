'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section id="home" className="pt-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="container">
         
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We Help To Grow Your <span className="text-yellow-400">Business</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
               BIS Consultants provides mandatory registration and certification services like BIS 
                registration, ISI certification, BEE registration, EPR authorization (for e-waste), 
                WPC approval and TEC certification, etc. which are required for products sold in India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all font-semibold text-lg flex items-center justify-center hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Phone className="mr-2" size={20} />
                  Contact Us
                </button>
              </div>

           
            </motion.div>

            {/* Right Content - Placeholder for image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-80 flex items-center justify-center border border-white/20">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-blue-900 text-2xl font-bold">BIS Consultants</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Quality Management</h3>
                  <p className="text-blue-100">Certification Services</p>
                </div>
              </div>
            </motion.div>
          </div>

      
        
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
