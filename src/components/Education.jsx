import React, { useState, useEffect } from 'react';

import { ResumeService } from '../service/resume.service';
import { study } from '../lib/util.lib';
import Study from './common/Study';

const Education = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    ResumeService.getItemsByType(study).then(res => {
      setItems(res);
    });
  }, []);

  return (
    <div className="mt-8 mx-4 lg:mx-24 max-h-full">
      <div className="text-2xl mb-4">Education</div>
      {items &&
        Object.keys(items).map(key => <Study key={key} item={items[key]} />)}
    </div>
  );
};

export default Education;
