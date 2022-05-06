import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { useTheme } from "../../provider/ThemeModeProvider";
import ToggleLangButton from "./ToggleLangButton";
import ToggleModeButton from "./ToggleModeButton";
import { scrollTo } from "../../utils/ScrollTo";

const TopNavigation = () => {
  const { englishMode, darkMode, dark, light } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Navbar
        style={
          darkMode
            ? { color: light, backgroundColor: dark }
            : { color: dark, backgroundColor: light }
        }
        fixed="top"
        expand="md"
        dark
        className="navigation shadow"
      >
        <NavbarBrand href="#home" className="logo-container">
          <img src="../../../logobrand.png" alt="Logo" />
        </NavbarBrand>
        <NavbarToggler className="me-2" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
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
                onClick={() => {
                  scrollTo("#home");
                  isOpen && toggle();
                }}
                className="links"
                style={darkMode ? { color: light } : { color: dark }}
              >
                {englishMode ? "Inicio" : "Home"}
              </NavLink>
            </NavItem>
            <NavItem className="my-2 my-md-0">
              <button
                onClick={() => {
                  scrollTo("#projects");
                  isOpen && toggle();
                }}
                className="links"
                style={darkMode ? { color: light } : { color: dark }}
              >
                {englishMode ? "Proyectos" : "Projects"}
              </button>
            </NavItem>
            <NavItem className="my-2 my-md-0">
              <button
                onClick={() => {
                  scrollTo("#about");
                  isOpen && toggle();
                }}
                className="links"
                style={darkMode ? { color: light } : { color: dark }}
              >
                {englishMode ? "Sobre Mi" : "About"}
              </button>
            </NavItem>
            <NavItem className="my-2 my-md-0">
              <a
                href="https://blog.carlamontano.tech"
                target="_blank"
                onClick={() => {
                  isOpen && toggle();
                }}
                rel="noreferrer"
                className="links"
                style={darkMode ? { color: light } : { color: dark }}
              >
                Blog
              </a>
            </NavItem>
            <NavItem className="my-2 my-md-0">
              <button
                onClick={() => {
                  scrollTo("#contact");
                  isOpen && toggle();
                }}
                className="links"
                style={darkMode ? { color: light } : { color: dark }}
              >
                {englishMode ? "Contacto" : "Contact"}
              </button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
};

export default TopNavigation;
