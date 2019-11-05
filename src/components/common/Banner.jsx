import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
const cookieName = 'EU_COOKIE_MLOIDI';

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const getCookie = cname => {
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

  const getStyle = () => {
    if (showBanner) {
      return 'block sticky bottom-0 right-0 min-w-full bg-black text-gray-100 border-gray-900 border-2 px-2 py-1 opacity-100';
    } else {
      return 'hidden';
    }
  };
  return (
    <div className={getStyle()}>
      <div className="text-xl">What do I use cookies for?</div>
      <div className="flex flex-wrap justify-between">
        <div className="text-sm text-gray-200">
          I use own and third-party cookies, analytics and advertising to create
          profiles based on user navigation.{'  '}
          <Link
            className="border-b rounded hover:border-black"
            exact
            to={'/cookies'}
          >
            More info
          </Link>
        </div>
        <div className="mt-2 lg:mt-0">
          <button
            className="border rounded mx-2 px-1 hover:bg-gray-100 hover:text-black hover:opacity-75"
            onClick={() => {
              acceptCookies();
            }}
          >
            Accept
          </button>
          <button
            className="border rounded mx-2 px-1 hover:bg-gray-100 hover:text-black hover:opacity-75"
            onClick={() => {
              refuseCookies();
            }}
          >
            Refuse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
