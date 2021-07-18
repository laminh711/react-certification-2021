import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import { notEmpty } from '../../utils/typeHelper';

export default function AuthenticatedPage({ children }) {
  const [globalState] = useContext(GlobalContext);
  const isLoggedIn = notEmpty(globalState.user);
  return <>{isLoggedIn ? children : <Redirect to="/" />}</>;
}
