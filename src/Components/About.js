import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About me | Mikel Loidi | Web Developer</title>
        </Helmet>
        <h1>About</h1>
        <p>
          Advanced developer with 15 years of experience in structuring,
          developing and implementing applications and innovative use of
          technology. Able to complete projects efficiently and satisfy
          customers.
        </p>
        <h2>Areas of Expertise</h2>
        <p>
          • Advanced programming and design skills <br/>
          • Excellent problem solving skills <br/>
          • Strong collaborative skills <br/>
          • Project Management
        </p>
      </div>
    );
  }
}

export default About;
