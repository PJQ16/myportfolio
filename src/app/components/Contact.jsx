import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center text-white px-6 relative"
     style={{
        backgroundImage: "url('/images/ct.png')",
      }}
    >
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row gap-10 p-10 bg-[#0a192f]/80 rounded-xl shadow-lg backdrop-blur-sm">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Get in Touch</h2>
          <p className="text-gray-300 flex items-center gap-2">
            <FaEnvelope className="text-cyan-400" /> cc0patipan@gmail.com
          </p>
          <p className="text-gray-400 mt-4">
            Feel free to reach out for collaborations, job opportunities, or just a friendly hello!
          </p>
        </div>
        <form className="flex-1 flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-[#112240] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-[#112240] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea placeholder="Your Message" rows={5} className="p-3 rounded-lg bg-[#112240] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <button type="submit" className="bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-cyan-500 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
