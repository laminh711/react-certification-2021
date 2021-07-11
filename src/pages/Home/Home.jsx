import React, { useContext } from 'react';
import VideoFeed from '../../components/VideoFeed';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import GeneralPage from '../GeneralPage';

function HomePage() {
  const [globalState] = useContext(GlobalContext);
  const { searchResult } = globalState;
  return (
    <GeneralPage title="Home Page">
      <VideoFeed videoList={searchResult} prefixVideoLink="video" />
    </GeneralPage>
  );
}

export default HomePage;
