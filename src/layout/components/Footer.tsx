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
          <Col xs={12} md={4}>
            <h5>Projects</h5>
            <Link to="/" className="links">
              Link
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <h5>About</h5>
            <Link to="/" className="links">
              Link
            </Link>
          </Col>
          <Col xs={12} md={4} className="">
            <h5>Connect</h5>
            <a
              href="https://github.com/cmmh1101"
              target="_blank"
              rel="noreferrer"
              className="footer-icons"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/carla-montano"
              target="_blank"
              rel="noreferrer"
              className="footer-icons"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://twitter.com/cmmh11"
              target="_blank"
              rel="noreferrer"
              className="footer-icons"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Col>
          <Col xs={12} className="mt-5 mb-1 small">
            2022 | All right reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
