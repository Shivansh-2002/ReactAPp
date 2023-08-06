import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
  return (
    <div id="header">
      <div className="topright">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="https://www.linkedin.com/in/shivansh-jaiswal-6a425118b/">
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 24 }} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Shivansh-2002">
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: 24 }} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;