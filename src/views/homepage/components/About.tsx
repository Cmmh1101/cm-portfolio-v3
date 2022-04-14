import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import SubHeader from "../../../utils/SubHeader";

const About = () => {
  const { englishMode } = useTheme();

  const description = [
    {
      aboutEn: [
        `I'm a passionate self-taught Web Developer and Designer. My proactive approach has resulted in numerous important wins in my professional development in tech, teaching, and sports.`,
        `Being able to plan, implement, supervise, evaluate, communicate, receive feedback, and correct are skills that combined with my Tech knowledge and Hispanic background give me a great base to help you grow and reach your goals.`,
        `Since my Web Developer journey started I found out that with tech I can do the things that I enjoy the most, be creative, solve problems, overcome challenges, create solutions, and the most important to help others achieve their goals.`,
      ],
    },
    {
      aboutEsp: [
        `Soy una Ingeniera de Software apasionada y preparada independientemente. My proactive approach has resulted in numerous important wins in my professional development in tech, teaching, and sports.`,
        `Being able to plan, implement, supervise, evaluate, communicate, receive feedback, and correct are skills that combined with my Tech knowledge and Hispanic background give me a great base to help you grow and reach your goals.`,
        `Since my Web Developer journey started I found out that with tech I can do the things that I enjoy the most, be creative, solve problems, overcome challenges, create solutions, and the most important to help others achieve their goals.`,
      ],
    },
  ];

  const spanish = description.map((a, i) => <p key={i}>{a.aboutEsp}</p>);
  const english = description.map((a, i) => <p key={i}>{a.aboutEn}</p>);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="my-5 projects-section">
            <SubHeader enTitle="About Me" spTitle="Sobre Mi" />
          </Col>
          <Col xs={12}>{englishMode ? { spanish } : { english }}</Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
