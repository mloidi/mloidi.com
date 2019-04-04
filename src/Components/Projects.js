import React, { Component } from 'react';

import { OfflineService } from '../Service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  project
} from './Style/Style';
import Project from './Common/Project';

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
