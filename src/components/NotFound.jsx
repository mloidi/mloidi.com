import React from 'react';
import { Helmet } from 'react-helmet';


const NotFound = () => {
  return (
    <div className="mt-8 mx-4 lg:mx-24 max-h-full">
      <Helmet>
        <title>Where are you going? | Mikel Loidi | Web Developer</title>
      </Helmet>
      <div className="text-4xl mb-4">Sorry, page not found.</div>
    </div>
  );
};

export default NotFound;
