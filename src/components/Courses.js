import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FiAtSign } from 'react-icons/fi';

import { getCourses } from '../lib/Data';
import { DataContext } from '../globalState';
import {
  device,
  Icon,
  SectionTitle,
  CardGrid,
  Card,
  CardTitle,
  CardTitleLink,
  CardTitleNoLink,
  Img,
} from './Elements';

const Container = styled.div`
  padding: 10px 20px;
  font-family: 'Cutive Mono', monospace;
  @media ${device.tablet} {
    padding: 10px 200px;
  }
`;

const CourseBy = styled.div`
  font-style: italic;
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  align-content: center;
  margin: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  :hover {
    border-bottom: 1px solid ${(props) => props.color};
    color: ${(props) => props.color};
  }
`;

const Technologies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-gap: 20px;
  align-items: center;
  margin: 20px 0;
  font-size: 0.9rem;
`;
const Technology = styled.div`
  text-align: center;
  border: 0.1px solid ${(props) => props.color};
`;

export const Courses = () => {
  const { selectedColor } = useContext(DataContext);
  const [courses] = useState(getCourses());

  return (
    <Container>
      <Helmet>
        <title>Courses</title>
      </Helmet>
      <SectionTitle>Courses completed</SectionTitle>
      <CardGrid>
        {courses.map((course) => (
          <Card key={course.id} color={selectedColor}>
            <CardTitle color={selectedColor}>
              {course.titleUrl ? (
                <CardTitleLink
                  color={selectedColor}
                  target='_blank'
                  rel='noopener noreferrer'
                  href={course.titleUrl}
                >
                  {course.title}
                </CardTitleLink>
              ) : (
                <CardTitleNoLink>{course.title}</CardTitleNoLink>
              )}
            </CardTitle>
            <br />
            <CourseBy color={selectedColor}>
              <Icon>
                <FiAtSign />
              </Icon>
              <a
                color={selectedColor}
                target='_blank'
                rel='noopener noreferrer'
                href={course.placeUrl}
              >
                {course.place}
              </a>
            </CourseBy>
            <br />
            <div>
              <a target='_blank' rel='noopener noreferrer' href={course.appUrl}>
                <Img
                  color={selectedColor}
                  src={course.imageURL}
                  alt={course.title}
                />
              </a>
            </div>
            <br />
            <div>
              {course.description}
              <Technologies>
                {course.technologies.map((technology) => (
                  <Technology key={technology.id} color={selectedColor}>
                    {technology.name}
                  </Technology>
                ))}
              </Technologies>
            </div>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};
