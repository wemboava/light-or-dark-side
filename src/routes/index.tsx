import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Side from '../pages/side';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/dark" component={Side} />
    <Route path="/light" component={Side} />
  </Switch>
);

export default Routes;
