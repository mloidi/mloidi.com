import React, { createContext, useState, useEffect } from 'react';

import { ResumeService } from '../service/resume.service';

export const DataContext = createContext();

export const job = 'job';
export const study = 'study';
export const course = 'course';
export const project = 'project';

export const DataProvider = ({ children }) => {
  const [about, setAbout] = useState();
  useEffect(() => {
    if (!about) {
      ResumeService.getAbout().then(res => {
        setAbout(res);
      });
    }
  }, [about]);
  const [skills, setSkills] = useState();
  useEffect(() => {
    if (!skills) {
      ResumeService.getSkills().then(res => {
        setSkills(res);
      });
    }
  }, [skills]);

  const [jobItems, setJobItems] = useState();
  useEffect(() => {
    if (!jobItems) {
      ResumeService.getItemsByType(job).then(res => {
        setJobItems(res);
      });
    }
  }, [jobItems]);

  const [educationItems, setEducationItems] = useState();
  useEffect(() => {
    if (!educationItems) {
      ResumeService.getItemsByType(study).then(res => {
        setEducationItems(res);
      });
    }
  }, [educationItems]);

  const [coursesItems, setCoursesItems] = useState();
  useEffect(() => {
    if (!coursesItems) {
      ResumeService.getItemsByType(course).then(res => {
        setCoursesItems(res);
      });
    }
  }, [coursesItems]);

  const [projectsItems, setProjectsItems] = useState();
  useEffect(() => {
    if (!projectsItems) {
      ResumeService.getItemsByType(project).then(res => {
        setProjectsItems(res);
      });
    }
  }, [projectsItems]);

  return (
    <DataContext.Provider
      value={{
        about,
        skills,
        jobItems,
        educationItems,
        coursesItems,
        projectsItems
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
