import React, { useContext } from 'react';

import { DataContext } from '../globalState';
import Job from './common/Job';

const WorkExperience = () => {
  const { jobItems } = useContext(DataContext);

  return (
    <div className="mt-8 mx-4 lg:mx-24 max-h-full">
      <div className="text-2xl mb-4">Work experience</div>
      {jobItems &&
        Object.keys(jobItems).map(key => (
          <Job key={key} item={jobItems[key]} />
        ))}
    </div>
  );
};

export default WorkExperience;
