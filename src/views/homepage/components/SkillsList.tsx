import React from "react";
import { Col } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import skills from "../../../skillsData";

const SkillsList = () => {
  const { darkMode, light } = useTheme();
  return (
    <Col xs={12} className="skills-container">
      {skills.map((skill) => {
        return (
          <div key={skill.name} className="skill-div">
            <div
              className="skill-box"
              style={
                darkMode
                  ? { backgroundColor: light }
                  : { backgroundColor: light }
              }
            >
              <img className="skills-img" src={skill.path} alt={skill.title} />
              <figcaption className="text-center pt-1 small">
                {skill.title}
              </figcaption>
            </div>
          </div>
        );
      })}
    </Col>
  );
};

export default SkillsList;
