import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { ResumeService } from '../../Service/resume.service';
import EducationFormal from './EducationFormal';

export const EducationDiv = styled.div`
  display: grid;
  grid-template-columns: 38% auto;
  margin: 20px 10% 20px 10%;
  padding: 20px;
  background-color: white;
  .select {
    background-color: #00265d;
    margin-bottom: 20px;
  }
  .noSelect {
    margin-bottom: 20px;
  }
  a {
    color: black;
    text-decoration: none;
    border-bottom: 2px solid #ecd018;
  }
`;

export const EducationH = styled.div`
  display: grid;
  grid-template-columns: auto 3%;
`;

export const Detail = styled.div`
  display: grid;
  grid-template-columns: auto;
  background: #e6e6e6;
  padding: 20px;
  position: relative;
  border-left: 10px solid #00265d;
  color: grey;
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 1em;
  margin-bottom: 10px;
  color: black;
`;

export const Text = styled.div`
  margin-bottom: 10px;
  color: black;
`;

const select = 'select';
const noSelect = 'noSelect';

class Education extends Component {
  state = {
    education: {},
    selectedEducation: {},
    description: [],
    descriptionDetails: []
  };

  componentDidMount() {
    const education = ResumeService.getEducations();
    const description = education[0].description;
    const descriptionDetails = education[0].descriptionDetails;
    this.setState({
      education,
      selectedEducation: education[0],
      description,
      descriptionDetails
    });
  }

  selectDetail = education => {
    const description = education.description;
    const descriptionDetails = education.descriptionDetails;
    this.setState({
      selectedEducation: education,
      description,
      descriptionDetails
    });
  };

  showDetail = education => {
    if (education.title === this.state.selectedEducation.title) {
      return select;
    }
    return noSelect;
  };

  render() {
    return (
      <div>
        <EducationDiv>
          <h2>Education</h2>
        </EducationDiv>
        <EducationDiv>
          <div>
            {Object.keys(this.state.education).map(key => (
              <EducationH key={key}>
                <EducationFormal
                  education={this.state.education[key]}
                  selectDetail={this.selectDetail}
                />
                <div className={this.showDetail(this.state.education[key])}>
                  {}
                </div>
              </EducationH>
            ))}
          </div>
          <Detail>
            <Title>
              {this.state.selectedEducation.titleURL ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={this.state.selectedEducation.titleURL}
                >
                  {this.state.selectedEducation.title}
                </a>
              ) : (
                this.state.selectedEducation.title
              )}
            </Title>
            <Text>
              {this.state.selectedEducation.url ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={this.state.selectedEducation.url}
                >
                  {this.state.selectedEducation.center}
                </a>
              ) : (
                this.state.selectedEducation.center
              )}
            </Text>
            <Text>{this.state.selectedEducation.finishDate}</Text>
            <Text>{this.state.selectedEducation.location}</Text>
            {this.state.selectedEducation.description &&
              this.state.selectedEducation.description.map(description => (
                <div className="textDescription" key={description}>
                  {description}
                </div>
              ))}
            {this.state.selectedEducation.descriptionDetails &&
              this.state.selectedEducation.descriptionDetails.map(
                descriptionDetails => (
                  <div
                    className="textDescriptionDetails"
                    key={descriptionDetails}
                  >
                    <FontAwesomeIcon className="icon" icon={faCaretRight} />{' '}
                    {descriptionDetails}
                  </div>
                )
              )}
          </Detail>
        </EducationDiv>
      </div>
    );
  }
}

export default Education;
