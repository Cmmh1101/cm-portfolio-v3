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
  const [filteredProjects, setFilteredProjects] = useState<Project[]>();
  //   const [clicked, setClicked] = useState<boolean>(false);

  const front = projectsData.filter((p) => p.type === "frontend");
  const fullstack = projectsData.filter((p) => p.type === "fullstack");
  const cms = projectsData.filter((p) => p.type === "cms");
  const all = projectsData.filter((p) => p.all === "true");

  //   const buttonClicked = () => {
  //     setClicked(!clicked);
  //   };

  const handleFrontButton = () => {
    setFilteredProjects(front);
    console.log(front);
  };
  const handleFullButton = () => {
    setFilteredProjects(fullstack);
    console.log(fullstack);
  };
  const handleCmsButton = () => {
    setFilteredProjects(cms);
    console.log(cms);
  };
  const handleAllButton = () => {
    setFilteredProjects(all);
    console.log(all);
  };

  return (
    <div>
      <ButtonGroup className="col-12 button-group">
        <Button onClick={() => handleFrontButton()}>Front End</Button>
        <Button onClick={() => handleFullButton()}>Full Stack</Button>
        <Button onClick={() => handleCmsButton()}>CMS</Button>
        <Button onClick={() => handleAllButton()}>All</Button>
      </ButtonGroup>
      <Row>
        <Col
          xs={12}
          className="d-flex flex-wrap justify-content-center align-items-center"
        >
          {projectsData.map((project) => (
            <Card
              key={project.name}
              className="col-12 col-md-5 my-4 mx-2 project-box"
              style={darkMode ? { color: `${dark}` } : {}}
            >
              <div className="image-container">
                <CardImg
                  tag="img"
                  alt={project.enAlt}
                  src={project.image}
                  top
                  width="100%"
                />
              </div>
              <CardBody>
                <CardTitle tag="h5">
                  {englishMode ? project.spTitle : project.enTitle}
                </CardTitle>
                <CardText>
                  <small className="text-muted">
                    {project.technologies.trim().split(/\s+/).join(" | ")}
                  </small>
                </CardText>
                <CardText>
                  {englishMode ? project.spDescription : project.enDescription}
                </CardText>
                <CardText>
                  <small className="text-muted">{project.date}</small>
                </CardText>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default ProjectsList;
