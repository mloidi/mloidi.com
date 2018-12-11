import React from 'react';
import styled from 'styled-components';

export const DivCheckbox = styled.div`
  padding: 0.5rem;
  .selected {
    border: 2px solid red;
  }
`;

export const Checkbox = styled.button`
  border: none;
  text-align: start;
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1em;
  background-color: transparent;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid green;
  }
`;

const SkillsCheckbox = ({ skill, ...props }) => (
  <DivCheckbox>
    <Checkbox
      className={skill.status}
      onClick={() => {
        props.filterBySkill(skill);
      }}
    >
      <img src={skill.url} alt={skill.id} />
    </Checkbox>
  </DivCheckbox>
);

export default SkillsCheckbox;
