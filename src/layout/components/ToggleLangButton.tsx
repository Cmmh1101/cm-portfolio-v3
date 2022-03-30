import src from "*.avif";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTheme } from "../../provider/ThemeModeProvider";

interface Props {}

const ToggleLangButton = (props: Props) => {
  const { handleToggleLanguage, englishMode } = useTheme();

  return (
    <button
      style={
        englishMode
          ? { backgroundColor: "red", color: "white" }
          : {
              backgroundImage:
                "url(" + "../../../images/general/espFlag.png" + ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
      }
      className="theme-btn lang-btn"
      type="button"
      onClick={handleToggleLanguage}
    >
      {englishMode ? "En" : ""}
    </button>
  );
};

export default ToggleLangButton;
