import React, { useContext } from 'react';

import { DataContext } from '../globalState';
import Course from './common/Course';

const Courses = () => {
  const { coursesItems } = useContext(DataContext);

  return (
    <div className="mt-8 mx-4 lg:mx-24 max-h-full">
      <div className="text-2xl mb-4">Courses</div>
      {coursesItems &&
        Object.keys(coursesItems).map(key => (
          <Course key={key} item={coursesItems[key]} />
        ))}
    </div>
  );
};
export default Courses;
