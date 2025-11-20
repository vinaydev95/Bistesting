'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CertificationsSlider() {
  const certifications = [
    {
      name: 'BIS Registration',
      description: 'Bureau of Indian Standards',
      icon: '📋',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'ISI Certification',
      description: 'Indian Standards Institute',
      icon: '⭐',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'EPR Certification',
      description: 'Extended Producer Responsibility',
      icon: '🌱',
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      name: 'BEE Certification',
      description: 'Bureau of Energy Efficiency',
      icon: '⚡',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'WPC Certification',
      description: 'Wireless Planning & Coordination',
      icon: '📡',
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'TEC Certification',
      description: 'Telecommunication Engineering Center',
      icon: '📞',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'ISO Certification',
      description: 'International Organization for Standardization',
      icon: '🏆',
      color: 'from-gray-500 to-gray-700'
    },
    {
      name: 'CRS Registration',
      description: 'Compulsory Registration Scheme',
      icon: '🔒',
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <h3 className="text-2xl font-bold text-white text-center mb-8">
        Our Certification Services
      </h3>
      
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        autoplay={{
          delay: 2500, // Faster auto-play (2.5 seconds)
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Pause on hover
        }}
        speed={800} // Faster transition
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        className="certifications-swiper"
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index}>
            <div className={`bg-gradient-to-br ${cert.color} rounded-xl p-4 text-white text-center h-40 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer`}>
              <div className="text-3xl mb-2">{cert.icon}</div>
              <h4 className="font-bold text-base mb-1">{cert.name}</h4>
              <p className="text-white/90 text-xs">{cert.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .certifications-swiper {
          padding: 10px 10px 50px;
        }
        .certifications-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        .certifications-swiper .swiper-pagination-bullet-active {
          background: #fbbf24;
          opacity: 1;
        }
        .certifications-swiper .swiper-button-next,
        .certifications-swiper .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
        .certifications-swiper .swiper-button-next:after,
        .certifications-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .certifications-swiper .swiper-button-next:hover,
        .certifications-swiper .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}