import React, { useState, useEffect } from 'react';

import { ResumeService } from '../service/resume.service';
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
    <div className="mt-8 mx-4 lg:mx-24 h-screen">
      <div className="text-2xl mb-4">About me</div>
      <div className="border-b rounded mb-2">
        {about &&
          about.descriptions &&
          about.descriptions.map(description =>
            description.line === 1 ? (
              <span key={description.line}>{description.text}</span>
            ) : (
              <React.Fragment key={description.line}>
                <span className="text-gray-600">{description.text}</span>
                <br />
                <br />
              </React.Fragment>
            )
          )}
      </div>
      <div className="text-xl mb-2">Skills</div>
      <div className="md:flex flex-wrap">
        {skills &&
          skills.map(skill => (
            <div key={skill.id} className="w-1/2 h-7">
              <Skill skill={skill} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default About;
