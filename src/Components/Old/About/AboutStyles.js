import styled from 'styled-components';

export const PageHeader = styled.div`
  display: grid;
  grid-template-columns: 38% auto;
  margin: 20px 10% 20px 10%;
  padding: 20px;
  background-color: white;
`;

export const Styles = styled.div`
  background: white;
  border-left: 10px solid green;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px 10% 20px 10%;
  padding: 20px;
  @media (max-width: 768px) {
    margin: 20px 10px 20px 10px;
  }
  a {
    color: black;
    text-decoration: none;
    border-bottom: 2px solid #ecd018;
  }
  .coursesLink {
    border-bottom: 2px solid #ecd018;
  }
  .coursesDetail {
    /* margin: 0 0 0px 0; */
  }
  .imgLogo {
    object-fit: cover;
    padding: 0 3rem;
    img {
      max-width: 50%;
      height: auto;
    }
    @media (max-width: 768px) {
    }
  }
  .text {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1rem;
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
  }
  .textDescription {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1rem;
    grid-template-columns: 1% auto;
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
    p {
      margin: 0 0 0 5px;
    }
    .icon {
      margin: 7px 0 0 0;
    }
  }
  .textDescriptionDetails {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1rem;
    display: grid;
    grid-template-columns: 1% auto;
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
    p {
      margin: 0 0 0 5px;
    }
    .icon {
      margin: 7px 0 0 0;
    }
  }
  .skill {
    margin: 5px;
  }
  .textRigth {
    text-align: end;
    @media (max-width: 700px) {
      text-align: start;
    }
  }
  .textLeft {
    text-align: start;
    color: grey;
  }
  .textCenter {
    text-align: center;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
  font-weight: 900;
  margin-bottom: 10px;
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

export const Skill = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
  @media (max-width: 1100px) {
    grid-template-columns: auto;
  }
  label {
    padding: 1rem;
  }
`;
