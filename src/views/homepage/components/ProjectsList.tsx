import React, { useState } from "react";
import { ButtonGroup, Button, Row, Col } from "reactstrap";
import projectsData from "../../../projectsData";
import Project from "./Project";
import { AnimationOnScroll } from "react-animation-on-scroll";

export interface Project {
  name: string;
  spTitle: string;
  enTitle: string;
  image: string;
  icon: string;
  spDescription: string;
  enDescription: string;
  enAlt: string;
  featured: string;
  type: string;
  technologies: string;
}

const ProjectsList = () => {
  const front = projectsData
    .filter((p) => p.type === "frontend")
    .map((p) => {
      return (
        <Project
          key={p.name}
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
    });
  const fullstack = projectsData
    .filter((p) => p.type === "fullstack")
    .map((p) => {
      return (
        <Project
          key={p.name}
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
    });
  const cms = projectsData
    .filter((p) => p.type === "cms")
    .map((p) => {
      return (
        <Project
          key={p.name}
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
    });
  const all = projectsData.map((p) => {
    return (
      <Project
        key={p.name}
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
  });

  const [filteredProjects, setFilteredPropjects] = useState<any>(all);

  const handleFrontButton = () => {
    setFilteredPropjects(front);
    console.log(front);
  };
  const handleFullButton = () => {
    setFilteredPropjects(fullstack);

    console.log(fullstack);
  };
  const handleCmsButton = () => {
    setFilteredPropjects(cms);
  };
  const handleAllButton = () => {
    setFilteredPropjects(all);
    console.log(all);
  };

  return (
    <div className="my-5">
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <ButtonGroup className="col-12 button-group">
          <Button
            style={
              filteredProjects === all
                ? { backgroundColor: "#fbfbfe", color: "#196eff" }
                : {}
            }
            onClick={() => handleAllButton()}
          >
            All
          </Button>
          <Button onClick={() => handleFrontButton()}>Front End</Button>
          <Button onClick={() => handleFullButton()}>Full Stack</Button>
          <Button onClick={() => handleCmsButton()}>CMS</Button>
        </ButtonGroup>
      </AnimationOnScroll>

      <Row>
        <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
          <Col
            xs={12}
            className="d-flex flex-wrap justify-content-evenly align-items-center mt-5"
          >
            {filteredProjects}
          </Col>
        </AnimationOnScroll>
      </Row>
    </div>
  );
};

export default ProjectsList;
