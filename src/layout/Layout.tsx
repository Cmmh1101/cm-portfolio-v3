import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useTheme } from "../provider/ThemeModeProvider";
import AppRouter from "../router/AppRouter";
import Footer from "./components/Footer";
import TopNavigation from "./components/TopNavigation";

const Layout = () => {
  const { dark, light, darkMode, setDarkMode } = useTheme();

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
    <>
      <TopNavigation />
      <main
        className="main"
        style={
          darkMode
            ? { color: light, backgroundColor: dark }
            : { color: dark, backgroundColor: light }
        }
      >
        <Container fluid className="p-0">
          <AppRouter />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
