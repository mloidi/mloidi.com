import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

import { ResumeService } from '../Service/resume.service';
import { Header, Styles, Detail, Social } from './Styles/Styles';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {}
    };
  }

  componentDidMount() {
    this.setState({
      about: ResumeService.getAbout()
    });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>About me | Mikel Loidi | Web Developer</title>
        </Helmet>
        <Styles>
          {Object.keys(this.state.about).map(key => (
            <div key={key}>
              <Header>
                <div className="textTitle">{this.state.about[key].name}</div>
              </Header>
              <Detail>
                <div className="textLeft aboutDetail">
                  <p>{this.state.about[key].profile}</p>
                </div>
                <div />
                <div className="textTitle">Areas of Expertise</div>
                <div />
                <div className="textLeft aboutDetail">
                  {this.state.about[key].areas &&
                    this.state.about[key].areas.map(areas => (
                      <p key={areas}>
                        <FontAwesomeIcon className="icon" icon={faCaretRight} />{' '}
                        {areas}
                      </p>
                    ))}
                </div>
              </Detail>
              <Social>
                <div className="socialHeader">Contact with me:</div>
                <div className="socialBody">
                  {this.state.about[key].github && (
                    <a
                      className="aboutLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={this.state.about[key].github}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                  {this.state.about[key].linkedin && (
                    <a
                      className="aboutLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={this.state.about[key].linkedin}
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  )}
                  {this.state.about[key].twitter && (
                    <a
                      className="aboutLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={this.state.about[key].twitter}
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  )}
                  {this.state.about[key].mail && (
                    <a
                      className="aboutLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={this.state.about[key].mail}
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  )}
                </div>
              </Social>
            </div>
          ))}
        </Styles>
      </div>
    );
  }
}

export default About;
