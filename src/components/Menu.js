import React from 'react';
import styled from 'styled-components';

import { Logo } from './Logo';

const MenuNav = styled.div`
  position: sticky;
  top: 0;
  padding: 0.5rem 2rem 0 2rem;
  align-content: center;
`;

export const Menu = () => {
  return (
    <MenuNav>
      <Logo />
    </MenuNav>
  );
};
