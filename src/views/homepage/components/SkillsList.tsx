import React from "react";
import { Col } from "reactstrap";
import skills from "../../../skillsData";

const SkillsList = () => {
  return (
    <Col xs={12} className="skills-container">
      {skills.map((skill) => {
        return (
          <div className="skill-div">
            <div key={skill.name} className="skill-box">
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
