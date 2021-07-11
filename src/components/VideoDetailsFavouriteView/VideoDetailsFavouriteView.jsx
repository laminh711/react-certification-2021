/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import { notEmpty } from '../../utils/typeHelper';
import AnnounceText from '../AnnounceText';
import VideoDetailsView from '../VideoDetailsView/VideoDetailsView';

export default function VideoDetailsFavouriteView(props) {
  const { videoId } = props;

  const [globalState, globalDispatch] = useContext(GlobalContext);
  const [videoInfo, setVideoInfo] = useState(null);
  const [restOfFavouriteVideos, setRestOfFavouriteVideos] = useState([]);

  useEffect(() => {
    const favouriteVideo = globalState.favourites.find(
      (video) => video.videoId === videoId
    );
    setVideoInfo(favouriteVideo);
    const theOthers = globalState.favourites.filter((video) => video.videoId !== videoId);
    setRestOfFavouriteVideos(theOthers);
  }, [videoId]);

  const isLoggedIn = notEmpty(globalState.user);

  const isFavourite =
    globalState.favourites.findIndex((v) => v.videoId === videoId) !== -1;

  const onClickRemoveFromFavourite = () => {
    globalDispatch({ type: 'removeFromFavourites', payload: videoId });
  };

  const onClickAddToFavourite = () => {
    globalDispatch({ type: 'addToFavourites', payload: videoInfo });
  };

  return (
    <>
      {notEmpty(videoInfo) ? (
        <VideoDetailsView
          videoId={videoId}
          videoTitle={videoInfo.title}
          videoDescription={videoInfo.description}
          relatedVideos={restOfFavouriteVideos}
          prefixVideoLink="favourite"
          isLoggedIn={isLoggedIn}
          isFavourite={isFavourite}
          onClickRemoveFromFavourite={onClickRemoveFromFavourite}
          onClickAddToFavourite={onClickAddToFavourite}
        />
      ) : (
        <AnnounceText>Favourite video not found</AnnounceText>
      )}
    </>
  );
}
