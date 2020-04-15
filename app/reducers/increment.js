import initialState from './initialState';

import * as incrementActions from '../actions/increment';

const reducer = (state = initialState.increment, action) => {
  switch (action.type) {
    case incrementActions.UPDATE_VALUE: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
