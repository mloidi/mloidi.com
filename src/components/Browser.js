import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { getTechnologies } from '../lib/Data';
import { DataContext } from '../globalState';

const Box = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 0.1px solid ${(props) => props.color};
  display: grid;
  grid-template-columns: repeat(auto-fill, 90px);
  grid-gap: 20px;
  align-items: center;
`;

const Card = styled.div`
  border: 0.1px solid ${(props) => props.color};
  padding: 5px;
  height: 90px;
  text-align: center;
  background-color: ${(props) => props.color};
`;

const Img = styled.img``;

export const Browser = () => {
  const { selectedColor } = useContext(DataContext);
  const [technologies] = useState(getTechnologies());

  return (
    <Box color={selectedColor}>
      {technologies.map((technology) => (
        <Card key={technology.id} color={selectedColor}>
          <Img src={technology.url} alt={technology.name}></Img>
        </Card>
      ))}
    </Box>
  );
};
