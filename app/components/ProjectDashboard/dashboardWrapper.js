// eslint-disable-next-line react/prefer-stateless-function
import React from 'react';

import ProjectSideBar from '../../containers/projectSideBar';
import * as Styled from './styles';

const DashboardWrapperComponent = Component => {
  class HOC extends React.Component {
    render() {
      return (
        <Styled.AppContainer>
          <Styled.DashboardContainer>
            <Component {...this.props} />
          </Styled.DashboardContainer>
          <ProjectSideBar />
        </Styled.AppContainer>
      );
    }
  }
  return HOC;
};

export default DashboardWrapperComponent;
