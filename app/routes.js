import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Increment from './containers/increment';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Increment} />
  </Switch>
);

export default Routes;
