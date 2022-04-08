import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Col,
  Row,
} from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import projectsData from "../../../projectsData";

const Project = () => {
  const { englishMode, darkMode, dark, light } = useTheme();
  return (
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
  );
};

export default Project;
