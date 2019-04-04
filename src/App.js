import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import About from './components/pages/About';
import WorkExperience from './components/pages/WorkExperience';
import Education from './components/pages/Education';
import Skills from './components/pages/Skills';
import Courses from './components/pages/Courses';
import Projects from './components/pages/Projects';
import NotFound from './components/pages/NotFound';
// import Construction from './components/pages/Construction';

import { MainContainer } from './components/style/Style';

class App extends Component {
  render() {
    return (
      // <Construction></Construction>
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
