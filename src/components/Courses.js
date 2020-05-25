import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FiAtSign } from 'react-icons/fi';
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiAngularSimple,
  DiBootstrap,
  DiNodejs,
  DiFirebase,
  DiMongodb,
} from 'react-icons/di';
import { GrGraphQl } from "react-icons/gr";

import { getCourses, TECHNOLOGIES } from '../lib/Data';
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
  CardLocation,
  // CardItem,
  // CardItemTitle,
  // CardItemRoleName,
  // CardItemRoleDates,
  // Description,
  // Text,
  Img,
} from './Elements';

const Container = styled.div`
  padding: 10px 20px;
  font-family: 'Cutive Mono', monospace;
  @media ${device.laptop} {
    padding: 10px 200px;
  }
`;

const getIcon = (iconName) => {
  switch (iconName) {
    case TECHNOLOGIES._REACT.id:
      return <DiReact />;
    case TECHNOLOGIES._HTML.id:
      return <DiHtml5 />;
    case TECHNOLOGIES._CSS.id:
      return <DiCss3 />;
    case TECHNOLOGIES._JAVASCRIPT.id:
      return <DiJavascript1 />;
    case TECHNOLOGIES._NEXTJS.id:
      return iconName;
    case TECHNOLOGIES._GRAPHQL.id:
      return <GrGraphQl/>;
    case TECHNOLOGIES._APOLLO.id:
      return iconName;
    case TECHNOLOGIES._FIREBASE.id:
      return <DiFirebase />;
    case TECHNOLOGIES._NODE.id:
      return <DiNodejs />;
    case TECHNOLOGIES._MONGODB.id:
      return <DiMongodb />;
    case TECHNOLOGIES._PASSPORT.id:
      return iconName;
    case TECHNOLOGIES._GOOGLEMAPS.id:
      return iconName;
    case TECHNOLOGIES._EXPRESS.id:
      return iconName
    case TECHNOLOGIES._ANGULARJS.id:
      return <DiAngularSimple />;
    case TECHNOLOGIES._BOOTSTRAP.id:
      return <DiBootstrap />;

    default:
      break;
  }
  return iconName;
};

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
            <CardLocation>
              <Icon>
                <FiAtSign />
              </Icon>
              <CardTitleLink
                color={selectedColor}
                target='_blank'
                rel='noopener noreferrer'
                href={course.placeUrl}
              >
                {course.place}
              </CardTitleLink>
            </CardLocation>
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
              {course.technologies.map((technology) => (
                <div key={technology.id}>{getIcon(technology.name)}</div>
              ))}
            </div>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};
