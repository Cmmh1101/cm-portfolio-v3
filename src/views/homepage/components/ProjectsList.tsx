import React from "react";
import { Row, Col } from "reactstrap";
import projectsData from "../../../projectsData";
import Project from "./Project";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ProjectsList = () => {
  return (
    <div className="my-5">
      <Row>
        <AnimationOnScroll animateOnce animateIn="animate__fadeInUp" >
          <Col
            xs={12}
            className="d-flex flex-wrap justify-content-evenly align-items-center mt-5"
          >
            {projectsData
              .filter((p) => p.featured)
              .map((p, i) => {
                return (
                  <Project
                    key={i}
                    name={p.name}
                    customClass={p.customClass}
                    enAlt={p.enAlt}
                    image={p.image}
                    enDescription={p.enDescription}
                    enTitle={p.enTitle}
                    spDescription={p.spDescription}
                    spTitle={p.spTitle}
                    technologies={p.technologies}
                    page={p.pageLink}
                    repo={p.gitHub}
                  />
                );
              })}
          </Col>
        </AnimationOnScroll>
      </Row>
    </div>
  );
};

export default ProjectsList;
