import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { NotFoundStyles } from './Style/Style';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Where are you going? | Mikel Loidi | Web Developer</title>
        </Helmet>
        <NotFoundStyles>
          <img
            src="https://res.cloudinary.com/mloidi/image/upload/v1542555699/mloidi/notFound.jpg"
            alt="not found"
          />
        </NotFoundStyles>
      </div>
    );
  }
}

export default NotFound;
