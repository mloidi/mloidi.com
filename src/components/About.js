import React from 'react';
import { Helmet } from 'react-helmet';
import { FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';

import {
  Profile,
  ProfileList,
  Description,
  Icon,
  Text
} from './Elements';
import { Layout } from './Layout';

const Title = styled.h1`
  cursor: default;
  font-family: var(--title-font);
  text-transform: uppercase;
`;

const CardTitle = styled.div`
  display: inline-block;
  background-color: var(--secondary-color);
  padding: 5px 10px;
  margin-bottom: 5px;
`;

const Paragraph = styled.p`
  margin: 20px 0;
  ::before {
    content: '';
    width: 10px;
    height: 10px;
    margin-left: -10px;
    margin-top: 5px;
    background-color: var(--secondary-color);
    pointer-events: none;
    position: absolute;
    z-index: -1;
  }
`;

export const About = () => {
  return (
    <Layout>
      <div>
        <Helmet>
          <title>About me</title>
        </Helmet>
        <Title>
          Hi, my name is <CardTitle>Mikel Loidi</CardTitle>.
        </Title>
        <Paragraph>
          I am a web developer currently located in Pamplona Spain. You know,
          the running of the bulls. When I’m not running with them, my main
          focus is to developing new web technologies. In my free time, I am
          constantly experimenting with new projects, pushing my skills to adapt
          the latest web tech to build new web designs.
        </Paragraph>
        <Paragraph>
          I am passionate about development and design. On the frontend, I work
          mainly with React while on the backend I work with Node and Express.
          As for a data base I prefer to use MongoDB.
        </Paragraph>
        <Paragraph>
          As a growing community, the web industry is one that I have learned so
          much from and hope to give back just as much. I am mostly excited
          about the future of this industry. There is so much we have yet to
          discover, and I cannot wait to see what is coming next.
        </Paragraph>
        <Profile>
          <h2>Profile</h2>
          <Paragraph>
            Advanced developer with 15 years of experience in structuring,
            developing and implementing applications and innovative use of
            technology. Able to complete projects efficiently and satisfy
            clients.
          </Paragraph>
          <ProfileList>
            <Description>
              <Icon>
                <FiChevronRight />
              </Icon>
              <Text>Advanced programming and design skills</Text>
            </Description>
            <Description>
              <Icon>
                <FiChevronRight />
              </Icon>
              <Text>Excellent problem solving skills</Text>
            </Description>
            <Description>
              <Icon>
                <FiChevronRight />
              </Icon>
              <Text>Strong collaborative skills</Text>
            </Description>
            <Description>
              <Icon>
                <FiChevronRight />
              </Icon>
              <Text>Project Management</Text>
            </Description>
          </ProfileList>
        </Profile>
      </div>
    </Layout>
  );
};
