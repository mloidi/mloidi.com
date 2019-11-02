import React, { useState, useEffect } from 'react';

import { ResumeService } from '../service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  course
} from './style/Style';
import Course from './common/Course';

const Courses = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    ResumeService.getItemsByType(course).then(res => {
      setItems(res);
    });
  }, []);

  return (
    <PageDiv id="courses">
      <SectionTitle>Courses</SectionTitle>
      <SectionSubtitle />
      <SectionContent>
        {items && Object.keys(items).map(key => (
          <Course key={key} item={items[key]} />
        ))}
      </SectionContent>
    </PageDiv>
  );
};
export default Courses;
