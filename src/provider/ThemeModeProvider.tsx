import { ReactNode, useContext, useEffect, useState } from "react";
import { ThemeModeContext } from "./ThemeModeContext";
import { useSpring } from "react-spring";

function useTheme() {
  const context = useContext(ThemeModeContext);
  if (context === undefined) {
    throw console.error("Theme must be used whitin a ThemeProvider");
  }
  return context;
}

const ThemeModeProvider = (props: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    const initialValue = JSON.parse(saved!);
    return initialValue;
  });
  const [englishMode, setEnglishMode] = useState(() => {
    const saved = localStorage.getItem("englishMode");
    const initialValue = JSON.parse(saved!);
    return initialValue;
  });

  const handleToggleLanguage = () => {
    setEnglishMode(!englishMode);
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const dark = "#15141a";
  const light = "#fbfbfe";

  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 1200,
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("englishMode", JSON.stringify(englishMode));
  }, [darkMode, englishMode]);

  // useEffect(() => {
  //   const mode = JSON.parse(localStorage.getItem("darkMode") || "");
  //   if (darkMode) {
  //     setDarkMode(!darkMode);
  //   }
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("darkMode", JSON.stringify(darkMode));
  // }, [darkMode]);

  // useEffect(() => {
  //   const darkMode = JSON.parse(localStorage.getItem("darkMode") || "");
  //   if (darkMode) {
  //     setDarkMode(darkMode);
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <ThemeModeContext.Provider
      value={{
        dark,
        light,
        darkMode,
        handleToggleTheme,
        englishMode,
        handleToggleLanguage,
        styles,
        setDarkMode,
      }}
    >
      {props.children}
    </ThemeModeContext.Provider>
  );
};

export { ThemeModeProvider, useTheme };
