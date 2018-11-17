import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

// My components
import NavStyles from './Styles/NavStyles';

const Logo = styled.h1`
  font-size: 0.5rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: green;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid black;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }

  .sub-bar {
    display: grid;
    grid-auto-columns: 1fr auto;
    border-bottom: 1px solid #e1e1e1;
  }
`;

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
            <Link to={'/'}>About me</Link>
            <Link to={'/resume'}>Work Experience</Link>
            <Link to={'/education'}>Education</Link>
            <Link to={'/projects'}>My projects</Link>
          </NavStyles>
        </div>
        <div className="sub-bar" />
      </StyledHeader>
    );
  }
}

export default NavMenu;
