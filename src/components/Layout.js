import React from 'react';
import styled from 'styled-components';

import { device } from './Elements';
import { Menu } from './Menu';

const Container = styled.div`
  padding: 10px 40px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    padding: 10px 200px;
  }
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <Container>{children}</Container>
    </>
  );
};
