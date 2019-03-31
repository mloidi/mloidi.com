import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import { OfflineService } from '../Service/resume.service';
import Icon from './Common/Icon';

const MenuHeader = styled.div`
  border-right: 0.2rem solid #424943;
  background-color: #252527;
  display: grid;
  grid-template-rows: 4rem auto 4rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100%;
`;

const Logo = styled.div`
  padding-top: 1rem;
  font-size: 2rem;
  color: #ecd018;
  background: #424943;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
`;

const MenuUl = styled.ul`
  margin: 2rem 0 0 0;
  align-items: left;
  font-size: 1.5rem;
  list-style-type: none;
  .menuA {
    background: none;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    &:hover,
    &:focus {
      font-weight: 900;
      color: #ecd018;
      outline: none;
    }
  }
  .selected {
    font-weight: 900;
    color: #ecd018;
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
  border: 1px solid #424943;
  background-color: #424943;
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
    background-color: #ecd018;
    color: #424943;
  }
`;

export default class Menu extends Component {
  state = {
    about: {}
  };

  componentDidMount() {
    this.setState({
      about: OfflineService.getAbout()
    });
  }
  render() {
    return (
      <React.Fragment>
        <MenuHeader>
          <Logo>Mikel Loidi</Logo>
          <MenuUl>
            <li>
              <Link className="menuA" activeClassName="selected" exact to={'/'}>
                {/* <Icon icon="faUser" />  */}
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
                {/* <Icon icon="faBriefcase" />  */}
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
                {/* <Icon icon="faGraduationCap" />  */}
                Education
              </Link>
            </li>
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/courses'}
              >
                {/* <Icon icon="faLaptopCode" />  */}
                Courses
              </Link>
            </li>
            {/* <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/skills'}
              >
                <Icon icon="faCertificate" /> 
                Skills
              </Link>
            </li> */}
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/projects'}
              >
                {/* <Icon icon="faCoffee" />  */}
                Projects
              </Link>
            </li>
          </MenuUl>
          <SocialUl>
            <li>
              <SocialA
                target="_blank"
                rel="noopener noreferrer"
                href={this.state.about.github}
              >
                <Icon icon={this.state.about.githubIcon} />
              </SocialA>
            </li>
            <li>
              <SocialA
                target="_blank"
                rel="noopener noreferrer"
                href={this.state.about.linkedin}
              >
                <Icon icon={this.state.about.linkedinIcon} />
              </SocialA>
            </li>
            <li>
              <SocialA
                target="_blank"
                rel="noopener noreferrer"
                href={this.state.about.twitter}
              >
                <Icon icon={this.state.about.twitterIcon} />
              </SocialA>
            </li>
            <li>
              <SocialA
                target="_blank"
                rel="noopener noreferrer"
                href={this.state.about.mail}
              >
                <Icon icon={this.state.about.mailIcon} />
              </SocialA>
            </li>
          </SocialUl>
        </MenuHeader>
      </React.Fragment>
    );
  }
}
