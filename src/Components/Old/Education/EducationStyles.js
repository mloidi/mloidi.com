import styled from 'styled-components';

export const Styles = styled.div`
  background: #e6e6e6;
  border-left: 10px solid #00265d;
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: auto 10%;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 20px 10px 20px 10px;
  }
  a {
    color: black;
    text-decoration: none;
    border-bottom: 2px solid #ecd018;
  }
  .showDetailButton {
    border: none;
    outline: none;
    background: white;
    font-size: 1.25rem;
    cursor: pointer;
  }
  .hidden {
    display: none;
  }
  .visible {
    display: inline;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 0;
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

export const Detail = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 0;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 1em;
  color: grey;
  :hover {
    color: black;
  }
`;

export const Text = styled.div`
  margin-bottom: 10px;
`;
