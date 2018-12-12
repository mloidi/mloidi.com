import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
        {Object.keys(this.state.courses).map(key => (
          <Styles key={key}>
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
                <div>
                  {this.state.courses[key].description &&
                    this.state.courses[key].description.map(description => (
                      <p key={description}>{description}</p>
                    ))}
                  {this.state.courses[key].descriptionDetails &&
                    this.state.courses[key].descriptionDetails.map(
                      descriptionDetails => (
                        <p key={descriptionDetails}>
                          <FontAwesomeIcon
                            className="icon"
                            icon={faCaretRight}
                          />{' '}
                          {descriptionDetails}
                        </p>
                      )
                    )}
                </div>
              </div>
              <p />
              <div className="textLeft coursesDetail">
                <p>
                  My project <FontAwesomeIcon icon={faArrowRight} />{' '}
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
                </p>
              </div>
            </Detail>
          </Styles>
        ))}
      </div>
    );
  }
}

export default Courses;
