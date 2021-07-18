import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import HeaderPopMenu from '../HeaderPopMenu';
import IconButton from '../IconButton';
import SearchInput from '../SearchInput';
import { HeaderContainer, StyledHeader } from './Header.styled';

function Header() {
  const [, globalDispatch] = useContext(GlobalContext);
  const onClickSideMenuTrigger = () => {
    globalDispatch({ type: 'openSideMenu' });
  };
  return (
    <StyledHeader>
      <HeaderContainer>
        <IconButton svgIcon={faBars} onClick={onClickSideMenuTrigger} />
        <SearchInput />
      </HeaderContainer>
      <HeaderContainer>
        <HeaderPopMenu />
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
