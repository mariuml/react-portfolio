import React from "react";

  // Displaying projects to project page 
function ProjectsPage(props) {
    return (
    <div>
      <div className="container project">
        <div>
          <div className="col-sm-12 col-md-6 col-lg-6 ">
            <div className="card ">
              <a href={props.projectUrl}>
                <img
                  src={props.image}
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <p className="card-title"> {props.title} </p>
                <p className="card-text"> {props.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
