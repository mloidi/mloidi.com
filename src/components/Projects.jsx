import React, { useState, useEffect } from 'react';

import { ResumeService } from '../service/resume.service';
import { project } from '../lib/util.lib';
import Project from './common/Project';

const Projects = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    ResumeService.getItemsByType(project).then(res => {
      setItems(res);
    });
  }, []);

  return (
    <div className="mt-8 mx-4 lg:mx-24 max-h-full">
      <div className="text-2xl mb-4">Side Projects</div>
      <div className="mb-4 text-gray-700">
        Here you can found some of the projects I have recently worked on.
      </div>

      {items &&
        Object.keys(items).map(key => <Project key={key} item={items[key]} />)}
    </div>
  );
};

export default Projects;
