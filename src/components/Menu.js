import React, { useContext, useState } from 'react';
import { GrLinkedin, GrTwitter, GrMail, GrGithub } from 'react-icons/gr';
import { GoThreeBars, GoX } from 'react-icons/go';

import {
  MenuNav,
  MenuNavSmall,
  MenuHeaderSmall,
  MenuShowButton,
  MenuLinksSamll,
  MenuLinks,
  MenuLink,
  MenuSocials,
  MenuSocial,
} from './Elements';
import { DataContext } from '../globalState';
import { ColorSelector } from './ColorSelector';
import { Logo } from './Logo';

export const Menu = () => {
  const { selectedColor } = useContext(DataContext);
  const [showMenu, setShowMenu] = useState(false);

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
      name: 'About me',
      path: '/',
    },
    {
      name: 'Resume',
      path: '/resume',
    },
    {
      name: 'Courses',
      path: '/courses',
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
    },
  ];
  return (
    <>
      <MenuNav>
        <Logo />
        <MenuLinks>
          {menu.map((menu) => (
            <MenuLink
              key={menu.name}
              exact
              to={menu.path}
              color={selectedColor}
            >
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

      <MenuNavSmall>
        <MenuHeaderSmall>
          <Logo />
          <MenuShowButton
            onClick={() => {
              setShowMenu((value) => !value);
            }}
            color={selectedColor}
          >
            {showMenu ? <GoX /> : <GoThreeBars />}
          </MenuShowButton>
        </MenuHeaderSmall>
        {showMenu && (
          <MenuLinksSamll>
            <div>
              {menu.map((menu) => (
                <div key={menu.name}>
                  <MenuLink
                    key={menu.name}
                    exact
                    to={menu.path}
                    color={selectedColor}
                    onClick={() => {
                      setShowMenu((value) => !value);
                    }}
                  >
                    {menu.name}
                  </MenuLink>
                </div>
              ))}
            </div>
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
            </MenuSocials>
          </MenuLinksSamll>
        )}
      </MenuNavSmall>
    </>
  );
};
