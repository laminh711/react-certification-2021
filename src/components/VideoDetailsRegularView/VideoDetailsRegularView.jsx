/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import useRequest from '../../clients/useRequest';
import {
  youtubeApiGetSpecificVideo,
  youtubeApiSearchRelated,
} from '../../clients/youtube-api';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import { notEmpty } from '../../utils/typeHelper';
import {
  standadizeRelatedVideos,
  standadizeSingleVideo,
} from '../../utils/youtubeDataHelper';
import AnnounceText from '../AnnounceText';
import VideoDetailsView from '../VideoDetailsView';

export default function VideoDetailsRegularView(props) {
  const { videoId } = props;

  const [videoInfo, setVideoInfo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const [globalState, globalDispatch] = useContext(GlobalContext);

  const isLoggedIn = notEmpty(globalState.user);

  const getSpecificVideoRequest = useRequest();
  const searchRelatedRequest = useRequest();

  useEffect(() => {
    getSpecificVideoRequest.handleFetchPromise(youtubeApiGetSpecificVideo(videoId));
    searchRelatedRequest.handleFetchPromise(youtubeApiSearchRelated(videoId));
  }, []);

  useEffect(() => {
    getSpecificVideoRequest.handleFetchPromise(youtubeApiGetSpecificVideo(videoId));
    searchRelatedRequest.handleFetchPromise(youtubeApiSearchRelated(videoId));
  }, [videoId]);

  useEffect(() => {
    const { requestState } = getSpecificVideoRequest;
    if (!requestState.loading && !notEmpty(requestState.error)) {
      const standadizedInfo = standadizeSingleVideo(requestState.response);
      setVideoInfo(standadizedInfo);
    }
  }, [getSpecificVideoRequest.requestState.response]);

  useEffect(() => {
    const { requestState } = searchRelatedRequest;
    if (!requestState.loading && !notEmpty(requestState.error)) {
      const standadizedRelatedVideos = standadizeRelatedVideos(requestState.response);
      setRelatedVideos(standadizedRelatedVideos);
    }
  }, [searchRelatedRequest.requestState.response]);

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
          relatedVideos={relatedVideos}
          prefixVideoLink="video"
          isLoggedIn={isLoggedIn}
          isFavourite={isFavourite}
          onClickRemoveFromFavourite={onClickRemoveFromFavourite}
          onClickAddToFavourite={onClickAddToFavourite}
        />
      ) : (
        <AnnounceText>The video is unavailable</AnnounceText>
      )}
    </>
  );
}
