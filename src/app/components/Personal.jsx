import React from 'react';

export default function Personal() {
  const birthYear = 1997;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <section
      id="personal"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/desk.png')",
      }}
    >
      {/* Overlay แบบ gradient */}

      <div className="relative z-10 max-w-4xl w-full text-center">
        <div className="bg-[#112240]/80 p-10 rounded-2xl shadow-lg text-left space-y-6 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">
          <p className="text-gray-300">
            <span className="font-semibold text-white">Name:</span> Patiparn Jungsiriwat
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Age:</span> {age}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Position:</span> Full Stack Developer
          </p>
          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">About Me:</span> 
            A results-driven developer specializing in building responsive, scalable, and user-friendly web applications. Skilled in React, Node.js, and Tailwind CSS, with a passion for learning new technologies and tackling challenging projects.
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Experience:</span> 2+ years in full-stack development delivering professional web solutions.
          </p>
          <p className="text-gray-300">
            <span className="font-semibold text-white">Education:</span> 
            Bachelor of Information Technology (Computer Information Systems), Rajamangala University of Technology Lanna, Thailand – 2020
          </p>
        </div>
      </div>
    </section>
  );
}
