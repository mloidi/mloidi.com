import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// My components
import NavMenu from './Components/Menu/NavMenu';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Education from './Components/Education/Education';
import Courses from './Components/Courses/Courses';
import NotFound from './Components/NotFound';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <NavMenu />
          <div className="container mt-3">
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/courses" component={Courses} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
