import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Col } from "reactstrap";
import { useTheme } from "../../../provider/ThemeModeProvider";

interface Props {
  name: string;
  enAlt: string;
  image: string;
  enTitle: string;
  spTitle: string;
  spDescription: string;
  enDescription: string;
  technologies: string;
  customClass: string;
  page: string;
  repo: string;
}

const Project = ({
  name,
  enAlt,
  image,
  enTitle,
  spTitle,
  spDescription,
  enDescription,
  technologies,
  customClass,
  page,
  repo,
}: Props) => {
  const { englishMode, darkMode, dark, light } = useTheme();
  return (
    <Card
      key={name}
      className={`col-12 col-md-8 col-lg-5 my-4 mx-2 project-box shadow ${customClass}`}
      style={
        darkMode
          ? { backgroundColor: `${light}`, color: `${dark}` }
          : { color: `${light}`, backgroundColor: `${dark}` }
      }
    >
      <div className="image-container">
        <CardImg tag="img" alt={enAlt} src={image} top width="100%" />
      </div>
      <CardBody className="py-4">
        <CardTitle tag="h5">{englishMode ? spTitle : enTitle}</CardTitle>
        <CardText>
          <small className="text-muted">
            {technologies.trim().split(/\s+/).join(" | ")}
          </small>
        </CardText>
        <CardText>{englishMode ? spDescription : enDescription}</CardText>
        <Col xs={12} className="d-flex justify-content-center">
          {page !== "" && (
            <a href={page} target="_blank" className="btn btn-primary mx-2">
              <FontAwesomeIcon icon={faLink} />
            </a>
          )}

          {repo !== "" && (
            <a href={repo} target="_blank" className="btn btn-primary mx-2">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
        </Col>
      </CardBody>
    </Card>
  );
};

export default Project;
