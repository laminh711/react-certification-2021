import styled from 'styled-components';

export const BaseButton = styled.button`
  padding: 8px 12px;
  background-color: ${(props) => props.theme.btnBg};
  color: ${(props) => props.theme.btnTxt};
  font-size: 16px;
  border: none;
  border-radius: 5px;
  height: 40px;
  &:hover {
    background-color: ${(props) => props.theme.btnBgHover};
    cursor: pointer;
  }
`;
