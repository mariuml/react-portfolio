import React from 'react'
import ProjectsPage from "../components/ProjectsPage.js";
import projects from "../projects.json";


function ProjectsDisplay() {
// Creating an array with the projects.json file
    const projectsArray = [];
for (let i=0; i < projects.length; i++) {
  projectsArray.push(<ProjectsPage
    image={projects[i].image}
    title={projects[i].title}
    description={projects[i].description}
    projectUrl={projects[i].projectUrl}
  />)
}
    
    
    return (
        <div>
         {projectsArray}   
        </div>
    )
}

export default ProjectsDisplay