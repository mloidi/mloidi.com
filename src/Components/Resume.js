import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// My components
import { ResumeService } from '../Service/resume.service';
import Job from './Job';


class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: {}
    };
  }

  componentDidMount() {
    this.setState({
      resume: ResumeService.getResume()
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Resume | Mikel Loidi | Web Developer</title>
        </Helmet>
          {Object.keys(this.state.resume).map(key => (
            <Job key={key} job={this.state.resume[key]} />
          ))}
      </div>
    );
  }
}

export default Resume;
