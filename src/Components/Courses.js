import React, { Component } from 'react';

import { ResumeService } from '../Service/resume.service';
import { SectionTitle, SectionContent, PageDiv, course } from './Common';
import Item from './Item/ItemCourse';

export default class Courses extends Component {
  state = {
    items: {}
  };

  componentDidMount() {
    this.getItems(course)
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
        <PageDiv id="courses">
          <SectionTitle>Courses</SectionTitle>
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
