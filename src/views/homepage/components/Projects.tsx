import React from "react";
import { Col, Container, Row } from "reactstrap";
import SubHeader from "../../../utils/SubHeader";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} className="my-5 projects-section">
          <SubHeader enTitle="Projects" spTitle="Projectos" />
          <ProjectsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
