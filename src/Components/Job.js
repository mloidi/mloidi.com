import React, { Component } from 'react';
import moment from 'moment';

import {
  JobStyles,
  JobsHeader,
  JobsSubHeader,
  JobsDetail,
  SkillsDetail
} from './Styles/JobStyles';

class Job extends Component {
  render() {
    const { job } = this.props;
    return (
      <React.Fragment>
        <JobStyles>
          <JobsHeader>
            <div className="text textLeft">{job.position}</div>
            <div className="text textRigth">
              {moment(job.fromDate).format('MMM YYYY')} to{' '}
              {job.untilDate
                ? moment(job.untilDate).format('MMM YYYY')
                : 'Current'}
            </div>
          </JobsHeader>
          <JobsSubHeader>
            {job.companyImage ? (
              <div className="imgLogo textLeft">
                {job.companyURL ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={job.companyURL}
                  >
                    <img src={job.companyImage} alt={job.company} />
                  </a>
                ) : (
                  <img src={job.companyImage} alt={job.company} />
                )}
              </div>
            ) : (
              <div className="text textLeft">{job.company}</div>
            )}
            <div className="text textRigth">{job.location}</div>
          </JobsSubHeader>
          <JobsDetail>
            <div>
              {job.description.map(description => (
                <div className="text" key={description}>
                  {description}
                </div>
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
      </React.Fragment>
    );
  }
}

export default Job;
