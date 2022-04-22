import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TestAnimation from "./components/TestAnimation";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TestAnimation />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
