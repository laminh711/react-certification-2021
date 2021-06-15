import React from 'react';
import { VideoCardBase, VideoCardInfo, VideoCardThumbnail } from './VideoCard.styled';

export default function VideoCard(props) {
  const { thumbnail, title, description } = props;
  return (
    <VideoCardBase>
      <VideoCardThumbnail thumbnail={thumbnail} />
      <VideoCardInfo>
        <h5>{title}</h5>
        <p>{description}</p>
      </VideoCardInfo>
    </VideoCardBase>
  );
}
