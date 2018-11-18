import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

// My components
import { NavStyles, StyledHeader, Logo} from './Styles/NavStyles';

class NavMenu extends Component {
  render() {
    return (
      <StyledHeader>
        <div className="bar">
          <Logo>
            <Link to={'/'}>
              <img
                src="https://gravatar.com/avatar/ea73d5165de7e303ce8a17dc9d7c3524?s=100d=retro"
                alt="avatar"
              />
            </Link>
          </Logo>
          <NavStyles>
            <li>
              <Link to={'/'}>About me</Link>
            </li>
            <li>
              <Link to={'/resume'}>Work Experience</Link>
            </li>
            <li>
              <Link to={'/education'}>Education</Link>
            </li>
            <li>
              <Link to={'/courses'}>Courses</Link>
            </li>
          </NavStyles>
        </div>
        <div className="sub-bar" />
      </StyledHeader>
    );
  }
}

export default NavMenu;
