// src/components/ProjectsComponent.js
const ProjectsComponent = ({ projects }) => (
  <div>
    <h3>Projects:</h3>
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  </div>
);

export default ProjectsComponent;
