import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { ResumeService } from '../../Service/resume.service';
import { PageHeader, Styles, Detail, Skill } from './AboutStyles';
import SkillLevel from '../Elements/SkillLevel';
import TimeLine from '../TimeLine/TimeLine';

class About extends Component {
  state = {
    about: {},
    items: {}
  };

  componentDidMount() {
    this.setState({
      about: ResumeService.getAbout(),
      items: ResumeService.getItems()
    });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>About me | Mikel Loidi | Web Developer</title>
        </Helmet>
        <PageHeader>
          <h2>About me</h2>
        </PageHeader>
        {Object.keys(this.state.about).map(key => (
          <div key={key}>
            <Styles>
              <h2>{this.state.about[key].name}</h2>
              <h4>Full-stack web engineer</h4>
              <Detail>
                <div className="textLeft">
                  <p>{this.state.about[key].profile}</p>
                </div>
                <h3>Areas of Expertise</h3>
                <div className="textLeft">
                  {this.state.about[key].areas &&
                    this.state.about[key].areas.map(areas => (
                      <p key={areas}>
                        <FontAwesomeIcon className="icon" icon={faCaretRight} />{' '}
                        {areas}
                      </p>
                    ))}
                </div>
              </Detail>
            </Styles>
            <Styles>
              <h2>Work experience & Education</h2>
              <h4>My previous jobs and my qualifications.</h4>
              <TimeLine items={this.state.items} />
            </Styles>
            <Styles>
              <h2>Skills</h2>
              <div />
              <Skill>
                {this.state.about[key].skills &&
                  this.state.about[key].skills.map(skill => (
                    <div key={skill.id}>
                      <SkillLevel skill={skill} />
                    </div>
                  ))}
              </Skill>
            </Styles>
          </div>
        ))}
      </div>
    );
  }
}

export default About;
