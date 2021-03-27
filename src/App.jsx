import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import ChoicePage from './ChoicePage';
import ResultPage from './ResultPage';

export default function App() {
  return (
    <div>
      <h1><Link to="/">Vitamin Y</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/choice/:id" component={ChoicePage} />
        <Route exact path="/result" component={ResultPage} />
      </Switch>
    </div>
  );
}
