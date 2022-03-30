import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTheme } from "../../provider/ThemeModeProvider";

interface Props {}

const ToggleModeButton = (props: Props) => {
  const { themes, dark, light, darkMode, handleToggleTheme } = useTheme();

  return (
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
        <FontAwesomeIcon icon={faSun} className="" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="" />
      )}
    </button>
  );
};

export default ToggleModeButton;
