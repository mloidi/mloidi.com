import React, { Component } from 'react';

import { OfflineService } from '../Service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  course
} from './Style/Style';
import Course from './Common/Course';

export default class Courses extends Component {
  state = {
    items: {}
  };

  componentDidMount() {
    this.setState({
      items: OfflineService.getItemsByType(course)
    });
  }

  render() {
    return (
      <React.Fragment>
        <PageDiv id="courses">
          <SectionTitle>Courses</SectionTitle>
          <SectionSubtitle />
          <SectionContent>
            {Object.keys(this.state.items).map(key => (
              <Course key={key} item={this.state.items[key]} />
            ))}
          </SectionContent>
        </PageDiv>
      </React.Fragment>
    );
  }
}
