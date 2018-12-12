import React from 'react';
import styled from 'styled-components';

export const DivCheckbox = styled.div`
  padding: 0.5rem;
  .selected {
    box-shadow: 0px 12px 31px 0px rgba(0, 0, 0, 0.62);
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
    box-shadow: 0 12px 31px 0 rgba(0, 0, 0, 0.62), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  :focus {
    outline: none;
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
