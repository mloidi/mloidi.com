import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { GrGithub } from 'react-icons/gr';

import { getPortfolios } from '../lib/Data';
import { DataContext } from '../globalState';
import {
  device,
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
  @media ${device.laptop} {
    padding: 10px 200px;
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

const Github = styled.a`
  display: inline-block;
  font-size: 1.4rem;
  :hover {
    color: ${(props) => props.color};
  }
`;

export const Portfolio = () => {
  const { selectedColor } = useContext(DataContext);
  const [portfolios] = useState(getPortfolios());

  return (
    <Container>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <SectionTitle>Portfolio</SectionTitle>
      <CardGrid>
        {portfolios.map((portfolio) => (
          <Card key={portfolio.id} color={selectedColor}>
            <CardTitle color={selectedColor}>
              {portfolio.titleURL ? (
                <CardTitleLink
                  color={selectedColor}
                  target='_blank'
                  rel='noopener noreferrer'
                  href={portfolio.titleURL}
                >
                  {portfolio.title}
                </CardTitleLink>
              ) : (
                <CardTitleNoLink>{portfolio.title}</CardTitleNoLink>
              )}
            </CardTitle>
            <div>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={portfolio.appUrl}
              >
                <Img
                  color={selectedColor}
                  src={portfolio.imageURL}
                  alt={portfolio.title}
                />
              </a>
            </div>
            <br />
            <div>
              {portfolio.description}
              <Technologies>
                {portfolio.technologies.map((technology) => (
                  <Technology key={technology.id} color={selectedColor}>
                    {technology.name}
                  </Technology>
                ))}
              </Technologies>
            </div>
            <div>
              <Github
                color={selectedColor}
                target='_blank'
                rel='noopener noreferrer'
                href={portfolio.gitHubURL}
              >
                <GrGithub />
              </Github>
            </div>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};
