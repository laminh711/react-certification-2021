import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useRef, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import { ThemeContext } from '../../contexts/StyledThemeProvider';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { notEmpty } from '../../utils/typeHelper';
import IconButton from '../IconButton';
import ToggleSwitch from '../ToggleSwitch';
import {
  HeaderPopMenuWrapper,
  PopMenu,
  PopMenuItem,
  PopMenuLink,
  UserAvatar,
} from './HeaderPopMenu.styled';

export default function HeaderPopMenu() {
  const [themeState, themeDispatch] = useContext(ThemeContext);
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const onClickIconButton = () => {
    setShow((prev) => !prev);
  };
  const onClickAvatar = () => {
    setShow((prev) => !prev);
  };
  const ref = useRef();
  useOnClickOutside(ref, () => setShow(false));

  const onClickLogin = () => {
    setShow(false);
  };

  const onClickLogout = () => {
    setShow(false);
    globalDispatch({ type: 'logout' });
  };

  const { user } = globalState;
  const isLoggedIn = notEmpty(user);

  return (
    <HeaderPopMenuWrapper ref={ref}>
      {!isLoggedIn && <IconButton svgIcon={faUser} onClick={onClickIconButton} />}
      {isLoggedIn && <UserAvatar src={user.avatarUrl} onClick={onClickAvatar} />}
      {show && (
        <PopMenu>
          <PopMenuItem>
            <ToggleSwitch
              toggled={themeState.theme.name === 'dark'}
              onToggleCallback={() => themeDispatch({ type: 'toggle' })}
              label={themeState.theme.name === 'dark' ? 'Theme: Dark' : 'Theme: Light'}
            />
          </PopMenuItem>
          {!isLoggedIn && (
            <PopMenuLink to="/login" pointer="true" onClick={onClickLogin}>
              Login
            </PopMenuLink>
          )}
          {isLoggedIn && (
            <PopMenuItem pointer="true" onClick={onClickLogout}>
              Logout
            </PopMenuItem>
          )}
        </PopMenu>
      )}
    </HeaderPopMenuWrapper>
  );
}
