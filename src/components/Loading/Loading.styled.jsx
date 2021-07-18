import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledLoading = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.text};
`;
