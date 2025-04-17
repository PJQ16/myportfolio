import React from 'react';

export default function Personal() {
  const ageCount = 1997;
  const currentYear = new Date().getFullYear();
  const age = currentYear - ageCount;

  return (
    <section
      id="personal"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_1280.jpg')",
      }}
    >
      {/* overlay ดำเพื่อให้อ่าน text ง่ายขึ้น */}
      <div className="absolute inset-0  bg-opacity-70 z-0"></div>

      <div className="max-w-5xl w-full text-center z-10">
        <h2 className="text-4xl font-bold text-black mb-10">
          Profile
        </h2>
        <div className="bg-[#112240] p-8 rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.1)] text-left space-y-6 transform transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] animate-fadeIn">
          <p className="text-gray-300">
            <span className="font-semibold text-white">Name:</span>{' '}
            Patiparn Jungsiriwat
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Age:</span>{' '}
            {age}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Position:</span>{' '}
            Full Stack Developer / Web Developer
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">About Me:</span>{' '}
            I am a passionate developer who enjoys building responsive, efficient, and scalable web applications.
            Always eager to learn new technologies and take on new challenges.
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Experience:</span>{' '}
            2+ years working with modern technologies like React, Node.js, and Tailwind CSS.
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Education:</span>{' '}
            Bachelor's Degree in Information Technology - Computer Information System from Rajamangala University of Technology Lanna [2020]
          </p>
        </div>
      </div>
    </section>
  );
}
