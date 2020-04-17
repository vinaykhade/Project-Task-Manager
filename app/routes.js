import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import ProjectTasks from './containers/projectTasks';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/project/:projectName" component={ProjectTasks} />
  </Switch>
);

export default Routes;
