import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Page not found | Mikel Loidi | Web Developer</title>
        </Helmet>
        Not Found
      </div>
    );
  }
}

export default NotFound;
