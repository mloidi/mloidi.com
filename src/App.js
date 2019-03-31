import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './Components/Menu';
import About from './Components/Pages/About';
import WorkExperience from './Components/Pages/WorkExperience';
import Education from './Components/Pages/Education';
import Skills from './Components/Pages/Skills';
import Courses from './Components/Pages/Courses';
import Projects from './Components/Pages/Projects';
import NotFound from './Components/Pages/NotFound';
// import Construction from './Components/Pages/Construction';

import { MainContainer } from './Components/Style/Style';

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
