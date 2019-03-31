import React from 'react';
import styled from 'styled-components';

import ProgressBar from './ProgressBar';
import Icon from '../Common/Icon';

const Box = styled.div`
  display: grid;
  grid-template-columns: 4rem auto;
  width: 0.5rem;
  margin: 1px 0 5px 0;
`;

const SkillLabel = styled.label`
  text-align: center;
  margin-right: 1rem;
  font-size: 2rem;
`;

const SkillLevel = props => (
  <Box>
    <SkillLabel>
      <Icon icon={props.skill.icon} />
    </SkillLabel>
    <ProgressBar level={props.skill.level} />
  </Box>
);

export default SkillLevel;
