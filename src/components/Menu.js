import React, { useContext } from 'react';
import { GrLinkedin, GrTwitter, GrMail, GrGithub } from 'react-icons/gr';

import {
  MenuNav,
  Logo,
  LogoTopText,
  LogoBottomText,
  MenuLinks,
  MenuLink,
  MenuSocials,
  MenuSocial,
} from './Elements';
import { DataContext } from '../globalState';
import { ColorSelector } from './ColorSelector';

export const Menu = () => {
  const { selectedColor } = useContext(DataContext);

  const social = [
    {
      name: 'github',
      url: 'https://github.com/mloidi/',
      icon: <GrGithub />,
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mikel-loidi-ardanaz/',
      icon: <GrLinkedin />,
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/mikelloidi',
      icon: <GrTwitter />,
    },
    {
      name: 'mail',
      url: 'mailto:mikel@mloidi.com',
      icon: <GrMail />,
    },
  ];

  const menu = [
    {
      icon: 'faUser',
      name: 'About me',
      path: '/',
    },
    {
      icon: 'faBriefcase',
      name: 'Resume',
      path: '/resume',
    },
    // {
    //   icon: 'faLaptopCode',
    //   name: 'Courses',
    //   path: '/courses',
    // },
    // {
    //   icon: 'faCoffee',
    //   name: 'Side Projects',
    //   path: '/projects',
    // },
  ];
  return (
    <MenuNav>
      <Logo color={selectedColor}>
        <LogoTopText>ML</LogoTopText>
        <LogoBottomText>developer</LogoBottomText>
      </Logo>
      <MenuLinks>
        {menu.map((menu) => (
          <MenuLink key={menu.name} exact to={menu.path} color={selectedColor}>
            {menu.name}
          </MenuLink>
        ))}
      </MenuLinks>
      <MenuSocials>
        {social.map((social) => (
          <MenuSocial
            color={selectedColor}
            key={social.name}
            target='_blank'
            rel='noopener noreferrer'
            href={social.url}
          >
            {social.icon}
          </MenuSocial>
        ))}
        <ColorSelector />
      </MenuSocials>
    </MenuNav>
  );
};
