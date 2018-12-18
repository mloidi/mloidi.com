import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

// My components
import { NavStyles, StyledHeader, Logo } from './NavStyles';
import { ResumeService } from '../../Service/resume.service';

class NavMenu extends Component {
  state = {
    about: {}
  };

  componentDidMount() {
    this.setState({
      about: ResumeService.getAbout()
    });
  }
  render() {
    return (
      <StyledHeader>
        <div className="bar">
          <Logo>
            <Link to={'/'}>ml</Link>
          </Logo>
          <NavStyles>
            <li>
              <Link className="link" to={'/'}>
                About me
              </Link>
            </li>
            <li>
              <Link className="link" to={'/resume'}>
                Work Experience
              </Link>
            </li>
            <li>
              <Link className="link" to={'/education'}>
                Education
              </Link>
            </li>
            <li>
              <Link className="link" to={'/courses'}>
                Courses
              </Link>
            </li>
          </NavStyles>
          <NavStyles>
            <li>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mloidi/"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mikel-loidi-ardanaz/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/mikelloidi"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:mikel@mloidi.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </NavStyles>
        </div>
      </StyledHeader>
    );
  }
}

export default NavMenu;
