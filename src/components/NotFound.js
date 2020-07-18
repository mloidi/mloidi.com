import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import styled, { keyframes } from 'styled-components';
import { GiGolemHead } from 'react-icons/gi';

import { device } from './Elements';
import { DataContext } from '../globalState';

const scale = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Content = styled.div`
  left: 50%;
  padding: 10px 20px;
  font-family: 'Cutive Mono', monospace;
color: ${(props) => props.color};
  @media ${device.tablet} {
    padding: 10px 200px;
  }
  /* animation: ${scale} 1s ease-in-out; */
`;

const Icon = styled.div`
  display: inline-block;
  animation: ${rotate} 1s infinite ease-in-out;
  font-size: 4rem;
`;

const Title = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  padding: 50px;
  justify-content: center;
  justify-items: center;
`;

export const NotFound = () => {
  const { selectedColor } = useContext(DataContext);
  return (
    <Content color={selectedColor}>
      <Helmet>
        <title>Where are you going? </title>
      </Helmet>
      <Title>
        <Icon>
          <GiGolemHead />
        </Icon>
        <br />
        Page not found!!!
      </Title>
    </Content>
  );
};
