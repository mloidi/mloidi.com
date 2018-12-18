import React from 'react';
import styled from 'styled-components';

import Bar from './Bar';

const Box = styled.div`
  display: grid;
  grid-template-columns: 140px auto 20px;
  width: 0.5rem;
  label {
    font-weight: 900;
    text-align: right;
  }
  .area {
    border: 1px solid green;
    width: 280px;
    margin: 1px 0 5px 0;
  }
`;

const SkillLevel = props => (
  <Box>
    <label>{props.skill.description}:</label>
    <div className="area">
      <Bar level={props.skill.level} />
    </div>
  </Box>
);

export default SkillLevel;
