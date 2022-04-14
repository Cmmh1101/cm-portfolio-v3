import React from "react";
import { useTheme } from "../../provider/ThemeModeProvider";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const HomePage = () => {
  const { englishMode } = useTheme();
  return (
    <>
      <Hero />
      <Projects />
      <About />
    </>
  );
};

export default HomePage;
