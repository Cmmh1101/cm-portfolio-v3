import React from "react";
import { useTheme } from "../provider/ThemeModeProvider";

interface Props {
  enTitle: string;
  enText?: string;
  spTitle: string;
  spText?: string;
}

const SubHeader = ({ enText, enTitle, spTitle, spText }: Props) => {
  const { englishMode } = useTheme();
  return (
    <div className="sub-header my-5">
      {englishMode ? (
        <>
          <h2>{spTitle}</h2>
          <p>{spText}</p>
        </>
      ) : (
        <>
          <h2>{enTitle}</h2>
          <p>{enText}</p>
        </>
      )}
    </div>
  );
};

export default SubHeader;
