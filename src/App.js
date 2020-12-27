import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { NotFound } from './components/NotFound';
import { ContextProvider } from './globalState/state';

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ContextProvider>
    );
  }
}

export default App;
