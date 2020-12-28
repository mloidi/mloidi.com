import React, { useState } from 'react';
import { GrLinkedin, GrTwitter, GrMail, GrGithub } from 'react-icons/gr';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

import { Logo } from './Logo';
import { Skills } from './Skills';

const MenuS = styled.div`
  position: sticky;
  top: 0;
  padding: 0.5rem 0 1rem 0;
  background-color: var(--background-color);
  border-bottom: solid 1px var(--secondary-color);
`;

const MenuStyle = styled.nav`
  display: inline-grid;
  gap: 20px;
  grid-template-columns: auto auto auto;
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

const ButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  outline: none;
  padding: 0;
  /* color: var(--secondary-color); */
`;

const showMySkills = { text: 'Skills', icon: <IoIosArrowDown /> };
const hideMySkills = { text: 'Skills', icon: <IoIosArrowUp /> };

export const Menu = () => {
  const [skillsText, setSkillsText] = useState(showMySkills);
  const [showSkills, setShowSkills] = useState(false);
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
    <MenuS>
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
        <ButtonStyle
          onClick={() => {
            if (showSkills) {
              setSkillsText(showMySkills);
              setShowSkills(false);
            } else {
              setSkillsText(hideMySkills);
              setShowSkills(true);
            }
          }}
        >
          {skillsText.text}
          {skillsText.icon}
        </ButtonStyle>
      </MenuStyle>
      {showSkills && <Skills />}
    </MenuS>
  );
};
