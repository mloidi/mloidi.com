import styled from 'styled-components';

export const Styles = styled.div`
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
`;