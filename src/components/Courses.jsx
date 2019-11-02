import React, { useState, useEffect } from 'react';

import { ResumeService } from '../service/resume.service';
import { course } from '../lib/util.lib';
import Course from './common/Course';

const Courses = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    ResumeService.getItemsByType(course).then(res => {
      setItems(res);
    });
  }, []);

  return (
    <div className="mt-8 mx-4 lg:mx-24">
      <div className="text-2xl mb-4">Courses</div>
      {items &&
        Object.keys(items).map(key => <Course key={key} item={items[key]} />)}
    </div>
  );
};
export default Courses;
