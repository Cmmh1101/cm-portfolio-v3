import React from "react";
import { Button } from "reactstrap";
import { useTheme } from "../provider/ThemeModeProvider";

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
  const { englishMode } = useTheme();
  return (
    <div className="hero-text">
      {englishMode ? (
        <>
          <h1>{spTitle}</h1>
          <p>{spText}</p>
          <Button outline type="button">
            {esButton}
          </Button>
        </>
      ) : (
        <>
          <h1>{enTitle}</h1>
          <p>{enText}</p>
          <Button outline type="button">
            {enButton}
          </Button>
        </>
      )}
    </div>
  );
};

export default HeroHeader;
