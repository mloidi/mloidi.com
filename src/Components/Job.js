import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import JobStyles from './Styles/JobStyles';

const JobsSubHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 auto;
`;

const JobsDetail = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  margin: 0 auto;
`;

const SkillsDetail = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 0 auto;
`;

class Job extends Component {
  render() {
    const { job } = this.props;
    return (
      <JobStyles>
        <h2>{job.position}</h2>
        <JobsSubHeader>
          <img src={job.companyImage} alt={job.company} />
          <p>
            {moment(job.fromDate).format('MMM Do YY')} -{' '}
            {job.untilDate
              ? moment(job.untilDate).format('MMM Do YY')
              : 'Present'}
          </p>
        </JobsSubHeader>
        <JobsDetail>
          <div>
            {job.description.map(description => (
              <p>{description}</p>
            ))}
          </div>
          <SkillsDetail>
            {job.skills.map(skill => (
              <div className="skill" key={skill}>
                <img src={skill} alt="a" />
              </div>
            ))}
          </SkillsDetail>
        </JobsDetail>
      </JobStyles>
    );
  }
}

export default Job;
