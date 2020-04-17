import styled from 'styled-components';

export const ProjectSideBarContainer = styled.div`
    width: 320px;
    background: #fafafa;
    height: 100%
    padding: 20px;
    background-repeat: no-repeat;
    background-origin: padding-box;
    position: fixed;
    top: 0;
    left: 0;
`;

export const SiberBarList = styled.ul`
  list-style-type: none;
`;

export const SiberBarListItem = styled.li`
  list-style-type: none;
`;

export const accordianTittle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #333;
  font-weight: 700;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 0 10px;
  width: 91%;
`;

export const ItemsList = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
  position: relative;
  list-style-type: none;
  font-size: 12px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #fff;
  }
  &:before {
    content: '';
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: #eb3a29;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    left: 5px;
  }
`;
