/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import {
  LoginFormInput,
  StyledLoginForm,
  LoginFormLabel,
  LoginFormActionSection,
} from './LoginForm.styled';
import Button from '../Button';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import useRequest from '../../clients/useRequest';
import loginApi from '../../clients/login-api';
import { notEmpty } from '../../utils/typeHelper';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, dispatch] = useContext(GlobalContext);

  const { requestState, handleFetchPromise } = useRequest();

  const onSubmit = (e) => {
    e.preventDefault();
    handleFetchPromise(loginApi(username, password));
  };

  useEffect(() => {
    if (!requestState.loading && !notEmpty(requestState.error)) {
      dispatch({ type: 'setLoggedInUser', payload: requestState.response });
    }
  }, [requestState.response]);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
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
    </StyledLoginForm>
  );
}
