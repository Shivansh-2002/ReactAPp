import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="images/kakashi.png" height="650" width="80" alt="Profile" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p className="kk">
              Hello! My name is Shivansh Jaiswal. I am a pre-final year student at the Indian Institute of Technology, Jodhpur.
              Currently, I am interested in Programming and Software Development. <br />

              For the most part, I am an exuberant and determined person with a knack for problem-solving, fascinated and enthusiastic
              about the different approaches and methods for solving a problem. I enjoy competitive programming backed by knowledge of
              data structure and algorithms.
              <br />

              My key interest lies in the field of Development and Machine Learning. Moving forward, I look towards deep-diving into full-stack
              development concepts and Internship opportunities in Software Development Role.
            </p>
            <br />
            <h3 className="pp">Coding Profiles</h3>

            <a href="https://www.codechef.com/users/stfu_o_0">
              <img src="https://img.shields.io/badge/CodeChef-%23964B00.svg?style=for-the-badge&logo=CodeChef&logoColor=white&amp;logo=cc&amp;logoColor=white" alt="CodeChef" />
            </a>
            <a href="https://codeforces.com/profile/Shivansh_2002">
              <img src="https://img.shields.io/badge/Codeforces-445f9d?style=for-the-badge&logo=Codeforces&logoColor=white&amp;logo=cf&amp;logoColor=white" alt="Codeforces" />
            </a>
            <br />
            <span>Maximum Rating on CodeChef: 1846 (<span style={{ color: 'purple' }}>4&#9733;</span>)</span>
            <br />
            <span>Maximum Rating on Codeforces: 1444 (<span style={{ color: 'cyan' }}>Specialist</span>)</span>
            <br />
            <br />
            <h3 className="pp">Skills</h3>
            <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&amp;logo=c%2B%2B&amp;logoColor=white" alt="C++" />
            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&amp;logo=python&amp;logoColor=ffdd54" alt="Python" />
            <h3 class="pp">Skills</h3>
            <br />
            <span className="badge">Data Structure</span>
            <span className="badge-algo">Algorithms</span>
            <br />
            <br />
            <h3 className="pp">Resume</h3>
            <a href="https://drive.google.com/file/d/1qfoC4Wy-ECBRvDsU86nVMt9OB8Md-E9G/view?usp=sharing">
              <img src="images/res_log.jpg" alt="Resume" width="40" height="40" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;