import React, { Component } from 'react';
import styled from 'styled-components';

const ConstructionDiv = styled.div`
  margin-top: 10rem;
  text-align: center;
  color: #005d04;
`;

export default class Construction extends Component {
  render() {
    return (
      <ConstructionDiv>
        <h1>Coming soon</h1>
        <h2>I'm still working on it</h2>
      </ConstructionDiv>
    );
  }
}
