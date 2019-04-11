import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const cookieName = 'EU_COOKIE_MLOIDI';

const BannerArea = styled.div`
  display: ${props => (props.showBanner ? 'block' : 'none')};
  border: 0.1rem solid #ecd018;
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 75%;
  overflow: auto;
  background-color: #424943;
  width: 49%;
  height: 24%;
  .link {
    color: #ecd018;
    text-decoration: underline;
    cursor: pointer;
    &:hover,
    &:focus {
      font-weight: 900;
      outline: none;
      background-color: #ecd018;
      color: #424943;
    }
  }
  @media all and (max-width: 900px) {
    left: 1%;
    width: 98%;
    top: 74%;
    height: 25%;
  }
`;

const BannerTitle = styled.div`
  font-weight: 900;
  padding: 1rem 1rem 0 1rem;
  color: #ecd018;
`;

const BannerText = styled.div`
  padding: 1rem 1rem 0 1rem;
  color: white;
`;

const BannerButtonsArea = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 3rem;
  padding: 1rem;
`;

const BannerAccept = styled.button`
  font-family: source-code-pro;
  font-size: 1.5rem;
  border: 0.2rem solid white;
  background-color: transparent;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 900;
  transition: border 0.5s, color 0.5s;
  &:hover,
  &:focus {
    border: 0.2rem solid #ecd018;
    color: #ecd018;
  }
`;

const BannerRefuse = styled.button`
  font-family: source-code-pro;
  font-size: 1.5rem;
  border: 0.2rem solid white;
  background-color: transparent;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 900;
  transition: border 0.5s, color 0.5s;
  &:hover,
  &:focus {
    border: 0.2rem solid #ecd018;
    color: #ecd018;
  }
`;

export default class Banner extends Component {
  state = {
    showBanner: true
  };

  componentDidMount() {
    const cookies = this.getCookie(cookieName);
    console.log(cookies);
    this.setState({
      showBanner: !cookies
    });
  }

  getCookie = cname => {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  refuseCookies = () => {
    document.cookie = cookieName + '=false';
    this.closeBanner();
  };

  acceptCookies = () => {
    let now = new Date();
    const time = now.getTime();
    const expireTime = time + 10000000 * 36000;
    now.setTime(expireTime);
    document.cookie =
      cookieName + '=true;expires=' + now.toGMTString() + ';path=/';
    this.closeBanner();
  };

  closeBanner = () => {
    this.setState({
      showBanner: false
    });
  };

  render() {
    return (
      <BannerArea showBanner={this.state.showBanner}>
        <BannerTitle>What do I use cookies for?</BannerTitle>
        <BannerText>
          I use own and third-party cookies, analytics and advertising to create
          profiles based on user navigation.{'  '}
          <Link className="link" exact to={'/cookies'}>
            More info
          </Link>
        </BannerText>
        <BannerButtonsArea>
          <BannerAccept onClick={this.acceptCookies}>Accept</BannerAccept>
          <BannerRefuse onClick={this.refuseCookies}>Refuse</BannerRefuse>
        </BannerButtonsArea>
      </BannerArea>
    );
  }
}
