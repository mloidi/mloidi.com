import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { ResumeService } from '../Service/resume.service';
import { SectionTitle, SectionContent, PageDiv } from './Common';

export default class About extends Component {
  state = {
    about: {}
  };

  componentDidMount() {
    this.getAbout();
  }

  getAbout = async () => {
    await ResumeService.getAbout()
      .then(about => {
        this.setState({
          about
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <PageDiv id="about">
          <SectionTitle>About</SectionTitle>
          {Object.keys(this.state.about).map(key => (
            <SectionContent key={key}>
              <h2>{this.state.about[key].name}</h2>
              <h4>Full-stack web engineer</h4>
              <p>{this.state.about[key].profile}</p>
              <h3>Areas of Expertise</h3>
              <React.Fragment>
                {this.state.about[key].areas &&
                  this.state.about[key].areas.map(areas => (
                    <p key={areas}>
                      <FontAwesomeIcon className="icon" icon={faCaretRight} />{' '}
                      {areas}
                    </p>
                  ))}
              </React.Fragment>
            </SectionContent>
          ))}
        </PageDiv>
      </React.Fragment>
    );
  }
}
