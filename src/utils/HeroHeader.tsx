import React from "react";
import { useTheme } from "../provider/ThemeModeProvider";

interface Props {
  enTitle: string;
  enText: string;
  spTitle: string;
  spText: string;
}

const HeroHeader = ({ enText, enTitle, spTitle, spText }: Props) => {
  const { englishMode } = useTheme();
  return (
    <div className="hero-text">
      {englishMode ? (
        <>
          <h1>{spTitle}</h1>
          <p>{spText}</p>
        </>
      ) : (
        <>
          <h1>{enTitle}</h1>
          <p>{enText}</p>
        </>
      )}
    </div>
  );
};

export default HeroHeader;
