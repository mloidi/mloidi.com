import React, { Component } from 'react';

import { OfflineService } from './service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  project
} from './style2/Style';
import Project from './common/Project';

export default class Projects extends Component {
  state = {
    items: {}
  };

  componentDidMount() {
    this.setState({
      items: OfflineService.getItemsByType(project)
    });
  }
  render() {
    return (
      <React.Fragment>
        <PageDiv id="projects">
          <SectionTitle>Projects</SectionTitle>
          <SectionSubtitle>
            Here you can found some of the projects I have recently worked on.
          </SectionSubtitle>
          <SectionContent>
            {Object.keys(this.state.items).map(key => (
              <Project key={key} item={this.state.items[key]} />
            ))}
          </SectionContent>
        </PageDiv>
      </React.Fragment>
    );
  }
}
