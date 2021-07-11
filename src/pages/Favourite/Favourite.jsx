import React, { useContext } from 'react';
import VideoFeed from '../../components/VideoFeed';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import GeneralPage from '../GeneralPage';

function FavouritePage() {
  const [globalState] = useContext(GlobalContext);
  return (
    <GeneralPage title="Your Favourite Videos">
      <VideoFeed videoList={globalState.favourites} prefixVideoLink="favourite" />
    </GeneralPage>
  );
}

export default FavouritePage;
