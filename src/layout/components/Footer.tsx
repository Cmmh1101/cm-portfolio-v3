import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="pt-5 shadow">
      <Container>
        <Row className="footer">
          <Col xs={12} className="d-flex justify-content-center mb-5">
            <Col md={12} className="footer-logo">
              <Link to="/">
                <img src="../logobrand.png" alt="Logo Carla Montano" />
              </Link>
            </Col>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column">
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/" className="links">
              Projects
            </Link>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column">
            <Link to="/" className="links">
              About
            </Link>
            <Link to="/" className="links">
              Blog
            </Link>
          </Col>
          <Col xs={12} md={4} className="">
            <h5>Let's Connect</h5>
            <a
              href="https://github.com/cmmh1101"
              target="_blank"
              rel="noreferrer"
              className="footer-icons"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/carla-montano"
              target="_blank"
              rel="noreferrer"
              className="footer-icons"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a
              href="https://twitter.com/cmmh11"
              target="_blank"
              rel="noreferrer"
              className="footer-icons"
            >
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
          </Col>
          <Col xs={12} className="mt-5 mb-1 small">
            <span>2022 | All right reserved</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
