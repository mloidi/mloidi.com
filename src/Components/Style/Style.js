import styled from 'styled-components';

export const job = 'job';
export const study = 'study';
export const course = 'course';
export const project = 'project';

export const NotFoundStyles = styled.div`
  margin: 1rem 2rem 1rem 16rem;
  padding: 1rem;
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const PageDiv = styled.div`
  margin: 1rem 2rem 1rem 16rem;
  padding: 1rem;
`;

export const SectionTitle = styled.h1`
  margin: 1rem 1rem 1rem 1rem;
  padding: 0 1rem 0 1rem;
`;

export const SectionSubtitle = styled.h2`
  margin: 1rem;
  padding: 1rem;
`;

export const SectionContent = styled.div`
  margin: 0 1rem 1rem 1rem;
  padding: 0 1rem 0 1rem;
`;

export const BoxDiv = styled.div`
  margin-bottom: 3rem;
`;

export const Box = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

export const BoxTitle = styled.div`
  display: grid;
  grid-template-columns: 3rem auto;
`;

export const BoxRole = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  padding: 1rem 0 1rem 0.5rem;
  text-align: left;
`;

export const BoxRoleTitle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const BoxRoleLeft = styled.div`
  text-align: left;
`;

export const BoxRoleLeftC = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 3rem auto;
`;

export const BoxRoleRight = styled.div`
  text-align: right;
`;

export const BoxRoleDetail = styled.div`
  font-size: 0.9rem;
  text-align: left;
  color: #424943;
`;

export const BoxRoleDetailLine = styled.div`
  margin-top: 0.5rem;
`;

export const IconDiv = styled.div`
  color: black;
  padding: 0 0.5rem 0.5rem 0.5rem;
  width: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

export const Title = styled.div`
  color: black;
  padding: 0 0.5rem 0.5rem 0.5rem;
  text-align: left;
  font-size: 1rem;
`;

export const Link = styled.a`
  color: black;
  text-decoration: none;
  border-bottom: 2px solid #ecd018;
`;

export const BoxDetail = styled.div`
  margin: 1rem 0 0 0;
  padding: 0.5rem 1rem 1rem 0;
`;

export const Line = styled.div`
  border-bottom: 0.2rem dotted #424943;
`;

export const Technologies = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
  grid-column-gap: 1rem;
`;

export const SkillTable = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1rem;
`;

export const TechnologiesTitle = styled.h4`
  font-size: 1rem;
  margin-top: 0;
`;

export const Technology = styled.div`
  font-size: 0.8rem;
`;
