import React, { useContext } from 'react';

import { DataContext } from '../globalState';
import Study from './common/Study';

const Education = () => {
  const { educationItems } = useContext(DataContext);

  return (
    <div className="mt-8 mx-4 lg:mx-24 max-h-full">
      <div className="text-2xl mb-4">Education</div>
      {educationItems &&
        Object.keys(educationItems).map(key => (
          <Study key={key} item={educationItems[key]} />
        ))}
    </div>
  );
};

export default Education;
