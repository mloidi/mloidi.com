import React, { useState, useEffect } from 'react';

import { OfflineService, ResumeService } from './service/resume.service';
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

  useEffect(() => {
    ResumeService.getAbout().then(res => {
      setAbout(res);
    });
  }, []);

  const [skills] = useState(() => {
    return OfflineService.getSkills();
  });

  return (
    <PageDiv id="about">
      <SectionTitle>About me</SectionTitle>
      {/* <div>{about.name}</div> */}
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
          {skills.map(skill => (
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
