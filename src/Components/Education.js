import React, { Component } from 'react';

import { ResumeService } from '../Service/resume.service';
import { SectionTitle, SectionContent, PageDiv, study } from './Common';
import Item from './Item/ItemStudy';

export default class Education extends Component {
  state = {
    items: {}
  };

  componentDidMount() {
    this.getItems(study)
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
          <SectionTitle>Education</SectionTitle>
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
