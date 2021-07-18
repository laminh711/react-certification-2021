/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Button from '../Button';
import RelatedVideoFeed from '../RelatedVideoFeed';
import {
  AddToFavourite,
  RelatedVideoSection,
  VideoDescription,
  VideoPlayer,
  VideoSection,
  VideoTitle,
  VideoTitleSection,
  Wrapper,
} from './VideoDetailsView.styled';

function VideoDetailsView({
  videoId,
  videoTitle,
  videoDescription,
  relatedVideos,
  prefixVideoLink,
  isFavourite,
  isLoggedIn,
  onClickRemoveFromFavourite,
  onClickAddToFavourite,
}) {
  return (
    <Wrapper>
      <VideoSection>
        <VideoPlayer
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <VideoTitleSection>
          <VideoTitle>{videoTitle}</VideoTitle>
          {isLoggedIn && (
            <AddToFavourite>
              {isFavourite ? (
                <Button onClick={onClickRemoveFromFavourite}>
                  Remove from favourite
                </Button>
              ) : (
                <Button onClick={onClickAddToFavourite}>Add to favourite</Button>
              )}
            </AddToFavourite>
          )}
        </VideoTitleSection>
        <VideoDescription>{videoDescription}</VideoDescription>
      </VideoSection>
      <RelatedVideoSection>
        <RelatedVideoFeed
          relatedVideos={relatedVideos}
          prefixVideoLink={prefixVideoLink}
        />
      </RelatedVideoSection>
    </Wrapper>
  );
}
export default VideoDetailsView;
