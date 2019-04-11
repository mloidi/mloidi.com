import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  grid-gap: 0.5rem;
  align-items: center;
  width: 0.5rem;
`;

const Empty = styled.div`
  padding: 0.2em 0.5em 0.2em 0.5em;
  background-color: #424943;
  height: 2rem;
`;

const Fill = styled.div`
  padding: 0.2em 0.5em 0.2em 0.5em;
  background-color: #ecd018;
  height: 2rem;
`;

const ProgressBar = props => (
  <Box>
    {1 <= props.level ? <Fill /> : <Empty />}
    {2 <= props.level ? <Fill /> : <Empty />}
    {3 <= props.level ? <Fill /> : <Empty />}
    {4 <= props.level ? <Fill /> : <Empty />}
    {5 <= props.level ? <Fill /> : <Empty />}
    {6 <= props.level ? <Fill /> : <Empty />}
    {7 <= props.level ? <Fill /> : <Empty />}
    {8 <= props.level ? <Fill /> : <Empty />}
    {9 <= props.level ? <Fill /> : <Empty />}
    {10 <= props.level ? <Fill /> : <Empty />}
  </Box>
);

export default ProgressBar;
