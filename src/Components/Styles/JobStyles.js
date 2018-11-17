import styled from 'styled-components';

const Job = styled.div`
  background: white;
  box-shadow: 0px 12px 31px 0px rgba(0, 0, 0, 0.62);
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px 40px 10px 40px;
  padding: 20px;
  img {
    object-fit: cover;
    margin: 24px;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .skill {

  }
`;

export default Job;
