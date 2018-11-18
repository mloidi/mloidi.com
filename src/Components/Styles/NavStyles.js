import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  justify-self: end;
  justify-content: center;
  font-size: 1.5rem;
  list-style-type: none;
  a,
  button {
    color: black;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1em;
    font-weight: 900;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 10px;
      padding: 0 10px;
      font-size: 0.5rem;
    }
    &:before {
      content: '';
      width: 2px;
      background: #e1e1e1;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
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

export default NavStyles;
