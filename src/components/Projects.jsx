import React, { useState, useEffect } from 'react';

import { ResumeService } from '../service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  project
} from './style/Style';
import Project from './common/Project';

const Projects = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    ResumeService.getItemsByType(project).then(res => {
      setItems(res);
    });
  }, []);

  return (
    <PageDiv id="projects">
      <SectionTitle>Side Projects</SectionTitle>
      <SectionSubtitle>
        Here you can found some of the projects I have recently worked on.
      </SectionSubtitle>
      <SectionContent>
        {items && Object.keys(items).map(key => (
          <Project key={key} item={items[key]} />
        ))}
      </SectionContent>
    </PageDiv>
  );
};

export default Projects;
