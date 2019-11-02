import React, { useState, useEffect } from 'react';

import { ResumeService } from '../service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  study
} from './style/Style';
import Study from './common/Study';

const Education = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    ResumeService.getItemsByType(study).then(res => {
      setItems(res);
    });
  }, []);

  return (
    <PageDiv id="timeline">
      <SectionTitle>Education</SectionTitle>
      <SectionSubtitle />
      <SectionContent>
        {items && Object.keys(items).map(key => (
          <Study key={key} item={items[key]} />
        ))}
      </SectionContent>
    </PageDiv>
  );
};

export default Education;
