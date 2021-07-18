import React from 'react';
import { BaseButton } from './Button.styled';

export default function Button(props) {
  return <BaseButton {...props}>{props.children}</BaseButton>;
}
