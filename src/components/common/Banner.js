import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { DataContext } from '../../globalState';

const cookieName = 'EU_COOKIE_MLOIDI';

const Content = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: sticky;
  bottom: 0;
  background-color: ${(props) => props.color};
  width: 100%;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;

const Line = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`;

const Button = styled.button`
  border: 2px solid black;
  padding: 5px 10px;
`;

const Link = styled(NavLink)`
  border-bottom: 1px solid black;
`;

export const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { selectedColor } = useContext(DataContext);

  useEffect(() => {
    const getCookie = (cname) => {
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

    const cookies = getCookie(cookieName);
    setShowBanner(!cookies);
  }, []);

  const refuseCookies = () => {
    document.cookie = cookieName + '=false';
    closeBanner();
  };

  const acceptCookies = () => {
    let now = new Date();
    const time = now.getTime();
    const expireTime = time + 10000000 * 36000;
    now.setTime(expireTime);
    document.cookie =
      cookieName + '=true;expires=' + now.toGMTString() + ';path=/';
    closeBanner();
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <Content color={selectedColor} show={showBanner}>
      <Title>What do I use cookies for?</Title>
      <Line>
        <div>
          I use own and third-party cookies, analytics and advertising to create
          profiles based on user navigation.{'  '}
          <Link exact to={'/cookies'}>
            More info
          </Link>
        </div>
        <Buttons>
          <Button
            onClick={() => {
              acceptCookies();
            }}
          >
            Accept
          </Button>
          <Button
            onClick={() => {
              refuseCookies();
            }}
          >
            Refuse
          </Button>
        </Buttons>
      </Line>
    </Content>
  );
};
