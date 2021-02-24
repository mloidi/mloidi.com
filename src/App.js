import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { NotFound } from './components/NotFound';
// import { Resume } from './components/Resume';
// import { Courses } from './components/Courses';
// import { Banner } from './components/common/Banner';
// import { Cookies } from './components/Cookies';
import { ContextProvider } from './globalState/state';

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={About} />
            {/* <Route exact path='/resume' component={Resume} /> */}
            {/* <Route exact path='/courses' component={Courses} /> */}
            <Route exact path='/portfolio' component={Portfolio} />
            {/* <Route exact path='/cookies' component={Cookies} /> */}
            <Route component={NotFound} />
          </Switch>
          {/* <Banner /> */}
        </Router>
      </ContextProvider>
    );
  }
}

export default App;
