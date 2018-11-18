import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { Styles, Header, SubHeader, Detail } from './Styles/Styles';

class EducationFormal extends Component {
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
          <Detail>
            <div>
              {education.description &&
                education.description.map(description => (
                  <div className="textDescription" key={description}>
                    {description}
                  </div>
                ))}
              {education.descriptionDetails &&
                education.descriptionDetails.map(descriptionDetails => (
                <div className="textDescriptionDetails" key={descriptionDetails}>
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
