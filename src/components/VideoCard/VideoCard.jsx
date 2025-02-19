import React from 'react';
import { VideoCardBase, VideoCardInfo, VideoCardThumbnail } from './VideoCard.styled';

export default function VideoCard(props) {
  const { thumbnail, title, description, videoId } = props;
  return (
    <VideoCardBase to={`/video/${videoId}`}>
      <VideoCardThumbnail thumbnail={thumbnail} />
      <VideoCardInfo>
        <h5>{title}</h5>
        <p>{description}</p>
      </VideoCardInfo>
    </VideoCardBase>
  );
}
