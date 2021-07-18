import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import LoginForm from '../../components/LoginForm';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import { notEmpty } from '../../utils/typeHelper';
import GeneralPage from '../GeneralPage';

function LoginPage() {
  const [globalState] = useContext(GlobalContext);
  const isLoggedIn = notEmpty(globalState.user);
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <GeneralPage title="Login Page">
      <LoginForm />
    </GeneralPage>
  );
}

export default LoginPage;
