import React, { Component } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import {
  Styles,
  Header,
  SubHeader,
  Detail
} from './Styles/Styles';

class Job extends Component {

  skillSelected = skill => {
    let className = ''
    this.props.skills.map(skillFilter => {
      if(skillFilter.status === 'selected' && skillFilter.id === skill.id) {
        className = 'skillSelected';
      }
      return true;
    })
    return className;
  };

  render() {
    const { job } = this.props;
    return (
      <React.Fragment>
        <Styles>
          <Header>
            <div className="text textLeft textTitle">{job.position}</div>
            <div className="text textRigth">
              {moment(job.fromDate).format('MMM YYYY')} to{' '}
              {job.untilDate
                ? moment(job.untilDate).format('MMM YYYY')
                : 'Current'}
            </div>
          </Header>
          <SubHeader>
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
