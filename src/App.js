import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import ProjectsPage from "./components/ProjectsPage";
import projects from "./projects.json";

function App() {
  
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
      <Header />
      <Homepage />
      {projectsArray} 
    </div>
  );
}

export default App;
