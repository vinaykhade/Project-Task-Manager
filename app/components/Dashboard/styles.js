import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
`;

export const DashboardContainer = styled.div`
  padding: 30px 130px 0 25px;
  width: calc(100% - 320px);
  margin-left: 320px;
`;

export const FormContainer = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 20px;
`;

export const ProjectCard = styled.div`
    display: inline-block;
    position: relative;
    vertical-align: top;
    width: 350px;
    margin: 0 10px;
    background: #eaeaea;
    border-radius: 7px;
}
`;

export const ProjectList = styled.div`
  margin-top: 20px;
  overflow: auto;
  white-space: nowrap;
`;

export const EmptyMessage = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 20px 10px;
`;

export const DragIcon = styled.div`
  text-align: center;
  position: absolute;
  cursor: pointer;
  width: 100%;
`;
