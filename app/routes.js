import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectDashboard from './containers/projectDashboard';
import ProjectTasks from './containers/projectTasks';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProjectDashboard} />
    <Route exact path="/project/:projectName" component={ProjectTasks} />
  </Switch>
);

export default Routes;
