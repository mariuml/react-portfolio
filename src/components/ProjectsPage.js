import React from "react";

function ProjectsPage() {
  return (
    <div>
      {/* <!--  Project 1 card from bootstrap   --> */}
      <div className="container project">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 ">
            <div className="card ">
                <a className="projectUrl" href="www.google.com">
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="..."
              />
</a>
              <div className="card-body">
                <h5 className="card-title"> Front-end study guide </h5>
                <p className="card-text"> Using HTML and CSS</p>
              </div>
            </div>
          </div>

          {/* <!-- Project 2 --> */}
          <div className="col-sm-12 col-md-6 col-lg-6 project">
            <div className="card">
                <a className="projectUrl" href="">
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="..."
              />
</a>
              <div className="card-body">
                <h5 className="card-title"> LED Wall </h5>
                <p className="card-text"> Node/IOT</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!--  Project 3  --> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 project">
              <div className="card">
              <a className="projectUrl" href="">
                <img
                  src="https://placehold.co/600x400"
                  className="card-img-top"
                  alt="..."
                />
</a> 
                <div className="card-body">
                  <h5 className="card-title"> Run buddy </h5>
                  <p className="card-text"> React/Javascript/CSS</p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="col-sm-12 col-md-6 col-lg-6 project">
              <div className="card">
              <a className="projectUrl" href="">
                <img
                  src="https://placehold.co/600x400"
                  className="card-img-top"
                  alt="..."
                />
                </a> 

                <div className="card-body">
                  <h5 className="card-title"> Calculator </h5>
                  <p className="card-text"> React/Javascript/CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--  Project 5  --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 project">
            <div className="card">
            <a className="projectUrl" href="">
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="..."
              />
</a> 
              <div className="card-body">
                <h5 className="card-title"> Run buddy </h5>
                <p className="card-text"> React/Javascript/CSS</p>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="col-sm-12 col-md-6 col-lg-6 project">
            <div className="card">
            <a className="projectUrl" href="">
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="..."
              />
</a> 
              <div className="card-body">
                <h5 className="card-title"> Calculator </h5>
                <p className="card-text"> React/Javascript/CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
