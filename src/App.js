import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './Components/Menu';
import About from './Components/About';
import Work from './Components/Work';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Courses from './Components/Courses';
import Projects from './Components/Projects';
import NotFound from './Components/NotFound';
import Construction from './Components/Construction';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

class App extends Component {
  render() {
    return (
      <Construction></Construction>
      // <Router>
      //   <React.Fragment>
      //     <MainContainer>
      //       <Menu />
      //       <Switch>
      //         <Route exact path="/" component={About} />
      //         <Route exact path="/work" component={Work} />
      //         <Route exact path="/education" component={Education} />
      //         <Route exact path="/skills" component={Skills} />
      //         <Route exact path="/courses" component={Courses} />
      //         <Route exact path="/projects" component={Projects} />
      //         <Route component={NotFound} />
      //       </Switch>
      //     </MainContainer>
      //   </React.Fragment>
      // </Router>
    );
  }
}

export default App;
