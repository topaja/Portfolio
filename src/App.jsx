import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* <div className="bg-[#F2F1F7] absolute top-0 h-[2253px] w-full -z-0"></div> */}
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Experience />
        <Contact />
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default App;
