import React, { Component } from 'react';

import { OfflineService } from '../../Service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  SkillTable
} from '../Style/Style';
import Icon from '../Common/Icon';
import Skill from '../Common/Skill';

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
      <React.Fragment>
        <PageDiv id="about">
          <SectionTitle>About me</SectionTitle>
          <SectionSubtitle>Some of the technologies I know.</SectionSubtitle>
          <SectionContent>
            <SkillTable>
              {this.state.skills.map(skill => (
                <div key={skill.id}>
                  <Skill skill={skill} />
                </div>
              ))}
            </SkillTable>
          </SectionContent>
          <SectionSubtitle />
          <SectionContent>
            {this.state.about.description &&
              this.state.about.description.map(areas => (
                <p key={areas}>{areas}</p>
              ))}

            {/* <h2>{this.state.about.name}</h2>
            <h4>Full-stack web developer</h4>
            <p>{this.state.about.profile}</p>
            <h3>Areas of Expertise</h3>
            <React.Fragment>
              {this.state.about.areas &&
                this.state.about.areas.map(areas => (
                  <p key={areas}>
                    <Icon icon="faCaretRight" /> {areas}
                  </p>
                ))}
            </React.Fragment> */}
          </SectionContent>
        </PageDiv>
      </React.Fragment>
    );
  }
}
