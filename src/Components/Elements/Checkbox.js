import React from 'react';
import styled from 'styled-components';

import Label from './Label';

const DivStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
`;

const LabelCheckbox = styled.label`
  padding: 0.5rem;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? 'green' : 'lightgray')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px green;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <DivStyle>
    {props.position === 'left' && <Label text={props.label} />}
    <LabelCheckbox>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </LabelCheckbox>
    {props.position === 'right' && <Label text={props.label} />}
  </DivStyle>
);

export default Checkbox;
