import React from 'react';
import VideoCard from '../VideoCard';
import { VideoFeedContainer, VideoFeedItemWrapper } from './VideoFeed.styled';

export default function VideoFeed({ videoList, prefixVideoLink }) {
  return (
    <VideoFeedContainer>
      {videoList &&
        videoList.map((item) => (
          <VideoFeedItemWrapper key={item.thumbnail}>
            <VideoCard
              videoId={item.videoId}
              leadTo={`/${prefixVideoLink}/${item.videoId}`}
              thumbnail={item.thumbnail}
              title={item.title}
              description={item.description}
            />
          </VideoFeedItemWrapper>
        ))}
    </VideoFeedContainer>
  );
}
