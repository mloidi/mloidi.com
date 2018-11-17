import styled from 'styled-components';

export const JobStyles = styled.div`
  background: white;
  box-shadow: 0px 12px 31px 0px rgba(0, 0, 0, 0.62);
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px 40px 10px 40px;
  padding: 20px;
  .imgLogo {
    object-fit: cover;
    padding: 0 3rem;
  }
  .text {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .skill {
    margin: 5px;
  }
  .textRigth {
    text-align: end;
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
`;

export const JobsSubHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0px 0 30px 0;
  padding: 0px 0 20px 0;
  border-bottom: 1px solid;
`;

export const JobsDetail = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  margin: 0;
`;

export const SkillsDetail = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 0;
`;
