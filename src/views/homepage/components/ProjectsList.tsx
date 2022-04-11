import React, { useState } from "react";
import {
  ButtonGroup,
  Button,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import projectsData from "../../../projectsData";
import { useTheme } from "../../../provider/ThemeModeProvider";
import Project from "./Project";

export interface Project {
  name: string;
  spTitle: string;
  enTitle: string;
  date: string;
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
  const { englishMode, darkMode, dark } = useTheme();

  const [frontVisible, setFrontVisible] = useState(false);
  const [fullStackVisible, setFullStackVisible] = useState(false);

  const [cmsVisible, setCmsVisible] = useState(false);

  const [allProjects, setAllProjects] = useState(true);

  const front = projectsData
    .filter((p) => p.type === "frontend")
    .map((p) => {
      return (
        <Project
          name={p.name}
          customClass={p.customClass}
          enAlt={p.enAlt}
          image={p.image}
          enDescription={p.enDescription}
          enTitle={p.enTitle}
          spDescription={p.spDescription}
          spTitle={p.spTitle}
          date={p.date}
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
          name={p.name}
          customClass={p.customClass}
          enAlt={p.enAlt}
          image={p.image}
          enDescription={p.enDescription}
          enTitle={p.enTitle}
          spDescription={p.spDescription}
          spTitle={p.spTitle}
          date={p.date}
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
          name={p.name}
          customClass={p.customClass}
          enAlt={p.enAlt}
          image={p.image}
          enDescription={p.enDescription}
          enTitle={p.enTitle}
          spDescription={p.spDescription}
          spTitle={p.spTitle}
          date={p.date}
          technologies={p.technologies}
          page={p.pageLink}
          repo={p.gitHub}
        />
      );
    });
  const all = projectsData.map((p) => {
    return (
      <Project
        name={p.name}
        customClass={p.customClass}
        enAlt={p.enAlt}
        image={p.image}
        enDescription={p.enDescription}
        enTitle={p.enTitle}
        spDescription={p.spDescription}
        spTitle={p.spTitle}
        date={p.date}
        technologies={p.technologies}
        page={p.pageLink}
        repo={p.gitHub}
      />
    );
  });

  const handleFrontButton = () => {
    setCmsVisible(false);
    setAllProjects(false);
    setFullStackVisible(false);
    setFrontVisible(true);
    console.log(front);
  };
  const handleFullButton = () => {
    setFrontVisible(false);
    setCmsVisible(false);
    setAllProjects(false);
    setFullStackVisible(true);
    console.log(fullstack);
  };
  const handleCmsButton = () => {
    setFrontVisible(false);
    setFullStackVisible(false);
    setAllProjects(false);
    setCmsVisible(true);
  };
  const handleAllButton = () => {
    setFrontVisible(true);
    setFullStackVisible(true);
    setCmsVisible(true);
    console.log(all);
  };

  return (
    <div>
      <ButtonGroup className="col-12 button-group">
        <Button active={allProjects} onClick={() => handleAllButton()}>
          All
        </Button>
        <Button active={frontVisible} onClick={() => handleFrontButton()}>
          Front End
        </Button>
        <Button active={fullStackVisible} onClick={() => handleFullButton()}>
          Full Stack
        </Button>
        <Button active={cmsVisible} onClick={() => handleCmsButton()}>
          CMS
        </Button>
      </ButtonGroup>
      <Row>
        <Col
          xs={12}
          className="d-flex flex-wrap justify-content-center align-items-center"
        >
          {frontVisible
            ? front
            : fullStackVisible
            ? fullstack
            : cmsVisible
            ? cms
            : allProjects && all}
        </Col>
      </Row>
    </div>
  );
};

export default ProjectsList;
