/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import {
  LoginFormInput,
  StyledLoginForm,
  LoginFormLabel,
  LoginFormActionSection,
  LoginFormError,
  LoginFormErrorText,
} from './LoginForm.styled';
import Button from '../Button';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import useRequest from '../../clients/useRequest';
import loginApi from '../../clients/login-api';
import { notEmpty } from '../../utils/typeHelper';
import Loading from '../Loading';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAfterClickLogin, setIsAfterClickLogin] = useState(false);
  const [, dispatch] = useContext(GlobalContext);

  const { requestState, handleFetchPromise } = useRequest();

  const onSubmit = (e) => {
    e.preventDefault();
    handleFetchPromise(loginApi(username, password));
    setIsAfterClickLogin(true);
  };

  useEffect(() => {
    if (!requestState.loading) {
      setIsAfterClickLogin(false);
      if (!notEmpty(requestState.error)) {
        dispatch({ type: 'setLoggedInUser', payload: requestState.response });
      }
    }
  }, [requestState.response]);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  if (isAfterClickLogin && requestState.loading) {
    return <Loading />;
  }

  return (
    <StyledLoginForm onSubmit={onSubmit}>
      <LoginFormLabel htmlFor="username">
        Username:
        <LoginFormInput
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={onChangeUsername}
        />
      </LoginFormLabel>
      <LoginFormLabel htmlFor="password">
        Password:
        <LoginFormInput
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </LoginFormLabel>
      <LoginFormActionSection>
        <Button type="submit">Login</Button>
      </LoginFormActionSection>
      {notEmpty(requestState.error) && (
        <LoginFormError>
          <LoginFormErrorText>{requestState.error.message}</LoginFormErrorText>
        </LoginFormError>
      )}
    </StyledLoginForm>
  );
}
