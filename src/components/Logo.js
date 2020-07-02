import React, { useContext } from 'react';
import styled from 'styled-components';

import { DataContext } from '../globalState';

export const Layout = styled.div`
  cursor: default;
  padding: 0 10px;
  border-left: 2px solid ${(props) => props.color};
  border-right: 2px solid ${(props) => props.color};
  border-radius: 5%;
`;

export const LogoTopText = styled.div`
  font-size: 2rem;
`;
export const LogoBottomText = styled.div`
  font-size: 0.8rem;
`;

export const Logo = () => {
  const { selectedColor } = useContext(DataContext);
  return (
    <Layout color={selectedColor}>
      <LogoTopText>ML</LogoTopText>
      <LogoBottomText>developer</LogoBottomText>
    </Layout>
  );
};
