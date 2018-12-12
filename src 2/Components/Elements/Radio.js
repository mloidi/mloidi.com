import React from 'react'
import styled from 'styled-components'

import Label from './Label'

export const DivStyle = styled.div`
  display: grid;
  grid-template-columns: 30% 70% ;
  margin: 0;
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

export const LabelCheckbox = styled.label`
  padding: 0.5rem
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.value === props.selectedValue ? 'green' : 'lightgray')}
  border-radius: 15px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px green;
  }

  ${Icon} {
    visibility: ${props => (props.value === props.selectedValue ? 'visible' : 'hidden')}
  }
`

const Radio = ({ className, value, selectedValue, ...props }) => (
  <DivStyle>
    {props.position === "left" && (<Label text={props.label}></Label>)} 
    <LabelCheckbox>
      <CheckboxContainer className={className}>
        <HiddenCheckbox value={value} selectedValue={selectedValue} {...props} />
        <StyledCheckbox value={value} selectedValue={selectedValue}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </LabelCheckbox>
    {props.position === "right" && (<Label text={props.label}></Label>)} 
  </DivStyle>
)

export default Radio
