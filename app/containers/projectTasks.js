import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectTasks from '../components/ProjectTasks';

import * as addProjectActions from '../actions/addProject';

function mapStateToProperties(state, ownProps) {
  const { projects } = state;
  const location = ownProps.match;

  const { projectName } = location.params;
  const taskList = projects[projectName] ? projects[projectName].tasks : [];
  return {
    taskList,
    projects,
    projectName,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...addProjectActions,
    },
    dispatch,
  );
}

export default connect(mapStateToProperties, mapDispatchToProps)(ProjectTasks);
