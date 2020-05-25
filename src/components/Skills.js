import React, { useContext } from 'react';
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

import {
  SectionTitle,
  SkillsSection,
  SkillsGrid,
  Skill,
  SkillScore,
  Score,
  ToolTip,
} from './Elements';
import { DataContext } from '../globalState';

export const Skills = () => {
  const { selectedColor } = useContext(DataContext);
  const skills = [
    {
      id: 'java',
      description: 'Java',
      icon: <DiJava />,
      level: '9',
    },
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
      id: 'angular',
      description: 'Angular',
      icon: <DiAngularSimple />,
      level: '5',
    },
    {
      id: 'react',
      description: 'React',
      icon: <DiReact />,
      level: '9',
    },
    {
      id: 'bootstrap',
      description: 'Bootstrap',
      icon: <DiBootstrap />,
      level: '7',
    },
    {
      id: 'node',
      description: 'NodeJS',
      icon: <DiNodejs />,
      level: '6',
    },
    {
      id: 'firebase',
      description: 'Firebase',
      icon: <DiFirebase />,
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
  ];

  const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SkillsSection>
      <SectionTitle>Skills</SectionTitle>
      <SkillsGrid>
        {skills.map((skill) => (
          <ToolTip key={skill.id} color={selectedColor}>
            <Skill>
              {skill.icon}
              <SkillScore color={selectedColor}>
                {scores.map((score) => (
                  <div key={score}>
                    {score <= skill.level ? (
                      <Score color={selectedColor}>{skill.level}</Score>
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
    </SkillsSection>
  );
};
