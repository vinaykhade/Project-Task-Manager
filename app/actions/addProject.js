export const ADD_NEW_PROJECT = 'ADD_PROJECT';
export const EDIT_PROJECT_NAME = 'EDIT_PROJECT_NAME';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_PROJECTS_ORDER = 'UPDATE_PROJECTS_ORDER';

export const addNewProject = payload => ({
  type: ADD_NEW_PROJECT,
  payload,
});

export const editProjectName = payload => ({
  type: EDIT_PROJECT_NAME,
  payload,
});

export const addNewTask = payload => ({
  type: ADD_NEW_TASK,
  payload,
});

export const updateTask = payload => ({
  type: UPDATE_TASK,
  payload,
});

export const updateProjectsOrder = payload => ({
  type: UPDATE_PROJECTS_ORDER,
  payload,
});
