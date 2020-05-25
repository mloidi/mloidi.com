import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from './Elements';
import { Skills } from './Skills';
import { EmploymentHistory } from './EmploymentHistory';
import { Education } from './Education';

export const Resume = () => {
  return (
    <Container>
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <div>
        <EmploymentHistory />
        <Education />
      </div>
      <div>
        <Skills />
      </div>
    </Container>
  );
};
