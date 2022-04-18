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
          <Col xs={12} md={4}>
            <h5>Connect</h5>
            <Link to="/" className="links">
              Link
            </Link>
          </Col>
          <Col xs={12} className="mt-5 mb-1 small">
            All right reserved | 2022
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
