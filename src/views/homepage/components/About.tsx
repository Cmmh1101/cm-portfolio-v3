import React from "react";
import { Col, Container, Row } from "reactstrap";
import SubHeader from "../../../utils/SubHeader";

interface Props {}

const About = (props: Props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="my-5 projects-section">
            <SubHeader enTitle="About Me" spTitle="Sobre Mi" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
