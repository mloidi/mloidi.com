import React, { useState, useEffect } from 'react';

import { ResumeService } from '../service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  job
} from './style/Style';
import Job from './common/Job';

const WorkExperience = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    ResumeService.getItemsByType(job).then(res => {
      setItems(res);
    });
  }, []);

  return (
    <PageDiv id="timeline">
      <SectionTitle>Work experience</SectionTitle>
      <SectionSubtitle />
      <SectionContent>
        {items && Object.keys(items).map(key => (
          <Job key={key} item={items[key]} />
        ))}
      </SectionContent>
    </PageDiv>
  );
};

export default WorkExperience;
