import React from 'react';
import RelatedVideoCard from '../RelatedVideoCard';
import { StyledRelatedVideoFeed } from './RelatedVideoFeed.styled';

export default function RelatedVideoFeed({ relatedVideos, prefixVideoLink }) {
  return (
    <StyledRelatedVideoFeed>
      {relatedVideos &&
        relatedVideos.map((item) => (
          <RelatedVideoCard
            key={item.videoId}
            videoId={item.videoId}
            thumbnail={item.thumbnail}
            title={item.title}
            prefixVideoLink={prefixVideoLink}
          />
        ))}
    </StyledRelatedVideoFeed>
  );
}
