import React from "react";
import { Container } from "reactstrap";
import { useTheme } from "../provider/ThemeModeProvider";
import AppRouter from "../router/AppRouter";
import Footer from "./components/Footer";
import TopNavigation from "./components/TopNavigation";

const Layout = () => {
  // const themes = {
  //   light: {
  //     foreground: "#000000",
  //     background: "#eeeeee",
  //   },
  //   dark: {
  //     foreground: "#ffffff",
  //     background: "#222222",
  //   },
  // };

  // const ThemeContext = React.createContext(themes.light);
  return (
    <>
      <TopNavigation />
      <main className="main">
        <Container fluid className="p-0">
          <AppRouter />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
