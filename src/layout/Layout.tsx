import React, { useState } from "react";
import { Container } from "reactstrap";
import { useTheme } from "../provider/ThemeModeProvider";
import AppRouter from "../router/AppRouter";
import Footer from "./components/Footer";
import TopNavigation from "./components/TopNavigation";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { themes, dark, light, darkMode, handleToggleTheme } = useTheme();

  return (
    <>
      <TopNavigation />
      <main
        className="main"
        style={
          darkMode
            ? { color: "white", backgroundColor: "black" }
            : { color: "black", backgroundColor: "white" }
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
