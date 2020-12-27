import React from 'react';
import { GrLinkedin, GrTwitter, GrMail, GrGithub } from 'react-icons/gr';
import styled from 'styled-components';

import { Logo } from './Logo';

const MenuStyle = styled.div`
  position: sticky;
  top: 0;
  padding: 0.5rem 2rem 0 2rem;
  display: inline-grid;
  gap: 20px;
  grid-template-columns: auto auto;
  align-items: center;
`;

const SocialArea = styled.div`
  background-color: var(--background-color);
  text-align: center;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  justify-content: center;
`;

const LinkStyle = styled.a`
  font-size: 1.4rem;
  color: var(--principal-color);
  :hover {
    color: var(--secondary-color);
  }
`;

export const Menu = () => {
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
  return (
    <MenuStyle>
      <Logo />
      <SocialArea>
        {social.map((social) => (
          <LinkStyle
            key={social.name}
            target='_blank'
            rel='noopener noreferrer'
            href={social.url}
          >
            {social.icon}
          </LinkStyle>
        ))}
      </SocialArea>
    </MenuStyle>
  );
};
