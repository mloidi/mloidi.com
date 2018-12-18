import styled from 'styled-components';

export const StyledHeader = styled.header`
  .bar {
    border-bottom: 1px solid darkgreen;
    background-color: white;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

export const NavStyles = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  justify-self: end;
  justify-content: center;
  font-size: 1.5rem;
  list-style-type: none;
  .social {
    border: 1px solid darkgreen;
    background-color: darkgreen;
    border-radius: 50%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    color: white;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.7em;
    font-weight: 900;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 10px;
      padding: 0 10px;
      font-size: 0.5rem;
    }
    &:hover,
    &:focus {
      outline: none;
      background-color: green;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  .link {
    border: 0;
    background: none;
    padding: 1rem 3rem;
    color: black;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.7em;
    font-weight: 900;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 10px;
      padding: 0 10px;
      font-size: 0.5rem;
    }
    &:after {
      height: 2px;
      background: green;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid #e1e1e1;
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  img {
    max-width: 50%;
    height: auto;
  }
  a {
    padding: 0.5rem 1rem;
    background: darkgreen;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;
