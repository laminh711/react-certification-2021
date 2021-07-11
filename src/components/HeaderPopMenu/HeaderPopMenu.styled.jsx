import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const HeaderPopMenuWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const PopMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: ${(props) => props.theme.fg};
  color: ${(props) => props.theme.text};
  min-width: 180px;
`;

export const PopMenuItem = styled.div`
  padding: 4px 12px;
  display: flex;
  justify-content: flex-start;
  ${(props) =>
    props.pointer &&
    css`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `}
`;

export const PopMenuLink = styled(Link)`
  padding: 4px 12px;
  display: flex;
  justify-content: flex-start;
  ${(props) =>
    props.pointer &&
    css`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `}
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;

export const UserAvatar = styled.img`
  height: 100%;
  border-radius: 5rem;
  &:hover {
    cursor: pointer;
  }
`;
