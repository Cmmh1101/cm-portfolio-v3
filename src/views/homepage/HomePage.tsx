import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
