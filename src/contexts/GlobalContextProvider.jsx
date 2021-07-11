import React, { createContext, useReducer } from 'react';
import { VideosMock } from '../mocks/youtube-videos-mock';
import { GlobalReducer } from '../reducers/GlobalReducer';
import { lsGetFavouriteList, lsGetUser } from '../utils/localStorageHelper';

const initUser = lsGetUser();
const initialState = {
  searchString: 'wizeline',
  searchResult: VideosMock,
  user: initUser,
  isSideMenuOpen: false,
  favourites: lsGetFavouriteList(),
};
const GlobalContext = createContext(initialState);

function GlobalContextProvider(props) {
  const [globalState, dispatch] = useReducer(GlobalReducer, initialState);

  return (
    <GlobalContext.Provider value={[globalState, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalContextProvider };
