import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import projectsData from "../../../projectsData";
import { useTheme } from "../../../provider/ThemeModeProvider";

interface Props {}

const ProjectList = (props: Props) => {
  //   const [customClassName, setCustomCLassName] = useState<string>("");
  const { englishMode, darkMode, dark, light } = useTheme();
  return (
    <Row className="d-flex">
      {projectsData
        .filter((p) => p.featured)
        .map((p, i: number) => {
          return (
            <Col xs={12} key={i} className="d-flex project-item">
              <Col
                md={7}
                key={i}
                className={`project-image-container ${
                  i % 2 === 0 ? "text-info order-1" : "text-danger order-2"
                }`}
              >
                <img src={p.image} alt={p.enAlt} className="project-img" />
                <div className="overlay" />
              </Col>
              <Col
                md={5}
                key={i}
                className={`project-description ${
                  i % 2 === 0 ? "text-info order-2" : "text-danger order-1"
                }`}
              >
                <Card
                  className={`my-auto project-card ${
                    i % 2 === 0 ? "odd" : "even"
                  }`}
                  style={
                    darkMode
                      ? { backgroundColor: `${light}`, color: `${dark}` }
                      : { color: `${light}`, backgroundColor: `${dark}` }
                  }
                >
                  <CardBody className="py-4">
                    <CardTitle tag="h5">
                      {englishMode ? p.spTitle : p.enTitle}
                    </CardTitle>
                    <CardText>
                      <small className="text-muted">
                        {p.technologies.trim().split(/\s+/).join(" | ")}
                      </small>
                    </CardText>
                    <CardText>
                      {englishMode ? p.spDescription : p.enDescription}
                    </CardText>
                    <Col xs={12} className="d-flex justify-content-center">
                      {p.pageLink !== "" && (
                        <a
                          href={p.pageLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary mx-2"
                        >
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                      )}

                      {p.gitHub !== "" && (
                        <a
                          href={p.gitHub}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary mx-2"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      )}
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Col>
          );
        })}
    </Row>
  );
};

export default ProjectList;
