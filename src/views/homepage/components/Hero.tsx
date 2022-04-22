import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import HeroHeader from "../../../utils/HeroHeader";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { animated } from "react-spring";
import { useTheme } from "../../../provider/ThemeModeProvider";

const Hero = () => {
  const { styles } = useTheme();
  return (
    <Container id="home" tag="header" fluid className="hero-container">
      <animated.div style={styles} className="row">
        <Col
          xs={2}
          className="justify-content-center d-flex flex-column align-items-end follow-icons"
        >
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} className="icon mb-3" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faGithubSquare} className="icon mt-3" />
          </a>
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
      </animated.div>
    </Container>
  );
};

export default Hero;
