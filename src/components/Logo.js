import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Layout = styled.div`
  cursor: default;
  padding: 0 10px;
  border-left: 2px solid var(--secondary-color);
  border-right: 2px solid var(--secondary-color);
  border-radius: 5%;
  width: 65px;
  text-align: left;
`;

export const LogoTopText = styled.h1`
  font-family: var(--logo-font);
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-shadow: 5px 3px var(--secondary-color);
`;
export const LogoBottomText = styled.h3`
  font-size: 0.7rem;
  margin: 0;
  padding: 0;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  :hover {
    text-shadow: 5px 3px var(--secondary-color);
  }
`;

export const Logo = () => {
  return (
    <Layout>
      <Link exact to='/'>
        <LogoTopText>ML</LogoTopText>
        <LogoBottomText>developer</LogoBottomText>
      </Link>
    </Layout>
  );
};
