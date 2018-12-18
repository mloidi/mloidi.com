import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// My components
import { ResumeService } from '../../Service/resume.service';
import { CommonService } from '../../Service/common.service';
import Job from './Job';
import { PageHeader } from '../About/AboutStyles';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {},
      resume: {}
    };
  }

  componentDidMount() {
    this.setState({
      skills: CommonService.getSkills(),
      resume: ResumeService.getWorksBySkill(CommonService.getSkills())
    });
  }

  filterBySkill = skill => {
    if (skill.status === 'selected') {
      skill.status = 'noSelected';
    } else {
      skill.status = 'selected';
    }
    this.setState({
      resume: ResumeService.getWorksBySkill(this.state.skills)
    });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Resume | Mikel Loidi | Web Developer</title>
        </Helmet>
        <PageHeader>
          <h2>Work experience</h2>
        </PageHeader>
        {/* <Styles>
          <div className="skillBar">
            {Object.keys(this.state.skills).map(key => (
              <SkillsCheckbox
                key={key}
                skill={this.state.skills[key]}
                filterBySkill={() => this.filterBySkill(this.state.skills[key])}
              />
            ))}
          </div>
        </Styles> */}
        {Object.keys(this.state.resume).map(key => (
          <Job
            key={key}
            job={this.state.resume[key]}
            skills={this.state.skills}
          />
        ))}
      </div>
    );
  }
}

export default Resume;
