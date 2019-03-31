import React, { Component } from 'react';

import { OfflineService } from '../../Service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  study
} from '../Style/Style';
import Study from '../Common/Study';

export default class Education extends Component {
  state = {
    items: {}
  };

  componentDidMount() {
    this.setState({
      items: OfflineService.getItemsByType(study)
    });
  }

  render() {
    return (
      <React.Fragment>
        <PageDiv id="timeline">
          <SectionTitle>Education</SectionTitle>
          <SectionSubtitle />
          <SectionContent>
            {Object.keys(this.state.items).map(key => (
              <Study key={key} item={this.state.items[key]} />
            ))}
          </SectionContent>
        </PageDiv>
      </React.Fragment>
    );
  }
}
