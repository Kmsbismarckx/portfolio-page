import { useState } from 'react';
import './Projects.scss';
import { ProjectItem } from '@/components';
import ProjectsJSON from '../../projects.json';

export function Projects() {
  const [projectsData] = useState(ProjectsJSON);
  return (
    <div className="projects">
      {projectsData.map((project, index) => (
        <ProjectItem project={project} key={project.id} id={index + 1} />
      ))}
    </div>
  );
}
