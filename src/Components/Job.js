import React, { Component } from 'react';

import { ResumeService } from '../Service/resume.service';
import { SectionTitle, SectionContent, PageDiv, job } from './Common';
import Item from './Item/ItemJob';

export default class Job extends Component {
  state = {
    items: {}
  };

  componentDidMount() {
    this.getItems(job)
  }

  getItems = async itemType => {
    await ResumeService.getItemsByType(itemType)
      .then(items => {
        this.setState({
          items
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <PageDiv id="timeline">
          <SectionTitle>Work experience</SectionTitle>
          <SectionContent>
            {Object.keys(this.state.items).map(key => (
              <Item key={key} item={this.state.items[key]} />
            ))}
          </SectionContent>
        </PageDiv>
      </React.Fragment>
    );
  }
}
