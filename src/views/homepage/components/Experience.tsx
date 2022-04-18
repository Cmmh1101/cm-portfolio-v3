import React from "react";
import { Col, Row } from "reactstrap";
import SubHeader from "../../../utils/SubHeader";
import experience from "../../../experienceData";
import { useTheme } from "../../../provider/ThemeModeProvider";

interface Props {}

const Experience = (props: Props) => {
  const { englishMode } = useTheme();
  return (
    <Row xs={12} className="my-5">
      <SubHeader enTitle="Experience" spTitle="Experiencia" />
      <Col xs={12}>
        {experience.map((exp) => {
          return (
            <Col className="mb-5 experience-box">
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
    </Row>
  );
};

export default Experience;
