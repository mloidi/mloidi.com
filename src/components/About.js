import React, { Component } from 'react';

import { OfflineService } from './service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  SkillTable
} from './style/Style';
import Skill from './common/Skill';

export default class About extends Component {
  state = {
    about: {},
    skills: []
  };

  componentDidMount() {
    this.setState({
      about: OfflineService.getAbout(),
      skills: OfflineService.getSkills()
    });
  }

  render() {
    return (
      <PageDiv id="about">
        <SectionTitle>About me</SectionTitle>
        <SectionContent>
          {this.state.about.descriptions &&
            this.state.about.descriptions.map(description =>
              description.line === 1 ? (
                <span key={description.line}>
                  <strong>{description.text}</strong>
                </span>
              ) : (
                <React.Fragment key={description.line}>
                  <span>{description.text}</span>
                  <br />
                  <br />
                </React.Fragment>
              )
            )}
        </SectionContent>
        <SectionSubtitle>Skills</SectionSubtitle>
        <SectionContent>
          <SkillTable>
            {this.state.skills.map(skill => (
              <div key={skill.id}>
                <Skill skill={skill} />
              </div>
            ))}
          </SkillTable>
        </SectionContent>
      </PageDiv>
    );
  }
}
