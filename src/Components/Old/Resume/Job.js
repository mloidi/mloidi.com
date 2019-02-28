import React, { Component } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { Styles, Header, SubHeader, Detail } from '../Styles/Styles';

class Job extends Component {
  skillSelected = skill => {
    let className = '';
    this.props.skills.map(skillFilter => {
      if (skillFilter.status === 'selected' && skillFilter.id === skill.id) {
        className = 'skillSelected';
      }
      return true;
    });
    return className;
  };

  render() {
    const { job } = this.props;
    return (
      <React.Fragment>
        <Styles>
          <Header>
            <div className="text textTitle">{job.position}</div>
            <div className="text textRigth">
              {moment(job.fromDate).format('MMM YYYY')} to{' '}
              {job.untilDate
                ? moment(job.untilDate).format('MMM YYYY')
                : 'Current'}
            </div>
          </Header>
          <SubHeader>
            <div className="imgLogo textLeft">
              {job.companyURL ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={job.companyURL}
                >
                  {job.company}
                </a>
              ) : (
                <p>{job.company}</p>
              )}
            </div>
            <div className="text textRigth">{job.location}</div>
          </SubHeader>
          <Detail>
            {/* <SkillsDetail>
              {job.skills.map(skill => (
                <div key={skill.id}>
                  <img className={this.skillSelected(skill)} src={skill.url} alt={skill.id} />
                </div>
              ))}
            </SkillsDetail> */}
            <div>
              {job.description.map(description => (
                <div className="textDescriptionDetails" key={description}>
                  <FontAwesomeIcon className="icon" icon={faCaretRight} />{' '}
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </Detail>
        </Styles>
      </React.Fragment>
    );
  }
}

export default Job;
