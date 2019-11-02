import React, { useState, useEffect } from 'react';

import { ResumeService } from '../service/resume.service';
import { job } from '../lib/util.lib';
import Job from './common/Job';

const WorkExperience = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    ResumeService.getItemsByType(job).then(res => {
      setItems(res);
    });
  }, []);

  return (
    <div className="mt-8 mx-4 lg:mx-24">
      <div className="text-2xl mb-4">Work experience</div>
      {items &&
        Object.keys(items).map(key => <Job key={key} item={items[key]} />)}
    </div>
  );
};

export default WorkExperience;
