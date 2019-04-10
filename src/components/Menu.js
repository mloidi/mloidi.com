import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { OfflineService } from './service/resume.service';
import {
  MenuHeader,
  MenuHeaderH,
  Logo,
  MenuUl,
  SocialUl,
  SocialA
} from './style/Style';
import Icon from './common/Icon';

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
                Side Projects
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
        <MenuHeaderH>
          <Logo>Mikel Loidi</Logo>
          <MenuUl>
            <li>
              <Link className="menuA" activeClassName="selected" exact to={'/'}>
                <Icon icon="faUser" />
              </Link>
            </li>
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/work'}
              >
                <Icon icon="faBriefcase" />
              </Link>
            </li>
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/education'}
              >
                <Icon icon="faGraduationCap" />
              </Link>
            </li>
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/courses'}
              >
                <Icon icon="faLaptopCode" />
              </Link>
            </li>
            <li>
              <Link
                className="menuA"
                activeClassName="selected"
                exact
                to={'/projects'}
              >
                <Icon icon="faCoffee" />
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
        </MenuHeaderH>
      </React.Fragment>
    );
  }
}
