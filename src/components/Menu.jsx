import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { ResumeService } from '../service/resume.service';

import '../css/Menu.css';
import Icon from './common/Icon';

const Menu = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    ResumeService.getAbout().then(res => {
      setAbout(res);
    });
  }, []);

  const menu = [
    {
      icon: 'faUser',
      name: 'About me',
      path: '/'
    },
    {
      icon: 'faBriefcase',
      name: 'Work Experience',
      path: '/work'
    },
    {
      icon: 'faGraduationCap',
      name: ' Education',
      path: '/education'
    },
    {
      icon: 'faLaptopCode',
      name: 'Courses',
      path: '/courses'
    },
    {
      icon: 'faCoffee',
      name: 'Side Projects',
      path: '/projects'
    }
  ];

  return (
    <>
      <nav className="flex flex-wrap items-start lg:items-center lg:justify-between border-b-2 border-gray-200 px-6 py-2">
        <div className="px-2 text-black font-semibold tracking-tight border-r-2 border-l-2 rounded border-black justify-start">
          <div className="text-2xl">ML</div>
          <div className="text-sm">developer</div>
        </div>
        <div className="flex items-center w-auto lg:hidden block">
          {menu.map(menu => (
            <React.Fragment key={menu.name}>
              <Link
                className="mx-1 p-1 inline-block text-gray-500 hover:text-gray-800 border-r border-l rounded border-transparent hover:border-gray-800"
                activeClassName="text-gray-900 border-gray-900 border-2"
                exact
                to={menu.path}
              >
                <Icon icon={menu.icon} />
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center w-auto hidden lg:block">
          {menu.map(menu => (
            <React.Fragment key={menu.name}>
              <Link
                className="mx-4 p-1 inline-block text-gray-500 hover:text-gray-800 border-r border-l rounded border-transparent hover:border-gray-800"
                activeClassName="text-gray-900 border-gray-900 border-2"
                exact
                to={menu.path}
              >
                {menu.name}
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className="lg:text-2xl text-gray-500 mt-1 lg:mt-0">
          <a
            className="p-1 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            href={about.github}
          >
            <Icon icon={about.githubIcon} />
          </a>
          <a
            className="p-1 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            href={about.linkedin}
          >
            <Icon icon={about.linkedinIcon} />
          </a>
          <a
            className="p-1 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            href={about.twitter}
          >
            <Icon icon={about.twitterIcon} />
          </a>
          <a
            className="p-1 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            href={about.mail}
          >
            <Icon icon={about.mailIcon} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Menu;
