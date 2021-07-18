import styled from 'styled-components';
import Button from '../Button';

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props) => props.theme.fg};
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > * + * {
    margin-left: 12px;
  }
`;

export const RightSideHeaderContainer = styled(HeaderContainer)`
  justify-content: flex-end;
`;

export const HeaderText = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
`;

export const TransparentButton = styled(Button)`
  background-color: transparent;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;
