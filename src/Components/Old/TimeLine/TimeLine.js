import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  // faLaptopCode,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';

const Time = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  &:before {
    left: 50%;
    content: '';
    position: absolute;
    height: 1720px;
    width: 3px;
    background: #ececec;
    margin: 1rem 1rem 1rem 1rem;
  }
`;

const Element = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const BoxJob = styled.div`
  border-top: 0.5rem solid #005d04;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background-color: #ececec;
  padding: 0 0 0.5rem 1rem;
  margin: 0 0 1rem 2rem;
  &:hover {
    background-color: lightgrey;
    /* cursor: pointer; */
  }
  a:hover {
    color: white;
  }
`;

const BoxStudy = styled.div`
  border-top: 0.5rem solid #00265d;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background-color: #ececec;
  padding: 0 0 0.5rem 1rem;
  margin: 0 0 1rem 2rem;
  &:hover {
    background-color: lightgrey;
    /* cursor: pointer; */
  }
  a:hover {
    color: white;
  }
`;

const IconJob = styled.div`
  color: white;
  border: 1px solid #005d04;
  background-color: #005d04;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  padding: 0.5rem 0.5rem 0 0.5rem;
  margin: 1rem 0 0 2rem;
  height: 2rem;
  width: 2rem;
  text-align: center;
  .icon {
    font-size: 1.5rem;
  }
`;

const IconStudy = styled.div`
  color: white;
  border: 1px solid #00265d;
  background-color: #00265d;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  padding: 0.5rem 0.5rem 0 0.5rem;
  margin: 1rem 0 0 2rem;
  height: 2rem;
  width: 2rem;
  text-align: center;
  .icon {
    font-size: 1.5rem;
  }
`;

const DateLeft = styled.div`
  padding: 1rem 0 1rem 0;
  margin: 3rem 0 1rem 0;
  text-align: right;
  &:before {
    left: 50%;
    content: '';
    position: absolute;
    border: 1rem solid transparent;
    border-right: 1rem solid #ececec;
  }
`;
const DateRight = styled.div`
  padding: 1rem 0 1rem 1rem;
  margin: 3rem 0 1rem 1rem;
  &:before {
    left: 50%;
    content: '';
    position: absolute;
    border: 1rem solid transparent;
    border-left: 1rem solid #ececec;
  }
`;

// const Detail = styled.div`
//   line-height: 2;
//   margin: 0.5rem 0.5rem 0 0.5rem;
//   padding-left: 0.5rem;
//   font-size: 1rem;
//   display: grid;
//   grid-template-columns: 1% auto;
//   p {
//     margin: 0 0 0 1rem;
//   }
//   .icon {
//     margin: 0.5rem 0 0 0;
//   }
// `;

class TimeLine extends Component {
  diffDates = (fromDate, untilDate) => {
    let diff = ' (';
    let years = 0;
    if (untilDate) {
      years = moment(untilDate).diff(fromDate, 'years');
      if (years === 0) {
        return diff + moment(untilDate).diff(fromDate, 'months') + ' months)';
      }
    } else {
      return '';
    }
    diff = diff + years + ' years)';
    return diff;
  };

  dates = (fromDate, untilDate, finishDate) => {
    if (finishDate) return moment(finishDate).format('YYYY');
    let dates = moment(fromDate).format('MMM YYYY');
    if (untilDate) {
      dates = dates + ' - ' + moment(untilDate).format('MMM YYYY');
    } else {
      dates = dates + ' - Present';
    }
    return dates;
  };

  render() {
    return (
      <Time>
        {Object.keys(this.props.items).map(key => (
          <Element key={key}>
            {this.props.items[key].left && (
              <DateLeft>
                {this.dates(
                  this.props.items[key].fromDate,
                  this.props.items[key].untilDate,
                  this.props.items[key].finishDate
                )}
                {this.diffDates(
                  this.props.items[key].fromDate,
                  this.props.items[key].untilDate,
                  this.props.items[key].finishDate
                )}
              </DateLeft>
            )}
            <div>
              {this.props.items[key].type === 'job' && (
                <div>
                  <IconJob>
                    <FontAwesomeIcon className="icon" icon={faBriefcase} />
                  </IconJob>
                  <BoxJob>
                    <h4>{this.props.items[key].title}</h4>
                    {this.props.items[key].placeURL ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={this.props.items[key].placeURL}
                      >
                        {this.props.items[key].place}
                      </a>
                    ) : (
                      <p>{this.props.items[key].place}</p>
                    )}
                  </BoxJob>
                </div>
              )}
              {this.props.items[key].type === 'study' && (
                <div>
                  <IconStudy>
                    <FontAwesomeIcon className="icon" icon={faGraduationCap} />
                  </IconStudy>
                  <BoxStudy>
                    <h4>{this.props.items[key].title}</h4>
                    {this.props.items[key].placeURL ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={this.props.items[key].placeURL}
                      >
                        {this.props.items[key].place}
                      </a>
                    ) : (
                      <p>{this.props.items[key].place}</p>
                    )}
                  </BoxStudy>
                </div>
              )}
            </div>
            {!this.props.items[key].left && (
              <DateRight>
                {this.dates(
                  this.props.items[key].fromDate,
                  this.props.items[key].untilDate,
                  this.props.items[key].finishDate
                )}
                {this.diffDates(
                  this.props.items[key].fromDate,
                  this.props.items[key].untilDate,
                  this.props.items[key].finishDate
                )}
              </DateRight>
            )}
          </Element>
        ))}
      </Time>
    );
  }
}

export default TimeLine;
