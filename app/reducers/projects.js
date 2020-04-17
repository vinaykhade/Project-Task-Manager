import initialState from './initialState';

import * as addProjectActions from '../actions/addProject';

const reducer = (state = initialState.projects, action) => {
  switch (action.type) {
    case addProjectActions.ADD_NEW_PROJECT: {
      const { projectName, order } = action.payload;
      return {
        ...state,
        ...{
          [projectName]: {
            order,
            tasks: [],
          },
        },
      };
    }

    case addProjectActions.ADD_NEW_TASK: {
      const {
        projectName,
        description,
        active,
        scheduledDate,
      } = action.payload;

      return {
        ...state,
        [projectName]: {
          ...state[projectName],
          ...{
            tasks: state[projectName].tasks.concat({
              description,
              scheduledDate,
              active,
            }),
          },
        },
      };
    }

    case addProjectActions.UPDATE_TASK: {
      const { projectName, list } = action.payload;

      return {
        ...state,
        [projectName]: {
          ...state[projectName],
          ...{ tasks: [...list] },
        },
      };
    }

    case addProjectActions.UPDATE_PROJECTS_ORDER: {
      const projects = action.payload;
      return {
        ...state,
        ...projects,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
