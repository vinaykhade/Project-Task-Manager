import React from 'react';

import DashboardWrapper from '../ProjectDashboard/dashboardWrapper';
import ProjectDetails from './projectDetails';
import AddButton from '../../customComponents/AddButton';
import history from '../../utils/history';

const ProjectTasks = props => (
  <div>
    <AddButton
      style={{ marginLeft: '22px' }}
      name="View Projects"
      onClick={() => history.push('/')}
    />
    <ProjectDetails displayAllView={false} {...props} />
  </div>
);

export default DashboardWrapper(ProjectTasks);
