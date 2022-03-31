import React from "react";
import { Container } from "reactstrap";
import HeroHeader from "../../../utils/HeroHeader";

const Hero = () => {
  return (
    <Container tag="header" fluid className="hero-container">
      <HeroHeader
        spTitle="Ingeniera de Sistemas"
        spText="Resolviendo problemas de los negocios con desarrollo de
              aplicationes web"
        enTitle="Software Engineer"
        enText="Solving Problems with full stack web development Solutions"
      />
    </Container>
  );
};

export default Hero;
