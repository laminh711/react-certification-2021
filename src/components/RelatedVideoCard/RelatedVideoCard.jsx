import React from 'react';
import {
  StyledRelatedVideoCard,
  RelatedVideoThumbnail,
  RelatedVideoMeta,
  RelatedVideoMetaTitle,
} from './RelatedVideoCard.styled';

export default function RelatedVideoCard({ videoId, thumbnail, title, prefixVideoLink }) {
  return (
    <StyledRelatedVideoCard key={videoId} to={`/${prefixVideoLink}/${videoId}`}>
      <RelatedVideoThumbnail thumbnail={thumbnail} />
      <RelatedVideoMeta>
        <RelatedVideoMetaTitle>{title}</RelatedVideoMetaTitle>
      </RelatedVideoMeta>
    </StyledRelatedVideoCard>
  );
}
