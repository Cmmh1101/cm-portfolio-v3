import React from "react";
import { Button } from "reactstrap";
import { useTheme } from "../provider/ThemeModeProvider";
import { scrollTo } from "./ScrollTo";
import { animated } from "react-spring";

interface Props {
  enTitle: string;
  enText: string;
  spTitle: string;
  spText: string;
  enButton: string;
  esButton: string;
}

const HeroHeader = ({
  enText,
  enTitle,
  spTitle,
  spText,
  enButton,
  esButton,
}: Props) => {
  const { englishMode, styles } = useTheme();
  return (
    <div className="hero-text">
      {englishMode ? (
        <animated.div style={styles}>
          <h1>{spTitle}</h1>
          <p>{spText}</p>
          <Button onClick={() => scrollTo("#projects")} outline type="button">
            {esButton}
          </Button>
        </animated.div>
      ) : (
        <animated.div style={styles}>
          <h1>{enTitle}</h1>
          <p>{enText}</p>
          <Button onClick={() => scrollTo("#projects")} outline type="button">
            {enButton}
          </Button>
        </animated.div>
      )}
    </div>
  );
};

export default HeroHeader;
