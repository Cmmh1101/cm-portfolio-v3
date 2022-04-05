import React from "react";
import projectsData from "../../../projectsData";
import { useTheme } from "../../../provider/ThemeModeProvider";

const ProjectsList = () => {
  const { englishMode } = useTheme();
  return (
    <div>
      {projectsData.map((project) => (
        <div key={project.name}>
          <h4>{englishMode ? project.spTitle : project.enTitle}</h4>
          <p>{englishMode ? project.spDescription : project.enDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
