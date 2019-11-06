import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Cookies from './components/Cookies';
import NotFound from './components/NotFound';
import Banner from './components/common/Banner';
import { ContextProvider } from './globalState/state';

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/work" component={WorkExperience} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/cookies" component={Cookies} />
            <Route component={NotFound} />
          </Switch>
          <Banner />
        </Router>
      </ContextProvider>
    );
  }
}

export default App;
