import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import { ResumeService } from '../Service/resume.service';
import { Header, Styles, Detail } from './Styles/Styles';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {}
    };
  }

  componentDidMount() {
    this.setState({
      courses: ResumeService.getCourses()
    });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Projects | Mikel Loidi | Web Developer</title>
        </Helmet>
        <Styles>
          {Object.keys(this.state.courses).map(key => (
            <div>
              <Header>
                <div className="textTitle">
                  {this.state.courses[key].url && (
                    <a
                      className="coursesLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={this.state.courses[key].url}
                    >
                      {this.state.courses[key].title}
                    </a>
                  )}
                </div>
              </Header>
              <Detail>
                <div className="textLeft coursesDetail">
                  <p>
                    {this.state.courses[key].description.map(description => (
                      <p>{description}</p>
                    ))}
                  </p>
                </div>
                <p />
                <div className="textLeft coursesDetail">
                  {this.state.courses[key].appUrl && (
                    <a
                      className="coursesLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={this.state.courses[key].appUrl}
                    >
                      {this.state.courses[key].appUrlText}
                    </a>
                  )}
                </div>
              </Detail>
              <hr />
            </div>
          ))}
        </Styles>
      </div>
    );
  }
}

export default Courses;
