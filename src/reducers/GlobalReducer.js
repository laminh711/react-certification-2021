import YoutubeVideosMock from '../mocks/youtube-videos-mock';
import {
  lsAddToFavourite,
  lsGetFavouriteList,
  lsGetUser,
  lsLogIn,
  lsLogout,
  lsRemoveFromFavourite,
} from '../utils/localStorageHelper';

const initUser = lsGetUser();

const initialState = {
  searchString: 'wizeline',
  searchResult: YoutubeVideosMock.items,
  user: initUser,
  isSideMenuOpen: false,
  favourites: lsGetFavouriteList(),
  searching: false,
};

export function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case 'setSearchString':
      return { ...state, searchString: action.payload };
    case 'setSearching':
      return { ...state, searching: true };
    case 'unsetSearching':
      return { ...state, searching: false };
    case 'setSearchResult': {
      return { ...state, searchResult: action.payload };
    }
    case 'setLoggedInUser': {
      lsLogIn(action.payload);
      return { ...state, user: action.payload };
    }
    case 'logout': {
      lsLogout();
      return { ...state, user: null };
    }
    case 'openSideMenu': {
      return { ...state, isSideMenuOpen: true };
    }
    case 'closeSideMenu': {
      return { ...state, isSideMenuOpen: false };
    }
    case 'addToFavourites': {
      // add to localStorage too
      const toBeAddedVideo = action.payload;
      lsAddToFavourite(toBeAddedVideo);
      return { ...state, favourites: [...state.favourites, toBeAddedVideo] };
    }
    case 'removeFromFavourites': {
      const toBeRemovedVideoId = action.payload;
      const newFavourite = [...state.favourites].filter(
        (v) => v.videoId !== toBeRemovedVideoId
      );
      lsRemoveFromFavourite(toBeRemovedVideoId);
      return { ...state, favourites: newFavourite };
    }
    default:
      throw new Error('Unknown action at global context reducer');
  }
}
