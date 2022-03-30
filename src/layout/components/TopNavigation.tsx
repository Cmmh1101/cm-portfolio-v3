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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

interface Props {}

const TopNavigation = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { themes, dark, light, darkMode, handleToggleTheme } = useTheme();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="faded" dark>
        <NavbarBrand className="me-auto" href="/">
          Carla Montano
        </NavbarBrand>
        <NavbarToggler className="me-2" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <button
                style={
                  darkMode
                    ? { color: "white", backgroundColor: "black" }
                    : { color: "black", backgroundColor: "white" }
                }
                className="theme-btn"
                type="button"
                onClick={handleToggleTheme}
              >
                {darkMode ? (
                  <FontAwesomeIcon icon={faMoon} className="" />
                ) : (
                  <FontAwesomeIcon icon={faSun} className="" />
                )}
              </button>
            </NavItem>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavigation;
