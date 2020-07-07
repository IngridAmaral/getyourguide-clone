import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Results from './components/results/Results';

import './App.scss';

const App = () => (
  <HashRouter>
    <div className="app_container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results" render={(props) => <Results {...props} noResults />} />
        <Route path="*" />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
