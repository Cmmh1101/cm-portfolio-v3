import React from "react";
import ProjectsPage from "../projects/ProjectsPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectsPage />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
