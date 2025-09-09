import Image from "next/image";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Tools from "./components/Tools";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Personal from "./components/Personal";

export default function Home() {
  return (
    <div className="w-screen h-screen">
       <Navbar />
        <Personal/>
       <Portfolio />
      <Tools />
        <Experience />
      <Contact />
    </div>
  );
}
