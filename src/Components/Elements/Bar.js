import React from 'react';

import styled from 'styled-components';

const Box = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto 20px;
  align-items: center;
  width: 0.5rem;
  .percentage {
    color: lightgrey;
  }
`;

const Empty = styled.div`
  padding: 0.2em 0.5em 0.2em 0.5em;
  margin: 0 0.2em 0 0.2em;
  background-color: lightgrey;
  height: 2rem;
`;

const Fill = styled.div`
  padding: 0.2em 0.5em 0.2em 0.5em;
  margin: 0 0.2em 0 0.2em;
  background-color: green;
  height: 2rem;
`;

const Bar = props => (
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
    <label className="percentage">{props.level * 10}%</label>
  </Box>
);

export default Bar;
