import React from 'react';
import styled from 'styled-components';

import Label from './Label'

export const DivStyle = styled.div`
  display: grid;
  grid-template-columns: 30% 70% ;
  margin: 0;
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

const InputStyle = styled.input`
    border: none;
    border-bottom: 2px solid #ccc;
    text-align: start;
    padding: 0.5em;
    marging: 0.5em;
    font-size: 1em;
    background-color: transparent;
    :focus {
        outline: none;
        transition: 0.5s;
        border-color: green;
    }
`;

const Select = (props) => (
    <DivStyle>
        {props.position === "left" && (<Label text={props.label}></Label>)} 
        <InputStyle {...props}></InputStyle>
        {props.position === "right" && (<Label text={props.label}></Label>)} 
    </DivStyle>
  );
  
  export default Select;