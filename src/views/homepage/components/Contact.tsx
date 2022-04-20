import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, Container } from "reactstrap";
import SubHeader from "../../../utils/SubHeader";

const Contact = () => {
  return (
    <Container>
      <Row xs={12} className="mb-5">
        <Col xs={12}>
          <SubHeader spTitle="Conversemos" enTitle="Get in touch" />
          <Col className="mb-5">
            <a
              href="https://github.com/cmmh1101"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/carla-montano"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://twitter.com/cmmh11"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
