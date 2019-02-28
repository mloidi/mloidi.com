import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

import { ResumeService } from '../Service/resume.service';

const MenuHeader = styled.div`
  border-right: 0.1rem solid #005d04;
  background-color: white;
  display: grid;
  grid-template-rows: 9rem auto 4rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100%;
`;

const Logo = styled.h1`
  font-size: 3rem;
  width: 4rem;
  margin-left: 4rem;
  padding: 0.5rem 1rem;
  background: #005d04;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  transform: skew(-7deg);
  text-align: center;
`;

const MenuUl = styled.ul`
  margin: 0;
  align-items: left;
  font-size: 1.5rem;
  list-style-type: none;
  .menuA {
    background: none;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    &:hover,
    &:focus {
      font-weight: 900;
      color: #005d04;
      outline: none;
    }
  }
  .selected {
      font-weight: 900;
      color: #005d04;
      outline: none;
  }
`;

const SocialUl = styled.ul`
  margin: 0;
  align-items: left;
  font-size: 1.5rem;
  list-style-type: none;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const SocialA = styled.a`
  border: 1px solid #005d04;
  background-color: #005d04;
  border-radius: 50%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-left: -0.5rem;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  &:hover,
  &:focus {
    font-weight: 900;
    outline: none;
    background-color: green;
  }
`;

export default class Menu extends Component {
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
      <React.Fragment>
        <MenuHeader>
          <Logo>ml</Logo>
          <MenuUl>
            <li>
              <Link className="menuA" activeClassName="selected" exact to={'/'}>
                About me
              </Link>
            </li>
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/work'}
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/education'}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/skills'}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/courses'}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/projects'}
              >
                Projects
              </Link>
            </li>
          </MenuUl>
          <SocialUl>
            <li>
              <SocialA
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mloidi/"
              >
                <FontAwesomeIcon icon={faGithub} />
              </SocialA>
            </li>
            <li>
              <SocialA
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mikel-loidi-ardanaz/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialA>
            </li>
            <li>
              <SocialA
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/mikelloidi"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </SocialA>
            </li>
            <li>
              <SocialA
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:mikel@mloidi.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </SocialA>
            </li>
          </SocialUl>
        </MenuHeader>
      </React.Fragment>
    );
  }
}
