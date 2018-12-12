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
              ml
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
