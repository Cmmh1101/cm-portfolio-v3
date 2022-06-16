import React from "react";
import { Container, Row, Col } from "reactstrap";
import SubHeader from "../../utils/SubHeader";
import ProjectList from "./components/ProjectList";

interface Props {}

const ProjectsPage = (props: Props) => {
  return (
    <Container id="projects">
      <Row className="row">
        <Col xs={12} className="my-5 projects-section">
          <SubHeader enTitle="Recent Projects" spTitle="Proyectos Recientes" />
          <ProjectList />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
