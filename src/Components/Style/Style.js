import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  @media all and (max-width: 900px) {
    display: grid;
    grid-template-columns: auto;
  }
`;

export const MenuHeader = styled.div`
  border-right: 0.2rem solid #424943;
  background-color: #252527;
  display: grid;
  grid-template-rows: 4rem auto 4rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100%;
  @media all and (max-width: 900px) {
    display: none;
  }
`;

export const MenuHeaderH = styled.div`
  display: none;
  @media all and (max-width: 900px) {
    border-bottom: 0.2rem solid #424943;
    background-color: #252527;
    display: inline-grid;
    grid-template-rows: auto auto auto;
    position: sticky;
  }
`;

export const Logo = styled.div`
  padding-top: 1rem;
  font-size: 2rem;
  color: #ecd018;
  background: #424943;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
`;

export const MenuUl = styled.ul`
  margin: 2rem 0 0 0;
  align-items: left;
  font-size: 1.5rem;
  list-style-type: none;
  .menuA {
    background: none;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    &:hover,
    &:focus {
      font-weight: 900;
      color: #ecd018;
      outline: none;
    }
  }
  .selected {
    font-weight: 900;
    color: #ecd018;
    outline: none;
  }
  @media all and (max-width: 900px) {
    margin: 0;
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto;
  }
`;

export const SocialUl = styled.ul`
  margin: 0;
  align-items: left;
  font-size: 1.5rem;
  list-style-type: none;
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  @media all and (max-width: 900px) {
    display: inline-grid;
    grid-template-columns: auto auto auto auto auto;
  }
`;

export const SocialA = styled.a`
  border: 1px solid #424943;
  background-color: #424943;
  border-radius: 50%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-left: -0.5rem;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  &:hover,
  &:focus {
    font-weight: 900;
    outline: none;
    background-color: #ecd018;
    color: #424943;
  }
  @media all and (max-width: 900px) {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    border-radius: 0;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1rem;
    &:hover,
    &:focus {
      font-weight: 900;
      color: #ecd018;
      background: none;
      outline: none;
    }
  }
`;

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
  @media all and (max-width: 900px) {
    margin: 1rem 2rem 1rem 1rem;
    /* display: none; */
  }
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
  @media all and (max-width: 900px) {
    margin: 0;
    padding: 0 0.2rem 0 0.2rem;
  }
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

export const SkillTable = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1rem;
  @media all and (max-width: 900px) {
    display: grid;
    grid-template-columns: auto;
    grid-column-gap: 1rem;
  }
`;

export const SkillBox = styled.div`
  display: grid;
  grid-template-columns: 5rem auto;
  width: 0.5rem;
  margin: 0.2rem 0 0.5rem 0;
`;

export const SkillIcon = styled.label`
  text-align: end;
  margin-right: 1rem;
  font-size: 2rem;
`;

export const SkillText = styled.label`
  text-align: end;
  font-size: 0.8rem;
`;

export const Technologies = styled.div`
  display: inline-grid;
  align-items: center;
  grid-template-columns: auto 0.5rem auto 0.5rem auto 0.5rem auto 0.5rem auto 0.5rem auto 0.5rem auto 0.5rem auto 0.5rem auto 0.5rem auto 0.5rem auto 0.5rem auto 0.5rem;
  grid-column-gap: 1rem;
  @media all and (max-width: 900px) {
    display: inline-grid;
    grid-template-columns: auto 0.5rem auto 0.5rem;
  }
`;

export const TechnologiesTitle = styled.h4`
  font-size: 1rem;
  margin-top: 0;
`;

export const Technology = styled.div`
  font-size: 0.8rem;
`;
