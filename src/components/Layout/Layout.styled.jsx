import styled from 'styled-components';

export const StyledLayout = styled.main`
  position: relative;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
`;

export const PageBody = styled.div`
  padding-top: 16px;
  display: flex;
`;
