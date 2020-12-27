import React, { useState } from 'react';
import {
  DiReact,
  DiJava,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiAngularSimple,
  DiBootstrap,
  DiNodejs,
  DiFirebase,
  DiGit,
  DiMongodb,
} from 'react-icons/di';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import styled from 'styled-components';

import { ToolTip } from './Elements';

const SkillsSection = styled.div`
  display: block;
  position: absolute;
  top: 100px;
  left: 0;
  cursor: default;
  background-color: var(--background-color);
  display: grid;
  gap: 20px;
  grid-template-columns: 40px auto;
  padding-right: 10px;
`;

const SectionTitle = styled.h1`
  cursor: default;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-gap: 5px;
`;

const Skill = styled.div`
  font-size: 2rem;
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  align-content: center;
  justify-content: start;
`;

const SkillScore = styled.div`
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(10, 20px);
  border: 1px solid var(--secondary-color);
  grid-gap: 1px;
`;

const Score = styled.div`
  background-color: var(--secondary-color);
  color: var(--secondary-color);
  width: 19px;
`;

const ButtonStyle = styled.button`
  background-color: transparent;
  height: 536px;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const showMySkills = { text: 'Show my Skills', icon: <IoIosArrowForward /> };
const hideMySkills = { text: 'Hide my Skills', icon: <IoIosArrowBack /> };

export const Skills = () => {
  const [skillsText, setSkillsText] = useState(showMySkills);
  const [showSkills, setShowSkills] = useState(false);
  const skills = [
    {
      id: 'html',
      description: 'HTML',
      icon: <DiHtml5 />,
      level: '9',
    },
    {
      id: 'css',
      description: 'CSS',
      icon: <DiCss3 />,
      level: '7',
    },
    {
      id: 'js',
      description: 'Javascript',
      icon: <DiJavascript1 />,
      level: '9',
    },
    {
      id: 'react',
      description: 'React',
      icon: <DiReact />,
      level: '9',
    },
    {
      id: 'node',
      description: 'NodeJS',
      icon: <DiNodejs />,
      level: '6',
    },
    {
      id: 'git',
      description: 'Git',
      icon: <DiGit />,
      level: '6',
    },
    {
      id: 'mongodb',
      description: 'MongoDB',
      icon: <DiMongodb />,
      level: '6',
    },
    {
      id: 'firebase',
      description: 'Firebase',
      icon: <DiFirebase />,
      level: '6',
    },
    {
      id: 'java',
      description: 'Java',
      icon: <DiJava />,
      level: '9',
    },
    {
      id: 'angular',
      description: 'Angular',
      icon: <DiAngularSimple />,
      level: '5',
    },
    {
      id: 'bootstrap',
      description: 'Bootstrap',
      icon: <DiBootstrap />,
      level: '7',
    },
  ];

  const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SkillsSection>
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
        {skillsText.icon}
      </ButtonStyle>

      {showSkills && (
        <div>
          <SectionTitle>Skills</SectionTitle>
          <SkillsGrid>
            {skills.map((skill) => (
              <ToolTip key={skill.id}>
                <Skill>
                  {skill.icon}
                  <SkillScore>
                    {scores.map((score) => (
                      <div key={score}>
                        {score <= skill.level ? (
                          <Score>{skill.level}</Score>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    ))}
                  </SkillScore>
                </Skill>
                <span className='tooltiptext'>{skill.description}</span>
              </ToolTip>
            ))}
          </SkillsGrid>
        </div>
      )}
    </SkillsSection>
  );
};
