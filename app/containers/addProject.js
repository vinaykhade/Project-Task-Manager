import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddProject from '../components/AddProject';

import * as addProjectActions from '../actions/addProject';

function mapStateToProperties(state) {
  const { projects } = state;

  return {
    projectsCount: Object.keys(projects).length,
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

export default connect(mapStateToProperties, mapDispatchToProps)(AddProject);
