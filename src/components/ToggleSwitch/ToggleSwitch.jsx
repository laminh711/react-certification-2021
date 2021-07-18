import React from 'react';
import {
  Slider,
  Switch,
  StyledToggleSwitch,
  ToggleSwitchLabel,
  SwitchWrapper,
} from './ToggleSwitch.styled';

function ToggleSwitch(props) {
  const { toggled, onToggleCallback } = props;
  const onToggle = () => {
    onToggleCallback();
  };
  return (
    <StyledToggleSwitch>
      {props.label && props.label !== '' && (
        <ToggleSwitchLabel>{props.label}</ToggleSwitchLabel>
      )}
      <SwitchWrapper>
        <Switch onClick={onToggle} toggled={toggled}>
          <Slider toggled={toggled} />
        </Switch>
      </SwitchWrapper>
    </StyledToggleSwitch>
  );
}

export default ToggleSwitch;
