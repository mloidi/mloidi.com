import React, { Component } from 'react';

import { Styles, Header, Title } from './EducationStyles';

class EducationFormal extends Component {
  showDetail = education => {
    this.props.selectDetail(education);
  };

  render() {
    const { education } = this.props;
    return (
      <React.Fragment>
        <Styles onClick={() => this.showDetail(education)}>
          <Header>
            <Title>{education.title}</Title>
          </Header>
        </Styles>
      </React.Fragment>
    );
  }
}

export default EducationFormal;
