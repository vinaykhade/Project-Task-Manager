import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import propTypes from 'prop-types';
import AddButton from '../../customComponents/AddButton';
import CancelButton from '../../customComponents/CancelButton';
import TextInput from '../../customComponents/TextInput';

import history from '../../utils/history';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  formParentStyle: {
    margin: theme.spacing(1),
    width: 400,
  },
  formControl: {
    width: 400,
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const Form = withStyles(styles)(props => {
  const { classes, projectName, setProjectName, handleAddNewProject } = props;
  return (
    <div className={classes.formParentStyle} noValidate autoComplete="off">
      <TextInput
        className={classes.formParentStyle}
        label="Project Name"
        value={projectName}
        onEnter={event => (projectName ? handleAddNewProject(event) : null)}
        onChange={value => setProjectName(value)}
      />
    </div>
  );
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(() => ({
  root: {
    margin: 0,
    padding: '10px 23px',
  },
}))(MuiDialogActions);

export default function AddProject({
  open,
  projectsCount,
  handleAddProjectModal,
  addNewProject,
}) {
  const [projectName, setProjectName] = React.useState('');

  const handleAddNewProject = event => {
    addNewProject({
      projectName,
      order: projectsCount + 1,
    });
    handleAddProjectModal(event);
    history.push(`/project/${projectName}`);
  };

  return (
    <Dialog
      onClose={event => handleAddProjectModal(event)}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={event => handleAddProjectModal(event)}
      >
        Add Project
      </DialogTitle>
      <DialogContent dividers>
        <Form
          handleAddNewProject={handleAddNewProject}
          setProjectName={setProjectName}
          projectName={projectName}
        />
      </DialogContent>
      <DialogActions>
        <CancelButton onClick={event => handleAddProjectModal(event)} />
        <AddButton
          name="Add"
          disabled={projectName.length === 0}
          onClick={event => handleAddNewProject(event)}
        />
      </DialogActions>
    </Dialog>
  );
}

AddProject.defaultProp = {
  open: false,
  projectsCount: 0,
  handleAddProjectModal: () => {},
  addNewProject: () => {},
};

AddProject.propTypes = {
  open: propTypes.bool,
  projectsCount: propTypes.number,
  handleAddProjectModal: propTypes.func,
  addNewProject: propTypes.func,
};
