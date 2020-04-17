import React from 'react';

import propTypes from 'prop-types';
import * as Styled from './styles';

import SidebarListAccordian from './sideBarListAccordian';

const ProjectSideBar = ({ projects }) => (
  <Styled.ProjectSideBarContainer>
    <SidebarListAccordian projects={projects} />
  </Styled.ProjectSideBarContainer>
);

ProjectSideBar.defaultProp = {
  projects: {},
};

ProjectSideBar.propTypes = {
  projects: propTypes.object,
};
export default ProjectSideBar;
