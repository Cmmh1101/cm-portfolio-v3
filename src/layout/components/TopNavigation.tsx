import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { useTheme } from "../../provider/ThemeModeProvider";
import ToggleLangButton from "./ToggleLangButton";
import ToggleModeButton from "./ToggleModeButton";

const TopNavigation = () => {
  const { englishMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (section: string) => {
    const anchor = document.querySelector(`${section}`);
    anchor?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Navbar fixed="top" expand="md" dark className="navigation shadow">
        <NavbarBrand href="/" className="logo-container">
          <img src="../../../logobrand.png" alt="Logo" />
        </NavbarBrand>
        <NavbarToggler className="me-2" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="">
          <Nav navbar className="nav-links">
            <NavItem className="my-2 my-md-0">
              <ToggleModeButton />
            </NavItem>
            <NavItem className="my-2 my-md-0">
              <ToggleLangButton />
            </NavItem>
            <NavItem className="my-2 my-md-0">
              <NavLink
                to="/"
                onClick={() => scrollTo("#home")}
                className="links"
              >
                {englishMode ? "Inicio" : "Home"}
              </NavLink>
            </NavItem>
            <NavItem className="my-2 my-md-0">
              <a
                onClick={() => {
                  scrollTo("#projects");
                }}
                className="links"
              >
                {englishMode ? "Proyectos" : "Projects"}
              </a>
            </NavItem>
            <NavItem className="my-2 my-md-0">
              <a onClick={() => scrollTo("#about")} className="links">
                {englishMode ? "Sobre Mi" : "About"}
              </a>
            </NavItem>
            <NavItem className="my-2 my-md-0">
              <a onClick={() => scrollTo("#contact")} className="links">
                {englishMode ? "Contacto" : "Contact"}
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
};

export default TopNavigation;
