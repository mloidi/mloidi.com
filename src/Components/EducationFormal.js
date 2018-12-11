import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight,
  faAngleDoubleDown,
  faAngleDoubleUp
} from '@fortawesome/free-solid-svg-icons';

import { Styles, Header, SubHeader, Detail } from './Styles/Styles';

const hidden = 'hidden';
const visible = 'visible';
class EducationFormal extends Component {
  state = {
    detailVisible: hidden
  };

  showDetail = () => {
    if (this.state.detailVisible === visible) {
      this.setState({ detailVisible: hidden });
    } else {
      this.setState({ detailVisible: visible });
    }
  };

  render() {
    const { education } = this.props;
    return (
      <React.Fragment>
        <Styles>
          <Header>
            <div className="textLeft textTitle">
              {education.titleURL ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={education.titleURL}
                >
                  {education.title}
                </a>
              ) : (
                education.title
              )}
            </div>
            <div className="textRigth">{education.finishDate}</div>
          </Header>
          <SubHeader>
            {education.centerImage ? (
              <div className="imgLogo textLeft">
                {education.url ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={education.url}
                  >
                    <img src={education.centerImage} alt={education.center} />
                  </a>
                ) : (
                  <img src={education.centerImage} alt={education.center} />
                )}
              </div>
            ) : (
              <div className="text textLeft">{education.center}</div>
            )}
            <div className="textRigth">{education.location}</div>
          </SubHeader>
          <button
            className="showDetailButton"
            onClick={() => this.showDetail()}
          >
            {this.state.detailVisible === hidden && (
              <FontAwesomeIcon className="icon" icon={faAngleDoubleDown} />
            )}
            {this.state.detailVisible === visible && (
              <FontAwesomeIcon className="icon" icon={faAngleDoubleUp} />
            )}
          </button>
          <Detail className={this.state.detailVisible}>
            <div>
              {education.description &&
                education.description.map(description => (
                  <div className="textDescription" key={description}>
                    {description}
                  </div>
                ))}
              {education.descriptionDetails &&
                education.descriptionDetails.map(descriptionDetails => (
                  <div
                    className="textDescriptionDetails"
                    key={descriptionDetails}
                  >
                    <FontAwesomeIcon className="icon" icon={faCaretRight} />{' '}
                    {descriptionDetails}
                  </div>
                ))}
            </div>
          </Detail>
        </Styles>
      </React.Fragment>
    );
  }
}

export default EducationFormal;
