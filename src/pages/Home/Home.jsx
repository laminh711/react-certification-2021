import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import VideoFeed from '../../components/VideoFeed';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import GeneralPage from '../GeneralPage';

function HomePage() {
  const [globalState] = useContext(GlobalContext);
  const { searching, searchResult } = globalState;
  return (
    <GeneralPage title="Home Page">
      {searching ? (
        <Loading />
      ) : (
        <VideoFeed videoList={searchResult} prefixVideoLink="video" />
      )}
    </GeneralPage>
  );
}

export default HomePage;
