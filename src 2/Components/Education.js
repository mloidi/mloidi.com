import React, { Component } from 'react';

import { ResumeService } from '../Service/resume.service';
import EducationFormal from './EducationFormal';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: {}
    };
  }

  componentDidMount() {
    this.setState({
      education: ResumeService.getEducations()
    });
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.education).map(key => (
          <EducationFormal key={key} education={this.state.education[key]} />
        ))}
      </div>
    );
  }
}

export default Education;
