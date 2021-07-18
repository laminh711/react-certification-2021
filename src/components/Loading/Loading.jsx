import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { StyledLoading } from './Loading.styled';

export default function Loading() {
  return <StyledLoading size="lg" icon={faSpinner} spin />;
}
