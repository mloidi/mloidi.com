import React from 'react';
import { GrLinkedin, GrTwitter, GrMail, GrGithub } from 'react-icons/gr';
import styled from 'styled-components';

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

const Area = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--background-color);
  text-align: center;
  padding: 10px;
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 40px;
  justify-content: center;
`;

const MenuSocial = styled.a`
  font-size: 1.4rem;
  color: var(--principal-color);
  :hover {
    color: var(--secondary-color);
  }
`;

export const Footer = () => {
  return (
    <Area>
      {social.map((social) => (
        <MenuSocial
          key={social.name}
          target='_blank'
          rel='noopener noreferrer'
          href={social.url}
        >
          {social.icon}
        </MenuSocial>
      ))}
    </Area>
  );
};
