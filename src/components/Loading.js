import React from 'react';
import { GiArmadillo } from 'react-icons/gi';
import styled, { keyframes } from 'styled-components';

const Layout = styled.div`
  width: 100%;
  background-color: white;
`;

const rotate = keyframes`
  from {
    left: 0px;
  }

  to {
    left: 100%;
  }
`;

const Rotate = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  opacity: 1;
  margin: auto;
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 4rem;
`;
export const Loading = () => {
  return (
    <Layout>
      <Rotate>
        <GiArmadillo />
      </Rotate>
    </Layout>
  );
};
