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
      <nav className="flex items-start lg:items-center justify-between border-b-2 border-gray-200 px-6 py-2">
        <div className="px-2 text-black font-semibold tracking-tight border-r-2 border-l-2 rounded border-black justify-start">
          <div className="text-2xl">ML</div>
          <div className="text-sm">developer</div>
        </div>
        <div className="flex items-center w-auto lg:hidden block">
          <div className="inline-block relative">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight">
              <option>Option</option>
              <option>Option</option>
              <option>Option</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
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
        <div className="text-2xl text-gray-500">
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
