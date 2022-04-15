import React from "react";
import { useTheme } from "../provider/ThemeModeProvider";

interface Props {
  enTitle?: string;
  enText?: string;
  spTitle?: string;
  spText?: string;
  subSpanish?: string;
  subEnglish?: string;
}

const SubHeader = ({
  enText,
  enTitle,
  spTitle,
  spText,
  subEnglish,
  subSpanish,
}: Props) => {
  const { englishMode } = useTheme();
  return (
    <div className="sub-header my-5">
      {englishMode ? (
        <>
          <h2>{spTitle}</h2>
          <h3>{subSpanish}</h3>
          <p>{spText}</p>
        </>
      ) : (
        <>
          <h2>{enTitle}</h2>
          <h3>{subEnglish}</h3>
          <p>{enText}</p>
        </>
      )}
    </div>
  );
};

export default SubHeader;
