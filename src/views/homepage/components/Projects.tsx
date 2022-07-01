import React from "react";
import { Col, Container, Row } from "reactstrap";
import SubHeader from "../../../utils/SubHeader";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  return (
    <Container id="projects">
      <Row className="row">
        <Col xs={12} className="my-5 projects-section">
          <SubHeader
            enTitle="Featured Projects"
            spTitle="Proyectos Recientes"
          />
          <ProjectsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
