import React from 'react'
export default function Contact() {
  return (
    <section
    id="contact"
    className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center text-white px-6"
    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/01/25/21/02/phone-612061_1280.jpg')" }}
  >
    <div className="bg-[#0a192f]/80 p-10 rounded-lg shadow-lg max-w-4xl text-center backdrop-blur-sm">
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">Contact</h2>
      <p className="text-gray-300 mb-2">Email: cc0patipan@gmail.com</p>
      <p className="text-gray-300">Phone: +66 90-901-1552</p>
    </div>
  </section>
  
  )
}
