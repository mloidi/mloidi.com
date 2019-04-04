import React, { Component } from 'react';

import { OfflineService } from '../Service/resume.service';
import {
  SectionTitle,
  SectionSubtitle,
  SectionContent,
  PageDiv,
  job
} from './Style/Style';
import Job from './Common/Job';

export default class WorkExperience extends Component {
  state = {
    items: {}
  };

  componentDidMount() {
    this.setState({
      items: OfflineService.getItemsByType(job)
    });
  }

  render() {
    return (
      <React.Fragment>
        <PageDiv id="timeline">
          <SectionTitle>Work experience</SectionTitle>
          <SectionSubtitle />
          <SectionContent>
            {Object.keys(this.state.items).map(key => (
              <Job key={key} item={this.state.items[key]} />
            ))}
          </SectionContent>
        </PageDiv>
      </React.Fragment>
    );
  }
}
