import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import HeroHeader from "../../../utils/HeroHeader";
import {
  faLinkedin,
  faGithub,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container tag="header" fluid className="hero-container">
      <Row>
        <Col
          xs={2}
          className="justify-content-center d-flex flex-column align-items-end follow-icons"
        >
          <Link to="/">
            <FontAwesomeIcon icon={faLinkedin} className="icon mb-3" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faGithubSquare} className="icon mt-3" />
          </Link>
        </Col>
        <Col xs={10}>
          <HeroHeader
            spTitle="Ingeniera de Sistemas"
            spText="Resolviendo problemas de los negocios con desarrollo de
              aplicationes web"
            enTitle="Software Engineer"
            enText="Solving Problems with full stack web development Solutions"
            enButton="Recent Projects"
            esButton="Proyectos Recientes"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
