import React from 'react';
import { useParams } from 'react-router';
import VideoDetailsFavouriteView from '../../components/VideoDetailsFavouriteView';
import GeneralPage from '../GeneralPage';

function FavouriteDetailsPage() {
  const { videoId } = useParams();
  return (
    <GeneralPage title="Favourite Video Details">
      <VideoDetailsFavouriteView videoId={videoId} />
    </GeneralPage>
  );
}

export default FavouriteDetailsPage;
