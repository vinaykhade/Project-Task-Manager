import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';

import propTypes from 'prop-types';
import history from '../../utils/history';
import AddProject from '../../containers/addProject';
import * as Styled from './styles';

const ArrowForwardIconStyle = {
  fontSize: 12,
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: '4px 0',
};

const AddIconStyle = {
  fontSize: 18,
  display: 'inline-block',
  verticalAlign: 'middle',
  margin: '4px 0',
};

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#fafafa',
    padding: 0,
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 50,
    '&$expanded': {
      minHeight: 50,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(() => ({
  root: {
    background: '#fafafa',
    padding: '0',
  },
}))(MuiExpansionPanelDetails);

export default function SideBarListAccordian({ projects }) {
  const [expanded, setExpanded] = React.useState('');
  const [openProject, setOpenProject] = React.useState(false);

  const handleChange = panel => (event, newExpanded) => {
    event.stopPropagation();
    setExpanded(newExpanded ? panel : false);
  };

  const handleAddProjectModal = event => {
    event.stopPropagation();
    if (openProject) {
      setOpenProject(false);
    } else {
      setOpenProject(true);
    }
  };

  const handleListItemClick = event => {
    event.persist();
    const projectName = event.target.innerText;
    history.push(`/project/${projectName}`);
  };

  return (
    <div>
      <AddProject
        open={openProject}
        handleAddProjectModal={handleAddProjectModal}
      />

      <ExpansionPanel
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <ArrowForwardIosSharpIcon style={ArrowForwardIconStyle} />
          <Styled.accordianTittle>Projects</Styled.accordianTittle>
          <AddSharpIcon
            style={AddIconStyle}
            onClick={event => handleAddProjectModal(event)}
          />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Styled.ItemsList onClick={event => handleListItemClick(event)}>
            {Object.keys(projects).map(projectName => (
              <Styled.ListItem key={`${projectName}`}>
                {projectName}
              </Styled.ListItem>
            ))}
          </Styled.ItemsList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SideBarListAccordian.defaultProp = {
  projects: {},
};

SideBarListAccordian.propTypes = {
  projects: propTypes.object,
};
