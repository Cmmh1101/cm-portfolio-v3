import React from "react";
import ProjectsPage from "../projects/ProjectsPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectsPage />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
