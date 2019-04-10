import React, { Component } from 'react';

import { OfflineService } from './service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  course
} from './style/Style';
import Course from './common/Course';

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
