import React from 'react';

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1 className="titl">Projects</h1>
        <div className="my_projects">
          <div className="proj">
            <img src="images/Blog.jpg" width="500px" height="400px" alt="Blog Website" />
            <div className="layer">
              <h3>Blog Website</h3>
              <p>
                It is a blog website made using Django which allows you to make an account and post your own blog on it.
              </p>
              <a href="https://github.com/Shivansh-2002"><i className="fa fa-github" style={{ fontSize: 24 }}></i></a>
            </div>
          </div>

          <div className="proj">
            <img src="images/adaptive.jpg" width="500px" height="400px" alt="Adaptive Traffic Light System" />
            <div className="layer">
              <h3>Adaptive Traffic Light System</h3>
              <p>
                This project aims to improve the current traffic light model by using image recognition and machine learning to estimate the number of vehicles on different roads and adjust the timer for the traffic light accordingly.
              </p>
              <a href="https://github.com/Shivansh-2002"><i className="fa fa-github" style={{ fontSize: 24 }}></i></a>
            </div>
          </div>

          {/* Add more projects here */}
          {/* Example of a new project */}
          {/* <div className="proj">
            <img src="images/project3.jpg" width="500px" height="400px" alt="Project 3" />
            <div className="layer">
              <h3>Project 3</h3>
              <p>
                Description of Project 3.
              </p>
              <a href="https://github.com/Shivansh-2002/project3"><i className="fa fa-github" style={{ fontSize: 24 }}></i></a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
