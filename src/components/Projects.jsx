import React, { useContext } from 'react';

import { DataContext } from '../globalState';
import Project from './common/Project';

const Projects = () => {
  const { projectsItems } = useContext(DataContext);

  return (
    <div className="mt-8 mx-4 lg:mx-24 max-h-full">
      <div className="text-2xl mb-4">Side Projects</div>
      <div className="mb-4 text-gray-700">
        Here you can found some of the projects I have recently worked on.
      </div>

      {projectsItems &&
        Object.keys(projectsItems).map(key => (
          <Project key={key} item={projectsItems[key]} />
        ))}
    </div>
  );
};

export default Projects;
