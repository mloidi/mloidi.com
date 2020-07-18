import styled, { keyframes } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const moveRightLeft = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

export const Icon = styled.div`
  align-self: start;
  padding-top: 0.2rem;
`;

export const ToolTip = styled.div`
  position: relative;
  display: inline-block;

  .tooltiptext {
    visibility: hidden;
    background-color: white;
    border: 0.1px solid black;
    color: ${(props) => props.color};
    text-align: center;
    padding: 5px 10px;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    font-size: 0.8rem;
  }

  :hover .tooltiptext {
    visibility: visible;
  }
`;

export const MenuNav = styled.div`
  position: sticky;
  top: 0;
  font-family: 'Cutive Mono', monospace;
  display: none;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  align-content: center;
  background-color: white;
  @media ${device.tablet} {
    display: grid;
  }
`;

export const MenuNavSmall = styled.div`
  position: sticky;
  top: 0;
  font-family: 'Cutive Mono', monospace;
  padding: 0.5rem 2rem;
  align-content: center;
  background-color: white;
  @media ${device.tablet} {
    display: none;
  }
`;

export const MenuHeaderSmall = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

export const MenuShowButton = styled.button`
  font-size: 2rem;
  color: ${(props) => props.color};
  border: none;
  text-decoration: none;
  outline: none;
  &:active {
    outline: none;
  }
  &:focus{
    outline:none;
  }
`;

export const MenuLinksSamll = styled.div`
  position: absolute;
  align-content: center;
  background-color: white;
  right: 0;
  width: 250px;
  padding: 20px;
  z-index: 99;
`;

export const MenuLinks = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 40px;
  align-content: center;
`;

const activeClassName = 'nav-item-active';
export const MenuLink = styled(Link).attrs({
  activeClassName,
})`
  display: inline-block;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  &.nav-item-active::before {
    margin-top: 0;
    width: 20px;
    height: 20px;
  }
  ::before {
    content: '';
    width: 10px;
    height: 10px;
    margin-left: -10px;
    margin-top: 5px;
    background-color: ${(props) => props.color};
    pointer-events: none;
    position: absolute;
    z-index: -1;
  }
  :hover::before {
    margin-top: 0;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    transition: transform 1s;
  }
`;

export const MenuSocials = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 10px;
  align-content: center;
`;

export const MenuSocial = styled.a`
  font-size: 1.4rem;
  :hover {
    color: ${(props) => props.color};
  }
`;

export const AboutParagraph = styled.p`
  margin: 20px 0;
  ::before {
    content: '';
    width: 10px;
    height: 10px;
    margin-left: -10px;
    margin-top: 5px;
    background-color: ${(props) => props.color};
    pointer-events: none;
    position: absolute;
    z-index: -1;
  }
`;

export const Profile = styled.div`
  /* margin-left: 30px; */
`;

export const ProfileList = styled.div`
  font-size: 0.9rem;
  display: grid;
  grid-template-rows: auto;
  justify-content: start;
`;

export const AboutContainer = styled.div`
  padding: 10px 40px;
  font-family: 'Cutive Mono', monospace;

  @media ${device.tablet} {
    padding: 10px 200px;
  }
`;

export const Container = styled.div`
  padding: 10px 40px;
  font-family: 'Cutive Mono', monospace;
  display: grid;
    grid-template-columns: 100%;
  @media ${device.tablet} {
    padding: 10px 200px;
    grid-template-columns: 80% 20%;
  }

  /* animation: ${moveRightLeft} 1s ease-in-out; */
`;

export const SectionTitle = styled.div`
  cursor: default;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const SkillsSection = styled.div`
  cursor: default;
  @media ${device.tablet} {
    position: fixed;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-gap: 5px;
`;

export const Skill = styled.div`
  font-size: 2rem;
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  align-content: center;
  justify-content: start;
`;

export const SkillScore = styled.div`
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(10, 20px);
  border: 1px solid ${(props) => props.color};
  grid-gap: 1px;
`;

export const Score = styled.div`
  background-color: ${(props) => props.color};
  color: ${(props) => props.color};
  width: 19px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 50px;
`;

export const Card = styled.div`
  cursor: default;
`;

export const CardTitle = styled.div`
  display: inline-block;
  background-color: ${(props) => props.color};
  padding: 5px 10px;
  margin-bottom: 5px;
  font-size: 1.7rem;
`;

export const CardTitleLink = styled.a`
  cursor: pointer;
  :hover {
    box-shadow: 0px 2px black;
  }
`;
export const CardTitleNoLink = styled.div``;

export const CardLocation = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  align-content: center;
`;

export const CardItem = styled.div`
  padding: 10px 10px 10px 30px;
`;

export const CardItemTitle = styled.div`
  display: inline-grid;
  grid-template-columns: auto;
  /* grid-gap: 10px; */
  align-items: start;
  margin-bottom: 10px;
  ::before {
    content: '';
    width: 10px;
    height: 10px;
    margin-left: -10px;
    margin-top: 5px;
    background-color: ${(props) => props.color};
    pointer-events: none;
    position: absolute;
    z-index: -1;
  }
  @media ${device.tablet} {
    display: inline-grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    align-items: end;
  }
`;

export const CardItemRoleName = styled.div`
  font-size: 1.4rem;
`;

export const CardItemRoleDates = styled.div`
  color: darkgrey;
  font-size: 0.8rem;
  @media ${device.tablet} {
    font-size: 1rem;
    ::before {
      content: '';
      width: 1px;
      height: 30px;
      margin-left: -5px;
      margin-top: -5px;
      background-color: darkgrey;
      pointer-events: none;
      position: absolute;
      z-index: -1;
      transform: skew(-10deg);
    }
  }
`;

export const Description = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5rem;
  justify-content: start;
`;

export const Text = styled.div`
  align-self: center;
  font-size: 0.9rem;
`;

export const Img = styled.img`
  border: 1px solid ${(props) => props.color};
  padding: 1px;
`;
