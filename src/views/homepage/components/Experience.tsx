import React from "react";
import { Col } from "reactstrap";
import SubHeader from "../../../utils/SubHeader";
import experience from "../../../experienceData";
import { useTheme } from "../../../provider/ThemeModeProvider";

interface Props {}

const Experience = (props: Props) => {
  const { englishMode } = useTheme();
  return (
    <>
      <SubHeader enTitle="Experience" spTitle="Experiencia" />
      <Col xs={12}>
        {experience.map((exp) => {
          return (
            <Col className="my-5 experience-box">
              <h3>{englishMode ? exp.spTitle : exp.enTitle}</h3>
              <span className="small">
                {exp.location + " / " + exp.startDate + " - " + exp.endDate}
              </span>
              <p className="mt-3">
                {englishMode ? exp.spDescription : exp.enDescription}
              </p>
              <span>{exp.technologies.toUpperCase()}</span>
            </Col>
          );
        })}
      </Col>
    </>
  );
};

export default Experience;
