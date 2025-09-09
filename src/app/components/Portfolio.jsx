'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Chiang Mai University CFO Web Application',
      description: 'A web platform developed for collecting and reporting Greenhouse Gas emissions data.',
      imageUrl: '/images/landscape.png',
    },
    {
      title: 'Chiang Mai University Monitoring CFO System',
      description: 'Real-time monitoring web app to track greenhouse gas emissions.',
      imageUrl: '/images/solar.png',
    },
    {
      title: 'National Energy MRV System',
      description: 'A national MRV system for energy planning with graphs and reports.',
      imageUrl: '/images/mrv.png',
    },
    {
      title: 'Point Of Sale System Landingpage',
      description: 'An engaging landing page designed to introduce and highlight the features of a POS system.',
      imageUrl: '/images/pos.png',
    },
    {
      title: 'Mine Water Landingpage',
      description: 'An engaging landing page designed to introduce and highlight the features of a mine water.',
      imageUrl: '/images/minewater.png',
    },
    {
      title: 'Netzero Campus',
      description: 'A collaborative project among universities to achieve carbon neutrality and support national greenhouse gas management goals.',
      imageUrl: '/images/netzero.png',
    },
    {
      title: 'Knight frank CFO',
      description: 'A reporting system for greenhouse gas emissions developed for Knight Frank CFO.',
      imageUrl: '/images/kf.png',
    },
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="min-h-screen flex flex-col justify-center items-center bg-[#112240] text-white px-6">
      <div className="w-full text-center">
       <h2 className="text-4xl font-bold text-cyan-400 mb-6">Our Works</h2>
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // แสดง 3 การ์ดพร้อมกัน
          }}
          className="pb-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-[#0a192f] p-4 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer w-full"
                onClick={() => openModal(index)}
              >
                <img src={project.imageUrl} alt={project.title} className="rounded-md mb-2" />
                <h3 className="text-lg font-bold text-cyan-300 mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 w-full">
          <motion.div
            className="bg-white text-black p-6 rounded-lg max-w-3xl w-full relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="flex items-center gap-4">
              <button onClick={prevImage} className="text-2xl text-cyan-600 hover:text-cyan-800">‹</button>
              <img src={projects[currentIndex].imageUrl} alt={projects[currentIndex].title} className="max-h-[400px] w-auto rounded-lg" />
              <button onClick={nextImage} className="text-2xl text-cyan-600 hover:text-cyan-800">›</button>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-xl font-bold">{projects[currentIndex].title}</h3>
              <p className="text-gray-700">{projects[currentIndex].description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
