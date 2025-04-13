import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <>
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
