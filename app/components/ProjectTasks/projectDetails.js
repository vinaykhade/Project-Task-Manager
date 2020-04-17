import React from 'react';

import propTypes from 'prop-types';
import AddTask from './addTask';
import TasksList from './tasksList';

import * as Styled from './styles';

export default function ProjectTasks({
  taskList,
  updateProjectsOrder,
  projects,
  projectName,
  addNewTask,
  updateTask,
  displayAllView,
}) {
  const [editable, editingTaskCurrently] = React.useState('');

  return (
    <Styled.ProjectContainer>
      <Styled.ProjectTitle>{projectName}</Styled.ProjectTitle>
      <TasksList
        list={taskList}
        projects={projects}
        updateProjectsOrder={updateProjectsOrder}
        displayAllView={displayAllView}
        projectName={projectName}
        updateTask={updateTask}
        editingTaskCurrently={editingTaskCurrently}
      />
      {!editable && (
        <AddTask
          displayAllView={displayAllView}
          addNewTask={addNewTask}
          projectName={projectName}
        />
      )}
    </Styled.ProjectContainer>
  );
}

ProjectTasks.defaultProp = {
  taskList: [],
  projects: {},
  updateProjectsOrder: () => {},
  addNewTask: () => {},
  updateTask: () => {},
  projectName: '',
  displayAllView: false,
};

ProjectTasks.propTypes = {
  taskList: propTypes.array,
  displayAllView: propTyes.bool,
  updateProjectsOrder: propTypes.func,
  updateTask: propTypes.func,
  addNewTask: propTypes.func,
  projects: propTypes.object,
  projectName: propTypes.string,
};
