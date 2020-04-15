import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Increment from '../components/increment';

import * as incrementActions from '../actions/increment';

function mapStateToProperties(state) {
  const { increment } = state;

  return {
    currentValue: increment,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...incrementActions,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProperties,
  mapDispatchToProps,
)(Increment);
