import React from "react";
import { useTheme } from "../../provider/ThemeModeProvider";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const HomePage = () => {
  const { englishMode } = useTheme();
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
};

export default HomePage;
