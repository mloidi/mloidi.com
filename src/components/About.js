import React, { useState, useEffect } from 'react';

import {  ResumeService } from './service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  SkillTable
} from './style/Style';
import Skill from './common/Skill';

const About = () => {
  const [about, setAbout] = useState();
  const [skills, setSkills] = useState();

  useEffect(() => {
    ResumeService.getAbout().then(res => {
      setAbout(res);
    });
    ResumeService.getSkills().then(res => {
      setSkills(res);
    });
  }, []);

  return (
    <PageDiv id="about">
      <SectionTitle>About me</SectionTitle>
      <SectionContent>
        {about &&
          about.descriptions &&
          about.descriptions.map(description =>
            description.line === 1 ? (
              <span key={description.line}>
                <strong>{description.text}</strong>
              </span>
            ) : (
              <React.Fragment key={description.line}>
                <span>{description.text}</span>
                <br />
                <br />
              </React.Fragment>
            )
          )}
      </SectionContent>
      <SectionSubtitle>Skills</SectionSubtitle>
      <SectionContent>
        <SkillTable>
          {skills && skills.map(skill => (
            <div key={skill.id}>
              <Skill skill={skill} />
            </div>
          ))}
        </SkillTable>
      </SectionContent>
    </PageDiv>
  );
};

export default About;
