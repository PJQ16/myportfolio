'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'CFO Web Application',
      description:
        'A web platform developed for collecting and reporting Greenhouse Gas emissions data.',
      imageUrl: '/images/landscape.png',
    },
    {
      title: 'Solar Cell Monitoring System',
      description:
        'Real-time monitoring web app to track solar power generation.',
      imageUrl: '/images/solar.png',
    },
    {
      title: 'National Energy MRV System',
      description:
        'A national MRV system for energy planning with graphs and reports.',
      imageUrl: '/images/mrv.png',
    },
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col justify-center items-center bg-[#112240] text-white px-6"
    >
      <div className="max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0a192f] p-4 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-md mb-2"
              />
              <h3 className="text-lg font-bold text-cyan-300 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
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
              <button
                onClick={prevImage}
                className="text-2xl text-cyan-600 hover:text-cyan-800"
              >
                ‹
              </button>

              <img
                src={projects[currentIndex].imageUrl}
                alt={projects[currentIndex].title}
                className="max-h-[400px] w-auto rounded-lg"
              />

              <button
                onClick={nextImage}
                className="text-2xl text-cyan-600 hover:text-cyan-800"
              >
                ›
              </button>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-xl font-bold">
                {projects[currentIndex].title}
              </h3>
              <p className="text-gray-700">
                {projects[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
