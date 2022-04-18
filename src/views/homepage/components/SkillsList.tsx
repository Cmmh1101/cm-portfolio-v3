import React from "react";
import { Col } from "reactstrap";
import skills from "../../../skillsData";

interface Props {}

const SkillsList = (props: Props) => {
  return (
    <Col className="skill-div">
      {skills.map((skill) => {
        return (
          <div key={skill.name} className="skill-box">
            <img className="skills-img" src={skill.path} alt={skill.title} />
            <figcaption className="text-center pt-1 small">
              {skill.title}
            </figcaption>
          </div>
        );
      })}
    </Col>
  );
};

export default SkillsList;
