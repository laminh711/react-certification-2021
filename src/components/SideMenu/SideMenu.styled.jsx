import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SideMenuOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  min-height: 100%;
  background-color: ${(props) => props.theme.bg};
  opacity: 0.5;
  z-index: 1;
`;

export const StyledSideMenu = styled.div`
  z-index: 2;
  position: absolute;
  left: 0;
  width: 250px;
  background-color: ${(props) => props.theme.bg};
  height: 100%;
  top: 0;
`;

export const SideMenuListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const SideMenuLink = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
