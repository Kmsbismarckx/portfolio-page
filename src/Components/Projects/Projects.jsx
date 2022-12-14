import React, { useState } from "react";
import "./Projects.scss";
import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectsJSON from "../../projects.json";

function Projects() {
  const [projectsData] = useState(ProjectsJSON);
  return (
    <div className="projects">
      {projectsData.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

export default Projects;
