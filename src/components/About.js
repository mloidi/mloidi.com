import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FiChevronRight } from 'react-icons/fi';

import { DataContext } from '../globalState';
import {
  CardTitle,
  AboutContainer,
  SectionTitle,
  AboutParagraph,
  Profile,
  ProfileList,
  Description,
  Icon,
  Text,
} from './Elements';

export const About = () => {
  const { selectedColor } = useContext(DataContext);

  return (
    <AboutContainer>
      <Helmet>
        <title>About me</title>
      </Helmet>
      <SectionTitle>
        Hi, my name is <CardTitle color={selectedColor}>Mikel Loidi</CardTitle>.
      </SectionTitle>
      <AboutParagraph color={selectedColor}>
        I am a web developer currently located in Pamplona Spain. You know, the
        running of the bulls. When I’m not running with them, my main focus is
        to developing new web technologies. In my free time, I am constantly
        experimenting with new projects, pushing my skills to adapt the latest
        web tech to build new web designs.
      </AboutParagraph>
      <AboutParagraph color={selectedColor}>
        I am passionate about development and design. On the frontend, I work
        mainly with React while on the backend I work with Node and Express. As
        for a data base I prefer to use MongoDB.
      </AboutParagraph>
      <AboutParagraph color={selectedColor}>
        As a growing community, the web industry is one that I have learned so
        much from and hope to give back just as much. I am mostly excited about
        the future of this industry. There is so much we have yet to discover,
        and I cannot wait to see what is coming next.
      </AboutParagraph>
      <Profile>
        <SectionTitle>Profile</SectionTitle>
        <AboutParagraph color={selectedColor}>
          Advanced developer with 15 years of experience in structuring,
          developing and implementing applications and innovative use of
          technology. Able to complete projects efficiently and satisfy clients.
        </AboutParagraph>
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
    </AboutContainer>
  );
};
