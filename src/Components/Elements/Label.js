import React from 'react';

import styled from 'styled-components';

const LabelStyle = styled.label`
    text-align: start;
    padding: 0.5em;
    marging: 0.5em;
    font-size: 1em;
    background-color: transparent;
`;

const Label = (props) => (
    <LabelStyle>{props.text}</LabelStyle>
);
  
export default Label;