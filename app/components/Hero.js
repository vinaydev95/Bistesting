'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactModal from './ContactModal';

const serviceImages = [
  { src: '/slider-bis-crs.png', alt: 'BIS CRS Certification' },
  { src: '/slider-wpc.png', alt: 'WPC ETA Approval' },
  { src: '/slider-nabl.png', alt: 'NABL Testing' },
  { src: '/slider-bee.png', alt: 'BEE Star Label' },
  { src: '/slider-ewaste.png', alt: 'EPR E-Waste' },
];

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % serviceImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
  };

  return (
    <>
      <section id="home" className="pt-16 bg-gradient-to-br from-[#0E7490] via-[#0891B2] to-[#0E7490]">
        <div className="container">
         
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                India's Trusted <span className="text-[#F97316]">BIS, ISO & EPR</span> Certification Consultants
              </h1>
              <p className="text-lg md:text-xl text-cyan-100 mb-8 leading-relaxed">
               JSR Compliance provides mandatory registration and certification services like BIS 
                registration, ISI certification, BEE registration, EPR authorization (for e-waste), 
                WPC approval and TEC certification, etc. which are required for products sold in India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="bg-[#F97316] text-white px-8 py-4 rounded-lg hover:bg-[#EA580C] transition-all font-semibold text-lg flex items-center justify-center hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Phone className="mr-2" size={20} />
                  Contact Us
                </button>
              </div>

           
            </motion.div>

            {/* Right Content - Image Slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border border-white/20 h-72">
                {/* Image Slider */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={serviceImages[currentIndex].src}
                    alt={serviceImages[currentIndex].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-all"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-center">{serviceImages[currentIndex].alt}</p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {serviceImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-yellow-400 w-6' : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
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
