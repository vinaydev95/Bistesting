'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';
import Image from 'next/image';

export default function FloatingContact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true); // Open by default

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Contact information - update these with your actual details
  const whatsappNumber = '919999999999'; // Replace with your WhatsApp number (with country code, no + or spaces)
  const messengerUsername = 'yourusername'; // Replace with your Facebook Messenger username
  const emailAddress = 'jsrcompliance@gmail.com'; // Your email

  return (
    <>
      {/* Floating Contact Sidebar */}
      <div className={`floating-contact-sidebar ${isExpanded ? 'expanded' : ''}`}>
        {/* Toggle Arrow Button - Always Visible */}
        <button 
          className="floating-toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle contact options"
        >
          <Image 
            src="/icons/arrow-icon.svg" 
            alt="Toggle" 
            width={24} 
            height={24}
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
          />
        </button>

        {/* Contact Options Container - Collapsible */}
        <div className="floating-contact-options">
          {/* Contact Us Button */}
          <button 
            className="floating-btn contact-us-btn"
            onClick={openModal}
            aria-label="Contact Us"
          >
            <span className="btn-text">Contact Us</span>
            <Image src="/icons/contact-icon.svg" alt="Contact" width={24} height={24} />
          </button>

          {/* Email Button */}
          <a 
            href={`mailto:${emailAddress}`}
            className="floating-btn email-btn"
            aria-label="Send Email"
          >
            <Image src="/icons/email-icon.svg" alt="Email" width={24} height={24} />
          </a>

          {/* WhatsApp Button */}
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn whatsapp-btn"
            aria-label="WhatsApp"
          >
            <Image src="/icons/whatsapp-icon.svg" alt="WhatsApp" width={24} height={24} />
          </a>

          {/* Messenger Button */}
          <a 
            href={`https://m.me/${messengerUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn messenger-btn"
            aria-label="Facebook Messenger"
          >
            <Image src="/icons/messenger-icon.svg" alt="Messenger" width={24} height={24} />
          </a>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
