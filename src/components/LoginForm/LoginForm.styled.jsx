import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 12px;
  > * {
    margin-bottom: 16px;
  }
  @media (min-width: ${breakpoints.md}) {
    max-width: 400px;
  }
`;

export const LoginFormLabel = styled.label`
  width: 100%;
  color: ${(props) => props.theme.text};
  font-size: 16px;
`;

export const LoginFormInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  font-size: 16px;
`;

export const LoginFormActionSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}) {
    justify-content: flex-end;
    flex-direction: row;
  }
`;

export const LoginFormError = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LoginFormErrorText = styled.p`
  color: ${(props) => props.theme.errText};
  text-align: end;
`;
