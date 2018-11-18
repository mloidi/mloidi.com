import styled from 'styled-components';

export const JobStyles = styled.div`
  background: white;
  box-shadow: 0px 12px 31px 0px rgba(0, 0, 0, 0.62);
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px 80px 20px 80px;
  padding: 20px;
  @media (max-width: 768px) {
    margin: 20px 10px 20px 10px;
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
    font-size: 1.5rem;
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
    @media (max-width: 768px) {
      font-size: 0.5rem;
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
  }
  .textCenter {
    text-align: center;
  }
`;

export const JobsHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

export const JobsSubHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0px 0 30px 0;
  padding: 0px 0 20px 0;
  border-bottom: 1px solid;
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

export const JobsDetail = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  margin: 0;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const SkillsDetail = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 0;
  img {
    max-width: 40%;
    height: auto;
  }
  @media (max-width: 768px) {
    padding: 0 3rem;
    grid-template-columns: auto auto auto auto auto;
    img {
      max-width: 40%;
      height: auto;
    }
  }
  @media (max-width: 700px) {
    padding: 0 3rem;
    grid-template-columns: auto auto;
    img {
      max-width: 50%;
      height: auto;
    }
  }
`;
