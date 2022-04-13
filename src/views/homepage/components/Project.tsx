import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Row,
  Button,
} from "reactstrap";
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
  date: string;
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
  date,
  page,
  repo,
}: Props) => {
  const { englishMode, darkMode, dark, light } = useTheme();
  return (
    <Card
      key={name}
      className={`col-12 col-lg-5 my-4 mx-2 project-box ${customClass}`}
      style={
        darkMode
          ? { backgroundColor: `${light}`, color: `${dark}` }
          : { color: `${light}`, backgroundColor: `${dark}` }
      }
    >
      <div className="image-container">
        <CardImg tag="img" alt={enAlt} src={image} top width="100%" />
      </div>
      <CardBody>
        <CardTitle tag="h5">{englishMode ? spTitle : enTitle}</CardTitle>
        <CardText>
          <small className="text-muted">
            {technologies.trim().split(/\s+/).join(" | ")}
          </small>
        </CardText>
        <CardText>{englishMode ? spDescription : enDescription}</CardText>
        <CardText>
          <small className="text-muted">{date}</small>
        </CardText>
        <Link to={page} className="btn btn-primary">
          <FontAwesomeIcon icon={faLink} />
        </Link>
        <Link to={repo} className="btn btn-primary">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </CardBody>
    </Card>
  );
};

export default Project;
