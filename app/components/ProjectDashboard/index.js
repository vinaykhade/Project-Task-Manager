import React from 'react';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import propTypes from 'prop-types';
import * as Styled from './styles';
import ProjectTasks from '../ProjectTasks/projectDetails';
import DashboardWrapper from './dashboardWrapper';
import AddButton from '../../customComponents/AddButton';
import AddProject from '../../containers/addProject';

function Dashboard(props) {
  const [openProject, setOpenProject] = React.useState(false);

  const { projects } = props;

  const handleAddProjectModal = event => {
    event.stopPropagation();
    if (openProject) {
      setOpenProject(false);
    } else {
      setOpenProject(true);
    }
  };

  const onDragStart = (event, projectName, order) => {
    event.dataTransfer.setData(
      'projectName',
      JSON.stringify({ projectName, order }),
    );
  };

  const onDragOver = event => {
    event.preventDefault();
  };

  const onDrop = (event, projectName, order) => {
    if (!event.dataTransfer.getData('projectName')) return;
    const draggedProject = JSON.parse(
      event.dataTransfer.getData('projectName'),
    );
    const updatedProjects = { ...projects };

    updatedProjects[projectName].order = draggedProject.order;
    updatedProjects[draggedProject.projectName].order = order;

    props.updateProjectsOrder(updatedProjects);
  };

  return (
    <div>
      {Object.keys(projects).length === 0 && (
        <Styled.EmptyMessage>
          Looks like there are no projects added, Lets Start !
        </Styled.EmptyMessage>
      )}

      <AddButton
        style={{ marginLeft: '12px' }}
        name="Add Project"
        onClick={event => handleAddProjectModal(event)}
      />

      <Styled.ProjectList>
        {Object.keys(projects)
          .sort((a, b) => projects[a].order - projects[b].order)
          .map(projectName => (
            <Styled.ProjectCard key={`${projectName}`}>
              <Styled.DragIcon
                draggable
                onDragOver={event => onDragOver(event)}
                onDrop={event =>
                  onDrop(event, projectName, projects[projectName].order)
                }
                onDragStart={event =>
                  onDragStart(event, projectName, projects[projectName].order)
                }
              >
                <DragHandleIcon />
              </Styled.DragIcon>
              <ProjectTasks
                displayAllView
                taskList={projects[projectName].tasks || []}
                projectName={projectName}
                {...props}
              />
            </Styled.ProjectCard>
          ))}
      </Styled.ProjectList>
      <AddProject
        open={openProject}
        handleAddProjectModal={handleAddProjectModal}
      />
    </div>
  );
}

export default DashboardWrapper(Dashboard);

Dashboard.defaultProp = {
  projects: {},
  updateProjectsOrder: () => {},
};

Dashboard.propTypes = {
  projects: propTypes.object,
  updateProjectsOrder: propTypes.func,
};
