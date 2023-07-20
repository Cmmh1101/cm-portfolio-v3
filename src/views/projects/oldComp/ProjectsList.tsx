import React, { useState } from "react";
import { ButtonGroup, Button, Row, Col } from "reactstrap";
import projectsData from "../../../projectsData";
import Project from "./Project";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
  const [allActive, setAllActive] = useState(true);
  const [cmsActive, setCmsActive] = useState(false);
  const [frontActive, setFrontActive] = useState(false);
  const [fullActive, setFullActive] = useState(false);

  const handleFrontButton = () => {
    setFilteredPropjects(front);
    setAllActive(false);
    setCmsActive(false);
    setFrontActive(!frontActive);
  };
  const handleFullButton = () => {
    setFilteredPropjects(fullstack);
    setAllActive(false);
    setCmsActive(!cmsActive);
    setFrontActive(false);
    setFullActive(!fullActive);
  };
  const handleCmsButton = () => {
    setFilteredPropjects(cms);
    setAllActive(false);
    setCmsActive(!cmsActive);
    setFrontActive(false);
    setFullActive(false);
  };
  const handleAllButton = () => {
    setFilteredPropjects(all);
    setAllActive(!allActive);
    setCmsActive(!cmsActive);
    setFrontActive(false);
    setFullActive(false);
  };

  // filteredProjects === all ? setAllActive(true) : setAllActive(false);

  return (
    <div className="my-5">
      <AnimationOnScroll animateOnce animateIn="animate__fadeInLeft">
        <ButtonGroup className="col-12 button-group">
          <Button
            // style={
            //   filteredProjects === all
            //     ? { backgroundColor: "#fbfbfe", color: "#196eff" }
            //     : {}
            // }
            // style={
            //   allActive ? { backgroundColor: "#fbfbfe", color: "#196eff" } : {}
            // }
            onClick={() => handleAllButton()}
          >
            All
          </Button>
          <Button
            style={
              filteredProjects === front
                ? { backgroundColor: "#fbfbfe", color: "#196eff" }
                : {}
            }
            onClick={() => handleFrontButton()}
          >
            Front End
          </Button>
          <Button onClick={() => handleFullButton()}>Full Stack</Button>
          <Button onClick={() => handleCmsButton()}>CMS</Button>
        </ButtonGroup>
      </AnimationOnScroll>

      <Row>
        <AnimationOnScroll animateOnce animateIn="animate__fadeIn animate__delay-1s">
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
