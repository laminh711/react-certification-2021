import { VideosMock } from '../mocks/youtube-videos-mock';
import { notEmpty } from './typeHelper';

export function createMockFav() {
  localStorage.setItem('favouriteVideos', JSON.stringify(VideosMock));
}

export function lsSaveNewFavouriteList(newList) {
  const toBeSavedString = JSON.stringify(newList);
  localStorage.setItem('favouriteVideos', toBeSavedString);
}

export function lsGetFavouriteList() {
  const favouriteVideosString = localStorage.getItem('favouriteVideos');
  if (!notEmpty(favouriteVideosString)) {
    return [];
  }
  const parsedFavouriteVideos = JSON.parse(favouriteVideosString); // should check if array?
  return parsedFavouriteVideos;
}

export function lsAddToFavourite(video) {
  const parsedFavouriteVideos = lsGetFavouriteList();
  const newFavouriteVideos = [...parsedFavouriteVideos, video];
  lsSaveNewFavouriteList(newFavouriteVideos);
}

export function lsRemoveFromFavourite(videoId) {
  const parsedFavouriteVideos = lsGetFavouriteList();
  const newFavouriteVideos = [...parsedFavouriteVideos].filter(
    (v) => v.videoId !== videoId
  );
  lsSaveNewFavouriteList(newFavouriteVideos);
}

export function lsLogIn(user) {
  const toBeSavedString = JSON.stringify(user);
  localStorage.setItem('user', toBeSavedString);
}

export function lsLogout() {
  localStorage.removeItem('user');
}

export function lsGetUser() {
  const userString = localStorage.getItem('user');
  if (notEmpty(userString)) {
    const user = JSON.parse(userString);
    return user;
  }
  return null;
}
