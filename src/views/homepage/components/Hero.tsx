import React from "react";
import { Container } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";

interface Props {}

const Hero = (props: Props) => {
  const { englishMode } = useTheme();
  return (
    <Container tag="header" fluid className="hero-container">
      <div className="hero-text">
        {englishMode ? (
          <>
            <h1>Ingeniera de Sistemas</h1>
            <p>
              Resolviendo problemas de los negocios con desarrollo de
              aplicationes web
            </p>
          </>
        ) : (
          <>
            <h1>Software Engineer</h1>
            <p>Solving Problems with full stack web development Solutions</p>
          </>
        )}
      </div>
    </Container>
  );
};

export default Hero;
