import Link from "next/link";

const Navbar = () => (
  <nav className="bg-white text-gray-800 p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-xl font-bold tracking-wide text-cyan-500">Patiparn Jungsiriwat</div>
      <ul className="flex space-x-6 text-sm font-medium">
        <li><Link href="#experience" className="hover:text-cyan-600">Experience</Link></li>
        <li><Link href="#tools" className="hover:text-cyan-600">Tools</Link></li>
        <li><Link href="#portfolio" className="hover:text-cyan-600">Portfolio</Link></li>
        <li><Link href="#contact" className="hover:text-cyan-600">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
