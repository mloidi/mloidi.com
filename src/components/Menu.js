import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { ResumeService } from './service/resume.service';
import {
  MenuHeader,
  MenuHeaderH,
  Logo,
  MenuUl,
  SocialUl,
  SocialA
} from './style/Style';
import Icon from './common/Icon';

const Menu = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    ResumeService.getAbout().then(res => {
      setAbout(res);
    });
  }, []);

  return (
    <React.Fragment>
      <MenuHeader>
        <Logo>Mikel Loidi </Logo>
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
              href={about.github}
            >
              <Icon icon={about.githubIcon} />
            </SocialA>
          </li>
          <li>
            <SocialA
              target="_blank"
              rel="noopener noreferrer"
              href={about.linkedin}
            >
              <Icon icon={about.linkedinIcon} />
            </SocialA>
          </li>
          <li>
            <SocialA
              target="_blank"
              rel="noopener noreferrer"
              href={about.twitter}
            >
              <Icon icon={about.twitterIcon} />
            </SocialA>
          </li>
          <li>
            <SocialA
              target="_blank"
              rel="noopener noreferrer"
              href={about.mail}
            >
              <Icon icon={about.mailIcon} />
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
              href={about.github}
            >
              <Icon icon={about.githubIcon} />
            </SocialA>
          </li>
          <li>
            <SocialA
              target="_blank"
              rel="noopener noreferrer"
              href={about.linkedin}
            >
              <Icon icon={about.linkedinIcon} />
            </SocialA>
          </li>
          <li>
            <SocialA
              target="_blank"
              rel="noopener noreferrer"
              href={about.twitter}
            >
              <Icon icon={about.twitterIcon} />
            </SocialA>
          </li>
          <li>
            <SocialA
              target="_blank"
              rel="noopener noreferrer"
              href={about.mail}
            >
              <Icon icon={about.mailIcon} />
            </SocialA>
          </li>
        </SocialUl>
      </MenuHeaderH>
    </React.Fragment>
  );
};

export default Menu;
