import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Col,
  Row,
} from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";
import projectsData from "../../../projectsData";

interface Props {
  // image: string
  // altText: string
  // techs?: []
  // enTitle
}

const Project = (props: Props) => {
  const { englishMode } = useTheme();
  return (
    <Row>
      <Col
        xs={12}
        className="d-flex flex-wrap justify-content-center align-items-center"
      >
        {projectsData.map((project) => (
          <>
            <Card className="col-12 col-md-5 my-4 mx-2">
              <CardImg
                alt={project.enAlt}
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  {englishMode ? project.spTitle : project.enTitle}
                </CardTitle>
                <CardText>
                  <small className="text-muted">
                    {project.technologies.trim().split(/\s+/).join(" | ")}
                  </small>
                </CardText>
                <CardText>
                  {englishMode ? project.spDescription : project.enDescription}
                </CardText>
                <CardText>
                  <small className="text-muted">{project.date}</small>
                </CardText>
              </CardBody>
            </Card>
          </>
        ))}
      </Col>
    </Row>
  );
};

export default Project;
