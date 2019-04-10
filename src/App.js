import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components2/Menu';
import About from './components2/About';
import WorkExperience from './components2/WorkExperience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Courses from './components2/Courses';
import Projects from './components2/Projects';
import NotFound from './components2/NotFound';

import { MainContainer } from './components2/style/Style';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <MainContainer>
            <Menu />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/work" component={WorkExperience} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/projects" component={Projects} />
              <Route component={NotFound} />
            </Switch>
          </MainContainer>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
