import React from 'react';
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
import styled from 'styled-components';

const DivStyles = styled.div`
  display: block;
  position: absolute;
  /* top: 100px; */
  cursor: default;
  /* left: 50%; */
`;

const Styles = styled.div`
  background-color: var(--background-color);
  border: 1px solid var(--secondary-color);
  box-shadow: 5px 5px var(--secondary-color);
  padding: 5px 40px;
  position: relative;
  /* left: -50%; */
`;

const TitleStyles = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
`;

const GridStyles = styled.div`
  display: grid;
  gap: 5px;
`;

const SkillStyles = styled.div`
  font-size: 2rem;
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: 10px;
  align-content: center;
  justify-content: start;
`;

const SkillScoreStyles = styled.div`
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

export const ToolTipStyles = styled.div`
  position: relative;
  display: inline-block;

  .tooltiptext {
    visibility: hidden;
    background-color: var(--background-color);
    border: 0.1px solid var(--secondary-color);
    color: black;
    text-align: center;
    padding: 5px;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    font-size: 0.6rem;
  }

  :hover .tooltiptext {
    visibility: visible;
  }
`;
export const Skills = () => {
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
    <DivStyles>
      <Styles>
        <TitleStyles>Skills</TitleStyles>
        <GridStyles>
          {skills.map((skill) => (
            <ToolTipStyles key={skill.id}>
              <SkillStyles>
                {skill.icon}
                <SkillScoreStyles>
                  {scores.map((score) => (
                    <div key={score}>
                      {score <= skill.level ? (
                        <Score>{skill.level}</Score>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))}
                </SkillScoreStyles>
              </SkillStyles>
              <span className='tooltiptext'>{skill.description}</span>
            </ToolTipStyles>
          ))}
        </GridStyles>
      </Styles>
    </DivStyles>
  );
};
