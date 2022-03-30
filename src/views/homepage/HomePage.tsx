import React from "react";
import { useTheme } from "../../provider/ThemeModeProvider";
import Hero from "./components/Hero";

const HomePage = () => {
  const { englishMode } = useTheme();
  return (
    <>
      <Hero />
      <h1 style={{ height: "300px" }}>
        {englishMode ? "Inicio en espanol" : "Home page in english"}
      </h1>
    </>
  );
};

export default HomePage;
