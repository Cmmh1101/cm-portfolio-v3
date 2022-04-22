import { ReactNode, useContext, useState } from "react";
import { ThemeModeContext } from "./ThemeModeContext";

function useTheme() {
  const context = useContext(ThemeModeContext);
  if (context === undefined) {
    throw console.error("Theme must be used whitin a ThemeProvider");
  }
  return context;
}

const ThemeModeProvider = (props: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [englishMode, setEnglishMode] = useState(false);

  const handleToggleLanguage = () => {
    setEnglishMode(!englishMode);
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const dark = "#15141a";
  const light = "#fbfbfe";

  return (
    <ThemeModeContext.Provider
      value={{
        dark,
        light,
        darkMode,
        handleToggleTheme,
        englishMode,
        handleToggleLanguage,
      }}
    >
      {props.children}
    </ThemeModeContext.Provider>
  );
};

export { ThemeModeProvider, useTheme };
