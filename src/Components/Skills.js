import React, { Component } from 'react';

import { ResumeService } from '../Service/resume.service';
import { SectionTitle, SectionContent, PageDiv } from './Common';
import SkillLevel from './Elements/SkillLevel';

export default class Skills extends Component {
  state = {
    about: {}
  };

  componentDidMount() {
    this.getSkills();
  }

  getSkills = async () => {
    await ResumeService.getAbout()
      .then(about => {
        this.setState({
          about
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <PageDiv id="skills">
          <SectionTitle>Skills</SectionTitle>
          {Object.keys(this.state.about).map(key => (
            <SectionContent key={key}>
              {this.state.about[key].skills &&
                this.state.about[key].skills.map(skill => (
                  <div key={skill.id}>
                    <SkillLevel skill={skill} />
                  </div>
                ))}
            </SectionContent>
          ))}
        </PageDiv>
      </React.Fragment>
    );
  }
}
