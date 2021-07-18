import styled from 'styled-components';

export const StyledToggleSwitch = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
`;

export const ToggleSwitchLabel = styled.div`
  color: ${(props) => props.theme.text};
  margin-right: 16px;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Switch = styled.div`
  width: 32px;
  height: 16px;
  padding: 4px;
  cursor: pointer;
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.toggled ? '#0b4d75' : '#bbb')};
  border-radius: 5rem;
  &:after {
    content: '';
    background-color: ${(props) => (props.toggled ? '#0c85d1' : '#eee')};
    border-radius: 5rem;
    height: 12px;
    width: 12px;
    left: ${(props) => (props.toggled ? '14px' : '-2px')};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: left 0.1s ease-in;
  }
`;
