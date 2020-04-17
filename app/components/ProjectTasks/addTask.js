import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import TextField from '@material-ui/core/TextField';

import propTypes from 'prop-types';
import DateInput from '../../customComponents/DateInput';
import AddButton from '../../customComponents/AddButton';
import CancelButton from '../../customComponents/CancelButton';
import TextInput from '../../customComponents/TextInput';

import * as Styled from './styles';

export const TaskInputTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      padding: '5px 15px',
      height: '30px',
    },
    width: '100%',
    marginBottom: 20,
  },
})(TextField);

export default function AddTask({ displayAllView, projectName, addNewTask }) {
  const [inputEnabled, setInputStatus] = React.useState(false);
  const [taskDescription, handleTaskDescription] = React.useState('');
  const [scheduledDate, handleTaskScheduledDate] = React.useState(new Date());

  const enableTaskInput = () => {
    if (inputEnabled) {
      setInputStatus(false);
    } else {
      setInputStatus(true);
    }
  };

  const addTaskToProject = () => {
    addNewTask({
      projectName,
      description: taskDescription,
      active: true,
      scheduledDate,
    });
    handleTaskDescription('');
    handleTaskScheduledDate(new Date());
    setInputStatus(false);
  };

  const cancelTaskAddition = () => {
    handleTaskDescription('');
    handleTaskScheduledDate(new Date());
    setInputStatus(false);
  };

  return (
    <Styled.AddEditFormContainer>
      {inputEnabled ? (
        <Styled.AddEditInputContainer>
          <div
            style={{
              display: displayAllView ? 'block' : 'inline-block',
              verticalAlign: 'middle',
              width: displayAllView ? '100%' : '80%',
            }}
          >
            <TextInput onChange={value => handleTaskDescription(value)} />
          </div>
          <div
            style={{
              display: displayAllView ? 'block' : 'inline-block',
              verticalAlign: 'middle',
              width: displayAllView ? '100%' : '20%',
            }}
          >
            <DateInput
              value={scheduledDate}
              onChange={value => handleTaskScheduledDate(value)}
            />
          </div>

          <AddButton
            disabled={taskDescription.length === 0}
            onClick={() => addTaskToProject()}
            style={{ marginRight: '10px' }}
            name="Add Task"
          />

          <CancelButton onClick={() => cancelTaskAddition()} />
        </Styled.AddEditInputContainer>
      ) : (
        <Styled.AddTaskBtnContainer onClick={() => enableTaskInput()}>
          <AddSharpIcon
            style={{
              color: '#db4c3f',
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
          />
          <Styled.AddTaskLabel>Add Task</Styled.AddTaskLabel>
        </Styled.AddTaskBtnContainer>
      )}
    </Styled.AddEditFormContainer>
  );
}

AddTask.defaultProp = {
  displayAllView: false,
  projectName: '',
  addNewTask: () => {},
};

AddTask.propTypes = {
  displayAllView: propTypes.bool,
  projectName: propTypes.string,
  addNewTask: propTypes.func,
};
